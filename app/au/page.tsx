import CasinoListAu from "@/app/components/casino-list-au";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Australia's top ten casinos for ${new Date().toLocaleString(
    "default",
    {
      month: "long",
    }
  )} ${new Date().getFullYear() + 2}`,
  description: `Find the hottest deals for Australian players for the month of ${new Date().toLocaleString(
    "default",
    { month: "long" }
  )} ${new Date().getFullYear() + 2}`,
};

export default async function Home() {
  return (
    <div>
      <CasinoListAu />
    </div>
  );
}
