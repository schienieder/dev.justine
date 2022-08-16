import React from 'react'

const yearNow = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className="w-full px-5 md:px-10 py-5 gap-y-3 flex flex-col justify-center items-center">
            <div className="w-full border-b border-gray-300"></div>
            <h4 className="text-xs md:text-base font-bold">dev.justine { yearNow }</h4>
        </footer>
    )
}

export default Footer