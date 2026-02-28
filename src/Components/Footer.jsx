import React from "react";

const Footer = () => {
  return (
    <>
    <hr className="border-t border-gray-300" />
    <footer className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        <h1 className="text-xl font-bold">SoleStyle</h1>

        <p className="text-slate-500 text-sm text-center">
          © 2026 SoleStyle Inc. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <span className="cursor-pointer hover:text-green-600">Instagram</span>
          <span className="cursor-pointer hover:text-green-600">Twitter</span>
          <span className="cursor-pointer hover:text-green-600">Facebook</span>
        </div>

      </div>
    </footer>
    </>
  );
};

export default Footer;