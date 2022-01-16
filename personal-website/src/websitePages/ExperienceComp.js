import React, { useState } from "react"
import "./TabDesign.css"
import DirectDentalLogo from "../images/DirectDental-Logo-.jpg"
import ArrowPointLogo from "../images/ArrowPoint_Tax_H.png"

const ExperienceComp = () => {
  const [showTools, setShowTools] = useState({ DD: false, AP: false })

  const toolsHandler = (item) => {
    if (item === 0) {
      showTools.DD
        ? setShowTools({ ...showTools, DD: false })
        : setShowTools({ ...showTools, DD: true })
    } else if (item === 1) {
      showTools.AP
        ? setShowTools({ ...showTools, AP: false })
        : setShowTools({ ...showTools, AP: true })
    }
  }

  return (
    <div className="px-10">
      <div className="md:flex items-center border-b-2 border-sky-800 pb-12 pt-10 ">
        <a className="w-full" href="https://directdental.com/ " target="_blank">
          <img
            src={DirectDentalLogo}
            alt="DirectDentalLogo"
            className="sm:w-1/3 md:w-96 "
          />
        </a>

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
          <h1
            className={
              showTools.DD
                ? "text-5xl leading-normal text-sky-800 -rotate-45 duration-300 hover:scale-125"
                : "text-5xl leading-normal text-sky-800 duration-300 hover:scale-125"
            }
            onClick={() => toolsHandler(0)}
          >
            +
          </h1>
        </div>
      </div>

      <div
        className={
          showTools.DD
            ? "Exp-div md:flex items-center pb-6 pt-10 justify-evenly duration-300"
            : "hidden duration-300"
        }
      >
        <i className="Exp-icons devicon-javascript-plain colored "></i>
        <i className="Exp-icons devicon-react-original colored"></i>
        <i className="Exp-icons devicon-rails-plain colored"></i>
        <i className="Exp-icons devicon-typescript-plain colored"></i>
        <i className="Exp-icons devicon-docker-plain colored"></i>
        <i className="Exp-icons devicon-html5-plain colored"></i>
        <i className="Exp-icons devicon-css3-plain colored"></i>
        <i className="Exp-icons devicon-bootstrap-plain colored"></i>
      </div>

      <div className="md:flex items-center border-b-2 border-sky-800 pb-12 pt-20">
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

        <div className="Exp-titles flex items-start justify-between w-full">
          <div className="pl-3 w-full pt-3">
            <p className="text-xl font-medium leading-5 text-gray-800">
              Software Developer Internship
            </p>
            <p className="text-sm leading-normal pt-2 text-gray-500">
              [2021-Present]{" "}
            </p>
          </div>
        </div>
        <div className="md:w-1/4">
          <h1
            className={
              showTools.AP
                ? "text-5xl leading-normal text-sky-800 -rotate-45 duration-300 hover:scale-125 "
                : "text-5xl leading-normal text-sky-800 duration-300 hover:scale-125 "
            }
            onClick={() => toolsHandler(1)}
          >
            +
          </h1>
        </div>
      </div>
      <div
        className={
          showTools.AP
            ? "Exp-div md:flex items-center  pb-6 pt-10 justify-evenly duration-300"
            : "hidden duration-300"
        }
      >
        <i className="Exp-icons devicon-javascript-plain colored"></i>
        <i className="Exp-icons devicon-react-original colored"></i>
        <i className="Exp-icons devicon-nodejs-plain colored"></i>
        <i className="Exp-icons devicon-typescript-plain colored"></i>
        <i className="Exp-icons devicon-docker-plain colored"></i>
        <i className="Exp-icons devicon-html5-plain colored"></i>
        <i className="Exp-icons devicon-css3-plain colored"></i>
        <i className="Exp-icons devicon-bootstrap-plain colored"></i>
      </div>
    </div>
  )
}

export default ExperienceComp
