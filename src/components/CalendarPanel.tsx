'use client';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // อย่าลืม import CSS

type Props = {
  selectedDate: Date;
  onChange: (date: Date) => void;
};

export default function CalendarPanel({ selectedDate, onChange }: Props) {
  return (
    <div className="mb-6 w-full max-w-md flex flex-col items-center justify-center rounded-lg border p-4 shadow">
      <h2 className="text-xl font-semibold mb-2 text-center">Select a Date</h2>
      <Calendar
        onChange={(value) => onChange(value as Date)}
        value={selectedDate}
        calendarType="gregory"
        className="w-full"
      />
    </div>
  );
}
