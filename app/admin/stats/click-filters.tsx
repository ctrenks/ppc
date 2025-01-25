"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface ClickFiltersProps {
  geoLocations: string[];
  referers: string[];
}

export default function ClickFilters({
  geoLocations,
  referers,
}: ClickFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedGeo, setSelectedGeo] = useState<string>(
    searchParams.get("geo") || ""
  );
  const [selectedReferer, setSelectedReferer] = useState<string>(
    searchParams.get("referer") || ""
  );

  const updateFilters = (geo: string, referer: string) => {
    const params = new URLSearchParams();
    if (geo) params.set("geo", geo);
    if (referer) params.set("referer", referer);
    router.push(`/admin/stats?${params.toString()}`);
  };

  const handleGeoChange = (geo: string) => {
    setSelectedGeo(geo);
    updateFilters(geo, selectedReferer);
  };

  const handleRefererChange = (referer: string) => {
    setSelectedReferer(referer);
    updateFilters(selectedGeo, referer);
  };

  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Location
        </label>
        <select
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={selectedGeo}
          onChange={(e) => handleGeoChange(e.target.value)}
        >
          <option value="">All Locations</option>
          {geoLocations.map((geo) => (
            <option key={geo} value={geo}>
              {geo}
            </option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Referrer
        </label>
        <select
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={selectedReferer}
          onChange={(e) => handleRefererChange(e.target.value)}
        >
          <option value="">All Referrers</option>
          {referers.map((referer) => (
            <option key={referer} value={referer}>
              {referer}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
