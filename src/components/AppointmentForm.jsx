import { MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    // Integrate with EmailJS, Formspree, or your backend
  };

  return (
    <div className="dark:bg-black text-white px-6 py-12 md:py-16 md:px-16 flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-8">
      {/* Left Side */}
      <div className="md:w-1/2">
        <h2 className="text-xl font-semibold mb-4 text-left text-black dark:text-white">
          Ready for a fresh look? Book your appointment today or contact us for any questions.
        </h2>
        <div className="flex items-start mb-3">
          <MapPin className="text-primary mr-3 mt-1" />
          <p className="text-gray-400">
            518 Acme St unit 101, Denton, TX 76205, United States
          </p>
        </div>
        <div className="flex items-center text-black dark:text-white">
          <Phone className="text-primary mr-3" />
          <p className="text-lg font-medium">+1 940-808-1569</p>
        </div>
      </div>

      {/* Right Side Form */}
      <form onSubmit={handleSubmit} className="md:w-1/2 w-full flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            required
            className="flex-1 p-3 dark:bg-[#1e1e1e] bg-gray-300  rounded"
          />
          <input
            type="tel"
            name="number"
            placeholder="000-000-0000"
            value={form.number}
            onChange={handleChange}
            required
            className="flex-1 p-3 dark:bg-[#1e1e1e] bg-gray-300 rounded"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message..."
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          className="p-3 dark:bg-[#1e1e1e] bg-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-primary text-white dark:text-black  font-semibold py-3 rounded hover:opacity-90 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
