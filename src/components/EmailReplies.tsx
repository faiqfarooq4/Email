"use client";

import { useState } from "react";

export default function EmailReplies() {
  const [replies, setReplies] = useState<string[]>([]);

  // Placeholder for replies
  const mockReplies = [
    "Thanks for reaching out! I’m interested.",
    "Can you provide more details?",
  ];

  const handleFetchReplies = () => {
    setReplies(mockReplies);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Email Replies</h3>
      <button
        onClick={handleFetchReplies}
        className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition mb-4"
      >
        Fetch Replies
      </button>
      {replies.length > 0 ? (
        <ul className="space-y-2">
          {replies.map((reply, index) => (
            <li key={index} className="text-gray-700 border-b pb-2">
              {reply}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No replies fetched yet.</p>
      )}
    </div>
  );
}