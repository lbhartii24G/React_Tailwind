import CountUpModule  from "react-countup"
const CountUp = CountUpModule.default

const countData = [
    {
        id:1,
        number:120,
        label:"Clients worldwide",
        start:110
    },
    {
        id:2,
        number:98,
        label:"projects delivered",
        start:70
    },
    {
        id:3,
        number:74,
        label:"EXPERTS",
        start:60
    }
]

const OurImpact = () => {
  return (
    <div className="container_wrapper mx-auto">
        <h3 className="text-white text-center text-[30px] md:text-[40px] lg:text-[61px] font-[600]">Our Impact</h3>
        <p className="text-white text-center">Skills that drive impactful results</p>
        <div className="py-[1px] mt-10"
            style={{
                background: "linear-gradient(90deg, #fff0, #ffffff26 28%, #707070 30%, #ff824d 50%, #ffffff26 70%, #fff0)"
            }}> 
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 md:mt-25 mb-5">
            {
                countData.map(function(data){
                    return <div className="border border-[#ffe5e55e] border-solid rounded-lg backdrop-blur-sm p-6 flex flex-col gap-y-5 text-center py-10 md:py-15 lg:py-20">
                            <div>
                                <CountUp 
                                    key={data.id}
                                    start={data.start} 
                                    end={data.number} 
                                    duration={2} 
                                    className="text-white text-[40px] md:text-[60px] lg:text-[80px] font-[500]" enableScrollSpy scrollSpyOnce    
                                /> <span className="text-[#ff824d] text-[40px] md:text-[60px] lg:text-[80px] font-[500]">+</span>
                                <div className="py-[1px] mb-5"
                                    style={{
                                        background: "linear-gradient(90deg, #fff0, #ffffff26 28%, #707070 30%, #ff824d 50%, #ffffff26 70%, #fff0)"
                                    }}> 
                                </div>
                                <p className="text-white uppercase">{data.label}</p>
                            </div>
                        </div>
                })
            }
            
        </div>
      
    </div>
  )
}

export default OurImpact