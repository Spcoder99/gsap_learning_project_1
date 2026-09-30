import React from 'react'
import imageP1 from "../../assets/ProjectImages/imageP1.png"
import imageP2 from "../../assets/ProjectImages/imageP2.png"
import imageP3 from "../../assets/ProjectImages/imageP3.png"
import imageP4 from "../../assets/ProjectImages/imageP4.png"
import imageP5 from "../../assets/ProjectImages/imageP5.png"
import imageP6 from "../../assets/ProjectImages/imageP6.png"
import imageP7 from "../../assets/ProjectImages/imageP7.png"
import imageP8 from "../../assets/ProjectImages/imageP8.png"
import imageP9 from "../../assets/ProjectImages/imageP9.png"
import imageP10 from "../../assets/ProjectImages/imageP10.png"
import imageP11 from "../../assets/ProjectImages/imageP11.png"
import imageP12 from "../../assets/ProjectImages/imageP12.png"
import imageP13 from "../../assets/ProjectImages/imageP13.png"
import imageP14 from "../../assets/ProjectImages/imageP14.png"
import imageP15 from "../../assets/ProjectImages/imageP15.png"
import imageP16 from "../../assets/ProjectImages/imageP16.png"
import imageP17 from "../../assets/ProjectImages/imageP17.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const ProjectsCards = () => {

    gsap.registerPlugin(ScrollTrigger);


    const refDiv1 = React.useRef(null);

    // useGSAP(() => {
    //     gsap.from(".hero-1", {

    //         height: "100px",
    //         duration: 0.2,
    //         stagger: {
    //             amount: 2.1,
    //         },
    //         ease: "power1.in",

    //         scrollTrigger: {
    //             trigger: ".king",
    //             scroller: "body",
    //             start: "top 100%",
    //             markers: true,
    //             end: "top -700%",
    //             scrub: true,
    //             // markers: true,
    //         }
    //     })

    // })

    useGSAP(() => {

        gsap.from(".hero-1", {
            height: "50px",
            duration: 1.7,

            stagger: {
                amount: 10.4,
            },

            ease: "none",

            scrollTrigger: {
                trigger: ".king",
                scroller: "body",

                start: "top 99%",
                end: "+=5100",

                scrub: true,
                // markers: true,
            }
        });

    });



    return (
        <div className="pl-[10px] king -mt-20 mb-10">
            <div className="w-full hero-1  h-[550px] mb-[10px] flex gap-[10px]  ">
                <div
                    // onMouseEnter={() => {

                    //   refDiv1.current.style.display = "flex"
                    //   refDiv1.current.style.height = "100%"
                    //   refDiv1.current.style.transition = "all 0.3s ease-in-out"
                    // }}

                    // onMouseLeave={() => {
                    //   refDiv1.current.style.display = "none"
                    //   refDiv1.current.style.height = "0%"
                    //   refDiv1.current.style.transition = "all 0.3s ease-in-out"
                    // }}

                    className="w-1/2 group relative hover:rounded-[50px] overflow-hidden transform transition-all  duration-200 h-full ">
                    <img className='h-full w-full object-cover' src={imageP1} alt="Project 1"></img>

                    <div ref={refDiv1} className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>

                </div>
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP2} alt="Project 2"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
            </div>

            <div className="w-full hero-1 h-[550px] mb-[10px] flex gap-[10px] ">
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP3} alt="Project 3"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP4} alt="Project 4"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
            </div>


            <div className="w-full hero-1 h-[550px] mb-[10px] flex gap-[10px] ">
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP5} alt="Project 5"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP6} alt="Project 6"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
            </div>


            <div className="w-full hero-1 h-[550px] mb-[10px] flex gap-[10px] ">
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP7} alt="Project 7"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP8} alt="Project 8"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
            </div>

            <div className="w-full hero-1 h-[550px] mb-[10px] flex gap-[10px] ">
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP9} alt="Project 9"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP10} alt="Project 10"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
            </div>

            <div className="w-full hero-1 h-[550px] mb-[10px] flex gap-[10px] ">
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP11} alt="Project 11"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP12} alt="Project 12"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
            </div>

            <div className="w-full hero-1 h-[550px] mb-[10px] flex gap-[10px] ">
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP13} alt="Project 13"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP14} alt="Project 14"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
            </div>

            <div className="w-full hero-1 h-[550px] mb-[10px] flex gap-[10px] ">
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP15} alt="Project 15"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
                <div className="w-1/2 h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP16} alt="Project 16"></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
            </div>

            <div className="w-[49.48%] hero-1 h-[550px] mb-[10px] ">
                <div className="w-full h-full group hover:rounded-[50px] relative overflow-hidden transform  transition-all duration-200">
                    <img className='h-full w-full object-cover' src={imageP17} alt="Project 17 "></img>
                    <div className=' opacity-0 group-hover:opacity-100 transform transition-all duration-200 w-full flex items-center justify-center  h-full absolute   top-0 bg-black/23'>
                        <h2 className='text-white font-[font2] text-[60px] leading-[0.7]  pt-4 px-5 uppercase border-2 border-white  rounded-full '>View Project</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCards
