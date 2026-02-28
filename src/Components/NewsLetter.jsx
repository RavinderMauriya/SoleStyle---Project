import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-12">
      <div className="bg-green-950 rounded-3xl px-6 sm:px-10 lg:px-16 py-10 text-center">

        <h4 className="font-bold text-green-300">
          Join the Community
        </h4>

        <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mt-4 max-w-3xl mx-auto">
          Unlock 15% Off Your First Order
        </h1>

        <p className="text-gray-300 mt-4 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Subscribe to our newsletter to receive early access to new drops,
          exclusive offers, and expert style tips.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-xl mx-auto">
          <input
            className="flex-1 px-6 py-3 text-white placeholder-gray-200 bg-white/20 border border-white/40 rounded-full outline-none"
            type="email"
            placeholder="Enter your e-mail address"
          />
          <button className="px-6 py-3 font-bold bg-green-400 rounded-full whitespace-nowrap">
            Sign Up Free
          </button>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
          By signing up, you agree to our Terms and Privacy Policy.
        </p>

      </div>
    </section>
  );
};

export default NewsLetter;