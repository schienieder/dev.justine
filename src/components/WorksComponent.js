import React from 'react'

const WorksComponent = () => {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center gap-y-20 py-16">
            {/*  */}
            <div className="flex flex-col items-center">
                <h4 className="text-3xl font-black">Recent Works</h4>
                <p className="text-base">Example projects that I have developed/contributed</p>
            </div>
            {/*  */}
            <div className="grid grid-cols-2 place-items-center">
                {/*  */}
                <div className="justify-self-end max-w-lg flex flex-col justify-center">
                    <div className="flex flex-col items-start">
                        <h4 className="text-xl font-black">Marahuyo</h4>
                        <p className="text-sm">Event management system that has bookings, real-time chat, GIS, QR Code generation & time-series forecasting</p>
                        <a 
                            href="https://alas-creatives.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="primaryButton mt-5"
                        >Visit Site</a>
                    </div>
                </div>
                {/*  */}
                <img 
                    src="work 1.jpg"
                    className="justify-self-start scale-[.80]" 
                    alt="Marahuyo"
                />
                {/*  */}
            </div>
            <div className="grid grid-cols-2 place-items-center">
                {/*  */}
                <img 
                    src="work 2.jpg"
                    className="justify-self-end scale-[.80] border border-gray-300" 
                    alt="Cate"
                />
                {/*  */}
                <div className="justify-self-start max-w-lg flex flex-col">
                    <div className="flex flex-col items-start px-10">
                        <h4 className="text-xl font-black">Cate</h4>
                        <p className="text-sm">School editor system mainly for school certificate templates creation inspired from canva</p>
                        <a 
                            href="https://www.catefy.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="primaryButton mt-5"
                        >Visit Site</a>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    )
}

export default WorksComponent