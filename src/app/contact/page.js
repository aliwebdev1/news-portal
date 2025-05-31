import React from "react";

const ContactPage = () => {
  return (
    <div>
      <main className="bg-white text-gray-900">
        {/* Banner Section */}
        <section className="bg-blue-600 text-white py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg">
            We’d love to hear from you – feedback, story tips, or partnership
            ideas.
          </p>
        </section>

        {/* Contact Form */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send Us a Message
          </h2>
          <form className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 rounded-md w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-3 rounded-md w-full"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded-md w-full"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Subscription Section */}
        <section className="bg-gray-100 py-16 px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
          <p className="mb-6 text-gray-700">
            Subscribe to our newsletter for the latest headlines and analysis.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
