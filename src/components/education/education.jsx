import React from "react"

const Education = ({ profileData }) => {
  if (
    !profileData ||
    !profileData.education ||
    profileData.education.length === 0
  ) {
    // If profileData or education data is not available, or if the array is empty, display a message or return null
    return <div>No education data available.</div>
  }

  return (
    <div className="container mx-auto px-4 p-4 bg-white border rounded-lg text-gray-800">
      <h1 className="text-2xl font-medium mb-4">Education</h1>
      {profileData.education.map((education, index) => (
        <div key={index} className=" p-2  flex flex-col md:flex-row">
          <div className=" ">
            <h3 className="text-lg text-gray-700 font-medium">
              {education.degree}
            </h3>
            <p className="text-gray-500 mb-2">{education.school}</p>
            <p className="text-gray-500">
              {education.start_date} to {education.end_date}
            </p>
            <div className="md:w-2/3">
              <p className="text-gray-700">{education.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Education
