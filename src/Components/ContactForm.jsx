import React from "react";

const ContactForm = () => {
  return (
    <div className="border border-gray-500 rounded-2xl p-6 mx-auto">
      <form action="" className="flex flex-col md:gap-6 gap-3">
        <div className="flex flex-col md:flex-row md:gap-6 gap-3">
          <label htmlFor="name" className="font-medium w-full">
            Name*
            <br />
            <input
              type="text"
              id="name"
              required
              className="rounded-lg mt-2 md:p-3 p-2 w-full font-normal text-[var(--textsecondary)] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label htmlFor="email" className="font-medium w-full">
            Email*
            <br />
            <input
              type="email"
              id="email"
              required
              className="rounded-lg mt-2 md:p-3 p-2 w-full font-normal text-[var(--textsecondary)] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>
        <label htmlFor="subject" className="font-medium w-full">
          Subject*
          <br />
          <input
            type="text"
            id="subject"
            required
            className="rounded-lg mt-2 md:p-3 p-2 w-full font-normal text-[var(--textsecondary)] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
        <label htmlFor="message" className="font-medium w-full">
          Message*
          <br />
          <textarea
            name="message"
            id="message"
            required
            className="md:min-h-40 min-h-20 rounded-lg mt-1.5 md:p-3 p-2 w-full font-normal text-[var(--textsecondary)] focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold md:py-3 py-2.5 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 self-start"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
