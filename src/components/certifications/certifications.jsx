import React from "react"

const CertificationCard = ({ profileData }) => {
  if (
    !profileData ||
    !profileData.certifications ||
    profileData.certifications.length === 0
  ) {
    // If profileData or certifications data is not available, or if the array is empty, display a message or return null
    return <div>No certification data available.</div>
  }

  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    return formattedDate
  }

  return (
    <div className=" p-2 mt-3 mx-auto bg-white border rounded-lg overflow-hidden">
      <h1 className="text-2xl font-medium mx-3 mb-4 mt-3 text-gray-800">
        Certifications
      </h1>
      <div className=" ">
        {profileData.certifications.map((certification, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border m-2"
          >
            <h2 className="text-gray-700 text-xl font-medium mb-2">
              {certification.title}
            </h2>
            <p className="text-gray-600 mb-2">{certification.authority}</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Issued Date</p>
                <p className="text-gray-800">
                  {formatDate(certification.issued_date)}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">Expiration Date</p>
                <p className="text-gray-800">
                  {formatDate(certification.expiration_date)}
                </p>
              </div>
            </div>
            <div className="bg-gray-100 py-2 px-4 rounded-md text-gray-800 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Certification Valid</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CertificationCard
