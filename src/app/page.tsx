'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const [guestInfo, setGuestInfo] = useState({
    name: '',
    phone: '',
    company: '',
  });

  useEffect(() => {
    const guest = localStorage.getItem('guest');
    if (guest) {
      router.push('/reservation');
    }
  }, []);

  const handleGuestLogin = () => {
    if (!guestInfo.name || !guestInfo.phone) {
      alert('กรุณากรอกชื่อและเบอร์โทร');
      return;
    }

    localStorage.setItem('guest', JSON.stringify(guestInfo));
    router.push('/reservation');
  };

  const handleMicrosoftLogin = () => {
    window.location.href = '/api/auth/signin'; // (เตรียมไว้ใช้ภายหลัง)
  };

  return (
    <>
      {/* Navbar + เส้นขีดใต้ */}
      
        <Navbar />
      {/* <div className="h-[55px] w-full bg-black" ></div> */}

      {/* เนื้อหา Login */}
      <div className="min-h-screen bg-white flex flex-col items-center justify-center pb-55">
        <div className="relative flex justify-center items-center h-[180px]">
          {/* WELCOME ด้านหลัง */}
          <h1 className="absolute text-[100px] font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-white/0 to-black/15 z-10 ">
            WELCOME
          </h1>
          {/* Log In ด้านหน้า */}
          <h2 className="text-5xl font-bold text-black z-10">Log In</h2>
        </div>

        {/* กล่องฟอร์ม */}
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Login as Guest</h2>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="ชื่อ *"
              value={guestInfo.name}
              onChange={(e) => setGuestInfo({ ...guestInfo, name: e.target.value })}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black text-gray-700"
            />
            <input
              type="text"
              placeholder="เบอร์โทร *"
              value={guestInfo.phone}
              onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black text-gray-700"
            />
            <input
              type="text"
              placeholder="บริษัท (ไม่บังคับ)"
              value={guestInfo.company}
              onChange={(e) => setGuestInfo({ ...guestInfo, company: e.target.value })}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black text-gray-700"
            />
          </div>

          <button
            onClick={handleGuestLogin}
            className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Login as Guest
          </button>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-500 font-medium">หรือ</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <button
            onClick={handleMicrosoftLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login with Microsoft
          </button>
        </div>
      </div>
    </>
  );
}
