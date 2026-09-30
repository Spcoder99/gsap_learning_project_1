import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {

    const currentPathLocation = useLocation().pathname;
    console.log("currentPathLocation", currentPathLocation);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPathLocation]);

    
    const divRef = useRef(null);
    const pageRef = useRef(null);

    useGSAP(() => {

        const tl = gsap.timeline()


        tl.to(divRef.current, {
            display: "block",
        })
        tl.from(".stair", {
            // delay: 1.2,
            transform: "translateY(-100%)",
            duration: 0.21,
            stagger: {
                amount: -0.23, // here we are using amount property
                // amount property is used to define the total amount of time that the staggered animations will take. It distributes the staggered animations evenly over the specified amount of time.
            },


            // stagger: 0.2
            // Sets the gap between the start of each animation.
            // Example: Animation 1 → 0.2s → Animation 2 → 0.2s → Animation 3

            // stagger: { amount: 1 }
            // Sets the total time from the start of the first animation
            // to the start of the last animation, and distributes that
            // time equally between all animation starts.



            ease: "power1.in",
        })


        tl.set(pageRef.current, {
            opacity: 0,
            scale: 1.2,
        })








        // set()     → instantly property set करता है; no animation.
        // to()      → current state → target state, smoothly.
        // from()    → given state → current state, smoothly.
        // fromTo()  → explicitly given start state → given end state, smoothly.









        tl.to({}, {
            duration: 0.38,
        })


        // tl.to(".stair", {
        //     // transform: "translateY(100%)",
        //     duration: 0.63,
        // })

        tl.to(".stair", {
            transform: "translateY(100%)",
            duration: 0.245,
            stagger: {
                amount: -0.262,
            },





            // Stagger: 0.2 & stagger: { amount: 0.8 } are two different ways to define the stagger effect in GSAP animations.
            // stagger: 0.2
            // "हर animation के START के बीच कितना gap?"

            // Example:
            // Animation 1 → 0.2s → Animation 2 → 0.2s → Animation 3


            // stagger: { amount: 0.8 }
            // "पहली animation के START से आखिरी animation के START तक
            // कुल कितना stagger फैलाना है?"
            // GSAP इस total amount को सभी animation STARTS के बीच evenly distribute करता है.

            // IMPORTANT:
            // amount हर animation की duration नहीं है.
            // यह पूरी animations के complete होने का total time भी नहीं है.
            // यह केवल FIRST START से LAST START तक का total stagger span है.

            // Example:
            // 5 elements + amount: 0.8

            // Element 1 → 0.0s
            // Element 2 → 0.2s
            // Element 3 → 0.4s
            // Element 4 → 0.6s
            // Element 5 → 0.8s




            ease: "power1.in",
        })

        tl.to(pageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.918989,
            ease: "power2.out",
        }, "<0.09890")


        tl.to(divRef.current, {
            display: "none",
        })

        tl.to(".stair", {
            transform: "translateY(0%)",
        })

        // ⭐ अब page वापस आएगा


    }, [currentPathLocation])






    // Confusion why we need to make extra parent div while we add three new animations like where happening display:block, display:none, and transform:translateY(0%).
    // And if we remove that div then the animation is not working properly.so why






    return (
        <div className="overflow-hidden">
            <div ref={divRef} className=" h-screen w-full fixed top-0 z-5">

                <div className="h-full w-full flex">
                    <div className="stair h-full w-1/5 bg-[#000] flex justify-start items-start">
                        <div onClick={() => navigate("/")} className="pt-3 pl-3 cursor-pointer">
                            <svg className='w-29' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="stair h-full w-1/5 bg-[#000]"></div>
                    <div className="stair h-full w-1/5 bg-[#000]"></div>
                    <div className="stair h-full w-1/5 bg-[#000]"></div>
                    <div className="stair h-full w-1/5 bg-[#000]"></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>

    )
}

export default Stairs
