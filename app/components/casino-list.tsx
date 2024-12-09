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
  const picks = "1358,1103,1362,1334,1340,1353,1346";
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
        "Experience the thrill of Vegas-style gaming with our vast selection of slots and table games. New players can enjoy a generous 400%welcome bonus to kickstart their journey.",
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
      benefits: ["120 Free Spins", "VIP Program", "RTG Slots"],
      description:
        "Treat yourself like royalty at Heaps o Spins Casino. Our VIP program offers exclusive perks, while our mobile platform ensures you can play anytime, anywhere.",
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
      benefits: ["No Deposit Bonus", "RTG Games", "330% Welcome Bonus"],
      description:
        "Another new RTG casino with fantastic table games and lightning-fast payouts. Claim your no deposit free chipbonus today!",
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
        "Experience the thrill of winning big at Kats Casino, known for its high RTP slots and rewarding loyalty program. Take advantage of our weekly promotions!",
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
      benefits: ["Many software providers", "Crypto bonuses", "Secure Banking"],
      description:
        "Try your luck at Bit Starz Casino, where progressive jackpots await. Crypto bonuses, all while benefiting from our secure banking options.",
    },
    {
      name: orderedCasinoData[7].casino,
      button: orderedCasinoData[7].button,
      id: orderedCasinoData[7].id,
      clean_name: orderedCasinoData[7].clean_name,
      nodeposit: orderedCasinoData[7].nodeposit,
      freespins: orderedCasinoData[7].freespins,
      deposit: orderedCasinoData[7].deposit,
      bonus_percent: orderedCasinoData[7].bonus_percent,
      benefits: [
        "175% plus 50 free spins",
        "Multiple welcome bonuses",
        "Fast Registration",
      ],
      description:
        "Hit the slots and win big at 7Bit Casino! Enjoy hundreds of slots, a convenient mobile app, and fast registration.",
    },
    {
      name: orderedCasinoData[8].casino,
      button: orderedCasinoData[8].button,
      id: orderedCasinoData[8].id,
      clean_name: orderedCasinoData[8].clean_name,
      nodeposit: orderedCasinoData[8].nodeposit,
      freespins: orderedCasinoData[8].freespins,
      deposit: orderedCasinoData[8].deposit,
      bonus_percent: orderedCasinoData[8].bonus_percent,
      benefits: [
        "400% bonus plus 120 Free Spins",
        "Betsoft, Rival and more",
        "Great customer loyalty",
      ],
      description:
        "A great new casino trying to be the best USA casino possible, with large bonuses and vast amount of slots all open to US players.",
    },
    {
      name: orderedCasinoData[9].casino,
      button: orderedCasinoData[9].button,
      id: orderedCasinoData[9].id,
      clean_name: orderedCasinoData[9].clean_name,
      nodeposit: orderedCasinoData[9].nodeposit,
      freespins: orderedCasinoData[9].freespins,
      deposit: orderedCasinoData[9].deposit,
      bonus_percent: orderedCasinoData[9].bonus_percent,
      benefits: [
        "$2000 bonus with 100 free spins",
        "Arrows Edge, Rival and more",
        "Multiple bonuses as a player",
      ],
      description:
        "Pure casino does a great job in offering the top games and bonuses USA players are looking for.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-amber-50 dark:bg-gray-800 border-2 mb-2 border-amber-400 dark:border-amber-600 shadow-md rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
          Top 10 USA November Casinos
        </h1>
        <p className="text-xl p-4 text-center dark:text-gray-200">
          Delivering the top 10 casinos for USA players, we believe that you
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
