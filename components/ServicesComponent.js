import React from 'react'

const ServicesComponent = () => {
    return (
        <div 
            className="w-full h-screen bg-gray-100 font-mont text-gray-800 flex justify-center items-center gap-x-5"
            id="services"
        >
            <div className="-mt-32 flex flex-col gap-y-5">
                <h4 className="text-2xl font-black">Services Offered</h4>
                <p className="-mt-4">Here are some of the awesome services that I can provide</p>
                <button 
                    className=" w-44 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold tracking-wider rounded-xl text-center"
                >Download CV</button>
            </div>
            <div className="grid grid-cols-2 gap-10">
                <div className="w-72"></div>
                <div className="w-72 bg-white shadow border-b border-gray-200 flex flex-col justify-center items-center gap-y-5 rounded-lg p-8">
                    <img 
                        src="/images/coding.png"
                        className="h-32 w-32"
                    />
                    <h4 className="text-base font-bold">Web Development</h4>
                    <p className="-mt-4 text-xs">Frontend, backend & fullstack development</p>
                </div>
                <div className="w-72 bg-white shadow border-b border-gray-200 flex flex-col justify-center items-center gap-y-5 rounded-lg p-8">
                    <img 
                        src="/images/user-interface.png"
                        className="h-32 w-32"
                    />
                    <h4 className="text-base font-bold">UI/UX Designs</h4>
                    <p className="-mt-4 text-xs">Modern web & mobile designs from scratch</p>
                </div>
                <div className="w-72 bg-white shadow border-b border-gray-200 flex flex-col justify-center items-center gap-y-5 rounded-lg p-8">
                    <img 
                        src="/images/seo.png"
                        className="h-32 w-32"
                    />
                    <h4 className="text-sm font-bold">Search Engine Optimization</h4>
                    <p className="-mt-4 text-xs">Keywords & talking to clients how they describe their site</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesComponent