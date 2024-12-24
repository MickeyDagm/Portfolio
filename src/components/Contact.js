import Headline from "../shared/Headline";
import { useState } from "react";
import axios from 'axios'

const Contact = () => {
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [name,setName] = useState('')
  const [error,setError] = useState("")

  const handlesumbit = (e) => {
    setError("")
    e.preventDefault()
    if(!message)
    {
      setError("You didn't put a message to send.")
      return
    }
    if(!name)
    {
      setError("You didn't put your name.")
      return
    }

    axios.post("https://portfolio-6cn2.onrender.com",{
      email:email,
      text: message,
      firstName: name
    })
  } 
  return (
    <div className="px-6 bg-gray-950 h-auto py-8" id="contact">
      <Headline
        title={"CONTACT"}
        subtitle={
          "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        }
      />
      <div className="">
        <div className="bg-gray-950  px-4 py-4 text-white mx-auto md:w-[50rem]">
            <form onSubmit={(e)=>handlesumbit(e)}>
              <div className="flex gap-4 md:gap-5 sm:flex-nowrap flex-wrap">
                <div className="flex gap-4 items-center flex-col mb-2 w-full">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First Name"
                    className="p-3 shadow-blue-600 shadow-md rounded-lg w-full"
                    onChange={(e)=>setName(e.target.value)}
                  /> 
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Last Name"
                    className="p-3 shadow-blue-600 shadow-md rounded-lg w-full"
                    onChange={(e)=>setName(e.target.value)}
                  />  
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="p-3 shadow-blue-600 shadow-md rounded-lg w-full"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Phone Number"
                    className="p-3 shadow-blue-600 shadow-md rounded-lg w-full"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
              
                <div className="flex gap-4 flex-col items-center mb-2 w-full">
                  <textarea
                    name="message"
                    id="message"
                    rows="7"
                    placeholder="Enter Your Message"
                    className="p-3 shadow-blue-600 shadow-md rounded-lg w-full"
                    onChange={(e)=>setMessage(e.target.value)}
                  ></textarea>
                  <button className="px-6 py-3 flex items-center justify-center rounded-full relative overflow-hidden bg-blue-600 hover:bg-blue-700">
                    Submit
                  </button>  
                  {
                    error && <h1 className="text-red-800 text-center mb-3 text-[25px] font-bold">{error}</h1>
                  }
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        
  );
};

export default Contact;