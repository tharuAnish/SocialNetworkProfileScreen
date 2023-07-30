export default function Experience({ profileData }) {
  if (
    !profileData ||
    !profileData.experience ||
    profileData.experience.length === 0
  ) {
    // If profileData or experience data is not available, or if the array is empty, display a message or return null
    return <div>No experience data available.</div>
  }

  return (
    <div className="max-w-3xl p-2 mx-auto bg-white border rounded-lg overflow-hidden ">
      <h1 className="text-2xl font-medium mx-3 mb-4 mt-3 text-gray-800">
        Work Experience
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        {profileData.experience.map((exp, index) => (
          <div
            key={index}
            className="bg-white shadow-md border rounded-lg p-4 mx-2 my-2"
          >
            <h3 className="text-lg text-gray-700 font-semibold">{exp.title}</h3>
            <p className="text-gray-500 mb-2">
              {exp.company} - {exp.location}
            </p>
            <p className="text-gray-500 mb-2">
              {exp.start_date} to {exp.end_date}
            </p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
