import React, { useState } from "react";
import principalImg from "../../asset/principal.webp";
import directorImg from "../../asset/director.jpeg";

const PrincipalDirectorMessage = () => {
  const [activeTab, setActiveTab] = useState("principal");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Governing Council Message</h2>
      <div className="flex justify-center items-center mb-10">
        <button
          className={`mr-4 px-4 py-2 text-lg font-bold rounded-full ${activeTab === "principal"
              ? "bg-blue-500 text-white shadow-outline-blue"
              : "text-gray-500"
            }`}
          onClick={() => handleTabClick("principal")}
        >
          Principal
        </button>
        <button
          className={`px-4 py-2 text-lg font-bold rounded-full ${activeTab === "director"
              ? "bg-blue-500 text-white shadow-outline-blue"
              : "text-gray-500"
            }`}
          onClick={() => handleTabClick("director")}
        >
          Director
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <img
            src={activeTab === "principal" ? principalImg : directorImg}
            alt={activeTab === "principal" ? "Principal" : "Director"}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-2/3 px-4">
          <p className="mb-4">
            {activeTab === "principal"
              ? "St. Anthony’s, the next generation CBSE School, under the umbrella of the Jeppiaar Institute of Technology kunnam, sunguvarchatram, sriperumbudur came into being on 01st June 2021, with the clear vision of providing educational experience with a difference and grooming young children to be responsible leaders and sensitive citizens of the world.Here the children are provided modern and concise learning and state-of-the-art facilities. Our school aims at moulding the next generation with education of international standards so that they may be ready for the competitive world. The main goal of St. Anthony’s School is overall development of the child, while at the same time training them to be competent and compassionate leaders."
              : "As the Director of St. Anthony Schools, I am honored to welcome you to our community. Our schools provide an outstanding education to students of all ages, nurturing them to become compassionate, critical thinkers and responsible global citizens. "}
          </p>
          <p>
            {activeTab === "principal"
              ? "  The faculty uses various strategies, diverse techniques and guidelines to encourage each student to be the best. The children are encouraged to express themselves without fear and to evolve to their fullest potential."
              : "At St. Anthony Schools, we prioritize academic excellence while also emphasizing the importance of character development and community involvement. We believe that a well-rounded education goes beyond the classroom, and we encourage our students to pursue their passions, explore new interests, and engage in service to others."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDirectorMessage;
