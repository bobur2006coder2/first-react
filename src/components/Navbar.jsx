import React from 'react'
import schoolbagOne from "./img/bagOne.png"
import schoolbagTwo from "./img/bagTwo.png"
import schoolbagThree from "./img/bagThree.png"
import schoolbagFour from "./img/bagFour.png"
export const Navbar = () => {
  return (
  <nav >
    <div className="w-[1140px] ye">
    <ul className="flex justify-between gap-2 pt-10">
        <li className="text-stone-900 capitalize">water resistant</li>
        <li className="text-black capitalize font-bold">charging system</li>
        <li className="text-stone-900 capitalize">artificial leather</li>
        <li className="text-state-800 capitalize">modern clothes</li>
    </ul>

    <ul className="flex justify-between  pt-5">
        <li className="text-stone-900 capitalize"></li>
        <li className="text-black capitalize font-bold border-2 border-solid border-yellow-500 w-[160px] h-[0px]"></li>
        <li className="text-stone-900 capitalize"></li>
        <li className="text-state-800 capitalize w-[25px]"></li>
    </ul>
    <ul className="flex justify-between gap-2 pt-10">
        <li className="text-stone-900 capitalize"><img src={schoolbagOne} alt="" /></li>
        <li className="text-black capitalize font-bold"><img src={schoolbagTwo} alt="" /></li>
        <li className="text-stone-900 capitalize"><img src={schoolbagThree} alt="" /></li>
        <li className="text-state-800 capitalize"><img src={schoolbagFour} alt="" /></li>
    </ul>
    </div>
  </nav>
  )
}
