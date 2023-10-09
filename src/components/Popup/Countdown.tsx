import React from "react"
import { useState } from "react"

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  })
  const updateCountdown = () => {
    const countDate = new Date().getTime()
    const midnight = new Date().setHours(24, 0, 0, 0)
    const gap = countDate - midnight

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const displayHour = Math.floor((gap % day) / hour) * -1
    const displayMinute = Math.floor((gap % hour) / minute) * -1
    const displaySecond = Math.floor((gap % minute) / second) * -1

    setCountdown({
      hours: displayHour.toString().padStart(2, "0"),
      minutes: displayMinute.toString().padStart(2, "0"),
      seconds: displaySecond.toString().padStart(2, "0"),
    })
  }

  setInterval(updateCountdown, 1000)

  return (
    <div className="w-full flex flex-col justify-center items-center sm:items-end sm:justify-end mb-[73px] sm:mb-0">
      <h1 className="uppercase text-primary-blue text-[16px] sm:text-[14px] mb-[17px] font-medium sm:text-white">
        ważne przez
      </h1>
      <div className="flex items-center justify-center gap-[16px] ">
        <div className="flex flex-col justify-center items-center bg-primary-blue bg-opacity-[10%] sm:bg-white sm:bg-opacity-[13%] text-primary-blue rounded-[5px] px-[16px] py-[10px] sm:px-[4px] sm:py-[6px]">
          <span className="text-[36px] sm:text-[24px] sm:text-white font-semibold flex flex-col justify-center items-center w-[50px]">
            {countdown.hours}
            <p className="text-[12px] sm:text-[10px] sm:text-white font-light">
              godzin
            </p>
          </span>
        </div>
        <div className="flex flex-col justify-center items-center bg-primary-blue bg-opacity-[10%] sm:bg-white sm:bg-opacity-[13%] text-primary-blue rounded-[5px] px-[16px] py-[10px] sm:px-[4px] sm:py-[6px]">
          <span className="text-[36px] sm:text-[24px] sm:text-white font-semibold flex flex-col justify-center items-center w-[50px]">
            {countdown.minutes}
            <p className="text-[12px] sm:text-[10px] sm:text-white font-light">
              minut
            </p>
          </span>
        </div>
        <div className="flex flex-col justify-center items-center bg-primary-blue bg-opacity-[10%] sm:bg-white sm:bg-opacity-[13%] text-primary-blue rounded-[5px] px-[16px] py-[10px] sm:px-[4px] sm:py-[6px]">
          <span className="text-[36px] sm:text-[24px] sm:text-white font-semibold flex flex-col justify-center items-center w-[50px]">
            {countdown.seconds}
            <p className="text-[12px] sm:text-[10px] sm:text-white font-light">
              sekund
            </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Countdown
