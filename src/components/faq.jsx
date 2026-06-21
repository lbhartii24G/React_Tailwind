import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We provide web development, UI/UX design, branding, and digital solutions.",
  },
  {
    id: 2,
    question: "How long does a project take?",
    answer:
      "Most projects take between 2-8 weeks depending on complexity.",
  },
  {
    id: 3,
    question: "Do you provide support after launch?",
    answer:
      "Yes, we offer maintenance and ongoing support packages.",
  },
];

const Faq = () => {
    const [openId, setOpenId] = useState(null);
    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };
    
    return (
        <div className="container_wrapper mx-auto mt-25 mb-25">
            <h3 className="text-white text-center text-[30px] md:text-[40px] lg:text-[61px] font-[600]">Questions?</h3>
            <p className="text-white text-center">Find answers to the most common questions about our services</p>
            <div className="py-[1px] mt-10 mb-12 md:mb-25"
                style={{
                    background: "linear-gradient(90deg, #fff0, #ffffff26 28%, #707070 30%, #ff824d 50%, #ffffff26 70%, #fff0)"
                }}> 
            </div>

            {/* accordion */}
            <div className="md:w-[70%] mx-auto">
                {faqs.map((item) => (
                    <div key={item.id} className="border border-[#ff824d] border-solid rounded-xl mb-4 overflow-hidden"
                    >
                        <button onClick={() => handleToggle(item.id)}
                            className="w-full flex items-center justify-between p-5 text-left text-white"
                        >
                            <span>{item.question}</span>

                            <ChevronDown
                            className={`transition-transform duration-300 ${
                                openId === item.id ? "rotate-180" : ""
                            }`}
                            />
                        </button>

                        {openId === item.id && (
                            <div className="px-5 pb-5 text-gray-300">
                            {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq