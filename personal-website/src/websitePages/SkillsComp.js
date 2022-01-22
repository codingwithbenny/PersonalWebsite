import React, { useState } from "react"
import "./TabDesign.css"

const SkillsComp = () => {
  const [related, setRelated] = useState({
    default: true,
    javascript: false,
    nodejs: false,
    python: false,
    rails: false,
    react: false,
    express: false,
    mongodb: false,
    typescript: false,
    html: false,
    css: false,
    bootstrap: false,
    tailwind: false,
    docker: false,
    wordpress: false,
    adobe: false,
    office: false,
  })

  const [selectedSkill, setSelectedSkill] = useState("")

  React.useEffect(() => {
    Object.keys(related).forEach((v) => (related[v] = false))
    if (selectedSkill === "javascript") {
      setRelated({
        ...related,
        javascript: true,
        nodejs: true,
        react: true,
        express: true,
        mongodb: true,
        typescript: true,
        html: true,
        css: true,
        bootstrap: true,
        tailwind: true,
      })
    } else if (selectedSkill === "nodejs") {
      setRelated({
        ...related,
        javascript: true,
        nodejs: true,
        express: true,
        mongodb: true,
        typescript: true,
        office: true,
        docker: true,
      })
    } else if (selectedSkill === "python") {
      setRelated({
        ...related,
        python: true,
      })
    } else if (selectedSkill === "rails") {
      setRelated({
        ...related,
        javascript: true,
        rails: true,
        react: true,
        docker: true,
      })
    } else if (selectedSkill === "react") {
      setRelated({
        ...related,
        javascript: true,
        react: true,
        typescript: true,
        html: true,
        css: true,
        bootstrap: true,
        tailwind: true,
      })
    } else if (selectedSkill === "express") {
      setRelated({
        ...related,
        javascript: true,
        react: true,
        nodejs: true,
        express: true,
        mongodb: true,
        typescript: true,
      })
    } else if (selectedSkill === "mongodb") {
      setRelated({
        ...related,
        javascript: true,
        react: true,
        nodejs: true,
        express: true,
        mongodb: true,
        typescript: true,
      })
    } else if (selectedSkill === "typescript") {
      setRelated({
        ...related,
        javascript: true,
        react: true,
        nodejs: true,
        typescript: true,
      })
    } else if (selectedSkill === "html") {
      setRelated({
        ...related,
        javascript: true,
        react: true,
        html: true,
        css: true,
        bootstrap: true,
        tailwind: true,
      })
    } else if (selectedSkill === "css") {
      setRelated({
        ...related,
        javascript: true,
        react: true,
        html: true,
        css: true,
        bootstrap: true,
        tailwind: true,
        wordpress: true,
      })
    } else if (selectedSkill === "bootstrap") {
      setRelated({
        ...related,
        html: true,
        css: true,
        bootstrap: true,
      })
    } else if (selectedSkill === "tailwind") {
      setRelated({
        ...related,
        html: true,
        css: true,
        tailwind: true,
      })
    } else if (selectedSkill === "docker") {
      setRelated({
        ...related,
        docker: true,
        rails: true,
        nodejs: true,
      })
    } else if (selectedSkill === "wordpress") {
      setRelated({
        ...related,
        html: true,
        css: true,
        wordpress: true,
      })
    } else if (selectedSkill === "adobe") {
      setRelated({
        ...related,
        adobe: true,
      })
    } else if (selectedSkill === "office") {
      setRelated({
        ...related,
        office: true,
        javascript: true,
        nodejs: true,
      })
    } else {
      setRelated({
        ...related,
        default: true,
      })
    }
  }, [selectedSkill])

  return (
    <div className="text-center pt-10">
      <div className="Skills-box grid grid-cols-4 px-10 lg:grid-cols-8 gap-8 text-center">
        <div
          className={
            related.javascript ? "Skills-icon" : "Skills-icon opacity-30"
          }
          onClick={(e) => setSelectedSkill("javascript")}
        >
          <i className=" devicon-javascript-plain colored " />
        </div>
        <div
          className={related.nodejs ? "Skills-icon" : "Skills-icon opacity-30"}
          onClick={(e) => setSelectedSkill("nodejs")}
        >
          <i className=" devicon-nodejs-plain colored " />
        </div>
        <div
          className={related.python ? "Skills-icon" : "Skills-icon opacity-30"}
          onClick={(e) => setSelectedSkill("python")}
        >
          <i className="  devicon-python-plain colored " />
        </div>
        <div
          className={related.rails ? "Skills-icon" : "Skills-icon opacity-30"}
          onClick={(e) => setSelectedSkill("rails")}
        >
          <i className="  devicon-rails-plain colored " />
        </div>
        <div
          className={related.react ? "Skills-icon" : "Skills-icon opacity-30"}
          onClick={(e) => setSelectedSkill("react")}
        >
          <i className="  devicon-react-plain colored " />
        </div>
        <div
          className={related.express ? "Skills-icon" : "Skills-icon opacity-30"}
          onClick={(e) => setSelectedSkill("express")}
        >
          <i className=" devicon-express-original colored " />
        </div>
        <div
          className={related.mongodb ? "Skills-icon" : "Skills-icon opacity-30"}
          onClick={(e) => setSelectedSkill("mongodb")}
        >
          <i className=" devicon-mongodb-plain colored " />
        </div>
        <div
          className={
            related.typescript ? "Skills-icon" : "Skills-icon opacity-30"
          }
          onClick={(e) => setSelectedSkill("typescript")}
        >
          <i className="devicon-typescript-plain colored " />
        </div>
        <div
          className={related.html ? "Skills-icon" : "Skills-icon opacity-30"}
          onClick={(e) => setSelectedSkill("html")}
        >
          <i className=" devicon-html5-plain colored " />
        </div>
        <div
          className={related.css ? "Skills-icon" : "Skills-icon opacity-30"}
          onClick={(e) => setSelectedSkill("css")}
        >
          <i className=" devicon-css3-plain colored " />
        </div>
        <div
          className={
            related.bootstrap ? "Skills-icon" : "Skills-icon opacity-30"
          }
          onClick={(e) => setSelectedSkill("bootstrap")}
        >
          <i className=" devicon-bootstrap-plain colored " />
        </div>
        <div
          className={
            related.tailwind ? "Skills-icon" : "Skills-icon opacity-30"
          }
          onClick={(e) => setSelectedSkill("tailwind")}
        >
          <i className=" devicon-tailwindcss-original-wordmark colored " />
        </div>
        <div
          className={related.docker ? "Skills-icon" : "Skills-icon opacity-30"}
          onClick={(e) => setSelectedSkill("docker")}
        >
          <i className=" devicon-docker-plain colored " />
        </div>
        <div
          className={
            related.wordpress ? "Skills-icon" : "Skills-icon opacity-30"
          }
          onClick={(e) => setSelectedSkill("wordpress")}
        >
          <i className=" devicon-wordpress-plain colored"></i>
        </div>
        <div
          className={related.adobe ? "Skills-icon" : "Skills-icon opacity-30"}
          onClick={(e) => setSelectedSkill("adobe")}
        >
          <img
            className="mx-auto pt-2"
            src="https://img.icons8.com/ios-filled/60/000000/adobe-logo.png"
          />
        </div>
        <div
          className={related.office ? "Skills-icon	" : "Skills-icon opacity-30"}
          onClick={(e) => setSelectedSkill("office")}
        >
          <img
            className=" pt-2"
            src="https://img.icons8.com/color/60/000000/microsoft-office-2019.png"
          />
        </div>
      </div>
      <div className="text-center justify-center">
        <h1
          className={
            related.default
              ? "Skills-info-header py-10 w-48 md:w-80 text-center mx-auto"
              : "hidden"
          }
        >
          Please select a technology to see other technologies I tend to
          pair/use them with.
        </h1>
      </div>
    </div>
  )
}

export default SkillsComp
