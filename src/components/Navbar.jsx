import React, { useState } from 'react'
import "./style.css"
import bag from "./img/logo.png"
import twoStyle from "./img/image heading.png"
import discount from "./img/discount.png"
import girl from "./img/girl.png"
import { navbar } from '../utils/Constants'

export default function Navbar() {
    const [name, setName] = useState(false)
    const headerNav = () => {
        setName(e => !e)
        
    }
    return (
        <header className='bg-stone-800 overflow-hidden p-5 pb-0 sm:p-0'>

            {/* navbar start */}


            <div className=" mx-auto max-w-screen-xl pt-4 pb-2 ">
                <div className="flex justify-between items-center">

                    <img src={bag} alt="" />

                    <ul className="hidden md:flex transition-all ease-in duration-500 gap-10 items-center  ">
                        {navbar.map((val, index) => {
                            return (
                                <div key={index} className="flex items-center">

                                    <li className={val.style}>{val.name}</li>
                                    <button className={val.btnstyle}>
                                        {val.btnname}
                                    </button>
                                </div>
                            )
                        })}
                    </ul>
                    <div className="sm:hidden flex w-[30%] sm:w-[15px] flex-wrap">

                    <button className='capitalize bg-yellow-500 w-[100%]  h-[35px] text-white rounded-md  md:hidden' onClick={headerNav}>
                        shop now
                    </button>
                    {
                        name && <div className=' sm:hidden w-[100%] mt-1 '>

                            <ul className="">
                                {navbar.map((val, index) => {
                                    return (


                                        <li key={index} className={val.style}>{val.name}</li>

                                    )
                                })}
                            </ul>

                        </div>
                    }

                    </div>


                </div>

            </div>


            {/* navbar finished */}


            <div className="mx-auto max-w-screen-xl grid md:flex justify-between items-center">

                <div className='w-[90%] sm:w-[33%] '>
                    <h3 className="text-yellow-600 uppercase font-semibold">Look Stylish Be Stylish.</h3>

                    <h1 className="capitalize font-bold text-7xl text-white leading-tight">
                        Look Stylish <br />
                        <span className='flex gap-4 items-center '>

                            Be  <img src={twoStyle} alt="" className='h-[100%] sm:h-[86px] mt-6' />
                        </span>
                    </h1>
                    <br />
                    <p className="text-state-500 text-gray-400 leading-normal">Before starting this business you should have ideas about the market and products to Compete with the Existing Businesses.</p>
                    <br />
                    <div className="relative">
                        <button className="bg-yellow-500 pt-2 pb-2 pr-7 pl-7 text-white rounded-md  capitalize">
                            join shop
                        </button>
                        <img src={discount} alt="" className='w-[50%] absolute  sm:absolute top-0 left-[200px]' />

                    </div>
                </div>

                <div className=" bg-[100%] sm:w-[60%] h-[350px] mt-5 sm:mt-0 sm:h-[600px] bg-contain bg-[url(./components/img/back.png)] bg-no-repeat   " >
                    <img src={girl} alt="" className='h-[109.6%] ' />
                </div>
            </div>


        </header>
    )
}
