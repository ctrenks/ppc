import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const params = await context.params;
  const slug = params.slug;

  if (!slug) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") ?? "UNKNOWN";
  const ua = headersList.get("user-agent") ?? "UNKNOWN";
  const visitorCountry = headersList.get("x-vercel-ip-country") || "UNKNOWN";
  const referer = headersList.get("referer") ?? "UNKNOWN";

  try {
    const casino = await prisma.casino_p_casinos.findFirst({
      where: {
        clean_name: slug,
      },
      include: {
        ppc: true,
        ppc_links: {
          where: {
            geo: visitorCountry,
          },
        },
      },
    });

    if (!casino) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    // console.log(casino);
    // Record the visit if we have a casino ID
    if (casino.id) {
      const outbounding = null;
      if (!outbounding) {
        await prisma.outbounding.create({
          data: {
            userAgent: ua,
            geo: visitorCountry,
            ip: ip,
            casinoId: casino.id,
            referer: referer,
          },
        });
      }
    }

    // Redirect to PPC URL if exists, otherwise casino URL
    //console.log("ppc-links", visitorCountry, casino.ppc_links[0]);
    //console.log(casino.ppc?.[0]?.ppc_url);
    const redirectUrl =
      casino.ppc_links[0]?.url ?? casino.ppc?.[0]?.ppc_url ?? casino.url;

    if (redirectUrl) {
      return NextResponse.redirect(new URL(redirectUrl), 302);
    }
  } catch (error) {
    console.error("Error redirecting to casino:", error);
    return NextResponse.redirect(new URL("/error", request.url));
  }
}
