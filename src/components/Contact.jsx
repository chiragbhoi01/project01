import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-100 p-6 md:p-10">
      <div className="max-w-screen-xl mx-auto">
        <header className="text-center mb-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-700 mt-2">
            We would love to hear from you! Whether you have a question about our products, need assistance, or just want to say hello, feel free to reach out.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Contact Form</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> <a href="mailto:info@missgypsy.com" className="text-violet-600">info@missgypsy.com</a>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-violet-600">+1 (234) 567-890</a>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Follow Us:</strong>
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-violet-600">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-violet-600">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-violet-600">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;