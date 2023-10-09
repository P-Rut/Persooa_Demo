import { useState, useEffect } from "react"
import Countdown from "./Countdown"

import Form from "./Form"
import CloseButton from "./Buttons/CloseButton"
import Gratitude from "./Gratitude"

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
              <div className="w-[390px] sm:w-[818px] bg-white sm:bg-secondary-blue-100 rounded-[5px] flex flex-col items-center sm:items-start m-[18px] sm:m-0 z-30">
                <div className="w-full flex flex-col justify-center items-center sm:items-start mb-[50px] sm:px-[40px] sm:mb-0 z-50">
                  <div className="flex sm:flex-row sm:justify-between w-full pl-[60px] sm:pl-0">
                    <div className=" flex flex-col sm:flex-row gap-5 items-center justify-center ">
                      <div className="flex items-baseline h-[140px] font-extrabold w-full">
                        <h1 className="uppercase text-[128px] sm:text-[96px] text-primary-blue">
                          10
                        </h1>
                        <h1 className="text-[48px] text-primary-blue">%</h1>
                      </div>
                      <h1 className="uppercase text-[64px] sm:text-[96px] font-extrabold text-primary-blue">
                        rabatu
                      </h1>
                    </div>

                    <CloseButton setClose={setShow} />
                  </div>
                  <h2 className="uppercase text-primary-blue font-medium text-[16px] mt-[25px] mb-0 sm:mb-[50px] sm:mt-0">
                    za zapis do newslettera
                  </h2>
                </div>
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
