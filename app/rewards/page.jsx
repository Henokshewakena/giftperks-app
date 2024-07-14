import React from "react";

const RewardsPage = () => {
  return (
    <div className="md:h-screen p-6">
      <h1 className="orange_gradient text-3xl font-bold mb-6">Rewards</h1>
      <div className="flex flex-col md:flex-row md:items-center md:align-middle space-y-6 md:space-y-0 md:space-x-6">
        <div className="p-4 border border-orange-300 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">How to Earn Tokens</h2>
          <p>
            Tokens can be earned by participating in various activities on our
            platform such as completing tasks, engaging in community
            discussions, or referring new users. The more you participate, the
            more tokens you can accumulate.
          </p>
        </div>
        <div className="p-4 border border-orange-300 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Gift Cards</h2>
          <p>
            Redeem your tokens for a variety of gift cards from popular
            retailers. Simply accumulate the required number of tokens and
            choose from our selection of gift cards to enjoy your rewards.
          </p>
        </div>
        <div className="p-4 border border-orange-300 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">NFTs</h2>
          <p>
            Use your tokens to acquire exclusive NFTs available only to our
            community members. These NFTs can represent unique digital assets
            such as artwork, collectibles, and more. Start earning tokens today
            and build your NFT collection!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
