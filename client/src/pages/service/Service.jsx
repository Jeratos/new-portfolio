import React from "react";
import { NavLink} from "react-router-dom";

// Import your images
import webDevImg from "../../images/service/web-development.png";
import frontendImg from "../../images/service/front-end.jpg";
import backendImg from "../../images/service/back-end.webp";
import portfolioImg from "../../images/service/portfolio.webp";
import financeImg from "../../images/service/finance.jpg";
import realEstateImg from "../../images/service/realEstate.jpg";
import mernImg from "../../images/service/mernStack.png";

const services = [
  { title: "Web Development", img: webDevImg },
  { title: "Front-End Development", img: frontendImg },
  { title: "Back-End Development", img: backendImg },
  { title: "Portfolio Template", img: portfolioImg },
  { title: "Finance Web App", img: financeImg },
  { title: "Real Estate Website", img: realEstateImg },
  { title: "MERN Stack Development", img: mernImg },
];

export default function Services() {

  return (
    <section className="bg-[#0f0f0f] text-white mt-10 py-12 px-4 sm:px-8 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 border-b border-gray-700 inline-block pb-2">
          My Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
             className="relative bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 group"
            >
              {/* Image Placeholder */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"

                />
              </div>

              {/* Service Content */}
              <div className="p-6 text-left">

              <h3 className="text-2xl font-semibold text-green-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">
                I offer high-quality {service.title.toLowerCase()} solutions that fit modern standards and business needs.
              </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <NavLink
                to="/Contact"
                className="relative overflow-hidden rounded-[10px] px-4 py-2 font-bold text-white bg-gradient-to-r from-[#c3c3c3] to-[#4a4a4a] group w-full sm:w-auto text-center"
              >
                <span className="relative rounded-[10px] z-10">Contact Us</span>
                <span className="absolute rounded-[10px] inset-0 bg-gradient-to-r from-[#4a4a4a] to-[#c3c3c3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </NavLink>
      </div>
    </section>
  );
}
