import React from "react"

const Posts = ({ profileData }) => {
  if (
    !profileData ||
    !Array.isArray(profileData.posts) ||
    profileData.posts.length === 0
  ) {
    return <div>No posts available.</div>
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="container mx-auto  py-4">
      <h1 className="text-2xl font-medium mb-6 text-left mx-4">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profileData.posts.map((post) => (
          <div
            key={post.post_id}
            className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-gray-600 mb-2">{formatDate(post.timestamp)}</p>
            <p className="text-lg font-semibold mb-4">{post.content}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
                <span className="text-gray-500">{post.likes}</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19c-1.381 0-2.631-.56-3.536-1.464C5.561 16.631 5 15.381 5 14c0-2.757 2.462-5 5.5-5 3.589 0 5.775 1.932 5.864 2.031a1 1 0 001.272 0C18.725 10.932 20.911 9 24.5 9c3.038 0 5.5 2.243 5.5 5 0 1.381-.561 2.631-1.464 3.536C28.631 20.44 27.381 21 26 21H10z"
                  />
                </svg>
                <span className="text-gray-500">{post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts
