"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  // add user session here
  const [user, setUser] = useState([]);

  useEffect(() => {
    const setUpProviders = async () => {
      // use auth logic here
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex justify-between w-full md:mb-16 px-2 md:px-10 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/gift-icon.png"
          alt="GiftPerks Logo"
          width={30}
          height={30}
          className="object-contain"
        />{" "}
        <p className="logo_text">GiftPerks</p>
      </Link>

      {/* Desktop nav */}
      <div className="sm:flex" hidden>
        {/* if the user is signed up or connected the wallet */}
        {user ? (
          <div className="flex gap-3 md:gap-5">
            <Link
              href="/myproducts"
              className="orange_gradient rounded-full border border-orange-300 py-1.5 px-5"
            >
              Products
            </Link>

            <Link
              href="/staking"
              className="orange_gradient rounded-full border border-orange-300 py-1.5 px-5"
            >
              Staking
            </Link>

            <Link
              href="/vip"
              className="orange_gradient rounded-full border border-orange-300 py-1.5 px-5"
            >
              VIP
            </Link>

            {/* profile image links to profile page */}
            <Link href="/profile">
              <Image
                //   apply user image to the source
                src={user.image}
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {/* if the user is not signed up or not connected their wallet */}
            <div className="flex gap-5">
              <Link
                href="/products"
                className="orange_gradient rounded-full  py-1.5 px-5"
              >
                Products
              </Link>

              <Link
                href="/rewards"
                className="orange_gradient rounded-full py-1.5 px-5"
              >
                Rewards
              </Link>

              <Link
                href="/vip"
                className="orange_gradient rounded-full py-1.5 px-5"
              >
                VIP
              </Link>

              <button
                type="button"
                className="border bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 rounded-3xl py-2 px-6 text-[12px] text-white"
              >
                Connect Wallet
              </button>
            </div>
          </>
        )}
      </div>
      {/* mobile nav */}
      <div className="sm:hidden flex relative">
        {/* if the user is signed up or connected the wallet */}
        {user ? (
          <div className="flex">
            <Image
              src={user.image}
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white text-black min-w-[150px] flex flex-col gap-2 justify-end items-end">
                <Link href="/rewards" className="dropdown_link">
                  Rewards
                </Link>

                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/myproducts"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Products
                </Link>
                <button
                  type="button"
                  onClick={() => {}}
                  className="border bg-[#e83f2c] rounded-3xl py-2 px-6 text-[12px] text-white"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* if the user is not signed up or not connected their wallet */}
            <DensityMediumIcon
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white text-black min-w-[150px] flex flex-col gap-2 justify-end items-end">
                <Link
                  href="/products"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Products
                </Link>
                <Link
                  href="/rewards"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Rewards
                </Link>
                <Link
                  href="/vip"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Vip
                </Link>

                <button
                  type="button"
                  className="border bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 rounded-3xl py-2 px-3 text-[12px] text-white"
                >
                  Connect Wallet
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
