import { prisma } from "@/lib/prisma";
import Image from "next/image";
import NewsLetter from "./NewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canada's top ten casinos for December 2024",
  description:
    "Find the hottest deals for Canada players for the month of December 2024",
};
export default async function Component() {
  const siteId = 10;
  const sitename = "Slots and Bonuses";
  const picks = "1358,1304,1103,1362,1334,1340,1353,1346,62";
  const casinoData = await prisma.casino_p_casinos.findMany({
    where: {
      id: {
        in: picks.split(",").map((id) => parseInt(id)),
      },
    },
    select: {
      id: true,
      casino: true,
      ppc: true,
      homepageimage: true,
      button: true,
      clean_name: true,
      nodeposit: true,
      freespins: true,
      deposit: true,
      bonus_percent: true,
    },
  });

  // reorder casinoData to match picks order
  const orderedCasinoData = casinoData.sort((a, b) => {
    return picks.indexOf(a.id.toString()) - picks.indexOf(b.id.toString());
  });

  const casinos = [
    {
      name: orderedCasinoData[0].casino,
      button: orderedCasinoData[0].button,
      id: orderedCasinoData[0].id,
      clean_name: orderedCasinoData[0].clean_name,
      nodeposit: orderedCasinoData[0].nodeposit,
      freespins: orderedCasinoData[0].freespins,
      deposit: orderedCasinoData[0].deposit,
      bonus_percent: orderedCasinoData[0].bonus_percent,
      benefits: [
        "5 US Game Providers",
        "$4000 Welcome Bonus at 400%",
        "Visa / MC and crypto payments",
      ],
      description:
        "Experience the thrill of Vegas-style gaming with our vast selection of slots and table games. New players can enjoy a generous 400% welcome bonus to kickstart their journey.",
    },
    {
      name: orderedCasinoData[1].casino,
      button: orderedCasinoData[1].button,
      id: orderedCasinoData[1].id,
      clean_name: orderedCasinoData[1].clean_name,
      nodeposit: orderedCasinoData[1].nodeposit,
      freespins: orderedCasinoData[1].freespins,
      deposit: orderedCasinoData[1].deposit,
      bonus_percent: orderedCasinoData[1].bonus_percent,
      benefits: [
        "300% up to 2000 CAD\\5 BTC + 200 FS ",
        "Weekly Jackpots",
        "Instant Withdrawals",
      ],
      description:
        "Experience the best crypto casino by AskGamblers, 400% Welcome bonus, 6000 games, Instant withdrawals, Free weekly jackpots",
    },
    {
      name: orderedCasinoData[1].casino,
      button: orderedCasinoData[1].button,
      id: orderedCasinoData[1].id,
      clean_name: orderedCasinoData[1].clean_name,
      nodeposit: orderedCasinoData[1].nodeposit,
      freespins: orderedCasinoData[1].freespins,
      deposit: orderedCasinoData[1].deposit,
      bonus_percent: orderedCasinoData[1].bonus_percent,
      benefits: [
        "Wide selection of game genres",
        "Multiple crypto currencies",
        "Live chat support is available 24/7",
      ],
      description:
        "Oshi is an established brand with many available currencies (both crypto and fiat) and a wide selection of games.",
    },
    {
      name: orderedCasinoData[2].casino,
      button: orderedCasinoData[2].button,
      id: orderedCasinoData[2].id,
      clean_name: orderedCasinoData[2].clean_name,
      nodeposit: orderedCasinoData[2].nodeposit,
      freespins: orderedCasinoData[2].freespins,
      deposit: orderedCasinoData[2].deposit,
      bonus_percent: orderedCasinoData[2].bonus_percent,
      benefits: ["Regulation Curacao", "RTG Games", "Customer support 24/7"],
      description:
        "24slots has everything you need—from top-tier slots to thrilling table games and sports betting. Claim your 400% welcome bonus and get in on the game today at 24slots",
    },
    {
      name: orderedCasinoData[3].casino,
      button: orderedCasinoData[3].button,
      id: orderedCasinoData[3].id,
      clean_name: orderedCasinoData[3].clean_name,
      nodeposit: orderedCasinoData[3].nodeposit,
      freespins: orderedCasinoData[3].freespins,
      deposit: orderedCasinoData[3].deposit,
      bonus_percent: orderedCasinoData[3].bonus_percent,
      benefits: ["High RTP Slots", "Weekly Promotions", "Loyalty Rewards"],
      description:
        "Get ready to explore a handpicked selection of games that cater to your unique gaming interests. From Jackpot, Hold & Win, and Megaways Slots to Keno and Bingo, we’ve got a game for you!",
    },
    {
      name: orderedCasinoData[4].casino,
      button: orderedCasinoData[4].button,
      id: orderedCasinoData[4].id,
      clean_name: orderedCasinoData[4].clean_name,
      nodeposit: orderedCasinoData[4].nodeposit,
      freespins: orderedCasinoData[4].freespins,
      deposit: orderedCasinoData[4].deposit,
      bonus_percent: orderedCasinoData[4].bonus_percent,
      benefits: ["Long time favorite", "Crypto-Friendly", "24/7 Live Chat"],
      description:
        "iNet Bet Casino offers an exclusive gaming experience with unique table games, crypto payment options, and 24/7 live chat support.",
    },
    {
      name: orderedCasinoData[5].casino,
      button: orderedCasinoData[5].button,
      id: orderedCasinoData[5].id,
      clean_name: orderedCasinoData[5].clean_name,
      nodeposit: orderedCasinoData[5].nodeposit,
      freespins: orderedCasinoData[5].freespins,
      deposit: orderedCasinoData[5].deposit,
      bonus_percent: orderedCasinoData[5].bonus_percent,
      benefits: ["RIVAL Games", "500% Welcome Bonus", "No Deposit Bonus"],
      description:
        "Decode Casino offers a unique gaming experience with multiple bonuses, tournament events, and instant play games.",
    },
    {
      name: orderedCasinoData[6].casino,
      button: orderedCasinoData[6].button,
      id: orderedCasinoData[6].id,
      clean_name: orderedCasinoData[6].clean_name,
      nodeposit: orderedCasinoData[6].nodeposit,
      freespins: orderedCasinoData[6].freespins,
      deposit: orderedCasinoData[6].deposit,
      bonus_percent: orderedCasinoData[6].bonus_percent,
      benefits: ["Top Sports Book", "Crypto bonuses", "Full Casino Games"],
      description:
        "MyBookie knows what every casino player out there is looking for – a quality online gambling experience that offers Las Vegas Style games like Blackjack and Craps at your fingertips and a mix of new age like plinko, jetx, crash arcade and dynamic bonus round slot games. Mybookie now delivers games from a deep library of 3500+ games. Has a rotation of seasonal games for every holiday to keep things fun and light over the holidays.",
    },
    {
      name: orderedCasinoData[6].casino,
      button: orderedCasinoData[6].button,
      id: orderedCasinoData[6].id,
      clean_name: orderedCasinoData[6].clean_name,
      nodeposit: orderedCasinoData[6].nodeposit,
      freespins: orderedCasinoData[6].freespins,
      deposit: orderedCasinoData[6].deposit,
      bonus_percent: orderedCasinoData[6].bonus_percent,
      benefits: ["Established Brand", "OG Microgaming", "Competitive Bonuses"],
      description:
        "If your old school or you have been around the block a few times, you will love this casino. They have been around for a long time and have a great selection of games from Microgaming.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-amber-50 dark:bg-gray-800 border-2 mb-2 border-amber-400 dark:border-amber-600 shadow-md rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
          Top Canadian December Casinos
        </h1>
        <p className="text-xl p-4 text-center dark:text-gray-200">
          Delivering the top casinos for Canadian players, we believe that you
          will find these to be just what your looking for. With large deposit
          bonuses to no deposit casino bonuses the best of the best is here. If
          you have not already jumped into using crypto currency for casinos you
          are missing out, join our newsletter at the bottom of the page to get
          our guide on using Bitcoin today.
        </p>
      </div>
      <ul className="space-y-6">
        {casinos.map((casino, index) => (
          <li
            key={index}
            className="bg-amber-50 dark:bg-gray-800 border-2 border-amber-400 dark:border-amber-600 shadow-md rounded-lg overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-center p-4 gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-500 dark:bg-amber-600 text-white rounded-full text-2xl font-bold">
                {index + 1}
              </div>
              <div className="w-[100px] h-[80px] rounded-md bg-amber-500 dark:bg-amber-600 flex items-center justify-center">
                <Image
                  src={`/img/${casino.button ?? ""}`}
                  alt={`${casino.name} logo`}
                  width={100}
                  height={80}
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2 dark:text-white">
                  {casino.name}
                </h2>
                <ul className="list-disc list-inside mb-4">
                  {casino.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="text-sm text-gray-600 dark:text-gray-300"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {casino.description}
                </p>
              </div>
              <button className="w-full sm:w-auto px-6 py-2 bg-emerald-600 dark:bg-emerald-500 text-white font-semibold rounded-md hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors duration-200 ease-in-out">
                <a
                  target="blank_"
                  rel="sponsored"
                  href={`/playCasino/${casino.clean_name}`}
                >
                  Play Now
                </a>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="bg-amber-50 dark:bg-gray-800 border-2 mt-2 border-amber-400 dark:border-amber-600 shadow-md rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
          {sitename} Newsletter Sign Up.
        </h1>
        <p className="text-xl p-4 text-center dark:text-gray-200">
          We update the list of casinos on a regular basis to ensure that you
          have the best possible experience. If you have any suggestions or
          feedback, please let us know! Also sign up to our newsletter to stay
          updated on the latest casinos and promotions. Ask today about the
          crypto currency guide to get started safely with Bitcoin.
        </p>
        <NewsLetter siteId={siteId} />

        {/* <div className="hidden">
          <img
            className="w-1px h-1px"
            src="https://www.planet7links.com/click/2/10319/328/1"
            alt="Casino List Banner"
          />
        </div> */}
      </div>
    </div>
  );
}
