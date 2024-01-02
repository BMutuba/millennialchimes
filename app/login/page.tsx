"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Logo from "../components/Logo";

const Login = () => {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  interface slide {
    title: string;
    buttonText?: string;
    type?: string;
  }

  const slides: slide[] = [
    {
      title: "Email",
      buttonText: "Next",
      type: "email",
    },
    {
      title: "Password",
      type: "password",
    },
  ];

  const handleSlideForward = () => {
    if (slideIndex === slides.length - 1) {
      // submit form
      console.log("submit form");
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const handleSlideBackwards = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      // go back to home
      console.log("go back to home");
      router.push("/");
    }
  };
  return (
    <>
      <div className="flex flex-col  -m-3 sm:flex-row gap-10 p-3 sm:p-0 items-center   sm:h-screen w-screen">
        <div className="flex w-full sm:h-full flex-col  h-26 sm:justify-between  sm:flex-1 sm:bg-black sm:pl-3">
          <Logo />
          <h1 className="text-black font-bold self-center mt-40 sm:text-white sm:m-auto text-2xl sm:text-3xl  ">
            Welcome back
          </h1>
        </div>

        <div className="flex flex-col flex-1 items- w-96 sm:p-3  ">
          <button
            className=" flex gap-3 h-10 "
            onClick={() => handleSlideBackwards()}
          >
            <Image
              src="/icons/backArrow.svg"
              width={20}
              height={20}
              alt="<--"
            />
            Back
          </button>
          <form
            className="flex flex-col w-full pb-10  sm:max-w-80"
            action="submit"
          >
            <label className="text-white font-bold w-fit px-2 bg-black">
              {slides[slideIndex].title}
            </label>
            <input
              className="border border-black active:border-black focus:border-black p-2 w-full"
              type={slides[slideIndex].type}
            />
          </form>

          <button
            className="bg-black flex justify-center items-center  text-white p-2 text-lg w-full sm:max-w-80"
            onClick={() => handleSlideForward()}
          >
            <p className="flex-1">{slides[slideIndex].buttonText || "Login"}</p>

            {slideIndex !== slides.length - 1 && (
              <Image
                src="/icons/nextArrow.svg"
                width={25}
                height={20}
                alt="<--"
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
