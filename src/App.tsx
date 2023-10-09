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
    <div className="App w-screen h-screen sm:bg-page-pattern bg-mobile-pattern bg-cover bg-center">
      <Popup show={showPopup} setShow={setShowPopup} />
    </div>
  )
}

export default App
