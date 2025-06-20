'use client';

import { format } from 'date-fns';

type Props = {
  selectedDate: Date;
  user: {
    email: string;
    name: string;
  };
};

type Booking = {
  id: string;
  topic: string;
  roomName: string;
  creator: string;
  participants: string[];
  date: string; // yyyy-MM-dd
  start: string;
  end: string;
};

// Mock bookings
const mockBookings: Booking[] = [
  {
    id: 'b1',
    topic: 'Team Sync',
    roomName: 'Room A',
    creator: 'rin@example.com',
    participants: ['john@example.com'],
    date: '2025-06-20',
    start: '10:00',
    end: '11:00',
  },
  {
    id: 'b2',
    topic: 'Private Meeting',
    roomName: 'Room B',
    creator: 'someone@example.com',
    participants: ['manager@example.com'],
    date: '2025-06-20',
    start: '13:00',
    end: '14:00',
  },
  {
    id: 'b3',
    topic: 'Design Review',
    roomName: 'Room C',
    creator: 'rin@example.com',
    participants: ['boss@example.com'],
    date: '2025-06-21',
    start: '15:00',
    end: '16:00',
  },
];

export default function BookingList({ selectedDate, user }: Props) {
  const dateStr = format(selectedDate, 'yyyy-MM-dd');

  const bookingsToday = mockBookings.filter((b) => b.date === dateStr);

  return (
    <div className="w-full max-w-xl rounded-lg border p-4 shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Bookings for {format(selectedDate, 'PPP')}
      </h2>

      {bookingsToday.length === 0 ? (
        <p className="text-center text-gray-500">No bookings for this day.</p>
      ) : (
        <div className="space-y-4">
          {bookingsToday.map((booking) => {
            const canView =
              booking.creator === user.email ||
              booking.participants.includes(user.email);

            return (
              <div
                key={booking.id}
                className="border p-3 rounded bg-gray-50 hover:shadow transition"
              >
                {canView ? (
                  <>
                    <p className="font-bold">{booking.topic}</p>
                    <p className="text-sm text-gray-700">{booking.roomName}</p>
                    <div className="flex justify-between text-sm mt-1">
                      <span>{booking.creator}</span>
                      <span>
                        {booking.start} - {booking.end}
                      </span>
                    </div>
                  </>
                ) : (
                  <p className="italic text-gray-400">
                    Room is not available.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
