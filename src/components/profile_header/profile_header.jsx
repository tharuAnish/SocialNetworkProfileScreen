import React from "react"
import Profile from "../../../src/assets/images/profile.webp"
import Background from "../../../src/assets/images/background.webp"

export default function ProfileHeader({ profileData }) {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Cover Image */}
      <img src={Background} alt="Cover" className="w-full h-32 object-cover" />
      <hello></hello>

      <div className="flex justify-center -mt-12">
        {/* Profile Image */}
        <img
          src={Profile}
          alt="Profile"
          className="w-28 h-28 object-cover rounded-full border-4 border-white"
        />
      </div>
      {/* Summary */}
      <div className="px-5 pb-5 ">
        <h2 className="text-2xl font-bold text-gray-800">{profileData.name}</h2>
        <p className="text-gray-500"> {profileData.connections}+ Connections</p>
        <span className="text-gray-500">{profileData.headline} | </span>
        <span className="text-gray-500">{profileData.location}</span>
        <p className="text-gray-600 text-lg">
          A passionate software engineer with expertise in web development...
        </p>
      </div>

      {/* Contact Information */}
      {/* <div className="px-4 py-2 border-t border-gray-200">
        <p className="text-gray-600">{profileData.email}</p>
        <p className="text-gray-600">{profileData.phone_number}</p>
      </div> */}
    </div>
  )
}
