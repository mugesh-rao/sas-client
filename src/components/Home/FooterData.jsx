import React from 'react'
import { IoColorFilter } from 'react-icons/io5'

function FooterData() {
  return (
    <>
      <div className=" text-gray-700 pb-[15px] py-12">
        <div className="bg-blue-600 bg-opacity-75 py-12">
          <h2 className="text-white text-2xl font-bold text-center mb-6">
            Campus Information
          </h2>
        </div>
        </div>
      
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-center items-stretch">
        <div  className="flex-1 m-4 sm:w-full drop-shadow-sm bg-white shadow-lg border rounded-lg p-4 flex flex-col justify-center items-center">
          <div className="text-3xl text-blue-500 mb-4">
            <IoColorFilter />
          </div>
          <h3 className="text-xl font-bold text-center mb-2">Location</h3>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor,
            magna at bibendum tristique, ligula nisi pellentesque urna, quis
            consectetur orci sapien vel ex.
          </p>
        </div>
        <div className="flex-1 m-4 sm:w-full drop-shadow-sm bg-white shadow-lg border rounded-lg p-4 flex flex-col justify-center items-center">
          <div className="text-3xl text-blue-500 mb-4">
            <IoColorFilter />
          </div>
          <h3 className="text-xl font-bold text-center mb-2">Facilities</h3>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor,
            magna at bibendum tristique, ligula nisi pellentesque urna, quis
            consectetur orci sapien vel ex.
          </p>
        </div>
        <div className="flex-1 m-4 sm:w-full drop-shadow-sm bg-white shadow-lg border rounded-lg p-4 flex flex-col justify-center items-center">
          <div className="text-3xl text-blue-500 mb-4">
            <IoColorFilter />
          </div>
          <h3 className="text-xl font-bold text-center mb-2">Community</h3>
          <p className="text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor,
            magna at bibendum tristique, ligula nisi pellentesque urna, quis
            consectetur orci sapien vel ex.
          </p>
        </div>
      </div>


    </>

  )
}

export default FooterData