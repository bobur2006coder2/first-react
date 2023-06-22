import React from 'react'
import imgSection from "./img/sectionimg.png"
import imgsocial from "./img/Social proof.png"
export const Section = () => {
  return (
    <section className='w-[1140px] ye pt-48'>
        <div className="flex">

    <div className='bg-black-500 w-[50%] h-[550px] ' >
    <img src={imgSection} alt="" className="opacity-70 w-[100%] h-[100%]" />
    </div>


    <div className="bg-zinc-800 w-[50%] p-14 ">
        <h2 className="text-white font-bold capitalize text-3xl">
          Lorem ipsum dolor sit amet  adipiscing elit.
        </h2>
        <br />

        <form action="" className='flex flex-wrap justify-between pt-8'>
         
          <input type="text" className="border border-solid p-3 border-gray-500 rounded-lg text-white outline-none bg-transparent" placeholder='Name' required />
          <input type="email" className="border border-solid p-3 border-gray-500 rounded-lg text-white outline-none bg-transparent" placeholder='Email' required />
          <input type="text" className="border border-solid w-[100%] p-3 border-gray-500 rounded-lg mt-8 text-white outline-none bg-transparent" placeholder='Address' required/>
          <div className="flex items-center gap-7 mt-10">

          <input type="checkbox" className='border border-solid   border-gray-500   outline-none bg-transparent'/> <span className='capitalize text-gray-500'> Lorem ipsum dolor sit amet.</span>
          <button className="bg-yellow-500 text-white capitalize rounded-md  p-7 pt-3 pb-3 ">
                           Join now
                        </button>
          </div>
        </form>
    </div>
        </div>

<img src={imgsocial} alt="" className='mt-28' />
    </section>
  )
}
