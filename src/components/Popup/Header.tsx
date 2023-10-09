import React from "react"
import CloseButton from "./Buttons/CloseButton"

const Header = ({ setClose }: any) => {
  const handleClose = () => {
    setClose(false)
  }
  return (
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
        <CloseButton setClose={handleClose} />
      </div>
      <h2 className="uppercase text-primary-blue font-medium text-[16px] mt-[25px] mb-0 sm:mb-[50px] sm:mt-0">
        za zapis do newslettera
      </h2>
    </div>
  )
}

export default Header
