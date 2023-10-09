import React from "react"
import { CloseIcon } from "../../../assets/Icons/CloseIcon"

const CloseButton = ({ setClose }: any) => {
  return (
    <button
      onClick={() => setClose(false)}
      className="h-[40px] mt-[18px] sm:mt-[39px] w-[40px] rounded-[5px] bg-primary-blue bg-opacity-[10%] flex justify-center items-center hover:bg-primary-blue cursor-pointer hover:fill-white  transition"
    >
      <CloseIcon />
    </button>
  )
}

export default CloseButton
