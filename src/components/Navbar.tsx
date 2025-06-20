'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-white text-black">
      {/* Logo + Brand */}
      <div className="flex items-center space-x-2">
        <span className="text-xl">🧍🧍🧍</span>
        <h1 className="text-2xl font-bold">arrangemeet.</h1>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-6 text-sm font-semibold">
        <Link
          href="/letterbox"
          className="text-red-600 hover:underline transition"
        >
          LetterBox
        </Link>
        <Link href="/reservation" className="hover:underline transition">
          Reservation
        </Link>
        <Link href="/login" className="hover:underline transition">
          Login
        </Link>
      </nav>
    </header>
  );
}

