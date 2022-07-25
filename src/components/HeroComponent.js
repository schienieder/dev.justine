import React, { useState } from 'react'
import Nav from './Nav'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const HeroComponent = () => {

    const [showClipboard, setShowClipboard] = useState(false)

    const onClickSocial = () => {
        setShowClipboard(true)
        setTimeout(() => {
            setShowClipboard(false)
        }, 1500)
    }

    return (
        <div className="dark w-full h-screen grid grid-rows-hero grid-cols-2 overflow-hidden">
            <Nav />
            {/*  */}
            <div className="relative w-full flex flex-col justify-center items-center">
                <div className="flex flex-col items-start">
                    <h4 className="text-4xl font-black tracking-wider">Web <span className="text-indigo-600">Dev Justine</span></h4>
                    <p>A flexible developer that develops systems from start to finish</p>
                    <a
                        href="https://mail.google.com/mail/u/1/?pli=1#inbox?compose=GTvVlcSMVxZQjbMTZLtwwkxNJlRjGFQHjChxzGXGpvpcKtlZSrmVwRNNNBrtsjVjlrSkfpVXwdVkB"
                        target="_blank"
                        rel="noreferrer"
                        className="primaryButton flex items-center gap-x-2 mt-5"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 rotate-45" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Email
                    </a>
                </div>
                <img 
                    src="https://schienieder.github.io/dev.justine/Vector.svg" 
                    className="absolute scale-75 -bottom-72 -left-52 transform scale-x-[-1]"
                    alt="Vector"
                />
            </div>
            {/*  */}
            <div className="relative w-full flex justify-center items-center">
                <img 
                    src="https://schienieder.github.io/dev.justine/person.svg"
                    className="scale-[.97]"
                    alt="Person Coding"
                />
                <div className="absolute flex flex-col gap-y-10 right-10">
                    <CopyToClipboard
                        text="justinerheitorres@gmail.com"
                        onCopy={ onClickSocial }
                    >
                        <button
                            className="bg-custom-dark1 hover:bg-custom-dark2 cursor-pointer text-white p-2 rounded-full"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                aria-hidden="true" 
                                role="img" 
                                preserveAspectRatio="xMidYMid meet" 
                                viewBox="0 0 24 24"
                                className="h-8 w-8"
                            >
                                <path fill="currentColor" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"/>
                            </svg>
                        </button>
                    </CopyToClipboard>
                    <CopyToClipboard
                        text="https://github.com/schienieder"
                        onCopy={ onClickSocial }
                    >
                        <button
                            className="bg-custom-dark1 hover:bg-custom-dark2 cursor-pointer text-white p-2 rounded-full"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                aria-hidden="true" 
                                role="img"  
                                preserveAspectRatio="xMidYMid meet" 
                                viewBox="0 0 24 24"
                                className="h-8 w-8"
                            >
                                <path fill="currentColor" fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" clipRule="evenodd"/>
                            </svg>
                        </button>
                    </CopyToClipboard>
                    <CopyToClipboard
                        text="https://www.linkedin.com/in/justine-rhei-torres-02b21822a/"
                        onCopy={ onClickSocial }
                    >
                        <button
                            className="bg-custom-dark1 hover:bg-custom-dark2 cursor-pointer text-white p-2 rounded-full"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                aria-hidden="true" 
                                role="img" 
                                preserveAspectRatio="xMidYMid meet" 
                                viewBox="0 0 24 24"
                                className="h-8 w-8"
                            >
                                <path fill="currentColor" fillRule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969ZM2.57 21.83h4V8.799h-4V21.83ZM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803Z" clipRule="evenodd"/>
                            </svg>
                        </button>
                    </CopyToClipboard>
                </div>
                {
                    showClipboard ? 
                    <div className="absolute bottom-5 px-8 py-3 bg-indigo-100 text-indigo-700 text-center rounded-xl">
                        Copied to Clipboard
                    </div>
                    : null
                }
            </div>
            {/*  */}
        </div>
    )
}

export default HeroComponent