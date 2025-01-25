import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export const metadata: Metadata = {
  robots: "noindex",
  title: "Admin - Casino Management",
};

export default async function AdminCasino() {
  const casinos = await prisma.casino_p_casinos.findMany({
    orderBy: {
      id: "desc",
    },
    include: {
      ppc: true,
      ppc_links: true,
    },
    take: 50,
  });

  return (
    <div className="min-h-screen bg-white/90 p-8">
      <h1 className="text-3xl font-bold mb-6">Casino Management</h1>

      <div className="grid gap-6">
        {casinos.map((casino) => (
          <div
            key={casino.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">
                    {casino.casino} (ID: {casino.id})
                  </h2>
                  {casino.button && (
                    <div className="mb-4">
                      <Image
                        src={`/img/${casino.button}`}
                        alt={`${casino.casino} logo`}
                        width={100}
                        height={80}
                        className="rounded"
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Clean Name:</span>{" "}
                      {casino.clean_name}
                    </p>
                    <p>
                      <span className="font-medium">URL:</span> {casino.url}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">PPC Links</h3>
                <div className="space-y-4">
                  {casino.ppc_links.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Country
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              URL
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {casino.ppc_links.map((link) => (
                            <tr key={link.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {link.geo}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-500">
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  {link.url}
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-gray-500">No PPC links configured</p>
                  )}
                </div>

                <h3 className="text-lg font-semibold mb-2 mt-4">
                  Legacy PPC URLs
                </h3>
                <div className="space-y-4">
                  {casino.ppc.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              URL
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {casino.ppc.map((ppc) => (
                            <tr key={ppc.id}>
                              <td className="px-6 py-4 text-sm text-gray-500">
                                <a
                                  href={ppc.ppc_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800"
                                >
                                  {ppc.ppc_url}
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-gray-500">
                      No legacy PPC URLs configured
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
