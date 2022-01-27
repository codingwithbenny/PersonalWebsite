import React, { useState } from "react"
import "./TabDesign.css"
import websitePhoto from "../images/websitePhoto.PNG"
import SaveTimeCollage from "../images/SaveTimeCollage.png"
import SaveTime5 from "../images/SaveTime5.PNG"

const ProjectsComp = () => {
  const [modal, setModal] = useState({
    website: true,
    saveTime: true,
    mobileApp: true,
    redditBot: true,
  })

  const [hide, setHide] = useState(true)

  const modalFocus = (item) => {
    if (item === 0) {
      if (modal.website && !hide) {
        return "container items-center pt-10 px-5 md:translate-x-20 duration-1000 md:border-r border-sky-800"
      } else if (modal.website && hide) {
        return "container items-center border-r border-b p-12 border-sky-800 duration-1000"
      } else if (!modal.website && !hide) {
        return "Proj-fade-left items-center border-r border-b p-12 border-sky-800 "
      }
    }

    if (item === 1) {
      if (modal.saveTime && !hide) {
        return "container items-center pt-10 px-2 md:-translate-x-full duration-1000 md:border-r border-orange-200"
      } else if (modal.saveTime && hide) {
        return "container items-center border-l border-b p-12 border-orange-200 duration-1000"
      } else if (!modal.saveTime && !hide) {
        return "Proj-fade-right container items-center border-l border-b p-12 border-orange-200 "
      }
    }
  }

  const modalHandler = (item) => {
    console.log(item)
    if (item === 0) {
      setModal({
        ...modal,
        website: true,
        saveTime: false,
        mobileApp: false,
        redditBot: false,
      })
    } else if (item === 1) {
      setModal({
        ...modal,
        website: false,
        saveTime: true,
        mobileApp: false,
        redditBot: false,
      })
    }
  }

  const exitHandler = () => {
    setModal({
      website: true,
      saveTime: true,
      mobileApp: true,
      redditBot: true,
    })
  }

  React.useEffect(() => {
    let counter = 0

    Object.keys(modal).forEach((key) => {
      if (!modal[key]) {
        counter++
      }
    })
    // console.log(counter)

    if (counter === 0) {
      setHide(true)
    } else {
      setHide(false)
    }
  }, [modal])

  return (
    <div className="md:flex Proj-text md:grid grid-cols-2 pt-5 gap-10 px-5">
      <div className={modalFocus(0)}>
        <img
          className=" mx-auto w-96 hover:scale-110 duration-200"
          src={websitePhoto}
          onClick={() => modalHandler(0)}
        />

        <h1 className="pt-5 pb-5 md:pb-0">My Website</h1>

        <div>
          <h1
            className={
              modal.website && !hide
                ? "Modal-text md:absolute md:translate-x-full md:-translate-y-full md:text-right text-center"
                : "hidden"
            }
          >
            This website not only acts as a portfolio but doubles as a sandbox
            for all of the front-end development skills I absorb along the way.
            I intend to always continue learning new techniques and skills.
            <br />
            <br />
            ~ React ~ HTML5 ~ CSS3 ~ tailwind ~
            <br />
            <br />
            <p
              className=" text-3xl text-center text-sky-800 md:hover:scale-125 duration-300"
              onClick={() => exitHandler()}
            >
              X
            </p>
          </h1>
        </div>
      </div>

      <div className={modalFocus(1)}>
        <div>
          <h1
            className={
              modal.saveTime && !hide
                ? "Modal-text md:absolute md:translate-x-full md:translate-y-4 md:text-right text-center"
                : "hidden"
            }
          >
            A chrome extension that would take in two websites, a productivity
            site and distraction site. When visiting the distraction website an
            alert would pop-up. Clicking on the extension would give the user a
            prompt to override. If not overriden, Chrome would direct user to
            their productivity website and time would be added to "save
            counter".
            <br />
            <br />
            ~ JavaScript ~ HTML5 ~ CSS3 ~ Google API ~
            <br />
            <br />
            <p
              className=" text-3xl text-center text-orange-200 md:hover:scale-125 duration-300"
              onClick={() => exitHandler()}
            >
              X
            </p>
          </h1>
        </div>
        <img
          className={
            modal.saveTime && !hide
              ? "Modal-text md:absolute translate-x-full md:translate-y-10 md:text-right text-center"
              : "hidden"
          }
          src={SaveTime5}
        />
        <img
          className="mx-auto w-64 hover:scale-110 duration-200 "
          src={SaveTimeCollage}
          onClick={() => modalHandler(1)}
        />

        <h1 className="pb-5 md:pb-0">"Save-Time" Chrome extension</h1>
      </div>
      <div
        className={
          modal.mobileApp
            ? "Proj-fade-in container border-r border-t p-12 border-orange-200"
            : "Proj-fade-left container border-r border-t p-12 border-orange-200 "
        }
      >
        <h1>Mobile App Coming Soon...</h1>
      </div>
      <div
        className={
          modal.redditBot
            ? "Proj-fade-in container items-center border-l border-t p-12 border-sky-800"
            : "Proj-fade-right container items-center border-l border-t p-12 border-sky-800 "
        }
      >
        <h1>Reddit Bot Coming Soon...</h1>
      </div>
    </div>
  )
}

export default ProjectsComp
