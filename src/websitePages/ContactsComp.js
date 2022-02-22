import React, { useState, useRef } from "react"
import "./TabDesign.css"
import emailjs from "emailjs-com"

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

  const form = useRef()

  const updateField = (event) => {
    event.preventDefault()
    const targetName = event.target.ariaLabel
    const targetValue = event.target.value

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

    setValidation({ ...validation, newPage: false })

    const { nameVal, emailVal, reasonVal } = validation

    if (nameVal && emailVal && reasonVal) {
      emailjs
        .sendForm(
          "service_2h699hs",
          "template_r7s0frm",
          form.current,
          "user_FXKwDor3J7yHQgZTagx0V"
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )

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

  // React.useEffect(() => {
  //   console.log(inputFields)
  //   console.log(validation)
  // }, [inputFields, validation])

  return (
    <div>
      <div className="Contact-statement w-96 pb-10 px-5">
        <p>
          I welcome an opportunity to learn and grow in an environment that
          fosters curiosity and growth. Please let me know if you think this
          fits with your culture and needs.{" "}
        </p>
      </div>

      <form
        className="w-80 items-center justify-center mx-auto"
        ref={form}
        onSubmit={(e) => submitHandler(e)}
      >
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
              placeholder="Name"
              aria-label="name"
              value={inputFields.name}
              name="name"
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
              name="email"
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
              placeholder="Anything you want me to know before reaching out?"
              aria-label="reason"
              value={inputFields.reason}
              name="reason"
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

      <div class="w-80 items-center justify-center mx-auto">
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

      {/* Hey No Cheating */}
      <div className={hiddenCode === "42" ? "" : "hidden"}>
        <h1 className="text-sm pb-10">
          Wow, you either know binary or are a huge fan of THGTTG. <br /> Thanks
          for playing along!
        </h1>
      </div>
    </div>
  )
}

export default ContactsComp
