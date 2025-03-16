"use client";

import { useState } from "react";

export default function StatusDisplay() {
  const [status, setStatus] = useState<string>("Idle");

  // Simulate a status update
  const updateStatus = () => {
    setStatus("Fetching data...");
    setTimeout(() => setStatus("Completed"), 2000);
  };

  return (
    <div className="mt-6 text-center">
      <p className="text-gray-700">Status: {status}</p>
      <button
        onClick={updateStatus}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
      >
        Update Status
      </button>
    </div>
  );
}
