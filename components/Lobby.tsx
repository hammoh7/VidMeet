"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Lobby = () => {
  const router = useRouter();
  const [roomName, setRoomName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const startMeeting = () => {
    if (!roomName || !roomId) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }

    // Redirect to the actual video meeting page (Room.tsx) after processing in Lobby.tsx
    router.push(
      `/room?roomName=${encodeURIComponent(roomName)}&roomId=${encodeURIComponent(roomId)}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-8">
          Join the Meeting
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label
              htmlFor="roomName"
              className="block text-gray-700 font-bold mb-2"
            >
              Room Name
            </label>
            <input
              type="text"
              id="roomName"
              placeholder="Enter room name"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="roomId"
              className="block text-gray-700 font-bold mb-2"
            >
              Room ID
            </label>
            <input
              type="text"
              id="roomId"
              placeholder="Enter room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={startMeeting}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Start Meeting
            </button>
          </div>
        </form>
        {showAlert && (
          <div className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md mt-6" role="alert">
            <div className="flex">
              <div className="py-1">
                <svg className="fill-current h-6 w-6 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">Please enter both Room Name and Room ID</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};