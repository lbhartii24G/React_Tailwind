import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import clientImg from "../assets/clientImg.jpg"
import heroPng from "../assets/herobgimage.png"
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 

{/* Client feedback array */}
const testimonials = [
  {
    id: 1,
    image: clientImg,
    review:
      "Working with this team was seamless from start to finish. Their communication was excellent and the final result surpassed our expectations completely.",
    author: "Veauly Founder",
  },
  {
    id: 2,
    image: clientImg,
    review:
      "The website exceeded our expectations. The team delivered exactly what we envisioned and the entire process was smooth and professional.",
    author: "TechNova CEO",
  },
  {
    id: 3,
    image: clientImg,
    review:
      "Their attention to detail and creative approach made a huge difference to our brand presence online.",
    author: "Bright Labs Founder",
  },
  {
    id: 4,
    image: clientImg,
    review:
      "Excellent communication and timely delivery. We couldn't be happier with the final outcome.",
    author: "Pixel Studio Owner",
  },
  {
    id: 5,
    image: clientImg,
    review:
      "They transformed our ideas into a beautiful and high-performing website. Highly recommended.",
    author: "Visionary Co-Founder",
  },
  {
    id: 6,
    image: clientImg,
    review:
      "Professional, responsive, and incredibly talented. The project was completed perfectly.",
    author: "NextGen Director",
  },
  {
    id: 7,
    image: clientImg,
    review:
      "Our new website has significantly improved user engagement. Fantastic work by the team.",
    author: "StartUp Hub Founder",
  },
  {
    id: 8,
    image: clientImg,
    review:
      "The entire experience was stress-free and enjoyable. Their expertise really shows.",
    author: "Creative Minds CEO",
  },
  {
    id: 9,
    image: clientImg,
    review:
      "Beautiful design, clean code, and great support throughout the project lifecycle.",
    author: "Digital Wave Founder",
  },
  {
    id: 10,
    image: clientImg,
    review:
      "From planning to launch, everything was handled with professionalism and care.",
    author: "Elevate Solutions CEO",
  },
];

const ClientFeedback = () => {
    return (
        
         <div className="">
            <h3 className="container_wrapper mx-auto text-white text-center text-[30px] md:text-[40px] lg:text-[61px] font-[600]">Client Feedback</h3>
            <p className="container_wrapper mx-auto text-white text-center ">End-toend creative solutions that help brands stand outconnect with audiences, and drive real results</p>
            <div className="py-[1px] mt-10 mb-12 md:mb-25"
              style={{
                  background: "linear-gradient(90deg, #fff0, #ffffff26 28%, #707070 30%, #ff824d 50%, #ffffff26 70%, #fff0)"
              }}> 
          </div> 
            <Swiper
                modules={[Autoplay]}
                navigation
                loop={true}
                spaceBetween={20}
                speed={8000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }} 
                 
                slidesPerView={"auto"}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
            {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="">
                    <div className="py-12 px-6 text-center  rounded-xl bg-cover bg-center border border-[#ff824d] border-solid" style={{ backgroundImage: `
    linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
    url(${heroPng})` }}>
                        <img src={clientImg} className="w-[100px] h-[100px] object-cover rounded-2xl mx-auto"/>
                        <p className="text-white text-[16px] font-[400] leading-[25.6px]  mt-4 mb-4">
                        {item.review}
                        </p>
                        <div className="py-[1px] my-5"
                        style={{
                            background: "linear-gradient(90deg, #fff0, #ffffff26 28%, #707070 30%, #ff824d 50%, #ffffff26 70%, #fff0)"
                        }}> 
                    </div> 
                        <h5 className="text-white text-[18px] md:text-[22px] leading-[25.6px] font-[400]">{item.author}</h5>
                    </div>
                </SwiperSlide> 
            ) )} 
             
            </Swiper>   
            <div className="pb-25"></div>
        </div>   
    )
}

export default ClientFeedback