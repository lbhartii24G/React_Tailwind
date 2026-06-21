import {MoveUpRight} from 'lucide-react'
 

const ProductCard = (props) => {
     
    return (
        <div className="group relative overflow-hidden rounded-[10px] md:rounded-[20px] lg:rounded-[30px] border border-white/10">
            
            {/* Background Image */}
            <img src={props.bgimg} />

            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

            {/* View More Text */}
            <a href={props.cardLink}
                className="
                absolute inset-0
                flex items-center justify-center
                opacity-0
                transition-all
                duration-500
                group-hover:opacity-100
                z-20">
                <h2 className="text-[25px] md:text-5xl font-semibold text-white">
                View More
                </h2>
            </a>

            {/* Top Left Badge */}
            <div className="absolute top-6 left-6">
                <span className="rounded-[14px] bg-[#1d1c1c82] px-3 py-2 md:px-6 md:py-3 text-white backdrop-blur-md text-[12px] md:text-[16px]">NOVUS</span>
            </div>

            {/* Top Right Arrow */}
            <button className="absolute top-6 bg-[#1d1c1c82] right-6 flex h-8 md:h-14 w-8 md:w-14 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md">
                <MoveUpRight />
            </button>

            {/* Bottom Glass Bar */}
            <div className="absolute bottom-6 left-2 md:left-6 right-2 md:right-6 flex items-center justify-between rounded-full border border-[#1d1c1c82] bg-white/10 px-3 md:px-8 py-3 text-white backdrop-blur-md">
                <span className="text-[12px] md:text-[14px] lg:text-[16px] font-medium">{props.title}</span>
                <span className="text-[12px] md:text-[14px] lg:text-[16px] font-medium">{props.cardDate}</span>
            </div>

        </div>
    )
}

export default ProductCard