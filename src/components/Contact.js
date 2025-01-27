import Headline from "../shared/Headline";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({});
    setSuccess("");

    const errors = {};


    const nameRegex = /^[a-zA-Z]+$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName) {
      errors.firstName = "First name is required.";
    } else if (!nameRegex.test(firstName)) {
      errors.firstName = "First name can only contain letters.";
    }

    if (!lastName) {
      errors.lastName = "Last name is required.";
    } else if (!nameRegex.test(lastName)) {
      errors.lastName = "Last name can only contain letters.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format.";
    }

    if (!phone) {
      errors.phone = "Phone number is required.";
    }

    if (!message) {
      errors.message = "Message is required.";
    } else if (message.split(" ").length > 500) {
      errors.message = "Message exceeds the 500-word limit.";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    const templateParams = {
      from_email: email,
      to_name: "Dagmawi Ephrem", 
      firstName,
      lastName,
      phone,
      message,
    };

    emailjs
      .send(
        "service_oqxbeqa", 
        "template_4jtgh5s",
        templateParams,
        "YScyqLRJxdFCfROZQ"
      )
      .then(() => {
        setSuccess("Message sent successfully!");
        setEmail("");
        setMessage("");
        setFirstName("");
        setLastName("");
        setPhone("");
      })
      .catch((err) => {
        setError({ global: "Failed to send message. Please try again." });
        console.error(err);
      });
  };

  return (
    <div className="px-6 dark:bg-gray-950 bg-gray-100 h-auto pt-12 " id="contact">
      <Headline
        title={"CONTACT"}
        subtitle={
          "You can reach out to me by filling out the form below, and I’ll respond as soon as possible."
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
              {error.firstName && (
                <span className="text-red-700 text-sm">{error.firstName}</span>
              )}

              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                className="p-3 shadow-blue-600 border border-blue-500 rounded-lg w-full outline-blue-700 outline-1 dark:bg-gray-900 bg-gray-300"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {error.lastName && (
                <span className="text-red-700 text-sm">{error.lastName}</span>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 shadow-blue-600 border border-blue-500 rounded-lg w-full outline-blue-700 outline-1 dark:bg-gray-900 bg-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && (
                <span className="text-red-700 text-sm">{error.email}</span>
              )}

              <input
                type="tel"
                name="tel"
                placeholder="Phone Number"
                className="p-3 shadow-blue-600 border border-blue-500 rounded-lg w-full outline-blue-700 outline-1  dark:bg-gray-900 bg-gray-300"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {error.phone && (
                <span className="text-red-700 text-sm">{error.phone}</span>
              )}
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
              {error.message && (
                <span className="text-red-700 text-sm">{error.message}</span>
              )}

              <button className="w-5/6 px-6 py-3 flex items-center justify-center rounded-full relative overflow-hidden bg-blue-600 hover:bg-blue-700">
                Submit
              </button>

              {error.global && (
                <span className="text-red-700 text-center mb-3 text-base">
                  {error.global}
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
