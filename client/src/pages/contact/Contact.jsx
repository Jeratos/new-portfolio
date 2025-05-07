import React, { useState } from "react";
import contactImage from "../../images/contact/contact.jpg";

export default function Contact() {
  let API = import.meta.env.VITE_URI_API

let [contactData, setContactData]= useState({
  firstName:"",
  lastName:"",
  email:"",
  phone:"",
  message:""
})

let handleChange = (e)=>{
             let {name,value}= e.target
           setContactData({
            ...contactData,
            [name]:value
           })
}

let  submitChange= async(e)=>{
      e.preventDefault();
try {
   let response= await fetch(`${API}/api/auth/contact`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body: JSON.stringify(contactData)
   }
  
)
if(response.ok){
  setContactData({  firstName:"",
    lastName:"",
    email:"",
    phone:"",
    message:""})
}

} catch (error) {
  
}

}

  return (
    <main className="bg-[#0f0f0f] text-white py-10 px-4 md:px-10 min-h-screen font-mono mt-8">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Contact Info Section */}
        <div className="lg:w-1/2 w-full relative rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
          <img
            src={contactImage}
            alt="contact"
            className="w-full h-[25rem] md:h-[40rem] object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-[#00000092] flex flex-col justify-center items-center text-center p-6 rounded-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-10">Contact Us:</h1>

            <div className="space-y-10 text-left">
              <div>
                <h2 className="text-green-400 font-bold text-2xl mb-2">Let’s Talk:</h2>
                <p className="text-gray-300">+91 7798598846</p>
              </div>
              <div>
                <h2 className="text-green-400 font-bold text-2xl mb-2">Email:</h2>
                <p className="text-gray-300">ayushchouhan417@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-[#1a1a1a] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 sm:p-10">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-10">
              Send Us A Message
            </h1>
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="space-y-2">
                <label className="block text-gray-300">
                  Tell us your name <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="firstName"
                    value={contactData.firstName}
                    placeholder="First name"
                    required
                    className="flex-1 p-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-md"
                  />
                  <input
                    onChange={handleChange}
                    type="text"
                    name="lastName"
                    value={contactData.lastName}
                    placeholder="Last name"
                    required
                    className="flex-1 p-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-md"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 mb-2">
                  Enter your email <span className="text-red-500">*</span>
                </label>
                <input
                    onChange={handleChange}
                  type="email"
                  name="email"
                  value={contactData.email}
                  placeholder="example@email.com"
                  required
                  className="w-full p-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-md"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-300 mb-2">
                  Enter phone number <span className="text-red-500">*</span>
                </label>
                <input
                    onChange={handleChange}
                  type="tel"
                  name="phone"
                  value={contactData.phone}

                  placeholder="Eg. +91 0000000000"
                  required
                  className="w-full p-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-md"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-300 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    onChange={handleChange}
                  name="message"
                  value={contactData.message}
                  rows="5"
                  placeholder="Write us a message"
                  required
                  className="w-full p-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-md"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  onClick={submitChange}
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 transition-colors px-6 py-2 rounded-md text-white font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
