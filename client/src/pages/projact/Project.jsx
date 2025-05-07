import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Project() {
  let [projectData, setProjectData] = useState([]);
let API = import.meta.env.VITE_URI_API

  let getProject = async () => {
    try {
      let responce = await fetch(`${API}/api/auth/project`, {
        method: "GET",
      });

      if (responce.ok) {
        let data = await responce.json();
        setProjectData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <section className="bg-[#0f0f0f] text-white mt-10 py-12 px-4 sm:px-8 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 border-b border-gray-700 inline-block pb-2">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectData.map((project, index) => (
            <div
              key={project._id}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-green-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Take A Look
                </a>
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
