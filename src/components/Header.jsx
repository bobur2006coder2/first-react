import React from 'react'
import "./style.css"
import bag from "./img/logo.png"
import twoStyle from "./img/image heading.png"
import discount from "./img/discount.png"
import girl from "./img/girl.png"
export default function Header() {
    return (
        <header className='bg-stone-800'>

{/* navbar start */}

            <div className="ye  w-[1140px] pt-4 pb-2">
                <div className="flex justify-between items-center">

                    <img src={bag} alt="" className='' />
                    <>
                        <ul className="flex gap-10 items-center">
                            <li className='capitalize text-white cursor-pointer'>home</li>
                            <li className='capitalize text-slate-500 cursor-pointer'>feature</li>
                            <li className='capitalize text-slate-500 cursor-pointer'>about</li>
                            <li className='capitalize text-slate-500 cursor-pointer'>product</li>
                            <li className='capitalize text-slate-500 cursor-pointer'>
                                <button className='capitalize bg-yellow-500 pl-4 pr-4 pt-2 pb-2 text-white rounded-md '>
                                    shop now
                                </button></li>
                        </ul>
                    </>

                </div>

            </div>

{/* navbar finished */}


            <div className="ye w-[1140px] flex justify-between items-center">

                <div className='w-[432px] '>
                    <h3 className="text-yellow-600 uppercase font-semibold">Look Stylish Be Stylish.</h3>

                    <h1 className="capitalize font-bold text-7xl text-white leading-tight">
                        Look Stylish <br />
                        <span className='flex gap-4 items-center '>

                            Be  <img src={twoStyle} alt="" className='h-[85px] mt-6' />
                        </span>
                    </h1>
                    <br />
                    <p className="text-state-500 text-gray-400 leading-normal">Before starting this business you should have ideas about the market and products to Compete with the Existing Businesses.</p>
                    <br />
                    <div className="relative">
                    <button className="bg-yellow-500 pt-2 pb-2 pr-7 pl-7 text-white rounded-md  capitalize">
                        join shop
                    </button>
                    <img src={discount} alt="" className='absolute top-0 left-[200px]' />

                    </div>
                </div>

                <div className="hell w-[60%] h-[600px] ">
<img src={girl} alt="" className='h-[658px]'/>
                </div>
            </div>


        </header>
    )
}
