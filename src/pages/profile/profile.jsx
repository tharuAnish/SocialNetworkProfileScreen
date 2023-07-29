import React from "react"
import { useFetch } from "../../hooks/useFetch"
import ProfileHeader from "../../components/profile_header/profile_header"
import Experience from "../../components/experience/experience"
import Education from "../../components/education/education"
import Skills from "../../components/skills/skills"
import Recommendations from "../../components/recommendations/recommendations"
import Posts from "../../components/posts/posts"
import CertificationCard from "../../components/certifications/certifications"

export default function Profile() {
  const {
    data: profileData,
    isPending,
    error,
  } = useFetch("https://mocki.io/v1/29663a80-1256-4094-bae3-55ad8e808180")

  return (
    <div className="max-w-3xl mx-auto  overflow-hidden">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {profileData && (
        <div className="container mx-auto p-4">
          <ProfileHeader profileData={profileData} />
          <Skills profileData={profileData} />
          <div className="container mx-auto py-6">
            <Experience profileData={profileData} />
          </div>
          <Education profileData={profileData} />
          <Recommendations profileData={profileData} />
          <Posts profileData={profileData} />
          <CertificationCard profileData={profileData} />
        </div>
      )}
    </div>
  )
}
