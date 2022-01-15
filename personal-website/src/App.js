import logo from "./logo.svg"
import "./App.css"
import HomePage from "./websitePages/HomePage"
import { Route, BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <HomePage />
      </div>
    </Router>
  )
}

export default App
