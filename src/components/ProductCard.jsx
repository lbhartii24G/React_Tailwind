import {MoveUpRight} from 'lucide-react'
 

const ProductCard = (props) => {
     
    return (
        <div className="group relative overflow-hidden rounded-[30px] border border-white/10">
            
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
                <h2 className="text-5xl font-semibold text-white">
                View More
                </h2>
            </a>

            {/* Top Left Badge */}
            <div className="absolute top-6 left-6">
                <span className="rounded-[14px] bg-[#1d1c1c82] px-6 py-3 text-white backdrop-blur-md text-[16px]">NOVUS</span>
            </div>

            {/* Top Right Arrow */}
            <button className="absolute top-6 bg-[#1d1c1c82] right-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md">
                <MoveUpRight />
            </button>

            {/* Bottom Glass Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-full border border-[#1d1c1c82] bg-white/10 px-8 py-3 text-white backdrop-blur-md">
                <span className="text-[16px] font-medium">{props.title}</span>
                <span className="text-16px] font-medium">{props.cardDate}</span>
            </div>

        </div>
    )
}

export default ProductCard