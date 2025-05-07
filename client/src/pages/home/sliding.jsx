import React, { useEffect, useState } from 'react'
import fullStack from "../../images/slide/full-stack.jpg"
import reactDesign from "../../images/slide/react-design.jpg"
import landing from "../../images/slide/landing-page.jpg"
import eCommerce from "../../images/slide/e-commerce.jpg"
import portfolio from "../../images/slide/portfolio.png"

let images=[
    {
        image:fullStack,alt:"img"
    },
    {
        image:reactDesign,alt:"img"
    },
    {
        image:landing,alt:"img"
    },
    {
        image:eCommerce,alt:"img"
    },
    {
        image:portfolio,alt:"img"
    },
]

let title=["Full-Stack Web App","Dashboard Design with React","Modern Landing Page Build","Responsive UI for E-Commerce","Custom Portfolio Design"]


export default function Sliding() {
let [indexCount, setIndexCount]= useState(0);

useEffect(()=>{

    setInterval(() => {
           setIndexCount((prev)=>(
            prev<images.length-1? prev+1:0
           ))

        }, 6000);

},[])

  return (
    <>

<div className="slider-text">
  <h1
   key={indexCount}
   className="font-bold text-lg sm:text-2xl md:text-3xl font-mono text-white text-center px-4 animate-slideIn ">
    {title[indexCount]}...
  </h1>
</div>

<div className="relative bg-black h-full w-full rounded-[8px] shadow-[0_0_10px_rgba(0,0,0,0.5)] overflow-hidden">
  {images.map((image, index) => (
    <img
      key={index}
      src={image.image}
      alt={image.alt}
      className={`absolute object-cover w-full h-full transition-all duration-1000 ease-in-out top-0 left-0 
      ${index === indexCount
        ? "z-10 opacity-100 translate-x-0 rotate-0"
        : "z-0 opacity-0 translate-x-4 rotate-[-4deg]"} `}
    />
  ))}
</div>
    </>
  )
}
