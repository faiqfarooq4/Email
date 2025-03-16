"use client";

import { useState } from "react";
import { ScraperFormData } from "../../types/index"; // Adjusted path

const COUNTRIES = {
  USA: ["California", "Texas", "New York"],
  UK: ["London", "Manchester"],
  // Add more from your JSON data later
};
const PLATFORMS = ["LinkedIn", "Facebook", "Instagram", "Twitter", "Yelp"];
const EMAIL_FORMATS = ["@gmail.com", "@yahoo.com", "@outlook.com", "@company.com"];

export default function ScraperForm() {
  const [formData, setFormData] = useState<ScraperFormData>({
    country: "",
    state: "",
    platform: "",
    emailFormat: "",
    designation: "",
    keyword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // API call will be added later
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mt-6"
    >
      <div className="mb-4">
        <label className="block text-gray-700">Select Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select a country</option>
          {Object.keys(COUNTRIES).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Select State</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          disabled={!formData.country}
        >
          <option value="">Select a state</option>
          {formData.country &&
            COUNTRIES[formData.country as keyof typeof COUNTRIES]?.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Select Platform</label>
        <select
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select a platform</option>
          {PLATFORMS.map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Select Email Format</label>
        <select
          name="emailFormat"
          value={formData.emailFormat}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select an email format</option>
          {EMAIL_FORMATS.map((format) => (
            <option key={format} value={format}>
              {format}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Enter Designation</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Optional Keyword</label>
        <input
          type="text"
          name="keyword"
          value={formData.keyword}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Start Scraping
      </button>
    </form>
  );
}