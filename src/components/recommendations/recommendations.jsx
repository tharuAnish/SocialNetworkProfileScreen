import React from "react"

const Recommendations = ({ profileData }) => {
  if (
    !profileData ||
    !Array.isArray(profileData.recommendations) ||
    profileData.recommendations.length === 0
  ) {
    return <div>No recommendations available.</div>
  }

  return (
    <div className="container mx-auto px-4 pt-4 border my-6 rounded-lg bg-white">
      <h1 className="text-2xl font-medium mb-4 text-left text-gray-800">
        Recommendations
      </h1>
      <div className="">
        {profileData.recommendations.map((recommendation, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-lg p-4 border my-4"
          >
            <h2 className="text-lg text-gray-700 font-semibold ">
              {recommendation.name}
            </h2>
            <p className="text-gray-600 mb-1">{recommendation.relationship}</p>
            <p className="text-gray-800">{recommendation.recommendation}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommendations
