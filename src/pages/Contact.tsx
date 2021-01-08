import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Contact = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col h-1/3 md:flex-row w-full p-24 h-5/6 bg-pink-900" />
      <div className="flex flex-col h-1/3 md:flex-row p-12 bg-blue-500 text-white">
        <div className="text-lg text-white font-extrabold pb-8 md:w-1/5 md:text-left md:p-12 md:ml-8 sm:w-full sm:text-center sm:p-2 sm:ml-0">
          Contacto
        </div>
        <div className="flex flex-col md:flex-row md:w-4/5 justify-around">
          <div className="text-xl py-4 sm:text-center sm:w-full md:p-12 md:text-2xl lg:p-12 lg:text-2xl">
            {
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="mr-4 text-pink-900"
              />
            }
            01159140114
          </div>
          <div className="text-xl py-4 sm:text-center sm:w-full md:p-12 md:text-2xl lg:p-12 lg:text-2xl">
            <a href={"mailto:'taniadstrigo@gmail.com'"}>
              {
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-4 text-pink-900"
                />
              }
              taniadstrigo@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full h-1/3 p-24 bg-green" />
    </>
  );
};
