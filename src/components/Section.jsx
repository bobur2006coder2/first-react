import React from 'react'
import imgSection from "./img/sectionimg.png"
import one from "./img/secone.png"
import two from "./img/sectwo.png"
import three from "./img/secthree.png"
import four from "./img/secfour.png"
export const Section = () => {
  const arr = [one, two, three, four]
  return (
    <section className='max-w-screen-xl  mx-auto pt-48'>
      <div className="flex">

        <div className='bg-black-500 w-[50%] h-[550px] sm:block hidden ' >
          <img src={imgSection} alt="" className="opacity-70 w-[100%] h-[100%]" />
        </div>


        <div className="bg-zinc-800 w-[100%] lg:w-[50%] p-6 sm:p-14 ">
          <h2 className="text-white font-bold capitalize text-3xl">
            Lorem ipsum dolor sit amet  adipiscing elit.
          </h2>
          <br />

          <form action="" className='flex flex-wrap justify-center sm:justify-between sm:pt-8 gap-5'>

            <input type="text" className="border border-solid w-[45%] sm:w-[250px] h-[35px] sm:h-[50px] p-1 border-gray-500 rounded-lg text-white outline-none bg-transparent" placeholder='Name' required />
            <input type="email" className="border border-solid w-[45%] sm:w-[250px] h-[35px] sm:h-[50px] p-1 border-gray-500 rounded-lg text-white outline-none bg-transparent  sm:mt-0" placeholder='Email' required />
            <input type="text" className="border border-solid w-[100%] p-3 border-gray-500 rounded-lg mt-2 sm:mt-8 text-white outline-none bg-transparent sm:w-[100%]" placeholder='Address' required />
            <div className="flex items-center gap-7 mt-10">

              <input type="checkbox" className='border border-solid   border-gray-500   outline-none bg-transparent' /> <span className='capitalize text-gray-500 text-[11px] sm:text-[16px]'> Lorem ipsum dolor sit amet.</span>
              <button className="bg-yellow-500 text-white capitalize rounded-md p-8 pt-1 pb-1   sm:p-7 sm:pt-3 sm:pb-3 text-[11px] sm:text-[16px] ">
                Join now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 sm:mt-28 mb-4 sm:mb-28 flex-wrap">
        {arr.map((val, index) => {
          return (
            <img key={index} src={val} alt="" className='w-[80px] sm:w-[250px]' />
          )
        })}
      </div>
    </section>
  )
}
