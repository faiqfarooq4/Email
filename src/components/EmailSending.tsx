"use client";

import { useState } from "react";

export default function EmailSending() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending emails...");
    setTimeout(() => setStatus("Emails sent successfully!"), 2000); // Placeholder
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Emails</h3>
      <form onSubmit={handleSend}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            rows={4}
            placeholder="Write your email message here..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition"
        >
          Send Emails
        </button>
      </form>
      {status && <p className="mt-4 text-gray-600 text-center">{status}</p>}
    </div>
  );
}