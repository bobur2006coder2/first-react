import React from 'react'
import "./style.css"
import one from "./img/mainbagOne.png"
import two from "./img/mainbagTwo.png"
import three from "./img/mainbagThree.png"
import four from "./img/mainbagFour.png"
import five from "./img/mainbagFive.png"
import six from "./img/mainbagSix.png"
import seven from "./img/mainbagSeven.png"
import eight from "./img/mainbagEight.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export const Main = () => {
    const imgs = [one, two, three, four, five, six, seven, eight]
    return (
        <main>
            <div className='max-w-screen-xl mt-28'>
                <div className="grid sm:flex items-center justify-between">
                    <div className="main-right w-[100%] sm:w-[55%] h-[556px]"></div>
                    <div className="ml-[25px] sm:ml-[0px] w-[80%] sm:w-[38%] ">
                        <h4 className="text-yellow-500 font-bold uppercase ">
                            cretive bag only for you.
                        </h4>
                        <br />
                        <h2 className="text-black text-4xl font-bold capitalize">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit  sed do eiusmod.
                        </h2>
                        <br />
                        <p className="text-base capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam.</p>
                        <br />
                        <button className="bg-yellow-500 text-white capitalize rounded-md  p-7 pt-3 pb-3 ">
                            see more
                        </button>
                    </div>
                </div>
            </div>



            <div className="max-w-screen-xl mx-auto pt-28 text-center ">
                < div className='w-[90%] sm:w-[40%] mx-auto'>
                    <h1 className="text-4xl text-black capitalize font-bold ">
                        our available product
                    </h1>
                    <br />
                    
                    <p className="capitalize text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore.
                    </p>

                </div>

                <div className="flex justify-center sm:justify-between flex-wrap ">
                    {imgs.map((value, index) => {
                        return (

                            <div key={index} className="bg-red-100 w-[264px] h-[270px] rounded-lg mt-24">
                                <img src={value} alt="" className='mt-4' />
                            </div>
                        )

                    })}
                </div>

                <button className="text-yellow-500 border-solid border border-yellow-500 text-center p-8 pt-3 pb-3 capitalize mt-40 ">
                    see more   <span className='ml-1.5'> <FontAwesomeIcon icon={faArrowRight} /></span>
                </button>
            </div>
            
        </main>
    )
}
