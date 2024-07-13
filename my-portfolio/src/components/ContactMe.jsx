import React, { useState } from "react";
import GlowingWrapper from "./GlowingWrapper";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = "orangeliquid.mgmt";
    const domain = "gmail.com";
    const email = `${user}@${domain}`;
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(formData.message);

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const user = "orangeliquid.mgmt";
  const domain = "gmail.com";
  const email = `${user}@${domain}`;

  return (
    <GlowingWrapper className="max-w-md w-full p-1 rounded-lg opacity-90 from-violet-500 to-violet-600">
      <div className="max-w-md w-full p-6 rounded-lg orange-glass">
        <h1 className="text-2xl font-bold mb-4 text-violet-500 text-center">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Your Message"
            />
          </div>
          <div className="text-center">
            <GlowingWrapper className="inline-flex from-violet-500 to-violet-600">
              <button
                type="submit"
                className="justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white violet-glass hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Send Message
              </button>
            </GlowingWrapper>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-700">
          Don't use the Mail App?
          <p>
            Contact me: <a href={`mailto:${email}`} className="text-violet-500 underline">{email}</a>
          </p>
        </p>
        
      </div>
    </GlowingWrapper>
  );
};

export default ContactMe
