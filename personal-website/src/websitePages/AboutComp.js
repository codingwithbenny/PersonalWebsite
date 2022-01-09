import React, { useState } from "react"
import "./TabDesign.css"

const AboutComp = () => {
  return (
    <div className="flex items-center justify-center grid grid-cols-7 gap-4">
      <div className="col-start-3 col-span-3">
        <h1 className="Tab-header pb-10 items-center justify-center">
          Welcome,
        </h1>
        <p className="Tab-para">
          As you could probably tell, my name is Benny Tamburrino and I am a
          Full Stack Software Developer. I started to code in 2020 and have been
          working continously to improve all of my skills to build the best
          programs and websites possible.
        </p>
      </div>
    </div>
  )
}

export default AboutComp
