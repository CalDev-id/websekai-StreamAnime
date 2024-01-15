"use client";

import { useState } from "react";
import Image from "next/image";


// import route from "vendor/tightenco/ziggy/src/js";

const SignUp = () => {
    const [dark, setDark] = useState(true);
    const [home, setHome] = useState(false);

    if (home === true) {
        return window.location.href = "/Home";
    }
    function goHome() {
        if (home) {
            return window.location.href = "/";
        }
    }
    return (
        <>
            <Image
                className={dark ? "absolute md:hidden" : "absolute md:hidden"}
                src="/Images/LoadScreen.png"
                width={1000}
                height={1000}
                alt=""
            />
            <div
                className={
                    dark
                        ? "flex md:h-screen bg-slate-900 bg-opacity-70 relative text-white md:text-white md:bg-[#181a20]"
                        : " bg-white bg-opacity-90 relative flex md:h-screen text-black md:bg-white md:text-black"
                }
            >
                <div className="hidden md:block w-1/2 xl:w-2/3 bg-[#181a20]">
                    <Image
                        className="h-full w-full xl:pr-28"
                        src="Images/Group.png"
                        width={1000}
                        height={1000}
                        alt=""
                    />
                </div>

                <div className="md:w-1/2 xl:w-1/3 md:flex md:justify-center md:pt-32 pt-10 mx-auto min-h-screen sm:min-h-0">
                    <div className="pt-5 mx-5 md:w-96 pb-10">
                        <input
                            data-theme="light"
                            type="checkbox"
                            className="toggle"
                            onClick={() => {
                                setDark(!dark);
                            }}
                        />
                        <Image
                            src="/Images/websekai-logo.jpg"
                            alt=""
                            width={500}
                            height={500}
                            className="rounded-full w-24 mx-auto mb-5"
                        />
                        <h1 className="font-bold text-2xl text-center mb-5">
                            Login To Your Account
                        </h1>
                        <form className="w-full justify-center mb-2">
                            {/* <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nama Anda"
                                className="rounded-2xl py-3 px-10 w-full text-black border-none bg-slate-100 mb-5 focus:outline-green-500"
                            /> */}

                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="rounded-2xl py-3 px-10 w-full text-black border-none bg-slate-100 mb-5 focus:outline-green-500"
                            />

                            <input
                                type="Password"
                                name="Password"
                                id="Password"
                                placeholder="Password"
                                className="rounded-2xl py-3 px-10 w-full text-black border-none bg-slate-100 focus:outline-green-500"
                            />
                            <div className="flex mt-5 mb-5">
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    className="border-green-600 self-center mr-5 rounded-sm focus:outline-none"
                                />
                                <p className="self-center">Remember Me</p>
                            </div>


                        </form>
                        <button onClick={() => {
                            setHome(!home);
                        }} className="bg-green-600 text-white w-full py-2 rounded-full font-semibold">
                            Log in
                        </button>

                        <div className="flex justify-center mb-5 mt-4">
                            <p
                                className={
                                    dark
                                        ? "border-black border-b-[1px] px-10 self-center"
                                        : "border-b-[1px] px-10 border-slate-200 self-center"
                                }
                            ></p>
                            <p className="text-center font-semibold mx-2">
                                or continue with
                            </p>
                            <p
                                className={
                                    dark
                                        ? "border-black border-b-[1px] px-10 self-center"
                                        : "border-b-[1px] px-10 border-slate-200 self-center"
                                }
                            ></p>
                        </div>

                        <section className="flex justify-evenly">
                            <div className="px-6 py-3 border rounded-xl">
                                <Image
                                    src="/Images/facebooklogo.svg"
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="w-7"
                                />
                            </div>
                            <div className="px-6 py-3 border rounded-xl">
                                <Image
                                    src="/Images/GoogleLogo.svg"
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="w-7"
                                />
                            </div>
                            <div className="px-6 py-3 border rounded-xl">
                                <Image
                                    src="/Images/appleLogo.png"
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="w-7"
                                />
                            </div>
                        </section>

                        <p className="text-slate-500 text-center mt-5">
                            Dont have an account?{" "}
                            <a
                                href={"#"}
                                className="text-green-500 px-2"
                            >
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <style jsx="true">
                {`
                    #email {
                        background-image: url("/Images/email.png");
                        background-repeat: no-repeat;
                        background-position: left center;
                        background-position: 3% 50%;
                    }
                `}
            </style>

            <style jsx="true">
                {`
                    #Password {
                        background-image: url("/Images/pass.png");
                        background-repeat: no-repeat;
                        background-position: left center;
                        background-position: 3% 50%;
                    }
                `}
            </style>

            <style jsx="true">
                {`
                    #name {
                        background-image: url("/Images/user.png");
                        background-repeat: no-repeat;
                        background-position: left center;
                        background-position: 3% 50%;
                    }
                `}
            </style>
        </>
    );
};

export default SignUp;