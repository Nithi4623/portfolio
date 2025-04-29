// components/Contact.js
export default function Contact() {
    return (
      <section className="py-20 bg-blue-500 text-white">
        <h2 className="text-center text-3xl font-semibold mb-10">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 mb-4 rounded-lg bg-gray-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 rounded-lg bg-gray-200"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 mb-4 rounded-lg bg-gray-200"
          ></textarea>
          <button className="w-full bg-blue-700 p-4 rounded-lg text-white">Send Message</button>
        </form>
      </section>
    );
  }
  