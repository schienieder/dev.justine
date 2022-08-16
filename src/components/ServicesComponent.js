import React from 'react'

const ServicesComponent = () => {

    return (
        <div className="w-full h-auto md:h-screen bg-gray-100 grid grid-cols-1 md:grid-cols-2 py-10 md:py-0 px-3 md:px-0">
            <div className="w-full flex flex-col gap-y-5 justify-center items-center">
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-2xl md:text-3xl font-black">Awesome Services</h4>
                    <p className="text-xs md:text-base">These are some of the things that I can do for my clients</p>
                    <a 
                        href="https://schienieder.github.io/dev.justine/TORRES, JUSTINE RHEI.pdf"
                        download="TORRES, JUSTINE RHEI.pdf"
                        className="primaryButton flex items-center gap-x-2 mt-5"
                    > 
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 md:h-6 md:w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        My Resume
                    </a>
                </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start gap-y-8 md:gap-y-5">
                <div></div>
                <div className="w-52 md:w-80 bg-white shadow border-b border-gray-200 p-5 rounded-xl flex flex-col items-center gap-y-3 self-end">
                    <img 
                        src="https://schienieder.github.io/dev.justine/coding.png"
                        className="w-16 h-16 md:w-28 md:h-28"
                        alt="Web Development"
                    />
                    <p className="text-xs md:text-sm">I do frontend, backend and even fullstack development</p>
                </div>
                <div className="w-52 md:w-80 bg-white shadow border-b border-gray-200 p-5 rounded-xl flex flex-col items-center gap-y-3 self-start">
                    <img 
                        src="https://schienieder.github.io/dev.justine/user-interface.png"
                        className="w-16 h-16 md:w-28 md:h-28"
                        alt="UI/UX Design"
                    />
                    <p className="text-xs md:text-sm">Creating web & mobile UI/UX designs from scratch</p>
                </div>
                <div className="w-52 md:w-80 bg-white shadow border-b border-gray-200 p-5 rounded-xl flex flex-col items-center gap-y-3 self-start">
                    <img 
                        src="https://schienieder.github.io/dev.justine/seo.png"
                        className="w-16 h-16 md:w-28 md:h-28"
                        alt="SEO"
                    />
                    <p className="text-xs md:text-sm">Improve your brand results in search engines</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesComponent