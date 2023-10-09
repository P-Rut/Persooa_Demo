import React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import SubmitButton from "./Buttons/SubmitButton"
import { CheckIcon } from "../../assets/Icons/CheckIcon"
import { Loader } from "../../assets/Icons/Loader"
import { PersonIcon } from "../../assets/Icons/PersonIcon"
import { MailIcon } from "../../assets/Icons/MailIcon"
import { AlertIcon } from "../../assets/Icons/AlertIcon"
import { MailAlert } from "../../assets/Icons/MailAlert"

type FormData = {
  name: string
  email: string
  privacy_policy: boolean
}

const Form = ({ setFinished, setData }: any) => {
  const [formData, setFormData] = useState<FormData>()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" })

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
        <div className="bg-white px-[12px] py-[14px] sm:py-[10px] flex gap-[12px] text-[16px] sm:text-[14px] border-secondary-blue-100 border text-secondary-blue rounded-[5px]">
          <div className="w-[22px] h-[22px] flex justify-center items-center">
            <PersonIcon />
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
            <div className="bg-white px-[12px] py-[14px] border sm:py-[10px] flex gap-[12px] text-[16px] sm:text-[14px] border-red-500  text-red-500 rounded-[5px]">
              <div className="w-[22px] h-[22px] flex justify-center items-center">
                <MailAlert />
              </div>
              <input
                title="email"
                type="email"
                placeholder="E-mail"
                {...register("email")}
                className="h-full w-full placeholder:text-red-500"
              />
              <div className="flex justify-center items-center">
                <AlertIcon />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white px-[12px] py-[14px] border sm:py-[10px] flex gap-[12px] text-[16px] sm:text-[14px] border-secondary-blue-100 text-secondary-blue rounded-[5px]">
              <div className="w-[22px] h-[22px] flex justify-center items-center">
                <MailIcon />
              </div>
              <input
                title="email"
                type="email"
                placeholder="E-mail"
                {...register("email", {
                  maxLength: 320,
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="h-full w-full placeholder:text-secondary-blue"
              />
            </div>
          </>
        )}

        <div className="flex w-full gap-[13px] mt-[13px] sm:mt-0">
          <div className="w-[22px] h-[22px] rounded-[5px] flex items-center justify-center text-primary-blue">
            <input
              id="privacy"
              {...register("privacy_policy")}
              type="checkbox"
              className="
              relative peer shrink-0
              appearance-none w-5 h-5  bg-white rounded-sm 
              mt-1 border border-secondary-blue checked:bg-primary-blue checked:bg-opacity-10 checked:border-none"
            />
            <CheckIcon />
          </div>
          <p className="text-[16px] text-primary-blue sm:text-secondary-blue sm:text-[10px]">
            Zgadzam się na otrzymywanie drogą mailową wiadomości marketingowych
            oraz akceptuję{" "}
            <span className="underline underline-offset-[5px]">
              politykę prywatności.
            </span>
          </p>
        </div>
        <div className="w-full mb-[52px] mt-[40px] sm:mt-0 sm:mb-0">
          {isLoading ? (
            <div className="bg-primary-blue w-full py-[9px] flex justify-center items-center text-white mt-0 sm:mt-[62px]  rounded-[5px] text-[14px] cursor-pointer hover:bg-secondary-blue-100 hover:text-primary-blue transition">
              <Loader />
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
