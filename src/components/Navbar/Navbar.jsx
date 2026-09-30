import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext } from 'react'
import { NavbarContext } from '../../context/NavContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {


    const [navOpen, setNavOpen] = useContext(NavbarContext);



    const greenDivRef = React.useRef(null);
    const greenDivSvgRef = React.useRef(null);

    const navigate = useNavigate()


    return (
        <div className="z-4  flex fixed top-0 w-full items-start justify-between">
            <div onClick={() => navigate('/')} className="pt-3 pl-3 cursor-pointer">
                <svg className='lg:w-29 w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                    <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                </svg>
            </div>
         



            <div
            onClick={() => {
                setNavOpen(true)
            }}
            onMouseEnter={() => {
                greenDivRef.current.style.height = "100%"
                greenDivSvgRef.current.classList.remove("hidden")
                greenDivRef.current.style.transition = "height 0.115s ease-in-out"
            }}

                onMouseLeave={() => {
                    // greenDivRef.current.style.transition = "height 0.3s ease-in-out"
                    greenDivRef.current.style.height = "0%",
                    greenDivSvgRef.current.classList.add("hidden")
                        greenDivRef.current.style.transition = "height 0.115s ease-in-out"
                }}
                className='h-12 bg-black lg:w-61  relative cursor-pointer'>
                <div className="h-full flex items-center justify-end">
                    <svg xmlns="http://w3.org" viewBox="0 0 100 25" width="100" height="25">
                        <rect x="5" y="8" width="60" height="1.75" fill="white"/>
                        <rect x="35" y="15" width="30" height="1.75" fill="white" />
                    </svg>
                </div>
                <div ref={greenDivRef} className="bg-[#d3fd50] h-0 w-full flex items-center justify-end absolute top-0">
                    <svg ref={greenDivSvgRef} className="hidden" xmlns="http://w3.org" viewBox="0 0 100 25" width="100" height="25">
                        <rect x="5" y="8" width="60" height="1.75" fill="black" />
                        <rect x="35" y="15" width="30" height="1.75 " fill="black" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Navbar
