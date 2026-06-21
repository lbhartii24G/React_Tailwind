import {MoveUpRight} from 'lucide-react'
import ctaBg from "../assets/cta_bg.png"

const CTASection = () => {
    return (
        <div className="container_wrapper mx-auto grid md:grid-cols-2 items-center bg-cover border border-[#ffe5e55e] border-solid rounded-lg p-10"
            style={{
                backgroundImage: `linear-gradient(#00000091,#00000091), url(${ctaBg})`
            }}
        >
            <div>
                <h2 className="text-white text-[28px] md:text-[38px] font-[500]">Ready to build</h2>
                <h3 className="text-[28px] md:text-[38px] font-[500] bg-gradient-to-b
                from-[#f8b695]
                to-[#ff5500]
                bg-clip-text
                text-transparent
                normal-case">your next project?</h3>
            </div>
            <div className="text-left md:text-right">
                <a href="https://www.linkedin.com/in/laxmi-bharti-wordpressdeveloper/" className="text-white text-[14px] md:text-[16px] tracking-widest bg-[#ff6b2ceb] px-5 md:px-6 py-3 md:py-5 mt-5 mb-5 rounded-full inline-block hover:shadow-[0_0_12px_#ff6b2ceb] transition-shadow duration-300">LET'S TALK <MoveUpRight className="inline-block"/></a>
            </div>
        </div>
    )
}

export default CTASection 