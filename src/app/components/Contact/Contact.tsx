"use client";

import React, { ChangeEvent, FormEvent, useState, useTransition } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isPending, startTransition] = useTransition();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(res);
      if (res.status === 200) {
        toast.success("Email send successfully");
      } else {
        toast.error("Failed to send email");
      }
    });
  };

  return (
    <div id="contact" className="w-full">
      <div className="relative mx-auto py-10 px-8 lg:px-32">
        <h4 className="text-center text-lg mb-2 font-Ovo text-rose-500">
          Contact Us
        </h4>
        <p className="text-center text-lg font-Ovo text-wrap">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <div className="flex items-center justify-center my-10">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl shadow-lg border rounded-lg p-8 space-y-6 bg-white"
          >
            {/* Name Field */}
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="font-semibold text-lg mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="Enter your full name"
                className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-rose-400 outline-none transition-all duration-300"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="font-semibold text-lg mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="example@email.com"
                className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-rose-400 outline-none transition-all duration-300"
              />
            </div>

            {/* Subject Field */}
            <div className="flex flex-col w-full">
              <label htmlFor="subject" className="font-semibold text-lg mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                onChange={handleChange}
                placeholder="Enter the subject"
                className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-rose-400 outline-none transition-all duration-300"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col w-full">
              <label htmlFor="message" className="font-semibold text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-rose-400 outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-rose-600 text-white font-semibold p-3 rounded-lg shadow-md hover:bg-rose-500 transition-all duration-300"
            >
              {isPending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
