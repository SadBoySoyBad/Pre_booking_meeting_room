// src/components/ReservationDetail.tsx
'use client';

import React from 'react';
import dayjs from 'dayjs';

type Props = {
  selectedDate: Date;
  userEmail: string | null;
};

type Reservation = {
  id: string;
  topic: string;
  roomName: string;
  createdBy: string;
  participants: string[];
  date: string; // 'YYYY-MM-DD'
  startTime: string; // 'HH:mm'
  endTime: string;   // 'HH:mm'
};

// ✅ Mock ข้อมูลการจอง
const mockReservations: Reservation[] = [
  {
    id: '1',
    topic: 'ทีม UX Weekly',
    roomName: 'Alpha Room',
    createdBy: 'uxlead@email.com',
    participants: ['you@email.com', 'test@com'],
    date: '2025-06-23',
    startTime: '09:00',
    endTime: '10:00',
  },
  {
    id: '2',
    topic: 'Dev Sync',
    roomName: 'Beta Room',
    createdBy: 'someone@email.com',
    participants: ['abc@com'],
    date: '2025-06-23',
    startTime: '14:00',
    endTime: '15:00',
  },
];

export default function ReservationDetail({ selectedDate, userEmail }: Props) {
  const selectedDateStr = dayjs(selectedDate).format('YYYY-MM-DD');

  if (!userEmail) {
    return (
      <p className="text-sm text-gray-500 italic mt-4">
        *กรุณา Login เพื่อดูรายละเอียดการจองของคุณ
      </p>
    );
  }

  const myReservations = mockReservations.filter(
    (r) =>
      r.date === selectedDateStr &&
      (r.createdBy === userEmail || r.participants.includes(userEmail))
  );

  if (myReservations.length === 0) {
    return (
      <p className="text-sm text-gray-500 italic mt-4">
        *คุณไม่มีการจองหรือเป็นผู้เข้าร่วมในวันนี้
      </p>
    );
  }

  return (
    <div className="mt-4 space-y-4">
      <h2 className="text-lg font-semibold mb-2">
        รายละเอียดการจองของคุณ ({selectedDateStr})
      </h2>

      {myReservations.map((r) => (
        <div
          key={r.id}
          className="border border-gray-300 rounded-md p-3 shadow-sm"
        >
          <p className="font-bold text-gray-800">{r.topic}</p>
          <p className="text-sm text-gray-600">{r.roomName}</p>
          <p className="text-sm text-gray-500">
            เวลา {r.startTime} - {r.endTime}
          </p>
        </div>
      ))}
    </div>
  );
}
