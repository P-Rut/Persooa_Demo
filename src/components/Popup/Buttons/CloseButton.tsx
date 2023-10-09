import React from "react"

const CloseButton = ({ setClose }: any) => {
  return (
    <button
      onClick={() => setClose(false)}
      className="h-[40px] mt-[18px] sm:mt-[39px] w-[40px] rounded-[5px] bg-primary-blue bg-opacity-[10%] flex justify-center items-center hover:bg-primary-blue cursor-pointer hover:fill-white  transition"
    >
      <svg
        className=" fill-primary-blue hover:fill-white"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
      >
        <path d="M8.13 8.13a.875.875 0 0 1 1.24 0L14 12.764l4.63-4.633a.877.877 0 0 1 1.24 1.24L15.236 14l4.632 4.63a.875.875 0 1 1-1.238 1.24L14 15.236 9.37 19.87a.875.875 0 0 1-1.43-.954.877.877 0 0 1 .19-.284L12.764 14 8.13 9.37a.875.875 0 0 1 0-1.24Z" />
      </svg>
    </button>
  )
}

export default CloseButton
