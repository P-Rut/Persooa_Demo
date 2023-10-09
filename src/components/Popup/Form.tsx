import React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import SubmitButton from "./Buttons/SubmitButton"

const Form = ({ setFinished, setData }: any) => {
  const [formData, setFormData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onFormSubmit = async (data: any) => {
    try {
      setIsLoading(true)
      setFormData(data)
      setData(data)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
    setTimeout(() => {
      setFinished(true)
    }, 2000)
  }
  return (
    <>
      <form
        className="flex flex-col gap-[10px] w-full"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <div className="bg-white px-[12px] py-[14px] sm:py-[10px] flex gap-[12px] text-[16px] sm:text-[14px] border-secondary-blue-100 border text-primary-gray  rounded-[5px]">
          <div className="w-[22px] h-[22px] flex justify-center items-center">
            <svg
              className="fill-secondary-blue w-[22px] h-[22px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#a)">
                <path d="M11 11a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm3.667-5.5a3.666 3.666 0 1 1-7.333 0 3.666 3.666 0 0 1 7.333 0ZM22 20.167C22 22 20.167 22 20.167 22H1.833S0 22 0 20.167c0-1.834 1.833-7.334 11-7.334s11 5.5 11 7.334Zm-1.833-.008c-.002-.45-.283-1.807-1.526-3.05-1.195-1.196-3.444-2.442-7.641-2.442-4.198 0-6.446 1.246-7.641 2.442-1.243 1.243-1.522 2.6-1.526 3.05h18.334Z" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h22v22H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <input
            type="text"
            title="name"
            {...register("name")}
            placeholder="Imię i nazwisko"
            className="h-full w-full placeholder:text-secondary-blue"
          />
        </div>
        {errors.email?.type === "required" ||
        errors.email?.type === "pattern" ? (
          <>
            <div className="bg-white px-[12px] py-[14px] border sm:py-[10px] flex gap-[12px] text-[16px] sm:text-[14px] border-red-500  text-red-500  rounded-[5px]">
              <div className="w-[22px] h-[22px] flex justify-center items-center">
                <svg
                  className="w-[22px] h-[22px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g clip-path="url(#a)">
                    <path
                      fill="#f40505"
                      d="M0 5.5a2.75 2.75 0 0 1 2.75-2.75h16.5A2.75 2.75 0 0 1 22 5.5v11a2.75 2.75 0 0 1-2.75 2.75H2.75A2.75 2.75 0 0 1 0 16.5v-11Zm2.75-1.375A1.375 1.375 0 0 0 1.375 5.5v.298L11 11.573l9.625-5.775V5.5a1.375 1.375 0 0 0-1.375-1.375H2.75Zm17.875 3.277-6.473 3.884 6.473 3.983V7.402Zm-.047 9.454-7.755-4.773L11 13.178l-1.823-1.093-7.755 4.77a1.375 1.375 0 0 0 1.328 1.021h16.5a1.375 1.375 0 0 0 1.328-1.019ZM1.375 15.27l6.473-3.983-6.473-3.884v7.867Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h22v22H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <input
                title="email"
                type="email"
                placeholder="E-mail"
                {...register("email")}
                className="h-full w-full placeholder:text-red-500"
              />
              <svg
                width=""
                height="20"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.63188 4.2625C9.61268 4.07131 9.63378 3.87822 9.6938 3.69569C9.75381 3.51315 9.85142 3.34522 9.98033 3.20273C10.1092 3.06024 10.2666 2.94634 10.4422 2.86839C10.6178 2.79044 10.8079 2.75017 11 2.75017C11.1921 2.75017 11.3822 2.79044 11.5578 2.86839C11.7334 2.94634 11.8908 3.06024 12.0197 3.20273C12.1486 3.34522 12.2462 3.51315 12.3062 3.69569C12.3662 3.87822 12.3873 4.07131 12.3681 4.2625L11.8346 12.9937C11.814 13.2008 11.7172 13.3928 11.5629 13.5324C11.4087 13.6721 11.2081 13.7494 11 13.7494C10.7919 13.7494 10.5913 13.6721 10.4371 13.5324C10.2828 13.3928 10.186 13.2008 10.1654 12.9937L9.63188 4.2625ZM9.625 16.5C9.625 16.1353 9.76987 15.7856 10.0277 15.5277C10.2856 15.2699 10.6353 15.125 11 15.125C11.3647 15.125 11.7144 15.2699 11.9723 15.5277C12.2301 15.7856 12.375 16.1353 12.375 16.5C12.375 16.8647 12.2301 17.2144 11.9723 17.4723C11.7144 17.7301 11.3647 17.875 11 17.875C10.6353 17.875 10.2856 17.7301 10.0277 17.4723C9.76987 17.2144 9.625 16.8647 9.625 16.5Z"
                  fill="#FF2323"
                />
              </svg>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white px-[12px] py-[14px] border sm:py-[10px] flex gap-[12px] text-[16px] sm:text-[14px] border-secondary-blue-100  text-primary-gray  rounded-[5px]">
              <div className="w-[22px] h-[22px] flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="none"
                >
                  <g clip-path="url(#a)">
                    <path
                      fill="#AEB9E0"
                      d="M0 5.5a2.75 2.75 0 0 1 2.75-2.75h16.5A2.75 2.75 0 0 1 22 5.5v11a2.75 2.75 0 0 1-2.75 2.75H2.75A2.75 2.75 0 0 1 0 16.5v-11Zm2.75-1.375A1.375 1.375 0 0 0 1.375 5.5v.298L11 11.573l9.625-5.775V5.5a1.375 1.375 0 0 0-1.375-1.375H2.75Zm17.875 3.277-6.473 3.884 6.473 3.983V7.402Zm-.047 9.454-7.755-4.773L11 13.178l-1.823-1.093-7.755 4.77a1.375 1.375 0 0 0 1.328 1.021h16.5a1.375 1.375 0 0 0 1.328-1.019ZM1.375 15.27l6.473-3.983-6.473-3.884v7.867Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h22v22H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <input
                title="email"
                type="email"
                placeholder="E-mail"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="h-full w-full placeholder:text-secondary-blue"
              />
            </div>
          </>
        )}

        <div className="flex w-full gap-[13px] mt-[13px] sm:mt-0">
          <div className="w-[22px] h-[22px] rounded-[5px] bg-primary-blue bg-opacity-[10%] flex items-center justify-center text-primary-blue">
            <input
              {...register("privacy_policy", { required: true })}
              type="checkbox"
              className="w-[22px] h-[22px] bg-gray-100"
            />
          </div>
          {errors.privacy_policy?.type === "required" ? (
            <>
              <p className="text-[16px] text-red-500 sm:text-[10px]">
                Zgadzam się na otrzymywanie drogą mailową wiadomości
                marketingowych oraz akceptuję politykę prywatności.
              </p>
            </>
          ) : (
            <>
              <p className="text-[16px] text-secondary-blue sm:text-[10px]">
                Zgadzam się na otrzymywanie drogą mailową wiadomości
                marketingowych oraz akceptuję politykę prywatności.
              </p>
            </>
          )}
        </div>
        <div className="w-full mb-[52px] mt-[40px] sm:mt-0 sm:mb-0">
          {isLoading ? (
            <div className="bg-primary-blue w-full py-[9px] flex justify-center items-center text-white mt-0 sm:mt-[62px]  rounded-[5px] text-[14px] cursor-pointer hover:bg-secondary-blue-100 hover:text-primary-blue transition">
              <svg
                className="animate-spin "
                width="36"
                height="36"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39 26C39 28.5712 38.2376 31.0846 36.8091 33.2224C35.3807 35.3602 33.3503 37.0265 30.9749 38.0104C28.5994 38.9944 25.9856 39.2518 23.4638 38.7502C20.9421 38.2486 18.6257 37.0105 16.8076 35.1924C14.9895 33.3743 13.7514 31.0579 13.2498 28.5362C12.7482 26.0144 13.0056 23.4006 13.9896 21.0251C14.9735 18.6497 16.6398 16.6193 18.7776 15.1909C20.9154 13.7624 23.4288 13 26 13"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="square"
                />
              </svg>
            </div>
          ) : (
            <SubmitButton />
          )}
        </div>
      </form>
    </>
  )
}

export default Form
