import CasinoList from "@/app/components/casino-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Canada's top ten casinos for ${new Date().toLocaleString("default", {
    month: "long",
  })} ${new Date().getFullYear() + 2}`,
  description: `Find the hottest deals for Canada players for the month of ${new Date().toLocaleString(
    "default",
    { month: "long" }
  )} ${new Date().getFullYear() + 2}`,
};

export default async function Home() {
  return (
    <div>
      <CasinoList />
    </div>
  );
}
