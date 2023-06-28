import React from 'react'
import "./style.css"
import bag from "./img/logo.png"
import { foterfo } from '../utils/Constants'
import { fottwo } from '../utils/Constants'
export default function Footer() {
    return (
        <footer className='overflow-hidden'>
            <div className="max-w-screen-xl mx-auto p-4 sm:p-14">

                <div className="grid  sm:flex justify-between ">

                    <div className="flex justify-between  sm:w-[70%] w-[80%] gap-4 items-center">

                        <div className="w-[200px]">
                            <img src={bag} alt="" />
                            <p className="text-gray-400 text-[10px] sm:text-[16px] mt-3" >
                                Lorem ipsum dolor sit amet consectetur adipiscing
                                sed do eiusmod.
                            </p>
                        </div>


                        <ul className="capitalize text-[8px] w-[90px] sm:w-[150px] sm:text-[16px]">

                            {foterfo.map((value, index) => {
                                return (

                                    <li key={index} className={value.rang}>{value.textFo}</li>
                                )

                            })}

                        </ul>



                        <ul className="capitalize flex-wrap text-[8px] sm:text-[16px] ">
                            {fottwo.map((val, index) => {
                                return (

                                    <li key={index} className={val.style}>{val.text}</li>
                                )

                            })}
                        </ul>
                    </div>



                    <form className="capitalize w-[100%] sm:w-[215px] overflow-hidden">
                        <h5 className="text-white font-bold">
                            news latter
                        </h5>
                        <br />
                        <div className=" flex sm:block">

                            <input type="email" className="border border-solid p-3 border-gray-500 rounded-lg text-white outline-none bg-transparent" placeholder='Enter Your Email' required />
                            <br />
                            <br />
                            <button className="bg-yellow-500 pt-2 pb-2 pr-7 pl-7 text-white rounded-md  capitalize">
                                subscribe
                            </button>
                        </div>
                    </form>



                </div>


            </div>
        </footer>
    )
}



