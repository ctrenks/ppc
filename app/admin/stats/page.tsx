import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { formatDistance } from "date-fns";
import ClickFilters from "./click-filters";
import { Suspense } from "react";
import type { outbounding, casino_p_casinos } from "@prisma/client";

export const metadata: Metadata = {
  robots: "noindex",
  title: "Admin Stats - Click Analytics",
};

type ClickWithCasino = outbounding & {
  casino_outs: Pick<casino_p_casinos, "casino"> | null;
};

async function getClickStats(geo?: string, referer?: string) {
  const where = {
    ...(geo ? { geo } : {}),
    ...(referer ? { referer } : {}),
  };

  const clicks = await prisma.outbounding.findMany({
    take: 100,
    where,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      casino_outs: {
        select: {
          casino: true,
        },
      },
    },
  });
  return clicks;
}

async function getUniqueValues() {
  const [geoLocations, referers] = await Promise.all([
    prisma.outbounding.findMany({
      select: { geo: true },
      distinct: ["geo"],
    }),
    prisma.outbounding.findMany({
      select: { referer: true },
      distinct: ["referer"],
    }),
  ]);

  return {
    geoLocations: geoLocations.map((g: { geo: string }) => g.geo),
    referers: referers.map((r: { referer: string }) => r.referer),
  };
}

export default async function AdminStats({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const geo =
    typeof searchParams.geo === "string" ? searchParams.geo : undefined;
  const referer =
    typeof searchParams.referer === "string" ? searchParams.referer : undefined;

  const clicks = await getClickStats(geo, referer);
  const { geoLocations, referers } = await getUniqueValues();

  return (
    <div className="min-h-screen bg-white/90 p-8">
      <h1 className="text-3xl font-bold mb-6">Click Analytics</h1>

      <Suspense fallback={<div>Loading filters...</div>}>
        <ClickFilters geoLocations={geoLocations} referers={referers} />
      </Suspense>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Casino
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                IP
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Referrer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Agent
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {clicks.map((click: ClickWithCasino) => (
              <tr key={click.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDistance(new Date(click.createdAt), new Date(), {
                    addSuffix: true,
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {click.casino_outs?.casino || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {click.geo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {click.ip}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                  {click.referer}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                  {click.userAgent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
