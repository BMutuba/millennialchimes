"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Logo from "../components/Logo";

const SignUp = () => {
  interface value {
    [key: string]: string;
  }
  const [slideIndex, setSlideIndex] = React.useState<number>(0);
  const [values, setValues] = React.useState<value>({});
  const router = useRouter();

  const slides = [
    [
      {
        title: "first name",
        buttonText: "Next",
        type: "text",
      },
      {
        title: "last name",
        buttonText: "Next",
        type: "text",
      },
    ],
    [
      {
        title: "Email",
        buttonText: "Next",
        type: "email",
      },
    ],
    [
      {
        title: "Password",
        type: "password",
      },
      {
        title: "Confirm Password",
        type: "password",
      },
    ],
  ];

  const handleSlideForward = () => {
    if (slideIndex === slides.length - 1) {
      // submit form
      console.log(values);
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
      <div className="flex flex-col  -m-3 sm:flex-row sm:gap-10 p-3 sm:p-0 items-center  justify-center h-screen w-screen">
        <div className="flex w-full flex-col justify-between sm:h-full  sm:flex-1 sm:bg-black sm:pl-3">
          <Logo />
          <h1 className="text-black font-bold xsm:mt-36 xsm:mb-10 self-center sm:text-white sm:m-auto text-2xl sm:text-3xl  ">
            Welcome back
          </h1>
        </div>

        <div className="flex flex-col flex-1  w-96  ">
          <button
            className=" flex gap-3 h-10 w-fit "
            onClick={() => handleSlideBackwards()}
          >
            <Image
              src="/icons/backArrow.svg"
              width={20}
              height={20}
              alt="<--"
            />
            Back {slideIndex === 0 && "to home"}
          </button>
          {
            // @ts-ignore
            slides[slideIndex].map((slide, index) => (
              <form
                className="flex flex-col w-full pb-10  sm:max-w-80"
                action="submit"
                key={index}
              >
                <label className="text-white font-bold w-fit px-2 bg-black">
                  {slide.title}
                </label>
                <input
                  className="border border-black active:border-black focus:border-black p-2 w-full"
                  type={slide.type}
                  value={values[slide.title] || ""} // Use the value from the values object, or an empty string if it's not set
                  onChange={(e) => {
                    // Create a new object with the same values as the old one, but with the value for this index updated
                    const newValues = {
                      ...values,
                      [slide.title]: e.target.value,
                    };
                    setValues(newValues);
                  }}
                />
              </form>
            ))
          }

          <button
            className="bg-black flex justify-center items-center  text-white p-2 text-lg w-full sm:max-w-80"
            onClick={() => handleSlideForward()}
          >
            <p className="flex-1">
              {!(slideIndex === slides.length - 1) ? "Next" : "Submit"}
            </p>

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

export default SignUp;
