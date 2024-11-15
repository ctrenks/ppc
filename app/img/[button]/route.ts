import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  context: { params: { button: string } }
) {
  const button = context.params.button;

  try {
    // Look up the casino by the button value
    const casino = await prisma.casino_p_casinos.findFirst({
      where: { button: button },
      select: {
        vercel_casino_button: true,
        vercel_casino_button_size: true,
        id: true,
      },
    });

    if (!casino || !casino.vercel_casino_button) {
      return new NextResponse("Casino icon not found", { status: 404 });
    }

    // Generate an ETag based on casino id and image size
    const etag = `"${casino.id}-${casino.vercel_casino_button_size}"`;

    // Check if the client's cached version matches our ETag
    const ifNoneMatch = request.headers.get("if-none-match");
    if (ifNoneMatch === etag) {
      return new NextResponse(null, { status: 304 }); // Not Modified
    }

    // Fetch the image from the vercel_casino_button URL
    const imageResponse = await fetch(casino.vercel_casino_button);

    if (!imageResponse.ok) {
      return new NextResponse("Failed to fetch casino icon", { status: 500 });
    }

    // Get the image buffer and content type
    const imageBuffer = await imageResponse.arrayBuffer();
    const contentType = imageResponse.headers.get("content-type");

    // Return the image with the correct content type and caching headers
    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType || "image/png",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        ETag: etag,
      },
    });
  } catch (error) {
    console.error("Error fetching casino icon:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
