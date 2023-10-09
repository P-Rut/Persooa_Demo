import { useState } from "react"
import Countdown from "./Countdown"
import Form from "./Form"
import Gratitude from "./Gratitude"
import Header from "./Header"

const Popup = ({ show, setShow }: any) => {
  const [isFinished, setIsFinished] = useState(false)
  const [formData, setFormData] = useState({})
  console.log(formData)

  return (
    <>
      {isFinished ? (
        <>
          {show === true ? (
            <Gratitude setClose={setShow} data={formData} />
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          {show === true ? (
            <div className="h-screen w-screen bg-black bg-opacity-[35%] flex justify-center items-center">
              <div className="w-[390px] sm:w-[818px] sm:bg-popup-pattern sm:bg-cover bg-white sm:bg-secondary-blue-100 rounded-[5px] flex flex-col items-center sm:items-start m-[18px] sm:m-0 z-30">
                <Header setClose={setShow} />
                <div className="flex flex-col sm:flex-row px-[18px] w-full sm:px-[40px] sm:pb-[40px]">
                  <div className="flex flex-col sm:pr-[40px]">
                    <Form
                      finished={isFinished}
                      setFinished={setIsFinished}
                      setData={setFormData}
                    />
                  </div>
                  <Countdown />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </>
  )
}

export default Popup
