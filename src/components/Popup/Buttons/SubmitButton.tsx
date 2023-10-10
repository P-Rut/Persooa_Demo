import React from "react"

const SubmitButton = () => {
  return (
    <div className="bg-primary-blue w-full flex justify-center items-center text-white mt-0 sm:mt-[62px]  rounded-[5px] text-[14px] cursor-pointer hover:bg-secondary-blue-100 hover:text-primary-blue transition">
      <button type="submit" className="uppercase w-full py-[17px]">
        zapisz się
      </button>
    </div>
  )
}

export default SubmitButton
