import Link from "next/link";
import React from "react";

function TeamComponent({ teamData }) {
  console.log("teamData", teamData);
  return (
    <>
      <div className="bg-white">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Meet Our Talented Team
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-600 text-lg">
                We're a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamData.map((item, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={item.image}
                      alt="Team member"
                      className="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <div className="flex space-x-4">
                        <Link
                          href={item.social.linkedin}
                          className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <a
                          href={item.social.twitter}
                          className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          href={item.social.email}
                          className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-indigo-600 font-medium">{item.role}</p>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 p-px rounded-lg">
                <a
                  href="#"
                  className="block bg-white hover:bg-gray-50 transition-colors duration-200 rounded-lg px-8 py-4 font-medium text-indigo-600"
                >
                  Join Our Team <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default TeamComponent;
