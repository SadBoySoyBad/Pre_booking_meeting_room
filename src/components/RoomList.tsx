'use client';

import { format } from 'date-fns';

type Props = {
  selectedDate: Date;
};

type Room = {
  id: string;
  name: string;
};

type Booking = {
  id: string;
  roomId: string;
  date: string; // in format 'yyyy-MM-dd'
};

const mockRooms: Room[] = [
  { id: 'r1', name: 'Room A' },
  { id: 'r2', name: 'Room B' },
  { id: 'r3', name: 'Room C' },
];

const mockBookings: Booking[] = [
  {
    id: 'b1',
    roomId: 'r2',
    date: '2025-06-20',
  },
  {
    id: 'b2',
    roomId: 'r3',
    date: '2025-06-21',
  },
];

export default function RoomList({ selectedDate }: Props) {
  const formattedDate = format(selectedDate, 'yyyy-MM-dd');

  const isRoomAvailable = (roomId: string): boolean => {
    return !mockBookings.some(
      (booking) => booking.roomId === roomId && booking.date === formattedDate
    );
  };

  return (
    <div className="space-y-4">
      {mockRooms.map((room) => {
        const available = isRoomAvailable(room.id);

        return (
          <button
            key={room.id}
            className={`w-full border-2 rounded-full py-4 text-center text-lg font-bold hover:shadow transition
              ${available ? 'border-green-500 text-green-600' : 'border-red-500 text-red-600'}
            `}
          >
            {room.name}
            <div className="text-sm font-normal">
              {available ? 'Available' : 'Not Available'}
            </div>
          </button>
        );
      })}
    </div>
  );
}
