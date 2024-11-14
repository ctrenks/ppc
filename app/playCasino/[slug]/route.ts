import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") ?? "UNKNOWN";
  const ua = headersList.get("user-agent") ?? "UNKNOWN";
  const visitorCountry = headersList.get("x-vercel-ip-country") || "UNKNOWN";
  const referer = headersList.get("referer") ?? "UNKNOWN";
  const casino = await getCasinoUrl(params.slug);
  if (casino?.id) {
    console.log(visitorCountry, ua, ip, casino.id, referer);
    await record(visitorCountry, ua, ip, casino.id, referer); // TODO: after
  }

  // const r = searchParams.get("r");
  // if (r) {
  //   return NextResponse.redirect(
  //     new URL(
  //       `/goAffiliate/landing/${encodeURIComponent(params.slug)}`,
  //       req.url
  //     ),
  //     302
  //   );
  // }

  // record this action
  if (casino?.url) {
    return NextResponse.redirect(new URL(casino.url), 302);
  }

  return NextResponse.redirect(new URL("/", req.url), 302);
}

async function record(
  visitorCountry: string,
  ua: string,
  ip: string,
  casino: number,
  referer: string
) {
  if (ip && casino) {
    await prisma.outbounding.upsert({
      create: {
        userAgent: ua,
        geo: visitorCountry,
        ip: ip,
        casinoId: casino,
        referer: referer,
      },
      update: {},
      where: { ip_casinoId: { casinoId: casino, ip: ip } },
    });
  }
  return;
}
async function getCasinoUrl(slug: string) {
  const casino = await prisma.casino_p_casinos.findFirst({
    where: { clean_name: slug },
  });
  return casino;
}
