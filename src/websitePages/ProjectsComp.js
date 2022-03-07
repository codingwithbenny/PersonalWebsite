import React, { useState } from "react"
import "./TabDesign.css"
import websitePhoto from "../images/websitePhoto.PNG"
import SaveTimeCollage from "../images/SaveTimeCollage.png"
import SaveTime5 from "../images/SaveTime5.PNG"
import excelCon from "../images/excelconversion.PNG"

const ProjectsComp = () => {
  const [modal, setModal] = useState({
    website: true,
    saveTime: true,
    mobileApp: true,
    excelConversion: true,
  })

  const [hide, setHide] = useState(true)

  const modalFocus = (item) => {
    if (item === 0) {
      if (modal.website && !hide) {
        return "container hold-size items-center pt-10 px-5 xl:translate-x-0 duration-1000 xl:border-r border-sky-800"
      } else if (modal.website && hide) {
        return "container items-center border-r border-b p-12 border-sky-800 duration-1000 hold-size"
      } else if (!modal.website && !hide) {
        return "hidden"
      }
    }

    if (item === 1) {
      if (modal.saveTime && !hide) {
        return "container items-center pt-10 px-2 xl:-translate-x-0 duration-1000 xl:border-r border-sky-800 xl:px-28"
      } else if (modal.saveTime && hide) {
        return "container items-center border-l border-b p-12 border-sky-800 duration-1000"
      } else if (!modal.saveTime && !hide) {
        return "hidden"
      }
    }

    if (item === 3) {
      if (modal.excelConversion && !hide) {
        return "container items-center pt-10 px-2 xl:-translate-x-0 duration-1000 xl:border-r border-sky-800 xl:px-20"
      } else if (modal.excelConversion && hide) {
        return "container items-center border-l border-t p-12 border-sky-800 duration-1000"
      } else if (!modal.excelConversion && !hide) {
        return "hidden"
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
        excelConversion: false,
      })
    } else if (item === 1) {
      setModal({
        ...modal,
        website: false,
        saveTime: true,
        mobileApp: false,
        excelConversion: false,
      })
    } else if (item === 3) {
      setModal({
        ...modal,
        website: false,
        saveTime: false,
        mobileApp: false,
        excelConversion: true,
      })
    }
  }

  const exitHandler = () => {
    setModal({
      website: true,
      saveTime: true,
      mobileApp: true,
      excelConversion: true,
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
    <div className="xl:flex Proj-text xl:grid grid-cols-2 pt-5 gap-10 px-5 pb-8">
      <div className={modalFocus(0)}>
        <img
          className=" mx-auto w-72 hover:scale-110 duration-200 pl-2"
          src={excelCon}
          onClick={() => modalHandler(0)}
        />

        <h1 className="pt-5 pb-5 xl:pb-0">Excel Conversion Software</h1>

        <div>
          <h1
            className={
              modal.website && !hide
                ? "Modal-text xl:absolute xl:translate-x-full xl:-translate-y-full xl:text-right pl-5 text-center"
                : "hidden"
            }
          >
            This is a desktop application that takes in various types of payroll
            documents from management softwares such as ADP and converts them to
            a formatted CSV using a library of scripts I wrote in Node.js. I
            built the software to be distributed between my boss and coworkers
            to drastically speed up the processing and formatting rate of
            documents.
            <br />
            <br />
            ~ React ~ Electron ~ Node.js ~ JavaScript ~
            <br />
            <br />
            <p
              className=" text-3xl text-center text-sky-800 xl:hover:scale-125 duration-300"
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
                ? "Modal-text xl:absolute xl:translate-x-full xl:-translate-y-6 xl:text-right text-center pl-3"
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
              className=" text-3xl text-center text-sky-800 xl:hover:scale-125 duration-300"
              onClick={() => exitHandler()}
            >
              X
            </p>
          </h1>
        </div>

        <img
          className="mx-auto w-64 hover:scale-110 duration-200 "
          src={SaveTimeCollage}
          onClick={() => modalHandler(1)}
        />

        <h1 className="pb-5 xl:pb-0">"Save-Time" Chrome extension</h1>
      </div>
      <div
        className={
          modal.mobileApp
            ? "Proj-fade-in container border-r border-t p-12 border-sky-800"
            : "hidden Proj-fade-left container border-r border-t p-12 border-sky-800 "
        }
      >
        <h1>Mobile App Coming Soon...</h1>
      </div>
      <div className={modalFocus(3)}>
        <div>
          <h1
            className={
              modal.excelConversion && !hide
                ? "Modal-text xl:absolute xl:translate-x-full xl:translate-y-4 xl:text-right text-center xl:pl-5"
                : "hidden"
            }
          >
            {" "}
            This website not only acts as a portfolio but doubles as a sandbox
            for all of the front-end development skills I absorb along the way.
            I intend to always continue learning new techniques and skills.
            <br />
            <br />
            ~ React ~ HTML5 ~ CSS3 ~ tailwind ~
            <br />
            <br />
            <p
              className=" text-3xl text-center text-sky-800 xl:hover:scale-125 duration-300 pb-4"
              onClick={() => exitHandler()}
            >
              X
            </p>
          </h1>
        </div>

        <img
          className="mx-auto w-96 hover:scale-110 duration-200 "
          src={websitePhoto}
          onClick={() => modalHandler(3)}
        />

        <h1 className="pt-5 xl:pb-0">My Website</h1>
      </div>
    </div>
  )
}

export default ProjectsComp
