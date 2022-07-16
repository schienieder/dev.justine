import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const HeroView = () => {

    const [clipboardAlert, setClipboardAlert] = useState(false)

    const showClipboardAlert = () => {
        setClipboardAlert(true)
        setTimeout(() => {
            setClipboardAlert(false)
        }, 1500)
    }

    return (
        <div className="w-full h-screen grid grid-cols-2 bg-white font-mont overflow-hidden text-gray-800">
            {/* LEFT SIDE */}
            <div className="relative w-full flex flex-col justify-center items-center bg-gray-100 gap-y-5">
                <h4 className="absolute font-black text-base top-8 left-10 text-indigo-600">dev.justine</h4>
                <div className="flex flex-col gap-y-5">
                    <h4 className="text-4xl font-black">React Dev <span className="text-indigo-600">Justine</span></h4>
                    <p className="text-base -mt-4">A web developer that creates websites from start to finish</p>
                    <a 
                        className=" w-40 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold tracking-wider rounded-xl text-center"
                        href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwsMnSkbVSrqtmhVqdxWNNsqkmNmcvspXpbDKtHsfcGtzrmZDhkFzTRWnvxKzqSCLmSmXs"
                        target="_blank"
                        rel="noreferrer"
                    >Contact Me</a>
                    <img
                        src="/images/object.svg"
                        className="absolute transform rotate-45 scale-75 -left-80 -bottom-72"
                    />
                </div>
            </div>
            {/*  */}
            {/* RIGHT SIDE */}
            <div className="relative flex flex-col justify-center items-center">
                <div className="absolute top-8 right-10 flex gap-x-8">
                    <a 
                        href="#languages"
                        className="text-base font-bold tracking-wide"
                    >Languages</a>
                    <a 
                        href="#services"
                        className="text-base font-bold tracking-wide"
                    >Services</a>
                    <a 
                        href=""
                        className="text-base font-bold tracking-wide"
                    >Works</a>
                </div>
                <img
                    src="/images/person.svg"
                    className="transform scale-95"
                />
                {/* CONTACT BUTTONS */}
                <div className="absolute right-8 flex flex-col gap-y-5">
                    <CopyToClipboard 
                        text="justinerheitorres@gmail.com"
                        onCopy={ showClipboardAlert }
                    >
                        <button className="bg-custom-dark hover:bg-custom-dark2 text-white p-3 rounded-full">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                aria-hidden="true" 
                                role="img" 
                                preserveAspectRatio="xMidYMid meet" 
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-current"
                            >
                                <path fill="currentColor" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"/>
                            </svg>
                        </button>
                    </CopyToClipboard>
                    <CopyToClipboard 
                        text="https://www.linkedin.com/in/justine-rhei-torres-02b21822a/"
                        onCopy={ showClipboardAlert }
                    >
                        <button className="bg-custom-dark hover:bg-custom-dark2 text-white p-3 rounded-full">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                aria-hidden="true" 
                                role="img" 
                                preserveAspectRatio="xMidYMid meet" 
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-current"
                            >
                                <circle cx="4.983" cy="5.009" r="2.188" fill="currentColor"/>
                                <path fill="currentColor" d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/>
                            </svg>
                        </button>
                    </CopyToClipboard>
                    <CopyToClipboard 
                        text="https://github.com/schienieder"
                        onCopy={ showClipboardAlert }
                    >
                        <button className="bg-custom-dark hover:bg-custom-dark2 text-white p-3 rounded-full">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                aria-hidden="true" 
                                role="img"  
                                preserveAspectRatio="xMidYMid meet" 
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-current"
                            >
                                <path fill="currentColor" fillRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z" clipRule="evenodd"/>
                            </svg>
                        </button>
                    </CopyToClipboard>
                </div>
                {/*  */}
                {/* CLIPBOARD ALERT */}
                {
                clipboardAlert ?
                    <div className="absolute bottom-8 w-72 bg-indigo-100 flex justify-around items-center p-5 rounded-lg">
                        <p className="text-indigo-600 text-sm">Link Copied to Clipboard!</p>
                        <button 
                            className="text-indigo-600"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5" 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                                >
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                : null
                }
            </div>
        </div>
    )
}

export default HeroView