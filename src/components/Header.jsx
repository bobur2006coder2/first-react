import React from 'react'
import schoolbagOne from "./img/bagOne.png"
import schoolbagTwo from "./img/bagTwo.png"
import schoolbagThree from "./img/bagThree.png"
import schoolbagFour from "./img/bagFour.png"
import { forUL } from '../utils/Constants'

export const Header = () => {
  const arr = [schoolbagOne, schoolbagTwo, schoolbagThree, schoolbagFour]

  return (
    <nav >  
      <div className="max-w-screen-xl mx-auto">
        <ul className="flex mx-auto  justify-around ml-6 sm:ml-0 pt-10">
          {forUL.map((val, index) => {
            return (

              <li key={index} className={val.style}>{val.title}</li>  

            )

          })}

        </ul>

      
        <ul className="flex justify-center sm:justify-between gap-2 pt-10 flex-wrap">
          {arr.map((val, index) => {
            return (

              <li key={index} className="text-stone-900 capitalize"><img src={val} alt="" /></li>
            )
          })}
          

        </ul>
      </div>
    </nav>
  )
}
