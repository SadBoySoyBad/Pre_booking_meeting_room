'use client';
import Navbar from "@/components/Navbar";

type Room = {
  id: string;
  name: string;
  capacity: number;
  location: string;
  equipment: string[];
};

const mockRooms: Room[] = [
  {
    id: "r1",
    name: "Meeting Room A",
    capacity: 10,
    location: "2nd Floor, Building A",
    equipment: ["Projector", "Whiteboard", "Air Conditioner"],
  },
  {
    id: "r2",
    name: "Huddle Space B",
    capacity: 4,
    location: "1st Floor, Lobby",
    equipment: ["Monitor", "HDMI Cable"],
  },
  {
    id: "r3",
    name: "Conference Hall",
    capacity: 30,
    location: "3rd Floor, Building B",
    equipment: ["Stage", "Sound System", "Screen"],
  },
];

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black px-6 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Available Meeting Rooms</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRooms.map((room) => (
            <div key={room.id} className="border p-6 rounded shadow hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Capacity:</strong> {room.capacity} people
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Location:</strong> {room.location}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Equipment:</strong> {room.equipment.join(", ")}
              </p>
              <button
                className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                onClick={() => alert(`จองห้อง: ${room.name}`)}
              >
                Reserve
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
