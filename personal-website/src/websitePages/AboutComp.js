import React, { useState } from "react"
import "./TabDesign.css"
import profile from "../images/profile.png"
import resume from "../images/BennyTamburrinoResume.pdf"

const AboutComp = () => {
  const [imgColor, setImgColor] = useState(false)

  const imageClick = () => {
    if (imgColor) {
      setImgColor(false)
    } else {
      setImgColor(true)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center grid grid-cols-7 gap-4">
        <div className="col-start-3 col-span-3">
          <h1 className="Tab-header pb-10 items-center justify-center">
            <span className="">W</span>
            <span className="">e</span>
            <span className="Welcome">l</span>
            <span className="">c</span>
            <span className="Welcome">o</span>
            <span className="">m</span>
            <span className="Welcome">e</span>
            <span className="">,</span>
          </h1>
          <p className="Tab-para ">
            In 2017, I went off to college to study computer science because the
            internet had told me that they have some of the highest paying jobs
            right out of college, one semester later I changed my major.
            <br />
            <br />
            Fast forward to 2020, I was on my final year of college pursuing a
            degree in Kinesiology when Covid hit. I decided to revist the
            programming space with a new-found drive for challenging myself,
            motivation to grow, and craving creative freedom. I went in with a
            new mindset and from there my spark for programming was ignited.
            <br />
            <br />
            <span className="font-bold text-xl">
              My name is Benny Tamburrino and I am a Full Stack Software
              Developer.
            </span>
          </p>
        </div>
        <img
          src={profile}
          alt="Profile"
          className={
            imgColor
              ? "images invert hidden xl:block hover:scale-110 duration-300"
              : "images hidden xl:block hover:scale-110 duration-300"
          }
          onClick={() => imageClick()}
        />
      </div>
      <div className="pt-14">
        <a
          className="About-icon devicon-github-original colored"
          href="https://github.com/codingwithbenny"
          target="_blank"
        ></a>

        <a className="Resume px-5 py-1 mx-8" href={resume} target="_blank">
          Resume
        </a>
        <a
          className="About-icon devicon-linkedin-plain colored"
          href="https://www.linkedin.com/in/benny-tamburrino-b72a8a211/"
          target="_blank"
        ></a>
      </div>
      <div className="flex items-center justify-center grid grid-cols-8 gap-4">
        <img
          src={profile}
          alt="Profile"
          className={
            imgColor
              ? "images invert xl:hidden sm:block col-start-4 col-span-2 pt-5 hover:scale-110 duration-300"
              : "images  xl:hidden sm:block col-start-4 col-span-2 pt-5 hover:scale-110 duration-300"
          }
          onClick={imageClick}
        />
      </div>
    </div>
  )
}

export default AboutComp
