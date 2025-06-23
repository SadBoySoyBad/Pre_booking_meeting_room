import React from 'react';

type RoomStatus = 'AVAILABLE' | 'OCCUPIED' | 'MAINTENANCE';

type Room = {
  id: string;
  name: string;
  status: RoomStatus;
};

type Props = {
  selectedDate: Date;
};

const mockRooms: Room[] = [
  { id: 'r1', name: 'Alpha Room', status: 'AVAILABLE' },
  { id: 'r2', name: 'Beta Room', status: 'OCCUPIED' },
  { id: 'r3', name: 'Gamma Room', status: 'MAINTENANCE' },
  { id: 'r4', name: 'Delta Room', status: 'AVAILABLE' },
];

export default function RoomList({ selectedDate }: Props) {
  return (
    <div className="space-y-4">
      {mockRooms.map((room) => {
        let borderColor = '';
        let textColor = '';
        let bgColor = '';
        let statusText = '';
        let opacity = 'opacity-100';

        switch (room.status) {
          case 'AVAILABLE':
            borderColor = 'border-green-600';
            textColor = 'text-green-700';
            statusText = 'AVAILABLE';
            bgColor = 'bg-white';
            break;
          case 'OCCUPIED':
            borderColor = 'border-red-600';
            textColor = 'text-red-600';
            statusText = 'OCCUPIED';
            bgColor = 'bg-white';
            break;
          case 'MAINTENANCE':
            borderColor = 'border-gray-400';
            textColor = 'text-gray-400';
            statusText = 'MAINTENANCE';
            bgColor = 'bg-gray-200';
            opacity = 'opacity-60';
            break;
        }

        return (
          <div
            key={room.id}
            className={`border-2 ${borderColor} rounded-full w-72 h-20 ${bgColor} flex flex-col items-center justify-center shadow-sm mx-auto ${opacity}`}
          >
            <p className={`font-bold text-base tracking-tight ${textColor}`}>{room.name}</p>
            <p className={`text-sm tracking-wide ${textColor}`}>{statusText}</p>
          </div>
        );
      })}
    </div>
  );
}
