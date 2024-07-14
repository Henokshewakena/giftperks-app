import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-row justify-between md:gap-32 md:px-24 md:py-5 py-10 ">
        <div className="flex flex-col gap-6 md:w-2/5 justify-center">
          <p className="md:text-6xl orange_gradient text-3xl">
            Win Big With Our Exclusive Giveaways!
          </p>
          <p className="text-md md:text-lg font-light md:w-3/4">
            Don't miss your chance to win big!Enter now for exclusive prizes
            like NFTs
          </p>

          <div className="flex gap-4">
            <Link
              href="/"
              className="border bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 rounded-3xl py-2 px-6 text-[12px] text-white"
            >
              Get your first Gift
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-3/5">
          <Image
            src="/assets/images/gift-icon.png"
            alt="GiftPerks Logo"
            width={300}
            height={300}
            sizes="100vw"
            style={{ width: "100%" }}
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}
