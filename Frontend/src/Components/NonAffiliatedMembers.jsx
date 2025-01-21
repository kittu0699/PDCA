import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Logo from "../images/club_logo.png";
import Bg from "./../images/div5.jpg"
import Back from "./../images/bi.jpg"

const NonAffliatedMembers = () => {
  const [search, setSearch] = useState("");
  const clubs = [
    {
      name: "Amar Cricket Club",
      // location: "Amar ",
      president: "Ajit Kumar Sinha",
      secretary: "Abhimanyu Prasad Ray",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Adalatganj Cricket Club",
      // location: "Adalatganj",
      president: "Shaista Parveen",
      secretary: "Mahfuz Qamar",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const handleInputChange = (e) => setSearch(e.target.value);

  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <div className="bg-blue-50"
          style={{
            backgroundImage: `url(${Back})`,
            backgroundSize: "120% 100%",
            backgroundRepeat: "no-repeat",
            position: "relative"
          }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"></div> {/* Blur overlay */}
          
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8 relative z-10">
            <img
              src={Logo}
              alt="logo"
              className="w-32 h-32 md:w-60 md:h-60"
            />
            <h1 className="mt-4 md:mt-32 text-2xl md:text-4xl font-bold font-serif tracking-wide text-black font-outline-3">
            NON-AFFILIATED CLUBS
            </h1>
            <div className="flex justify-center items-center mt-6 pt-28 md:mt-0 md:ml-auto mr-8">
              <input
                type="text"
                aria-label="Search for a club"
                placeholder="Search Club"
                value={search}
                onChange={handleInputChange}
                className="w-40 md:w-60 h-10 p-2 border-2 border-black placeholder-gray-600 text-sm md:text-lg font-serif rounded-tl-md rounded-bl-md border-r-0 outline-none"
              />
              <div className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-lg flex justify-center items-center text-white rounded-tr-md rounded-br-md border-2 border-l-0 border-blue-500">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-12 mr-8 relative z-10">
            {filteredClubs.map((club, index) => (
              <a
                key={index}
                href={club.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-4 transform transition-transform hover:scale-105 no-underline"
                style={{
                  backgroundImage: `url(${Bg})`,
                  backgroundSize: "120% 100%",
                  backgroundRepeat: "no-repeat",
                  
                }}
              >
              
                  <div className="w-fit h-auto mb-4 p-2 text-center font-sans rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base cursor-pointer">
                    {club.location}
                  </div>
                <h2 className="font-sans font-extralight md:text-xl text-red-600 ">
                  <b className="font-bold">{club.name}</b>
                </h2>
                <p className="mt-2 text-sm md:text-base text-white ">
                  <b>President :</b> {club.president || "Not available"}
                </p>
                <p className="mt-2 text-sm md:text-base text-white">
                  <b>Secretary :</b> {club.secretary || "Not available"}
                </p>
              </a>
            ))}
            {filteredClubs.length === 0 && (
              <p className="font-serif text-lg text-red-500 text-center col-span-full">
                No clubs match your search.
              </p>
            )}
          </div>
        </div>
      );
    };
export default NonAffliatedMembers;
