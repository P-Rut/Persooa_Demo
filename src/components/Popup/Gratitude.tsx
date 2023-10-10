import React, { useEffect } from "react"
import CloseButton from "./Buttons/CloseButton"
import { useState } from "react"
import { formData } from "../../types"

type PropsType = {
  setClose: React.Dispatch<React.SetStateAction<boolean>>
  data: formData | undefined
}

const Gratitude = ({ setClose, data }: PropsType) => {
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
  }, [countdown, setClose])

  return (
    <div>
      <div className="h-screen w-screen bg-black bg-opacity-[35%] flex justify-center items-center">
        <div className=" w-[390px] sm:w-[818px] sm:h-[500px] h-[890px] bg-white sm:bg-gratitude-pattern sm:bg-cover  rounded-[5px] flex flex-col sm:flex-row items-center justify-center sm:items-start m-[18px] sm:m-0 z-30 px-[18px] sm:px-[40px] ">
          <div className="flex justify-end w-full sm:w-fit sm:order-last order-first">
            <CloseButton setClose={handleClose} />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center sm:items-start  px-0  gap-[38px] sm:gap-0">
            <div className="h-full  w-full  flex justify-center items-center sm:items-start flex-col">
              <h1 className="text-primary-blue text-[48px] uppercase font-extrabold mb-5">
                Dziękujemy
              </h1>
              <div className="text-primary-blue text-[16px] text-center sm:text-start">
                <span>Na adres </span>
                <span className="font-semibold">{data?.email} </span>
                <span> wysłaliśmy kod rabatowy.</span>
              </div>
            </div>
            <div className="h-fit  w-full sm:w-4/5 flex sm:items-end justify-center sm:justify-start">
              <p className="text-[#585D72] text-opacity-[35%] text-[12px] pb-[26px]">
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
