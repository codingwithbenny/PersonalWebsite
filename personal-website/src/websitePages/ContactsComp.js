import React, { useState } from "react"
import "./TabDesign.css"

const ContactsComp = () => {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    reason: "",
  })
  const [validation, setValidation] = useState({
    nameVal: false,
    emailVal: false,
    reasonVal: false,
    newPage: true,
  })

  const [hiddenCode, setHiddenCode] = useState("")

  const updateField = (event) => {
    event.preventDefault()
    const targetName = event.target.ariaLabel
    const targetValue = event.target.value

    console.log(event)
    console.log(targetValue)

    setInputFields((input) => ({ ...inputFields, [targetName]: targetValue }))
  }

  const updateCode = (event) => {
    event.preventDefault()
    //const targetName = event.target.ariaLabel
    const targetValue = event.target.value

    setHiddenCode(targetValue)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    console.log(validation)

    setValidation({ ...validation, newPage: false })

    const { nameVal, emailVal, reasonVal } = validation

    if (nameVal && emailVal && reasonVal) {
      console.log("itran")
      setInputFields({ name: "", email: "", reason: "" })
      setValidation({
        ...validation,
        nameVal: false,
        emailVal: false,
        reasonVal: false,
        newPage: true,
      })
    }
  }

  React.useEffect(() => {
    if (inputFields.name !== "") {
      setValidation({ ...validation, nameVal: true })
    } else {
      setValidation({ ...validation, nameVal: false })
    }
  }, [inputFields.name])

  React.useEffect(() => {
    if (
      !inputFields.email.includes(" ") &&
      inputFields.email.includes("@") &&
      inputFields.email.includes(".") &&
      inputFields.email.length !== ""
    ) {
      setValidation({ ...validation, emailVal: true })
    } else {
      setValidation({ ...validation, emailVal: false })
    }
  }, [inputFields.email])

  React.useEffect(() => {
    if (inputFields.reason !== "") {
      setValidation({ ...validation, reasonVal: true })
    } else {
      setValidation({ ...validation, reasonVal: false })
    }
  }, [inputFields.reason])

  React.useEffect(() => {
    console.log(inputFields)
    console.log(validation)
  }, [inputFields, validation])

  return (
    <div>
      <form className="" onSubmit={(e) => submitHandler(e)}>
        <div className="items-center py-2">
          <div
            className={
              !validation.nameVal && !validation.newPage
                ? "border-b border-red-500 mb-10 pb-2"
                : "border-b border-sky-800 mb-10 pb-2"
            }
          >
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Who are you?"
              aria-label="name"
              value={inputFields.name}
              onChange={(e) => updateField(e)}
            />
          </div>
          <div
            className={
              !validation.emailVal && !validation.newPage
                ? "border-b border-red-500 mb-10 pb-2"
                : "border-b border-sky-800 mb-10 pb-2"
            }
          >
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Email"
              aria-label="email"
              value={inputFields.email}
              onChange={(e) => updateField(e)}
            />
          </div>
          <div
            className={
              !validation.reasonVal && !validation.newPage
                ? "border-b border-red-500 mb-3 pb-2"
                : "border-b border-sky-800 mb-3 pb-2"
            }
          >
            <textarea
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Let's Talk"
              aria-label="reason"
              value={inputFields.reason}
              onChange={(e) => updateField(e)}
            />
          </div>
          <button
            className={
              !validation.newPage
                ? "flex-shrink-0 border-transparent border-4 hover:scale-110 duration-150 text-red-500  text-md py-1 px-2 rounded"
                : "flex-shrink-0 border-transparent border-4 hover:scale-110 duration-150 text-sky-800  text-md py-1 px-2 rounded"
            }
            type="submit"
          >
            {">"}
            {">"}
            {">"}
          </button>
        </div>
      </form>

      <div>
        <div className="border-b border-sky-800 mb-10 pb-2 mt-10">
          <input
            className="Code-input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-sm"
            type="number"
            placeholder="Did you find the hidden code?"
            aria-label="code"
            value={hiddenCode}
            onChange={(e) => updateCode(e)}
          />
        </div>
      </div>
      <div className={hiddenCode === "42" ? "" : "hidden"}>
        <h1 className="text-sm">Video in Works</h1>
      </div>
    </div>
  )
}

export default ContactsComp
