import React, { useState } from "react";
import client from "../assets/client.jpg";
import person from "../assets/person.jpg";
import p1 from "../assets/p-1.jpg";
import p2 from "../assets/p-2.jpg";
import p3 from "../assets/p-3.jpg";

import { RiDatabase2Fill } from "react-icons/ri";
import { RiBriefcase4Fill } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { CiLink } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

const CardItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleLinkClick = () => {
    setIsModalOpen(true);
  };
  const handleFileUpload = (event) => {
    const files = event.target.files;

    setUploadedFiles([...uploadedFiles, ...files]);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-[350px] rounded bg-white h-28 mx-2">
      <div className="flex justify-between items-center px-2 py-2">
        <div className="flex items-center gap-1">
          <img src={client} alt="client" className="w-6 h-6 rounded-full" />
          <p className="text-xs font-semibold">Client Name</p>
        </div>
        <div className="flex items-center gap-1">
          <img src={person} alt="client" className="w-6 h-6 rounded-full" />
          <p className="text-xs font-semibold">nahid Priom</p>
        </div>
      </div>
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center gap-1">
          <RiDatabase2Fill size={13} />
          <p className="text-xs text-gray-500">
            Lorem ipsum dolor sit amet curn...
          </p>
        </div>
        <div className="flex">
          <div className="w-10  h-6 bg-gray-200 rounded flex justify-center items-center text-base font-semibold">
            <RiBriefcase4Fill size={13} />
            <p className="text-xs ml-1">1/2</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 px-2 mt-2 py-1">
        <img src={p1} alt="client" className="w-5 h-5 rounded-full" />
        <img src={p2} alt="client" className="w-5 h-5 rounded-full" />
        <img src={p3} alt="client" className="w-5 h-5 rounded-full" />
        <div className="w-6  h-6 bg-gray-100 rounded-full flex justify-center items-center text-base font-semibold">
          <p className="text-[10px] font-semibold text-gray-500">12+</p>
        </div>
        <div className="flex gap-1 items-center">
          <TiMessages size={11} className="font-bold" />
          <p className="text-[10px] font-semibold text-gray-500">15</p>
        </div>
        <div className="flex gap-1 items-center">
          <CiLink
            size={11}
            className="font-bold cursor-pointer"
            onClick={handleLinkClick}
          />
          <p className="text-[10px] font-semibold text-gray-500">25</p>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            <div className="bg-white p-6 rounded-md z-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Upload Attachments</h2>
                <div className="w-6 ml-4 rounded-full h-6 flex justify-center items-center bg-red-500">
                  <button
                    onClick={handleCloseModal}
                    className="text-white mb-1"
                  >
                    &times;
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="fileInput"
                  multiple
                />
                <label
                  htmlFor="fileInput"
                  className="bg-blue-500 flex justify-center items-center text-white px-4 py-2 rounded cursor-pointer"
                >
                  Choose Files
                </label>

                <ul className="list-none p-0">
                  {uploadedFiles.map((file, index) => (
                    <li key={index} className="text-gray-700">
                      {file.name} ({file.type})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-1 items-center">
          <SlCalender size={11} className="font-bold" />
          <p className="text-[10px] font-semibold text-gray-500">30-12-2022</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
