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
    postgresql: false,
    electron: false,
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
    } else if (selectedSkill === "postgresql") {
      setRelated({
        ...related,
        postgresql: true,
      })
    } else if (selectedSkill === "electron") {
      setRelated({
        ...related,
        electron: true,
        javascript: true,
        react: true,
        nodejs: true,
        typescript: true,
        tailwind: true,
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
    <div className="text-center pt-10 pb-5 md:pb-5 px-5">
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
          className={
            related.typescript ? "Skills-icon" : "Skills-icon opacity-30"
          }
          onClick={(e) => setSelectedSkill("typescript")}
        >
          <i className="devicon-typescript-plain colored " />
        </div>
        <div
          className={related.react ? "Skills-icon" : "Skills-icon opacity-30"}
          onClick={(e) => setSelectedSkill("react")}
        >
          <i className="  devicon-react-plain colored " />
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
            related.tailwind ? "Skills-icon" : "Skills-icon opacity-30"
          }
          onClick={(e) => setSelectedSkill("tailwind")}
        >
          <i className=" devicon-tailwindcss-original-wordmark colored " />
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
          className={related.docker ? "Skills-icon" : "Skills-icon opacity-30"}
          onClick={(e) => setSelectedSkill("docker")}
        >
          <i className=" devicon-docker-plain colored " />
        </div>
        <div
          className={
            related.postgresql ? "Skills-icon" : "Skills-icon opacity-30"
          }
          onClick={(e) => setSelectedSkill("postgresql")}
        >
          <i className="devicon-postgresql-plain colored"></i>
        </div>
        <div
          className={
            related.electron ? "Skills-icon" : "Skills-icon opacity-30"
          }
          onClick={(e) => setSelectedSkill("electron")}
        >
          <i className="devicon-electron-original colored"/>
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
      <div className={selectedSkill === "javascript" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~JavaScript~</h1>
        <h1 className="Skills-info pt-5">
          I tend to use the JS stack and related technologies whenever <br />
          tackling front-end or back-end development tasks.
        </h1>
      </div>
      <div className={selectedSkill === "nodejs" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~Node.js~</h1>
        <h1 className="Skills-info pt-5">
          My preferred method of back-end and script development.
        </h1>
      </div>
      <div className={selectedSkill === "typescript" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~TypeScript~</h1>
        <h1 className="Skills-info pt-5">
          Used with the JS stack for efficiency and productivity.{" "}
        </h1>
      </div>
      <div className={selectedSkill === "react" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~React~</h1>
        <h1 className="Skills-info pt-5">
          My personal favorite framework for front-end development in the
          workplace
          <br className="hidden md:block" /> and for personal projects. I use
          this tool to create reactive components to give{" "}
          <br className="hidden md:block" />
          instant feedback to users along with project organization.
        </h1>
      </div>
      <div className={selectedSkill === "python" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~Python~</h1>
        <h1 className="Skills-info pt-5">
          Used for quick problem solving and data sciences.
        </h1>
      </div>
      <div className={selectedSkill === "rails" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~Ruby on Rails~</h1>
        <h1 className="Skills-info pt-5">
          Most of my professional back-end experience has used RoR to <br />
          create scalable applications in short periods of time.
        </h1>
      </div>
      <div className={selectedSkill === "express" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~Express~</h1>
        <h1 className="Skills-info pt-5">
          Paired with Node.js for the back-end of applications to get them up
          and running quickly.
        </h1>
      </div>
      <div className={selectedSkill === "mongodb" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~MongoDB~</h1>
        <h1 className="Skills-info pt-5">
          Occasionally used along side the JS stack for its simplicity and
          flexibility.
        </h1>
      </div>
      <div className={selectedSkill === "html" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~HTML5~</h1>
        <h1 className="Skills-info pt-5">
          I use both HTML5 and CSS3 so often they're pretty much engraved in my
          brain.
        </h1>
      </div>
      <div className={selectedSkill === "css" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~CSS3~</h1>
        <h1 className="Skills-info pt-5">
          I use both HTML5 and CSS3 so often they're pretty much engraved in my
          brain.
        </h1>
      </div>
      <div className={selectedSkill === "tailwind" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~tailwind~</h1>
        <h1 className="Skills-info pt-5">
          I prefer to design with tailwind when a project needs more flexibility
          in the format <br className="hidden md:block" />
          and has unique requirements.
        </h1>
      </div>
      <div className={selectedSkill === "bootstrap" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~Bootstrap~</h1>
        <h1 className="Skills-info pt-5">
          I prefer to design with Bootstrap when a project needs to be produced
          quicker and <br className="hidden md:block" /> do not require unique
          formatting.
        </h1>
      </div>
      <div className={selectedSkill === "postgresql" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~PostgreSQL~</h1>
        <h1 className="Skills-info pt-5">
          Used when needing to store large amounts of data safely and
          efficiently.
        </h1>
      </div>
      <div className={selectedSkill === "electron" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~Electron~</h1>
        <h1 className="Skills-info pt-5">
          My go to technology when I need to quickly create a clean desktop{" "}
          <br className="hidden md:block" /> app/tool that others can utilize.
        </h1>
      </div>
      <div className={selectedSkill === "docker" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~Docker~</h1>
        <h1 className="Skills-info pt-5">
          Used in most of my professional work to make collaboration between
          developers
          <br className="hidden md:block" /> simple thus saving time and
          preventing unnecessary headaches.
        </h1>
      </div>
      <div className={selectedSkill === "wordpress" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~Wordpress~</h1>
        <h1 className="Skills-info pt-5">
          Has helped me get numerous projects up and running quickly and with
          ease.
        </h1>
      </div>
      <div className={selectedSkill === "adobe" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~Adobe Suite~</h1>
        <h1 className="Skills-info pt-5">
          Amazing tools for creativity. Specialize in Premiere Pro and
          Photoshop.
        </h1>
      </div>
      <div className={selectedSkill === "office" ? "" : "hidden"}>
        <h1 className="Skills-info pt-5">~Microsoft Office~</h1>
        <h1 className="Skills-info pt-5">
          Used throughout my entire educational and professional careers for
          data <br className="hidden md:block" /> display and organization.
        </h1>
      </div>
    </div>
  )
}

export default SkillsComp
