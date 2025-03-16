"use client";

import { useState } from "react";

export default function EmailList() {
  const [emails, setEmails] = useState<string[]>([]);

  // Placeholder for now
  return (
    <div className="mt-6 max-w-lg mx-auto">
      <h3 className="text-lg font-semibold">Scraped Emails</h3>
      {emails.length > 0 ? (
        <ul className="bg-white p-4 rounded-lg shadow-md">
          {emails.map((email, index) => (
            <li key={index} className="py-1">
              {email}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No emails scraped yet.</p>
      )}
    </div>
  );
}