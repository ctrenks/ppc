import { prisma } from "@/lib/prisma";
import Image from "next/image";
export default async function Component() {
  const picks = "1350,1314,1315,1318,1120,1122,1126,1125,1124,1123";
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
    },
  });

  // reorder casinoData to match picks order
  const orderedCasinoData = casinoData.sort((a, b) => {
    return picks.indexOf(a.id.toString()) - picks.indexOf(b.id.toString());
  });

  console.log(orderedCasinoData);
  const casinos = [
    {
      name: orderedCasinoData[0].casino,
      button: orderedCasinoData[0].button,
      id: orderedCasinoData[0].id,
      clean_name: orderedCasinoData[0].clean_name,
      benefits: [
        "100% Welcome Bonus",
        "24/7 Customer Support",
        "Wide Game Selection",
      ],
      description:
        "Experience the thrill of Vegas-style gaming with our vast selection of slots and table games. New players can enjoy a generous welcome package to kickstart their journey.",
    },
    {
      name: orderedCasinoData[1].casino,
      button: orderedCasinoData[1].button,
      id: orderedCasinoData[1].id,
      clean_name: orderedCasinoData[1].clean_name,
      benefits: ["200 Free Spins", "VIP Program", "Mobile-Friendly"],
      description:
        "Treat yourself like royalty at Royal Flush Palace. Our VIP program offers exclusive perks, while our mobile platform ensures you can play anytime, anywhere.",
    },
    {
      name: orderedCasinoData[2].casino,
      button: orderedCasinoData[2].button,
      id: orderedCasinoData[2].id,
      clean_name: orderedCasinoData[2].clean_name,
      benefits: ["No Deposit Bonus", "Live Dealer Games", "Fast Payouts"],
      description:
        "Enjoy the luxury and excitement of Golden Chips Resort, featuring live dealer games and lightning-fast payouts. Claim your no deposit bonus today!",
    },
    {
      name: orderedCasinoData[3].casino,
      button: orderedCasinoData[3].button,
      id: orderedCasinoData[3].id,
      clean_name: orderedCasinoData[3].clean_name,
      benefits: ["High RTP Slots", "Weekly Promotions", "Loyalty Rewards"],
      description:
        "Experience the thrill of winning big at Jackpot City, known for its high RTP slots and rewarding loyalty program. Take advantage of our weekly promotions!",
    },
    {
      name: orderedCasinoData[4].casino,
      button: orderedCasinoData[4].button,
      id: orderedCasinoData[4].id,
      clean_name: orderedCasinoData[4].clean_name,
      benefits: ["Exclusive Table Games", "Crypto-Friendly", "24/7 Live Chat"],
      description:
        "Aces High Club offers an exclusive gaming experience with unique table games, crypto payment options, and 24/7 live chat support.",
    },
    {
      name: orderedCasinoData[5].casino,
      button: orderedCasinoData[5].button,
      id: orderedCasinoData[5].id,
      clean_name: orderedCasinoData[5].clean_name,
      benefits: ["Daily Cashback", "Tournament Events", "Instant Play Games"],
      description:
        "Spin your way to paradise with daily cashback, exciting tournament events, and instant play games at Spin & Win Paradise.",
    },
    {
      name: orderedCasinoData[6].casino,
      button: orderedCasinoData[6].button,
      id: orderedCasinoData[6].id,
      clean_name: orderedCasinoData[6].clean_name,
      benefits: [
        "Progressive Jackpots",
        "Refer-a-Friend Bonus",
        "Secure Banking",
      ],
      description:
        "Try your luck at Fortune Wheel Casino, where progressive jackpots await. Refer a friend and enjoy a bonus, all while benefiting from our secure banking options.",
    },
    {
      name: orderedCasinoData[7].casino,
      button: orderedCasinoData[7].button,
      id: orderedCasinoData[7].id,
      clean_name: orderedCasinoData[7].clean_name,
      benefits: [
        "Mobile App Available",
        "Unique Dice Games",
        "Fast Registration",
      ],
      description:
        "Roll the dice and win big at Lucky Dice Den! Enjoy unique dice games, a convenient mobile app, and fast registration.",
    },
    {
      name: orderedCasinoData[8].casino,
      button: orderedCasinoData[8].button,
      id: orderedCasinoData[8].id,
      clean_name: orderedCasinoData[8].clean_name,
      benefits: [
        "Blackjack Variants",
        "Low Wagering Requirements",
        "Regular Tournaments",
      ],
      description:
        "Experience the thrill of Blackjack Bonanza with various blackjack variants, low wagering requirements, and regular tournaments.",
    },
    {
      name: orderedCasinoData[9].casino,
      button: orderedCasinoData[9].button,
      id: orderedCasinoData[9].id,
      clean_name: orderedCasinoData[9].clean_name,
      benefits: [
        "Live Roulette Tables",
        "Comp Points System",
        "Multi-Language Support",
      ],
      description:
        "Immerse yourself in the elegance of Roulette Royale with live roulette tables, a rewarding comp points system, and multi-language support.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Top 10 Casinos</h1>
      <ul className="space-y-6">
        {casinos.map((casino, index) => (
          <li
            key={index}
            className="bg-amber-50 border-2 border-amber-400 shadow-md rounded-lg overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-center p-4 gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-500 text-white rounded-full text-2xl font-bold">
                {index + 1}
              </div>
              <div className="w-[100px] h-[80px] bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                <Image
                  src={`/img/${casino.button ?? ""}`}
                  alt={`${casino.name} logo`}
                  width={100}
                  height={80}
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2">{casino.name}</h2>
                <ul className="list-disc list-inside mb-4">
                  {casino.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-sm text-gray-600">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                <p className="text-sm text-gray-600">{casino.description}</p>
              </div>
              <button className="w-full sm:w-auto px-6 py-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition-colors duration-200 ease-in-out">
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
    </div>
  );
}
