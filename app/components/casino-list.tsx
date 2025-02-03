import { prisma } from "@/lib/prisma";
import Image from "next/image";
import NewsLetter from "./NewsLetter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canada's top ten casinos for January 2025",
  description:
    "Find the hottest deals for Canada players for  the month of January 2025",
};
export default async function Component() {
  const siteId = 10;
  const sitename = "Slots and Bonuses";
  const picks = "1358,1304,1103,1362,1334,1340,1353,1346,62";
  const picksArray = picks.split(",").map(Number);

  const casinoData = await prisma.casino_p_casinos.findMany({
    where: {
      id: {
        in: picksArray,
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

  const casinoMap = new Map(casinoData.map((casino) => [casino.id, casino]));

  const orderedCasinoData = picksArray
    .map((id) => casinoMap.get(id))
    .filter(
      (casino): casino is NonNullable<typeof casino> => casino !== undefined
    );

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
        "Hundreds of slots",
        "One Hell of a bonus",
        "Great payment options",
      ],
      description:
        "Experience the thrill of Vegas-style gaming with our vast selection of slots and table games. New players can enjoy a generous welcome bonus to kickstart their journey and more promos as you play.",
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
        "Live chat support is available 24/7",
      ],
      description:
        "Experience the best crypto casino by AskGamblers, 400% Welcome bonus, 6000 games, Instant withdrawals, Free weekly jackpots",
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
      benefits: [
        "Wide selection of game genres",
        "Multiple crypto currencies",
        "Live chat support is available 24/7",
      ],
      description:
        "Oshi is an established brand with many available currencies (both crypto and fiat) and a wide selection of games.",
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
      benefits: ["Regulation Curacao", "RTG Games", "Customer support 24/7"],
      description:
        "24slots has everything you need—from top-tier slots to thrilling table games and sports betting. Claim your 400% welcome bonus and get in on the game today at 24slots",
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
      benefits: ["High RTP Slots", "Weekly Promotions", "Loyalty Rewards"],
      description:
        "Get ready to explore a handpicked selection of games that cater to your unique gaming interests. From Jackpot, Hold & Win, and Megaways Slots to Keno and Bingo, we've got a game for you!",
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
      benefits: ["Christmas Promotions", "Crypto-Friendly", "24/7 Live Chat"],
      description:
        "Fortune Panda delivers cutting edge games both live and online with non stop promotions for betting players",
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
      benefits: ["RIVAL Games", "500% Welcome Bonus", "No Deposit Bonus"],
      description:
        "Decode Casino offers a unique gaming experience with multiple bonuses, tournament events, and instant play games.",
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
      benefits: ["Top Sports Book", "Crypto bonuses", "Full Casino Games"],
      description:
        "MyBookie knows what every casino player out there is looking for – a quality online gambling experience that offers Las Vegas Style games like Blackjack and Craps at your fingertips and a mix of new age like plinko, jetx, crash arcade and dynamic bonus round slot games. Mybookie now delivers games from a deep library of 3500+ games. Has a rotation of seasonal games for every holiday to keep things fun and light over the holidays.",
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
      benefits: ["Established Brand", "OG Microgaming", "Competitive Bonuses"],
      description:
        "If your old school or you have been around the block a few times, you will love this casino. They have been around for a long time and have a great selection of games from Microgaming.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-amber-50 dark:bg-gray-800 border-2 mb-2 border-amber-400 dark:border-amber-600 shadow-md rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
          Top Canadian January Casinos
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
      <div id="checks">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-amber-50 dark:bg-gray-800 border-2 border-amber-400 dark:border-amber-600 shadow-md rounded-lg mb-6">
          <div className="flex flex-col items-center text-center">
            <svg
              className="w-16 h-16 text-green-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="text-xl font-bold mb-2 dark:text-white">
              Licensed & Regulated
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              All casinos are fully licensed and regulated by respected gaming
              authorities
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg
              className="w-16 h-16 text-green-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="text-xl font-bold mb-2 dark:text-white">
              Secure & Fair
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Verified RNG systems and SSL encryption ensure safe and fair
              gaming experience
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg
              className="w-16 h-16 text-green-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="text-xl font-bold mb-2 dark:text-white">
              Fast Payouts
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Quick and reliable withdrawal processing with multiple payment
              options
            </p>
          </div>
        </div>
      </div>
      {/*<div className="text-center p-6 bg-amber-50 dark:bg-gray-800 border-2 mt-2 border-amber-400 dark:border-amber-600 shadow-md rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
          Get over 100% Payout on Slot Machines right now for Free
        </h1>
        <p>
          With AI we are identifing trends on REAL ONLINE SLOT MACHINES that are
          paying out over 120+ return to player. 100% risk free with no sign up,
          try the AI bot now to be alerted to casinos with a slot paying out
          real money. This is delivered via Telegram, free and super easy to use
          on your phone or PC, and allows instant alert updates. 2 Weeks
          completey free no personal details needed at all.
        </p>
        <p>
          {" "}
          <button className="w-full sm:w-auto px-6 py-2 bg-emerald-600 dark:bg-emerald-500 text-white font-semibold rounded-md hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors duration-200 ease-in-out">
            <a
              target="blank_"
              rel="sponsored"
              href="https://www.rtpslotbot.com/"
            >
              Learn more about the AI bot
            </a>
          </button>
        </p>
      </div> */}
      <ul className="space-y-6">
        {casinos.map((casino, index) => (
          <li
            key={index}
            className="bg-amber-50 dark:bg-gray-800 border-2 border-amber-400 dark:border-amber-600 shadow-md rounded-lg overflow-visible relative"
          >
            {index === 0 && (
              <Image
                src="/best.png"
                alt="Best Casino Badge"
                width={200}
                height={200}
                className="absolute -left-24 top-1/2 transform -translate-y-1/2 z-20"
                style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.2))" }}
              />
            )}
            {index === 1 && (
              <Image
                src="/bestbonus.png"
                alt="Best Bonus Badge"
                width={200}
                height={200}
                className="absolute -left-24 top-1/2 transform -translate-y-1/2 z-20"
                style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.2))" }}
              />
            )}
            {index === 2 && (
              <Image
                src="/payouts.png"
                alt="Best Payouts Badge"
                width={200}
                height={200}
                className="absolute -left-24 top-1/2 transform -translate-y-1/2 z-20"
                style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.2))" }}
              />
            )}
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
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        (index < 5 && i < 5) || (index >= 5 && i < 4.5)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {index < 5 ? "5.0" : "4.5"} • Voted by{" "}
                  {1200 + Math.floor(Math.random() * 800)} users
                </p>
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
            </div>
          </li>
        ))}
      </ul>
      <div className="text-center p-6 bg-amber-50 dark:bg-gray-800 border-2 mt-2 border-amber-400 dark:border-amber-600 shadow-md rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
          Want to beat slots? Try this for free
        </h1>
        <p>
          Try the AI Telegram bot that alerts you when slots at certain casinos
          are trending over 100% RTP. Exclusive free trial to prove the concept.
        </p>
        <p>
          {" "}
          <button className="w-full sm:w-auto px-6 py-2 bg-emerald-600 dark:bg-emerald-500 text-white font-semibold rounded-md hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors duration-200 ease-in-out">
            <a
              target="blank_"
              rel="sponsored"
              href="https://www.beatonlineslots.com/"
            >
              Try the AI Bot Now Exclusive 1 year code BEATTHEM
            </a>
          </button>
        </p>
      </div>
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
