import React from "react";

const VIPSubscriptionsPage = () => {
  return (
    <div className="w-full h-screen p-6">
      <h1 className="orange_gradient text-3xl font-bold mb-6">
        VIP Subscriptions
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        <div className="p-4 border border-orange-300 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">VIP Bronze</h2>
          <p>
            Enjoy basic VIP benefits including early access to new features,
            priority customer support, and exclusive content. Perfect for those
            who want to get started with our VIP program.
          </p>
          <p className="text-lg font-bold mt-2">$9.99/month</p>
          <button className="mt-4 orange_gradient rounded-full border border-orange-300 py-1.5 px-5">
            Subscribe Now
          </button>
        </div>
        <div className="p-4 border border-orange-300 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">VIP Silver</h2>
          <p>
            Get all the benefits of Bronze plus additional perks such as higher
            token earning rates, exclusive VIP events, and special discounts on
            platform services.
          </p>
          <p className="text-lg font-bold mt-2">$19.99/month</p>
          <button className="mt-4 orange_gradient rounded-full border border-orange-300 py-1.5 px-5">
            Subscribe Now
          </button>
        </div>
        <div className="p-4 border border-orange-300 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">VIP Gold</h2>
          <p>
            Experience the ultimate VIP treatment with all the benefits of
            Silver plus exclusive access to premium content, one-on-one sessions
            with industry experts, and much more.
          </p>
          <p className="text-lg font-bold mt-2">$29.99/month</p>
          <button className="mt-4 border bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 rounded-3xl py-2 px-6 text-[12px] text-white">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VIPSubscriptionsPage;
