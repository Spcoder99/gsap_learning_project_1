import React from 'react'
import imageAA1 from "../../assets/AgentsAbout/imageAA1.png"
import imageAA2 from "../../assets/AgentsAbout/imageAA2.png"
import imageAA3 from "../../assets/AgentsAbout/imageAA3.png"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AgentsAbout = () => {

    const md11 = React.useRef(null);
    const h21 = React.useRef(null);


    const md12 = React.useRef(null);
    const h22 = React.useRef(null);


    const md13 = React.useRef(null);
    const h23 = React.useRef(null);



    const div1 = React.useRef(null);
    const div2 = React.useRef(null);
    const div3 = React.useRef(null);



    


    const scaleImg = () => {
        gsap.to(md11.current, {
            scale: 1.05,
            duration: 0.4,
            opacity: 0.77,
            ease: "power1.Out",
            // transformOrigin: "center bottom",
        })

        gsap.to(h21.current, {
            textDecoration: "underline",
            duration: 0.4,
        })
    }


    const initImage = () => {
        gsap.to(md11.current, {
            scale: 1,
            duration: 0.4,
            opacity: 0.9,
            ease: "power1.Out",
        })

        gsap.to(h21.current, {
            textDecoration: "none",
            duration: 0.4,
        })
    }




    const scaleImg2 = () => {
        gsap.to(md12.current, {
            scale: 1.05,
            duration: 0.4,
            opacity: 0.77,
            ease: "power1.Out",
            // transformOrigin: "center bottom",
        })

        gsap.to(h22.current, {
            textDecoration: "underline",
            duration: 0.4,
        })
    }


    const initImage2 = () => {
        gsap.to(md12.current, {
            scale: 1,
            duration: 0.4,
            opacity: 0.9,
            ease: "power1.Out",
        })

        gsap.to(h22.current, {
            textDecoration: "none",
            duration: 0.4,
        })
    }





    const scaleImg3 = () => {
        gsap.to(md13.current, {
            scale: 1.05,
            duration: 0.4,
            opacity: 0.77,
            ease: "power1.Out",
            // transformOrigin: "center bottom",
        })

        gsap.to(h23.current, {
            textDecoration: "underline",
            duration: 0.4,
        })
    }


    const initImage3 = () => {
        gsap.to(md13.current, {
            scale: 1,
            duration: 0.4,
            opacity: 0.9,
            ease: "power1.Out",
        })

        gsap.to(h23.current, {
            textDecoration: "none",
            duration: 0.4,
        })
    }



    // useGSAP(() => {
    //     gsap.to(div2.current, {
    //         scrollTrigger: {
    //             trigger: div1.current,
    //             scroller: "body",
    //             start: "top 0",
    //             end: "top -30%",
    //             markers: true,
    //             pin: true,
    //             scrub: 2,
    //             // pinSpacing: true,
    //         },

    //         transform: "translateY(-120%)",
    //         duration: 1,
    //         ease: "power1.in",
    //     })
    // })


    return (
        <>
            <div onMouseEnter={scaleImg} ref={div1} onMouseLeave={initImage} className='w-full relative overflow-hidden rounded-[50px] z-2'>
                <div  className='w-full h-full '>
                    <img ref={md11} className='w-full h-full object-cover opacity-90' src={imageAA1} alt="Agent About" />
                </div>
                <div className='absolute h-full w-full bg-transparent top-0 flex flex-col'>
                    <div className='w-full h-full flex uppercase  justify-center text-white pt-3'>
                        <h2 className="font-[font2] text-[20px]  font-extrabold">View all projects</h2>

                    </div>

                    <div className='w-full h-full flex flex-col justify-center gap-2 relative bottom-108 items-center left-0 text-white '>
                        <h2 className="font-[font2] text-[30px]  font-extrabold">Opto-Reseau</h2>
                        <h2 ref={h21} className="font-[font2] text-[80px]  font-extrabold">We see you like no other</h2>
                    </div>
                </div>
            </div>

            <div onMouseEnter={scaleImg2} ref={div2} onMouseLeave={initImage2} className='w-full relative overflow-hidden rounded-[50px] mt-10   z-4'>
                <div  className='w-full h-full bg-black'>
                    <img ref={md12} className='w-full h-full object-cover opacity-100' src={imageAA2} alt="Agent About" />
                </div>
                <div className='absolute h-full w-full  top-0 flex flex-col'>
                    <div className='w-full h-full flex uppercase  justify-center text-white pt-3'>
                        <h2 className="font-[font2] text-[20px]  font-extrabold">View all projects</h2>

                    </div>

                    <div className='w-full h-full flex flex-col justify-center gap-2 relative bottom-108 items-center left-0 text-white '>
                        <h2 className="font-[font2] text-[30px]  font-extrabold">Lamajeure</h2>
                        <h2 ref={h22} className="font-[font2] text-[80px]  font-extrabold">Lamajeure</h2>
                    </div>
                </div>
            </div>



             <div onMouseEnter={scaleImg3} ref={div3} onMouseLeave={initImage3} className='w-full relative overflow-hidden rounded-[50px] mt-10 mb-10  z-6'>
                <div  className='w-full h-full bg-black'>
                    <img ref={md13} className='w-full h-full object-cover opacity-90' src={imageAA3} alt="Agent About" />
                </div>
                <div className='absolute h-full w-full bg-transparent top-0 flex flex-col'>
                    <div className='w-full h-full flex uppercase  justify-center text-white pt-3'>
                        <h2 className="font-[font2] text-[20px]  font-extrabold">View all projects</h2>

                    </div>

                    <div className='w-full h-full flex flex-col justify-center gap-2 relative bottom-108 items-center left-0 text-white '>
                        <h2 className="font-[font2] text-[30px]  font-extrabold">Lassonde</h2>
                        <h2 ref={h23} className="font-[font2] text-[80px]  font-extrabold">Fruite</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgentsAbout
