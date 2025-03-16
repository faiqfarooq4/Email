"use client";

import { useState } from "react";

export default function StatusDisplay() {
  const [status, setStatus] = useState<string>("");

  // For now, this is a placeholder. We'll connect it later.
  return (
    <div className="mt-6 text-center">
      <p className="text-gray-700">Status: {status || "Idle"}</p>
    </div>
  );
}