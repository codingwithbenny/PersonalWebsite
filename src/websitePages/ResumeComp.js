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
        <div className=" col-start-2 col-span-5 md:col-start-2 md:col-span-5 lg:col-start-3 lg:col-span-3">
          <h1 className="Tab-header pb-10 items-center justify-center">
            <span className="Welcome">A</span>
            <span className="">b</span>
            <span className="Welcome">o</span>
            <span className="">u</span>
            <span className="Welcome">t</span>
            <span className="">:</span>
          </h1>
          <p className="Tab-para w-full">
            I like statistics and data so, it is no surprise that in my final
            year at Sacramento State University, I stayed true to a strong trend
            and shifted my career focus away from Kinesiology towards computer
            science. I decided to dive into the programming space at the start
            of quarantine with my new-found drive for challenging myself,
            motivation to grow, and craving creative freedom. I went in with a
            determined mindset and from there my spark for programming was
            ignited.
            <br />
            <br />
            For the past two years I poured myself into learning for the
            interest of it. I loved it. I have found my passion and within
            months was able to secure a few junior positions as a full stack
            developer where I continued to learn and hone my skills.
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
      <div className="pt-14 pb-10">
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
