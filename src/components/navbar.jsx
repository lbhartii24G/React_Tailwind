import { useState } from "react";
import {Menu} from 'lucide-react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className="container_wrapper mx-auto flex justify-between py-6">  
                
                {/* Logo */}
                <a href="http://localhost:5173/" className="text-white">My Logo</a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex mynav_list flex gap-x-5 uppercase text-[14px] text-white [&>li:hover]:text-[#ff6b2ceb]">  
                    <li>Home</li>
                    <li>About</li>
                    <li>Career</li>
                    <li>Contact us</li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                ><Menu /></button>

                {/* Mobile Menu */} 
                {isOpen && (
                    <div className="md:hidden absolute top-20 left-0 right-0 bg-black ">
                        <ul class="container_wrapper mx-auto uppercase text-[14px] text-white [&>li:hover]:text-[#ff6b2ceb]">
                            <li className="py-4">Home</li> 
                            <li className="py-4">About</li>
                            <li className="py-4">Career</li>
                            <li className="py-4">Contact us</li>
                        </ul>
                    </div>
                    
                )}  
            </div>
        </nav>
    )
}
 
export default Navbar