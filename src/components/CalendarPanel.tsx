'use client';

import React, { useState } from 'react';
import dayjs from 'dayjs';

type Props = {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
};

export default function CalendarPanel({ selectedDate, onDateChange }: Props) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const startOfMonth = currentMonth.startOf('month');
  const endOfMonth = currentMonth.endOf('month');
  const startDay = startOfMonth.day(); // 0 = Sunday
  const daysInMonth = endOfMonth.date();
  const today = dayjs();

  const days: (dayjs.Dayjs | null)[] = [];

  for (let i = 0; i < startDay; i++) {
    days.push(null); // padding ให้ตรงช่อง
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(startOfMonth.date(i));
  }

  const handlePrevMonth = () => setCurrentMonth(currentMonth.subtract(1, 'month'));
  const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, 'month'));

  const isSameDate = (d1: dayjs.Dayjs, d2: dayjs.Dayjs) =>
    d1.format('YYYY-MM-DD') === d2.format('YYYY-MM-DD');

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="border rounded-md p-4 mb-4 bg-white text-black shadow-md">
      <div className="flex justify-between items-center mb-2">
        <button onClick={handlePrevMonth} className="text-sm text-gray-500">&lt;</button>
        <h2 className="text-center font-bold">{currentMonth.format('MMMM YYYY')}</h2>
        <button onClick={handleNextMonth} className="text-sm text-gray-500">&gt;</button>
      </div>

      {/* หัวตาราง */}
      <div className="grid grid-cols-7 text-center text-sm text-gray-700 mb-1">
        {weekDays.map((d, i) => (
          <div key={`day-${i}`} className="w-8 mx-auto">
            {d}
          </div>
        ))}
      </div>

      {/* วันที่ในเดือน */}
      <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
        {days.map((day, idx) => {
          if (!day) return <div key={`empty-${idx}`} className="w-8 h-8 mx-auto"></div>;

          const isToday = isSameDate(day, today);
          const isSelected = isSameDate(day, dayjs(selectedDate));

          return (
            <button
              key={day.format()}
              onClick={() => onDateChange(day.toDate())}
              className={`rounded-full w-8 h-8 flex items-center justify-center transition mx-auto
                ${isToday ? 'bg-red-500 text-white font-bold shadow' : ''}
                ${isSelected && !isToday ? 'border border-black' : ''}
                hover:bg-gray-100`}
            >
              {day.date()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
