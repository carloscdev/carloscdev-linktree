import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./assets/styles/main.css"
import reportWebVitals from "./reportWebVitals"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fas,
  faLink,
  faChalkboard,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons"
import { faAddressCard } from "@fortawesome/free-regular-svg-icons"
import {
  faTwitter,
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"

library.add(
  fas,
  faTwitter,
  faLink,
  faAddressCard,
  faYoutube,
  faFacebook,
  faInstagram,
  faLinkedin,
  faChalkboard,
  faChalkboardUser,
  faGithub,
  faCodepen
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
