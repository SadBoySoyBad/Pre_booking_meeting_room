'use client';

import { useState } from 'react';
// import { format } from 'date-fns';
import RoomList from '@/components/RoomList';
import CalendarPanel from '@/components/CalendarPanel';
import BookingList from '@/components/BookingList';
import NavbarHomePage from '@/components/Navbar';


export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // mock user login
  const user = {
    name: 'Rin',
    email: 'rin@example.com',
  };

  return (
    <>
    <NavbarHomePage />
    
    <main className="flex flex-col md:flex-row min-h-screen px-4 md:px-10 py-6 bg-white text-black">
      {/* ซ้าย: รายชื่อห้อง */}
      <div className="w-full md:w-1/3 space-y-4">
        <RoomList selectedDate={selectedDate} />
      </div>

      {/* ขวา: ปฏิทิน + รายการจอง */}
      <div className="w-full md:w-2/3 flex flex-col items-center mt-8 md:mt-0 md:pl-10">
        <CalendarPanel
          selectedDate={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
        <BookingList selectedDate={selectedDate} user={user} />
      </div>
    </main>
    </>
  );
}
