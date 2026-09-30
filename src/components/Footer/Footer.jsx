import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {

    const [Dat, setDat] = React.useState("");

    const navigate = useNavigate();

    React.useEffect(() => {
        const updateTime = () => {
            setDat(
                new Date().toLocaleTimeString("en-GB", {
                    timeZone: "America/Toronto",
                    hour12: false,
                })
            );
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);






    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className='w-screen text-white h-[61.5vh] bg-black flex flex-col justify-between '>
            <div className='w-full flex items-start pt-[10px] justify-between pl-3 pr-6'>
                <div className="flex gap-2">
                    <NavLink to="http://www.facebook.com"><h2 className="font-font[2] hover:text-[#d3fd50] cursor-pointer text-[74.5px] font-medium border-2 rounded-full leading-[0.9] px-[22px]">FB</h2></NavLink>
                    <NavLink to="http://www.instagram.com"><h2 className="font-font[2] hover:text-[#d3fd50] cursor-pointer text-[74.5px] font-medium border-2 rounded-full leading-[0.9] px-[22px]">IG</h2></NavLink>
                    <NavLink to="http://www.linkedin.com"><h2 className="font-font[2] hover:text-[#d3fd50] cursor-pointer text-[74.5px] font-medium border-2 rounded-full leading-[0.9] px-[22px]">IN</h2></NavLink>
                    <NavLink to="http://www.behance.net"><h2 className="font-font[2] hover:text-[#d3fd50] cursor-pointer text-[74.5px] font-medium border-2 rounded-full leading-[0.9] px-[22px]">BE</h2></NavLink>
                </div>
                <div onClick={() => navigate("/contact")} className="flex font-[font2] items-center hover:text-[#d3fd50] cursor-pointer group  text-white gap-4 border-2  rounded-full px-[22px]">
                    <h2 className='font-font[2] text-[5.02vw] leading-[0.7] pt-4 font-medium'>CONTACT</h2>
                    {/* <svg className='mx-6 flex items-start' xmlns="http://w3.org" viewBox="0 0 215 200" width="100" height="130">
                        <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="white" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
                    </svg> */}
                    <svg
                        className="pt-[4px] group-hover:text-[#d3fd50]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="35 35.5 145 130.5"
                        width="50.29"
                        height="55.04"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z"
                            fill="currentColor"
                            stroke="#0E0E0E"
                            strokeWidth="4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between w-full pl-3 pr-7 pb-[8px]">

                <div className="flex items-center gap-3.5 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="2.4vw" height="2.4vw">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="white" stroke-width="4" />

                        <line x1="50" y1="10" x2="50" y2="90" stroke="white" stroke-width="4" />

                        <line x1="10" y1="50" x2="90" y2="50" stroke="white" stroke-width="4" />

                        <ellipse cx="50" cy="50" rx="20" ry="40" fill="none" stroke="white" stroke-width="4" />

                        <path d="M 15.35 30 A 40 40 0 0 1 84.65 30" fill="none" stroke="white" stroke-width="4" />

                        <path d="M 15.35 70 A 40 40 0 0 0 84.65 70" fill="none" stroke="white" stroke-width="4" />
                    </svg>

                    <h2 className="text-[20px] font-[font2] mt-[4px]">MONTREAL_{Dat}</h2>

                </div>

                <div className="flex justify-between items-center gap-9 pr-30">
                    <h2 className="text-[14px] font-[font2] hover:text-[#d3fd50] cursor-pointer">PRIVACY POLICY</h2>
                    <h2 className="text-[14px] font-[font2] hover:text-[#d3fd50] cursor-pointer">PRIVACY NOTICE</h2>
                    <h2 className="text-[14px] font-[font2] hover:text-[#d3fd50] cursor-pointer">ETHICS REPORT</h2>
                    <h2 className="text-[14px] font-[font2] hover:text-[#d3fd50] cursor-pointer">CONSENT CHOICES</h2>
                </div>
                <div className="flex items-center">
                    <h2 onClick={handleBackToTop} className="text-[20px] font-[font2] hover:text-[#d3fd50] cursor-pointer">BACK TO TOP</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer
