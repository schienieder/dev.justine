import React from 'react'

const RecentWorksComponent = () => {
    return (
        <div className="w-full h-auto bg-white flex flex-col justify-center items-center gap-y-28 font-mont text-gray-800 py-16">
            <div className="flex flex-col items-center">
                <h4 className="text-2xl font-black">Recent Works</h4>
                <p className="text-base">List of projects that I have completed/contributed</p>
            </div>
            <div className="w-full grid grid-cols-1 justify-items-center gap-y-32">
                {/* MARAHUYO */}
                <div className="flex gap-x-12">
                    <div className="flex flex-col gap-y-5">
                        <h4 className="text-xl font-black mt-5">Marahuyo</h4>
                        <p className="-mt-4 text-sm">Event Management System with real-time chat, GIS, QR code generation,</p>
                        <p className="-mt-5 text-sm">& time series forecasting</p>
                        <a
                            href="https://alas-creatives.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className=" w-44 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold tracking-wider rounded-xl text-center"
                        >Visit Site</a>
                    </div>
                    <div className="relative">
                        <img 
                            src="/images/marahuyo.jpg"
                            className="bg-gray-800 w-[600px] h-[294px]"
                        />
                    </div>
                </div>
                {/* CATE */}
                <div className="flex gap-x-12">
                    <div className="">
                        <img 
                            src="/images/cate.jpg"
                            className="w-[600px] h-[293px] border border-gray-200"
                        />
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h4 className="text-xl font-black mt-5">Cate</h4>
                        <p className="-mt-4 text-sm">School editor system which is inspired from an existing system Canva</p>
                        <a
                            href="https://www.catefy.com/"
                            target="_blank"
                            rel="noreferrer"
                            className=" w-44 px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold tracking-wider rounded-xl text-center"
                        >Visit Site</a>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    )
}

export default RecentWorksComponent