"use client";
import React, { useState } from "react";

const StakingPage = () => {
  const [stakeAmount, setStakeAmount] = useState("");
  const [unstakeAmount, setUnstakeAmount] = useState("");

  const handleStake = () => {
    // Add staking logic here
    console.log(`Staked ${stakeAmount} tokens`);
  };

  const handleUnstake = () => {
    // Add unstaking logic here
    console.log(`Unstaked ${unstakeAmount} tokens`);
  };

  return (
    <div className="w-full h-screen">
      <h1 className="orange_gradient text-3xl font-bold mb-6">Staking</h1>

      <div className="flex flex-col md:flex-row md:gap-5">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Stake Tokens</h2>
          <div className="p-4 border rounded-lg shadow-sm">
            <input
              type="number"
              placeholder="Enter amount to stake"
              value={stakeAmount}
              onChange={(e) => setStakeAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <h1 className="text-sm f mb-6">
              Available token:
              {/* Add avaiable token here */}
            </h1>
            <button
              onClick={handleStake}
              className="border bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 rounded-3xl py-2 px-6 text-[12px] text-white"
            >
              Stake Tokens
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Unstake Tokens</h2>
          <div className="p-4 border rounded-lg shadow-sm">
            <input
              type="number"
              placeholder="Enter amount to unstake"
              value={unstakeAmount}
              onChange={(e) => setUnstakeAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <h1 className="text-sm mb-6">
              Staked token:
              {/* Add staked token here */}
            </h1>
            <button
              onClick={handleUnstake}
              className="rounded-3xl py-2 px-6 text-[12px] text-white bg-red-500 hover:bg-red-600"
            >
              Unstake Tokens
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakingPage;
