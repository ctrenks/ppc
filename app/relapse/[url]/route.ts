import { JSDOM } from "jsdom";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

function getCaseVariations(text: string): string[] {
  return [
    text, // original
    text.toLowerCase(), // lowercase
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(), // First letter capital
    text.toUpperCase(), // UPPERCASE
  ];
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ url: string }> }
) {
  let urlParam = "Unknown URL";
  try {
    const { url } = await context.params;
    urlParam = url;
    const decodedUrl = decodeURIComponent(url);

    // Basic URL validation
    try {
      new URL(decodedUrl);
    } catch {
      return new NextResponse(
        `<html>
          <body>
            <div style="color: red">Error: Invalid URL</div>
            <div style="margin-top: 1rem">Attempted URL: ${decodedUrl}</div>
          </body>
        </html>`,
        {
          headers: { "content-type": "text/html" },
        }
      );
    }

    // Fetch the content
    const response = await fetch(decodedUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ContentModifier/1.0)",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch content: ${response.statusText}`);
    }

    const content = await response.text();

    // Parse the HTML
    const dom = new JSDOM(content);
    const document = dom.window.document;

    // Text replacement function that works on text nodes only
    const baseReplacements = [
      { from: "Realprize", to: "Winzino" },
      { from: "Realplay", to: "Winzino" },
      { from: "Real Prize", to: "Winzino" },
    ];

    // Generate case variations for each replacement
    const replacements = baseReplacements.flatMap(({ from, to }) => {
      const fromVariations = getCaseVariations(from);
      const toVariations = getCaseVariations(to);
      // Match case of replacement with original
      return fromVariations.map((fromVar, index) => ({
        from: fromVar,
        to: toVariations[index],
      }));
    });

    // Function to replace text in a single text node
    function replaceTextInNode(textNode: Text) {
      let newText = textNode.textContent || "";
      replacements.forEach(({ from, to }) => {
        // Use case-sensitive replacement
        newText = newText.split(from).join(to);
      });
      if (newText !== textNode.textContent) {
        textNode.textContent = newText;
      }
    }

    // Function to walk through all text nodes
    function walkTextNodes(node: Node) {
      if (node.nodeType === 3) {
        // Text node
        replaceTextInNode(node as Text);
      } else {
        // Skip script and style elements
        if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
          const children = Array.from(node.childNodes);
          children.forEach(walkTextNodes);
        }
      }
    }

    // Apply replacements to text nodes only
    walkTextNodes(document.body);

    // Handle links
    document.querySelectorAll("a").forEach((link) => {
      const href = link.getAttribute("href");
      if (href && !href.startsWith("#")) {
        try {
          const absoluteUrl = new URL(href, decodedUrl).toString();
          link.href = `/relapse/${encodeURIComponent(absoluteUrl)}`;
        } catch {
          link.removeAttribute("href");
        }
      }
    });

    // Handle images, scripts, and other resources
    ["img", "script", "link", "iframe"].forEach((tag) => {
      document.querySelectorAll(tag).forEach((el) => {
        const src = el.getAttribute("src");
        const href = el.getAttribute("href");
        if (src && !src.startsWith("http")) {
          try {
            const absoluteUrl = new URL(src, decodedUrl).toString();
            el.setAttribute("src", absoluteUrl);
          } catch {
            // If URL parsing fails, leave as is
          }
        }
        if (href && !href.startsWith("http")) {
          try {
            const absoluteUrl = new URL(href, decodedUrl).toString();
            el.setAttribute("href", absoluteUrl);
          } catch {
            // If URL parsing fails, leave as is
          }
        }
      });
    });

    // Add depth indicator
    const style = document.createElement("style");
    style.textContent = `
      .depth-indicator {
        position: fixed !important;
        top: 10px !important;
        right: 10px !important;
        background: rgba(0,0,0,0.7) !important;
        color: white !important;
        padding: 5px 10px !important;
        border-radius: 4px !important;
        z-index: 2147483647 !important;
        font-family: Arial, sans-serif !important;
      }
    `;
    document.head.appendChild(style);

    const depthIndicator = document.createElement("div");
    depthIndicator.className = "depth-indicator";
    depthIndicator.textContent = "Depth: 0";
    document.body.insertBefore(depthIndicator, document.body.firstChild);

    // Return the modified HTML
    return new NextResponse(dom.serialize(), {
      headers: { "content-type": "text/html" },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new NextResponse(
      `<html>
        <body>
          <div style="color: red">Error: ${errorMessage}</div>
          <div style="margin-top: 1rem">
            Attempted URL: ${
              urlParam ? decodeURIComponent(urlParam) : "Unknown URL"
            }
          </div>
        </body>
      </html>`,
      {
        headers: { "content-type": "text/html" },
      }
    );
  }
}
