import React from "react"
import Profile from "../../../src/assets/images/profile.jpg"
import Background from "../../../src/assets/images/background.jpeg"

export default function ProfileHeader({ profileData }) {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Cover Image */}
      <img src={Background} alt="Cover" className="w-full h-32 object-cover" />

      <div className="flex justify-center -mt-12">
        {/* Profile Image */}
        <img
          src={Profile}
          alt="Profile"
          className="w-28 h-28 object-cover rounded-full border-4 border-white"
        />
      </div>

      {/* Profile Information */}
      <div className="px-4 py-2">
        <h2 className="text-2xl font-bold">{profileData.name}</h2>
        <p className="text-gray-600">{profileData.headline}</p>
        <p className="text-gray-600">{profileData.location}</p>
      </div>
      {/* Summary */}
      <div className="px-4 pb-6 ">
        <p className="text-gray-700">
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
