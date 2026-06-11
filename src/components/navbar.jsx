const Navbar = () => {
    return (
        <div className="container_wrapper mx-auto flex justify-between py-6">  
            <a href="http://localhost:5173/" className="text-white">MyLogo</a>
            <ul className="mynav_list flex gap-x-5 uppercase text-[14px] text-white [&>li:hover]:text-[#ff6b2ceb]">  
                <li>Home</li>
                <li>About</li>
                <li>Career</li>
                <li>Contact us</li>
            </ul>
        </div>
    )
}
 
export default Navbar