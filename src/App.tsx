import "./App.css"
import Popup from "./components/Popup/Popup"
import { useState, useEffect } from "react"

function App() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true)
    }, 2000)
  }, [])

  return (
    <div className="App w-screen h-screen bg-hero-pattern bg-cover">
      <Popup show={showPopup} setShow={setShowPopup} />
    </div>
  )
}

export default App
