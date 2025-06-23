'use client';

import { useEffect, useState } from 'react';
import RoomList from '@/components/RoomList';
import CalendarPanel from '@/components/CalendarPanel';
import ReservationDetail from '@/components/ReservationDetail';
import Navbar from '@/components/Navbar';


export default function ReservationPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const email = localStorage.getItem('guest');
    if (email) setUserEmail(email);
  }, []);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white text-black font-sans px-8 py-6">
      <div className="grid grid-cols-2 gap-8">
        {/* ซ้าย: รายชื่อห้อง */}
        <div className="pr-6 border-r border-gray-300">
          <RoomList selectedDate={selectedDate} />
        </div>

        {/* ขวา: ปฏิทิน + รายละเอียด */}
        <div className="pl-6">
          <CalendarPanel
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
          <ReservationDetail
            selectedDate={selectedDate}
            userEmail={userEmail}
          />
        </div>
      </div>
    </div>
    </>
  );
}

