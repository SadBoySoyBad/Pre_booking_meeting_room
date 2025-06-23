'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';


export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const guest = localStorage.getItem('guest');
    setIsLoggedIn(!!guest);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('guest');
    setIsLoggedIn(false);
    router.push('/'); // กลับไปหน้า login
  };

  const isLoginPage = pathname === '/';

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white text-black border-b border-black">
      {/* Logo + Brand */}
      <div className="flex items-center space-x-2">
        {/* <span className="text-xl">🧍🧍🧍</span> */}
        <Image
          src="/logo.png"
          alt="logo"
          width={32}
          height={32}
          className="h-8 w-auto"
        />


        <h1 className="text-2xl font-bold">arrangemeet.</h1>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-6 text-md font-semibold">
        <button
          className={`${isLoginPage ? 'text-gray-400 cursor-not-allowed' : 'text-red-600 hover:underline'
            } transition`}
          disabled={isLoginPage}
        >
          LetterBox
        </button>
        <Link
          href="/reservation"
          className="hover:underline transition"
        >
          Reservation
        </Link>

        {!isLoggedIn ? (
          <Link href="/" className="hover:underline transition">
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="hover:underline transition text-red-600"
          >
            Logout
          </button>
        )}
      </nav>
    </header>

  );
}
