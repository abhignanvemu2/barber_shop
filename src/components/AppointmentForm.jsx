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
    // You can integrate with EmailJS, Formspree, or your backend
  };

  return (
    <div className="bg-black text-white px-8 py-16 md:flex md:justify-between md:items-start space-y-8 md:space-y-0">
      {/* Left Side */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-lg font-semibold mb-4 pr-24">
          Ready for a fresh look? Book your appointment today or contact us for any questions.
        </h2>
        <div className="flex text-center pb-2">
          <MapPin className="text-primary text-center mt-1 mr-2" />
        <p className="mb-2 font-medium text-gray-500">518 Acme St unit 101, Denton, TX 76205, United States</p>
        </div>
        <div className="flex text-center">
          <Phone className="text-primary text-center mt-1 mr-2" />
        <p className=" text-lg">+1 940-808-1569</p>

        </div>
      </div>

      {/* Right Side Form */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 flex flex-col space-y-4"
      >
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            required
            className="flex-1 p-3 bg-[#1e1e1e] text-white rounded"
          />
          <input
            type="number"
            name="number"
            placeholder="000-000-0000"
            value={form.email}
            onChange={handleChange}
            required
            className="flex-1 p-3 bg-[#1e1e1e] text-white rounded"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message..."
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          className="p-3 bg-[#1e1e1e] text-white rounded"
        />
        <button
          type="submit"
          className="bg-primary text-black font-medium py-3 rounded hover:opacity-90 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
