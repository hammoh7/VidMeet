"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { MessageCircle, Mic, ScreenShareIcon, Users, Video } from "lucide-react";

interface Participant {
  name: string;
  isMicOn: boolean;
  isVideoOn: boolean;
}

export const Room = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roomName = searchParams.get("roomName") || "";
  const roomId = searchParams.get("roomId") || "";
  const [message, setMessage] = useState("");
  const [showParticipants, setShowParticipants] = useState(true);
  const [participants, setParticipants] = useState<Participant[]>([
    { name: "John", isMicOn: false, isVideoOn: false },
    { name: "Janet", isMicOn: false, isVideoOn: false },
  ]);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);


  const handleSendMessage = () => {
    // Handle sending the message
    setMessage("");
  };

  const toggleView = (view: "participants" | "chat") => {
    setShowParticipants(view === "participants");
  };

  const toggleMic = () => {
    setIsMicOn((prevState) => !prevState);
  };

  const toggleVideo = () => {
    setIsVideoOn((prevState) => !prevState);
  };

  const toggleScreenShare = () => {
    setIsScreenSharing((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white py-4 px-8 shadow">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">
            Room: {roomName}
            <br />
            RoomID: {roomId}
          </h3>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/lobby")}
          >
            Leave Room
          </button>
        </div>
      </header>

      <main className="flex-1 flex">
        <div className="w-3/4 p-8">
          <div className="bg-gray-300 rounded-lg h-full flex items-center justify-center">
            <span className="text-gray-500 font-semibold">
              Video or Screen Sharing Area
            </span>
          </div>
        </div>
        <div className="w-1/4 p-8 flex flex-col">
          <div className="flex-1 bg-white rounded-lg shadow p-4">
            {showParticipants ? (
            <div className="h-full">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">Participants</h2>
              <ul className="h-full overflow-y-auto">
                <li className="py-2 px-4 rounded-md bg-gray-200 text-gray-800 font-semibold">
                  {roomName}
                </li>
                {participants.map((participant, index) => (
                  <li
                    key={index}
                    className="py-2 px-4 rounded-md flex items-center justify-between transition-colors duration-300 hover:bg-gray-100"
                  >
                    <span>{participant.name}</span>
                    <div className="flex items-center space-x-2">
                      <Mic
                        className={`text-gray-500 ${participant.isMicOn ? "text-green-500" : ""}`}
                      />
                      <Video
                        className={`text-gray-500 ${participant.isVideoOn ? "text-green-500" : ""}`}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
              <div className="h-full flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  <h2 className="text-lg font-semibold mb-2">Chat</h2>
                  <p>Hello</p>
                  <p>How are you?</p>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-2 w-full"
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white py-4 px-8 shadow flex justify-center">
        <div className="flex space-x-4">
          <button
            className={`bg-red-500 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded ${
              isMicOn ? "bg-green-600 text-white hover:bg-green-400" : ""
            }`}
            onClick={toggleMic}
          >
            <Mic />
          </button>
          <button
            className={`bg-red-500 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded ${
              isVideoOn ? "bg-green-600 text-white hover:bg-green-400" : ""
            }`}
            onClick={toggleVideo}
          >
            <Video />
          </button>
          <button
            className={`bg-red-500 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded ${
              isScreenSharing ? "bg-green-600 text-white hover:bg-green-400" : ""
            }`}
            onClick={toggleScreenShare}
          >
            <ScreenShareIcon />
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => toggleView("participants")}
          >
            <Users />
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={() => toggleView("chat")}
          >
            <MessageCircle />
          </button>
        </div>
      </footer>
      
    </div>
  );
};
