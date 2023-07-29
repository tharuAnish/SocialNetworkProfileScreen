import React from "react"

const Skills = ({ profileData }) => {
  if (
    !profileData ||
    !Array.isArray(profileData.skills) ||
    profileData.skills.length === 0
  ) {
    return <div>No skills data available.</div>
  }

  return (
    <div className="container mx-auto px-2 pt-9 pb-3">
      <h1 className="text-2xl font-medium mb-6 text-left mx-2">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {profileData.skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-lg p-4 flex items-center justify-center h-20 transition-transform transform hover:-translate-y-1 hover:shadow-md border border-gray-200 transition-all ease-in-out duration-300"
          >
            <span className="text-m font-small text-gray-600">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
