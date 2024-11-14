export default function Component() {
  const casinos = [
    {
      name: "Lucky Slots Casino",
      benefits: [
        "100% Welcome Bonus",
        "24/7 Customer Support",
        "Wide Game Selection",
      ],
      description:
        "Experience the thrill of Vegas-style gaming with our vast selection of slots and table games. New players can enjoy a generous welcome package to kickstart their journey.",
    },
    {
      name: "Royal Flush Palace",
      benefits: ["200 Free Spins", "VIP Program", "Mobile-Friendly"],
      description:
        "Treat yourself like royalty at Royal Flush Palace. Our VIP program offers exclusive perks, while our mobile platform ensures you can play anytime, anywhere.",
    },
    {
      name: "Golden Chips Resort",
      benefits: ["No Deposit Bonus", "Live Dealer Games", "Fast Payouts"],
      description:
        "Enjoy the luxury and excitement of Golden Chips Resort, featuring live dealer games and lightning-fast payouts. Claim your no deposit bonus today!",
    },
    {
      name: "Jackpot City",
      benefits: ["High RTP Slots", "Weekly Promotions", "Loyalty Rewards"],
      description:
        "Experience the thrill of winning big at Jackpot City, known for its high RTP slots and rewarding loyalty program. Take advantage of our weekly promotions!",
    },
    {
      name: "Aces High Club",
      benefits: ["Exclusive Table Games", "Crypto-Friendly", "24/7 Live Chat"],
      description:
        "Aces High Club offers an exclusive gaming experience with unique table games, crypto payment options, and 24/7 live chat support.",
    },
    {
      name: "Spin & Win Paradise",
      benefits: ["Daily Cashback", "Tournament Events", "Instant Play Games"],
      description:
        "Spin your way to paradise with daily cashback, exciting tournament events, and instant play games at Spin & Win Paradise.",
    },
    {
      name: "Fortune Wheel Casino",
      benefits: [
        "Progressive Jackpots",
        "Refer-a-Friend Bonus",
        "Secure Banking",
      ],
      description:
        "Try your luck at Fortune Wheel Casino, where progressive jackpots await. Refer a friend and enjoy a bonus, all while benefiting from our secure banking options.",
    },
    {
      name: "Lucky Dice Den",
      benefits: [
        "Mobile App Available",
        "Unique Dice Games",
        "Fast Registration",
      ],
      description:
        "Roll the dice and win big at Lucky Dice Den! Enjoy unique dice games, a convenient mobile app, and fast registration.",
    },
    {
      name: "Blackjack Bonanza",
      benefits: [
        "Blackjack Variants",
        "Low Wagering Requirements",
        "Regular Tournaments",
      ],
      description:
        "Experience the thrill of Blackjack Bonanza with various blackjack variants, low wagering requirements, and regular tournaments.",
    },
    {
      name: "Roulette Royale",
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
                Logo
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
                Play Now
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
