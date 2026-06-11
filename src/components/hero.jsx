import React from 'react'
import {MoveUpRight} from 'lucide-react'

const Hero = () => {
    return (
        <div className="hero_wrapper container_wrapper mt-10 mx-auto ">
            <span className="text-xs tracking-[.23em] text-[#ff8142]" >NEXT-GEN EXPERIENCE STUDIO</span>
            <h1 className="my-6 md:leading-14 xl:leading-18 text-[#ffffffbf] md:max-w-[650px] text-4xl md:text-5xl xl:text-7xl">Elevate brands with <span className="bg-gradient-to-b
  from-[#f8b695]
  to-[#ff5500]
  bg-clip-text
  text-transparent
  normal-case">high-impact</span> design.</h1>
            <p className="text-[#ffffffbf] text-[14px] md:text-[18px] md:max-w-[580px] font-[500]">We combine strategy, creativity and design to craft digital experiences that inspire action and fuel growth.</p>
            <a href="https://www.linkedin.com/in/laxmi-bharti-wordpressdeveloper/" className="text-white tracking-widest bg-[#ff6b2ceb] px-6 py-5 mt-5 mb-5 rounded-full inline-block hover:shadow-[0_0_12px_#ff6b2ceb] transition-shadow duration-300">LET'S TALK <MoveUpRight className="inline-block"/></a>
        </div>
    )
}

export default Hero