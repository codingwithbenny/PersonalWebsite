import React, { useState } from "react"
import "./HomePage.css"
import ResumeComp from "./ResumeComp"
import ExperienceComp from "./ExperienceComp"
import ProjectsComp from "./ProjectsComp"
import SkillsComp from "./SkillsComp"
import ContactsComp from "./ContactsComp"

const initialSelectedTab = {
  experience: false,
  skills: false,
  resume: true,
  projects: false,
  contacts: false,
}

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(initialSelectedTab)

  const selectTabHandler = (e) => {
    Object.keys(selectedTab).forEach((v) => (selectedTab[v] = false))
    //console.log(e)
    if (e === 0) {
      setSelectedTab({ ...selectedTab, experience: true })
    } else if (e === 1) {
      setSelectedTab({ ...selectedTab, skills: true })
    } else if (e === 2) {
      setSelectedTab({ ...selectedTab, resume: true })
    } else if (e === 3) {
      setSelectedTab({ ...selectedTab, projects: true })
    } else if (e === 4) {
      setSelectedTab({ ...selectedTab, contacts: true })
    }
  }

  // React.useEffect(() => {
  //   console.log(starting)
  // }, [starting])
  // React.useEffect(() => {
  //   console.log(selectedTab)
  // }, [selectedTab])

  return (
    <div className="bg-white flex h-screen transition-all duration-1000 grid grid-cols-1">
      <div className="Benny-div text-center">
        <h1 className="Benny-end text-sky-800 ">
          {"`"}Benny{"`"}{" "}
        </h1>

        <h2 className="Benny-bio text-sky-800">-</h2>

        <h1 className="Benny-bio text-sky-800 px-4">
          Full Stack Software Developer | Northern California
        </h1>

        <h2 className="Benny-bio text-sky-800">-</h2>
        <a
          className="Benny-bio text-sky-500"
          href="mailto:bennytamburrino@gmail.com"
        >
          bennytamburrino@gmail.com
        </a>
        <h1>
          <a className="Benny-bio text-sky-500" href="tel:707-328-6705">
            (707)-328-6705
          </a>
        </h1>

        <div className="Tabs xl:flex justify-center items-center 2xl:space-x-38 xl:space-x-28 lg:space-x-10 md:space-x-4 pt-10 text-sky-800 ">
          <button
            className={
              selectedTab.experience
                ? "Tab-category text-5xl opacity-100"
                : "Tab-category opacity-50"
            }
            onClick={(e) => selectTabHandler(0)}
          >
            `Experience`
            <span className={selectedTab.experience ? "cursor" : "hidden"}>
              |
            </span>
          </button>

          <button
            className={
              selectedTab.skills
                ? "Tab-category text-5xl opacity-100"
                : "Tab-category opacity-50"
            }
            onClick={(e) => selectTabHandler(1)}
          >
            `Skills`
            <span className={selectedTab.skills ? "cursor" : "hidden"}>|</span>
          </button>

          <button
            className={
              selectedTab.resume
                ? "Tab-category text-5xl opacity-100"
                : "Tab-category opacity-50"
            }
            onClick={(e) => selectTabHandler(2)}
          >
            `Resume`
            <span className={selectedTab.resume ? "cursor" : "hidden"}>|</span>
          </button>

          <button
            className={
              selectedTab.projects
                ? "Tab-category text-5xl opacity-100"
                : "Tab-category opacity-50"
            }
            onClick={(e) => selectTabHandler(3)}
          >
            `Projects`
            <span className={selectedTab.projects ? "cursor" : "hidden"}>
              |
            </span>
          </button>

          <button
            className={
              selectedTab.contacts
                ? "Tab-category text-5xl opacity-100"
                : "Tab-category opacity-50"
            }
            onClick={(e) => selectTabHandler(4)}
          >
            `Contacts`
            <span className={selectedTab.contacts ? "cursor" : "hidden"}>
              |
            </span>
          </button>
        </div>

        <div className="Media-box flex justify-center items-center">
          <div
            className={
              selectedTab.experience ? "Tab-content" : "Tab-content hidden "
            }
          >
            <ExperienceComp />
          </div>
          <div
            className={
              selectedTab.resume ? "Tab-content" : "Tab-content hidden "
            }
          >
            <ResumeComp />
          </div>
          <div
            className={
              selectedTab.projects ? "Tab-content" : "Tab-content hidden "
            }
          >
            <ProjectsComp />
          </div>
          <div
            className={
              selectedTab.skills ? "Tab-content" : "Tab-content hidden "
            }
          >
            <SkillsComp />
          </div>
          <div
            className={
              selectedTab.contacts ? "Tab-content" : "Tab-content hidden "
            }
          >
            <ContactsComp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
