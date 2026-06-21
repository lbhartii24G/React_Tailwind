import { Lightbulb, Layers, Waypoints, CircleDot } from "lucide-react"
import ctaBg from "../assets/herobgimage.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa';



const Footer = () => {
    return (
             
        <footer className=" py-12" 
        style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%), url(${ctaBg})`
        }}
        >
            <div className="container_wrapper mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Logo & About */}
                <div>
                <h3 className="text-[#ff824d] text-2xl font-semibold mb-4">
                    Portfolio
                </h3>
                <p className="text-white font-[400]">
                    Creating modern websites and digital experiences that help
                    businesses grow online.
                </p>
                </div>

                {/* Quick Links */}
                <div>
                <h4 className="text-[#ff824d] text-lg mb-4">Quick Links</h4>
                <ul className="space-y-3 text-white">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                </div>

                {/* Services */}
                <div>
                <h4 className="text-[#ff824d] text-lg mb-4">Services</h4>
                <ul className="space-y-3 text-white font-[400]">
                    <li>Web Development</li>
                    <li>WordPress</li>
                    <li>UI/UX Design</li>
                    <li>SEO Optimization</li>
                </ul>
                </div>

                {/* Social Links */}
                <div>
                <h4 className="text-[#ff824d] text-lg mb-4">Follow Me</h4>

                <div className="flex gap-4">  
                    <a href="https://www.linkedin.com/in/laxmi-bharti-wordpressdeveloper/" className="text-white   ">
                     <FaLinkedin size={25} color="#fff  " />
                    </a>
                    <a href="https://github.com/lbhartii24G" className="text-white   ">
                     <FaGithub size={25} color="#fff" />
                    </a> 
                </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-10 pt-6 text-center text-white">
                © 2026 Your Name. All Rights Reserved.
            </div>

            </div>
        </footer> 
    ) 
}

export default Footer