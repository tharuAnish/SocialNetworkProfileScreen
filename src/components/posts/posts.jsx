import React from "react"
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai"

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
      <h1 className="text-2xl font-medium mb-6 text-left mx-4 text-gray-800">
        Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profileData.posts.map((post) => (
          <div
            key={post.post_id}
            className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-gray-600 mb-2">{formatDate(post.timestamp)}</p>
            <p className="text-gray-700 text-lg font-semibold mb-4">
              {post.content}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <AiOutlineLike className="h-6 w-6 text-gray-500 mr-2" />
                </div>
                <span className="text-gray-500">{post.likes}</span>
              </div>
              <div className="flex items-center">
                <div fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <AiOutlineComment className="h-6 w-6 text-gray-500 mr-2" />
                </div>
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
