import React, { useState } from "react"
import "./TabDesign.css"
import DirectDentalLogo from "../images/DirectDental-Logo-.jpg"
import ArrowPointLogo from "../images/ArrowPoint_Tax_H.png"
import WealthManagment from "../images/arrow-point-wealth-logo.png"
import resume from "../images/BennyTamburrinoResume.pdf"

const ExperienceComp = () => {
  const [showTools, setShowTools] = useState({
    DD: false,
    AP: false,
    WM: false,
  })

  const toolsHandler = (item) => {
    if (item === 0) {
      showTools.DD
        ? setShowTools({ ...showTools, DD: false })
        : setShowTools({ ...showTools, DD: true })
    } else if (item === 1) {
      showTools.AP
        ? setShowTools({ ...showTools, AP: false })
        : setShowTools({ ...showTools, AP: true })
    } else if (item === 2) {
      showTools.WM
        ? setShowTools({ ...showTools, WM: false })
        : setShowTools({ ...showTools, WM: true })
    }
  }

  return (
    <div className="px-10">
      <div className="md:flex items-center border-b border-sky-800 pb-12 pt-10 ">
        <div className="w-full">
          <a
            className="w-full"
            href="https://directdental.com/ "
            target="_blank"
          >
            <img
              src={DirectDentalLogo}
              alt="DirectDentalLogo"
              className="sm:w-1/3 md:w-96 "
            />
          </a>
          <p className="Exp-info pt-5 text-left w-96">
            Contracted for a total site overhaul and mobile app development.
            <br />
            More info{" "}
            <a className="text-sky-500" href={resume} target="_blank">
              Here.
            </a>
          </p>
        </div>

        <div className="Exp-titles flex items-start justify-between w-full">
          <div className="pl-3 w-full pt-3">
            <p className="text-xl font-medium leading-5 text-gray-800">
              Contracted Software Developer
            </p>
            <p className="text-md leading-normal pt-2 text-gray-500">
              [2021-Present]{" "}
            </p>
          </div>
        </div>
        <div className="md:w-1/4">
          <button
            className={
              showTools.DD
                ? "text-5xl leading-normal text-sky-800 -rotate-45 duration-300 hover:scale-125"
                : "text-5xl leading-normal text-sky-800 duration-300 hover:scale-125"
            }
            onClick={() => toolsHandler(0)}
          >
            +
          </button>
        </div>
      </div>

      <div
        className={
          showTools.DD
            ? "Exp-div md:flex items-center pb-6 pt-10 justify-evenly duration-300"
            : "hidden duration-300"
        }
      >
        <i className="Exp-icons devicon-react-original colored" />
        <i className="Exp-icons devicon-rails-plain colored" />
        <i className="Exp-icons devicon-javascript-plain colored " />
        <i className="Exp-icons devicon-bootstrap-plain colored" />
        <i className="Exp-icons devicon-typescript-plain colored" />
        <i className="Exp-icons devicon-docker-plain colored" />
        <i className="Exp-icons devicon-html5-plain colored" />
        <i className="Exp-icons devicon-css3-plain colored" />
      </div>

      <div className="md:flex items-center border-b border-sky-800 pb-12 pt-20">
        <div className="w-full">
          <a
            className="w-full"
            href="https://arrowpointtaxes.com/ "
            target="_blank"
          >
            <img
              src={ArrowPointLogo}
              alt="ArrowPointLogo"
              className="sm:w-1/3 md:w-96 "
            />
          </a>
          <p className="Exp-info pt-5 text-left w-96">
            Responsible for the front-end development of a Covid stimulus
            software.
            <br />
            More info{" "}
            <a className="text-sky-500" href={resume} target="_blank">
              Here.
            </a>
          </p>
        </div>

        <div className="Exp-titles flex items-start justify-between w-full">
          <div className="pl-3 w-full pt-3">
            <p className="text-xl font-medium leading-5 text-gray-800">
              Software Developer
            </p>
            <p className="text-sm leading-normal pt-2 text-gray-500">
              [2021-Present]{" "}
            </p>
          </div>
        </div>
        <div className="md:w-1/4">
          <button
            className={
              showTools.AP
                ? "text-5xl leading-normal text-sky-800 -rotate-45 duration-300 hover:scale-125 "
                : "text-5xl leading-normal text-sky-800 duration-300 hover:scale-125 "
            }
            onClick={() => toolsHandler(1)}
          >
            +
          </button>
        </div>
      </div>
      <div
        className={
          showTools.AP
            ? "Exp-div md:flex items-center  pb-6 pt-10 justify-evenly duration-300"
            : "hidden duration-300"
        }
      >
        <i className="Exp-icons devicon-javascript-plain colored" />
        <i className="Exp-icons devicon-react-original colored" />
        <i className="Exp-icons devicon-nodejs-plain colored" />
        <i className="Exp-icons devicon-typescript-plain colored" />
        <i className="Exp-icons devicon-html5-plain colored" />
        <i className="Exp-icons devicon-css3-plain colored" />
        <i className="Exp-icons devicon-bootstrap-plain colored" />
        <i className="Exp-icons devicon-docker-plain colored" />
      </div>

      <div className="md:flex items-center border-b border-sky-800 pb-12 pt-20">
        <div className="w-full">
          <a
            className="w-full"
            href="https://arrowpointwealth.com/ "
            target="_blank"
          >
            <img
              src={WealthManagment}
              alt="WealthManagment"
              className="sm:w-1/3 md:w-96 "
            />
          </a>
          <p className="Exp-info pt-5 text-left w-96">
            Tasked with data organization and data transformation to increase
            workplace efficiency.
            <br />
            More info{" "}
            <a className="text-sky-500" href={resume} target="_blank">
              Here.
            </a>
          </p>
        </div>

        <div className="Exp-titles flex items-start justify-between w-full pb-10">
          <div className="pl-3 w-full pt-3">
            <p className="text-xl font-medium leading-5 text-gray-800">
              Software Developer
            </p>
            <p className="text-sm leading-normal pt-2 text-gray-500">
              [2021-Present]{" "}
            </p>
          </div>
        </div>
        <div className="md:w-1/4">
          <button
            className={
              showTools.WM
                ? "text-5xl leading-normal text-sky-800 -rotate-45 duration-300 hover:scale-125 "
                : "text-5xl leading-normal text-sky-800 duration-300 hover:scale-125 "
            }
            onClick={() => toolsHandler(2)}
          >
            +
          </button>
        </div>
      </div>
      <div
        className={
          showTools.WM
            ? "Exp-div md:flex items-center  pb-6 pt-10 justify-evenly duration-300"
            : "hidden duration-300"
        }
      >
        <i className="Exp-icons devicon-nodejs-plain colored" />
        <i className="Exp-icons devicon-javascript-plain colored" />
        <i className="Exp-icons devicon-python-plain colored " />
        <i className="Exp-icons devicon-typescript-plain colored" />
        <i className="Exp-icons devicon-html5-plain colored" />
        <i className="Exp-icons devicon-css3-plain colored" />
      </div>
    </div>
  )
}

export default ExperienceComp
