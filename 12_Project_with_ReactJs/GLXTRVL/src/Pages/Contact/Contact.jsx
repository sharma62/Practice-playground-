import React from "react";
import NavBar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      <form class="max-w-md mx-auto p-6 bg-black shadow-lg rounded-xl space-y-4 my-10 ">
      <h1 className="text-5xl text-center py-10">Contact Us</h1>
 
        {/* <!-- Name --> */}
        <div>
          <label class="block text-gray-600 mb-1" for="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
            placeholder="Your name"
          />
        </div>

        {/* <!-- Email --> */}
        <div>
          <label class="block text-gray-600 mb-1" for="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        {/* <!-- Message --> */}
        <div>
          <label class="block text-gray-600 mb-1" for="message">
            Message
          </label>
          <textarea
            id="message"
            class="w-full border border-gray-300 p-2 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
          ></textarea>
        </div>

        {/* <!-- Submit Button --> */}
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Submit
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default Contact;
