import React from 'react'
import "./style.css"
import bag from "./img/logo.png"
export default function Footer() {
    return (
        <footer>
            <div className="w-[1140px] ye p-14">
                <div className="flex justify-between">
                    <div className="w-[200px]">
                        <img src={bag} alt="" />
                        <p className="text-gray-400 mt-3" >
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            sed do eiusmod.
                        </p>
                    </div>

                    <>
                        <ul className="capitalize">
                            <li className="text-white font-bold">
                                special catagories
                            </li>
                            <br />
                            <li className=" text-gray-400">water resistant</li>
                            <li className=" text-gray-400 mt-1">charging system</li>
                            <li className=" text-gray-400 mt-1">artificial leather</li>
                        </ul>
                    </>

                    <>
                    <ul className="capitalize">
                        <li className="text-white font-bold">
                        contact us
                        </li>
                        <br />
                    <li className=" text-gray-400">(808) 555-0111</li>
                    <li className=" text-gray-400 mt-1">michelle.rivera@example.com</li>
                    <li className=" text-gray-400 mt-1">http://www.codehow.com</li>
                    </ul>
                    </>

                    <>
                    <ul className="capitalize">
                        <li className="text-white font-bold">
                        news latter
                        </li>
                        <br />

          <input type="text" className="border border-solid p-3 border-gray-500 rounded-lg text-white outline-none bg-transparent" placeholder='Enter Your Email' required />
                   <br />
                   <br /> 
                    <button className="bg-yellow-500 pt-2 pb-2 pr-7 pl-7 text-white rounded-md  capitalize">
                    subscribe
                    </button>
                    </ul>
                    
                    </>

                </div>
            </div>
        </footer>
    )
}



