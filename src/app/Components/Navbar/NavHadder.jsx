"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

const NavHadder = () => {
  const [banglaDate, setBanglaDate] = useState("");

  useEffect(() => {
    const today = new Date();

    const date = today.toLocaleDateString("bn-BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    setBanglaDate(date);
  }, []);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3">
          
          {/* Logo */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-600">
            <span className="text-lg text-white">🌿</span>
          </div>

          {/* Brand Name */}
          <div>
            <h1 className="text-lg font-bold leading-tight text-gray-900">
              বাজার দর
            </h1>

            <p className="text-[10px] text-gray-500">
              {banglaDate}
            </p>
          </div>
        </Link>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="rounded-lg border border-green-600 px-4 py-2 text-sm font-medium text-green-600 transition hover:bg-green-50"
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <NavLinks />
    </header>
  );
};

export default NavHadder;