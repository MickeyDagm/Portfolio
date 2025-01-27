import Headline from "../shared/Headline";
import { useState } from "react";
import axios from "axios";
import { FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!firstName || !lastName) {
      setError("You didn't provide your name.");
      return;
    }
    if (!email) {
      setError("You didn't provide an email.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return;
    }
    if (!phone) {
      setError("You didn't provide a phone number.");
      return;
    }
    if (!message) {
      setError("You didn't provide a message.");
      return;
    }
    if (message.split(" ").length > 500) {
      setError("Message exceeds the 500-word limit.");
      return;
    }

    axios
      .post("", {
        email,
        text: message,
        firstName,
        lastName,
        phone,
      })
      .then(() => {
        setSuccess("Message sent successfully!");
        setEmail("");
        setMessage("");
        setFirstName("");
        setLastName("");
        setPhone("");
      })
      .catch((err) => {
        setError("Failed to send message. Please try again.");
        console.error(err);
      });
  };

  return (
    <div className="px-6 dark:bg-gray-950 bg-gray-100 h-auto pt-8 " id="contact">
      <Headline
        title={"CONTACT"}
        subtitle={
          "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        }
      />

      <div className="dark:bg-gray-950 bg-gray-100 px-4 py-4 dark:text-white mx-auto md:w-[50rem]">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 md:gap-5 sm:flex-nowrap flex-wrap mb-5">
            <div className="flex gap-4 items-center flex-col mb-2 w-full">
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                className="p-3 shadow-blue-600 border border-blue-500 rounded-lg w-full outline-blue-700 outline-1  dark:bg-gray-900 bg-gray-300"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                className="p-3 shadow-blue-600 border border-blue-500 rounded-lg w-full outline-blue-700 outline-1 dark:bg-gray-900 bg-gray-300"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 shadow-blue-600 border border-blue-500 rounded-lg w-full outline-blue-700 outline-1 dark:bg-gray-900 bg-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                name="tel"
                placeholder="Phone Number"
                className="p-3 shadow-blue-600 border border-blue-500 rounded-lg w-full outline-blue-700 outline-1  dark:bg-gray-900 bg-gray-300"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="flex gap-4 flex-col items-center mb-2 w-full">
              <textarea
                name="message"
                rows="7"
                placeholder="Enter Your Message (max 500 words)"
                className="p-3 shadow-blue-600 border border-blue-500 rounded-lg w-full outline-blue-700 outline-1  dark:bg-gray-900 bg-gray-300"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button className="w-5/6 px-6 py-3 flex items-center justify-center rounded-full relative overflow-hidden bg-blue-600 hover:bg-blue-700">
                Submit
              </button>
              {error && (
                <span className="text-red-700 text-center mb-3 text-base">
                  {error}
                </span>
              )}
              {success && (
                <span className="text-green-700 text-center mb-3 text-base">
                  {success}
                </span>
              )}
            </div>
          </div>
        </form>

        <div className="flex justify-center gap-5 ">

          <a
            href="https://www.instagram.com/mickey_dagm/profilecard/?igsh=MW4xeTRwM3YxdWtzMw=="
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-11 h-11 flex items-center justify-center rounded-full relative overflow-hidden dark:bg-gray-950 bg-gray-100 shadow-md shadow-blue-600 group transition-all duration-500 ">
              <FaInstagram className="dark:text-white z-10 w-7 h-7" />
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
          </a>

          <a
            href="https://wa.me/qr/VPX75GG4PGCCP1"
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-11 h-11 flex items-center justify-center rounded-full relative overflow-hidden dark:bg-gray-950 bg-gray-100  shadow-md shadow-blue-600 group transition-all duration-500 ">
              <FaWhatsapp className="dark:text-white z-10 w-7 h-7" />
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-green-400 z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
          </a>

          <a href="https://t.me/dagi_0056" target="_blank" rel="noreferrer">
            <button className="w-11 h-11 flex items-center justify-center rounded-full relative overflow-hidden dark:bg-gray-950 bg-gray-100 shadow-md shadow-blue-600 group transition-all duration-500 ">
              <FaTelegram className="dark:-white z-10 w-7 h-7" />
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-400 z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/dagmawi-ephrem-559a7b342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-11 h-11 flex items-center justify-center rounded-full relative overflow-hidden dark:bg-gray-950 bg-gray-100 shadow-md shadow-blue-600 group transition-all duration-500 ">
              <FaLinkedin className="dark:text-white z-10 w-7 h-7" />
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"></div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
