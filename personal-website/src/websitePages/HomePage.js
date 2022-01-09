import React, { useState } from "react"
import "./HomePage.css"
import AboutComp from "./AboutComp"

const initialSelectedTab = {
  experience: false,
  skills: false,
  about: true,
  projects: false,
  contacts: false,
}

const HomePage = () => {
  const [starting, setStarting] = useState(true)
  const [selectedTab, setSelectedTab] = useState(initialSelectedTab)

  const exitStartingHandler = () =>
    starting ? setStarting(false) : setStarting(true)

  const selectTabHandler = (e) => {
    Object.keys(selectedTab).forEach((v) => (selectedTab[v] = false))
    console.log(e)
    if (e === 0) {
      setSelectedTab({ ...selectedTab, experience: true })
    } else if (e === 1) {
      setSelectedTab({ ...selectedTab, skills: true })
    } else if (e === 2) {
      setSelectedTab({ ...selectedTab, about: true })
    } else if (e === 3) {
      setSelectedTab({ ...selectedTab, projects: true })
    } else if (e === 4) {
      setSelectedTab({ ...selectedTab, contacts: true })
    }
  }

  React.useEffect(() => {
    console.log(starting)
  }, [starting])
  React.useEffect(() => {
    console.log(selectedTab)
  }, [selectedTab])

  return (
    <div
      className={
        starting
          ? "bg-orange-200 flex h-screen transition-all duration-1000"
          : "bg-white flex h-screen transition-all duration-1000 grid grid-cols-1"
      }
    >
      <div
        className={starting ? "text-center m-auto" : "Benny-div text-center"}
      >
        <h1
          className={
            starting ? "Benny-start text-white" : "Benny-end text-sky-800"
          }
          onClick={exitStartingHandler}
        >
          {"`"}Benny{"`"}{" "}
          <span className={starting ? "cursor" : "hidden"}>|</span>
        </h1>

        <h1 className={starting ? "Benny-bio text-white mt-5" : "hidden"}>
          [ Always Under Continuous Renovation ]
        </h1>

        <h2 className={starting ? "hidden" : "Benny-bio text-sky-800"}>-</h2>

        <h1 className={starting ? "hidden" : "Benny-bio text-sky-800"}>
          Full Stack Software Developer | Northern California
        </h1>

        <h2 className={starting ? "hidden" : "Benny-bio text-sky-800"}>-</h2>

        <div
          className={
            starting
              ? "hidden"
              : "Tabs xl:flex justify-center items-center 2xl:space-x-38 xl:space-x-28 lg:space-x-10 md:space-x-4 pt-20 text-sky-800 "
          }
        >
          <button
            className={
              selectedTab.experience
                ? "Tab-category text-5xl opacity-100"
                : "Tab-category opacity-50"
            }
            onClick={(e) => selectTabHandler(0)}
          >
            `Experience`
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
          </button>

          <button
            className={
              selectedTab.about
                ? "Tab-category text-5xl opacity-100"
                : "Tab-category opacity-50"
            }
            onClick={(e) => selectTabHandler(2)}
          >
            `About`
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
          </button>
        </div>

        <div
          className={
            starting ? "hidden" : "mediaBox flex justify-center items-center"
          }
        >
          <AboutComp />
        </div>
      </div>
    </div>
  )
}

export default HomePage
