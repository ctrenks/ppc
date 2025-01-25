"use client";

import { useState } from "react";

interface ClickFiltersProps {
  onFilterChange: (filters: { geo?: string; referer?: string }) => void;
  geoLocations: string[];
  referers: string[];
}

export default function ClickFilters({
  onFilterChange,
  geoLocations,
  referers,
}: ClickFiltersProps) {
  const [selectedGeo, setSelectedGeo] = useState<string>("");
  const [selectedReferer, setSelectedReferer] = useState<string>("");

  const handleGeoChange = (geo: string) => {
    setSelectedGeo(geo);
    onFilterChange({ geo, referer: selectedReferer });
  };

  const handleRefererChange = (referer: string) => {
    setSelectedReferer(referer);
    onFilterChange({ geo: selectedGeo, referer });
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
