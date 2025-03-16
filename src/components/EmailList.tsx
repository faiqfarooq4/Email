"use client";

import { useState } from "react";

export default function EmailList() {
  const [emails, setEmails] = useState<string[]>([]);

  // Simulating email fetching
  const fetchEmails = () => {
    setEmails(["example1@gmail.com", "example2@yahoo.com"]);
  };

  return (
    <div className="mt-6 max-w-lg mx-auto">
      <h3 className="text-lg font-semibold">Scraped Emails</h3>
      <button
        onClick={fetchEmails}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Load Emails
      </button>
      {emails.length > 0 ? (
        <ul className="bg-white p-4 rounded-lg shadow-md mt-2">
          {emails.map((email, index) => (
            <li key={index} className="py-1">
              {email}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 mt-2">No emails scraped yet.</p>
      )}
    </div>
  );
}
