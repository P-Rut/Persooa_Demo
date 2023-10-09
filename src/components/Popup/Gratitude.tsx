import React, { useEffect } from "react"
import CloseButton from "./Buttons/CloseButton"
import { useState } from "react"

const Gratitude = ({ setClose, data }: any) => {
  const [countdown, setCountdown] = useState(4)

  const handleClose = () => {
    setClose(false)
  }

  useEffect(() => {
    if (countdown === 0) {
      setClose(false)
    }

    const timer = setInterval(() => {
      setCountdown((prevSeconds) => prevSeconds - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [countdown])

  return (
    <div>
      <div className="h-screen w-screen bg-black bg-opacity-[35%] flex justify-center items-center">
        <div className=" w-[390px] sm:w-[818px] sm:h-[500px] h-[890px] bg-white sm:bg-secondary-blue-100  rounded-[5px] flex flex-col sm:flex-row items-center justify-center sm:items-start m-[18px] sm:m-0 z-30 px-[18px] sm:px-[40px] ">
          <div className="flex justify-end w-full sm:w-fit sm:order-last order-first">
            <CloseButton setClose={handleClose} />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center sm:items-start px-[40px] sm:px-0 gap-[38px]">
            <div className="h-full flex justify-end flex-col">
              <h1 className="text-primary-blue text-[48px] uppercase font-extrabold">
                Dziękujemy
              </h1>
              <div className="text-primary-blue text-[16px] sm:text-start">
                <span>Na adres </span>
                <span className="font-semibold">{data.email} </span>
                <span> wysłaliśmy kod rabatowy.</span>
              </div>
            </div>
            <div className="h-full flex items-end">
              <p className="text-[#585D72] text-opacity-[35%] text-[12px]">
                Zamknięcie za {countdown}s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gratitude
