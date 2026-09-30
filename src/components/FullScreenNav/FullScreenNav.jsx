import React, { useContext } from 'react'
import imageN1 from '../../assets/NavImage/imageN1.png'
import imageN2 from '../../assets/NavImage/imageN2.png'
import imageN3 from '../../assets/NavImage/imageN3.png'
import imageN4 from '../../assets/NavImage/imageN4.png'
import imageN5 from '../../assets/NavImage/imageN5.png'
import imageN6 from '../../assets/NavImage/imageN6.png'
import imageN7 from '../../assets/NavImage/imageN7.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { NavbarContext } from '../../context/NavContext'
import { useLocation, useNavigate } from "react-router-dom"
// import { NavbarContext } from '../../context/NavContext'
// import NavbarContext from '../../context/NavContext'
const FullScreenNav = () => {

  const fullScreenNavRef = React.useRef(null);
  const topDivRef = React.useRef(null);

  const gRef = React.useRef(null);
  const carouselRef = React.useRef(null);
  const carouselRef2 = React.useRef(null);
  const carouselRef3 = React.useRef(null);
  const carouselRef4 = React.useRef(null);

  const navigate = useNavigate()


  const [navOpen, setNavOpen] = useContext(NavbarContext);

  console.log("navOpen", navOpen);



const location = useLocation();
const currentPath = location.pathname

console.log(currentPath)


React.useEffect(() => {
  setNavOpen(false);
}, [location.pathname]);




  function gsapAnimation() {
    const tl = gsap.timeline()

    tl.to(topDivRef.current, {
      display: "block",
    }
    )



    tl.to(".stairs", {
      // delay: 0.05,
      transform: "translateY(0%)",
      duration: 0.2,
      stagger: {
        amount: -0.2, // here we are using amount property
        // amount property is used to define the total amount of time that the staggered animations will take. It distributes the staggered animations evenly over the specified amount of time.
      },

      ease: "power1.in",
    })

    tl.to(".navLinks", {
      opacity: 1,
      duration: 0.1,
    }, "king"
    )


    tl.to(".crossAni", {
      opacity: 1,
      duration: 0.1,
      x: 0,
      ease: "power1.in",
    }, "king")

    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.15, // here we are using amount property 
      },
      ease: "power1.in",
    }
    )


    tl.to(".last-div", {
      opacity: 1,
      y: 0,
      duration: 0.18,
      ease: "power1.in",
    },"-=0.35")






  }


  function gsapAnimationReverse() {

    const tl = gsap.timeline()


    tl.to(".last-div", {
      opacity: 0,
      y: 20,
      duration: 0.12,
      ease: "power1.in",
    })


    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.08, // here we are using amount property 
      },
    }
    )







    tl.to(".navLinks", {
      opacity: 0,
      duration: 0.1,
    }, "king"
    )


    tl.to(".crossAni", {
      opacity: 0,
      x: 150,
      duration: 0.1,
      ease: "power1.in",
    }, "king")


    tl.to(".stairs", {
      // delay: 0.4,
      transform: "translateY(-100%)",
      duration: 0.2,
      stagger: {
        amount: -0.19, // here we are using amount property
        // amount property is used to define the total amount of time that the staggered animations will take. It distributes the staggered animations evenly over the specified amount of time.
      },

      ease: "power1.in",
    })

    tl.to(topDivRef.current, {
      display: "none",
    })

  }


  useGSAP(() => {
    if (navOpen) {

      gsapAnimation()
    } else {

      gsapAnimationReverse()
    }
  }, [navOpen])



  const [Dat, setDat] = React.useState("");

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


  return (
    <div ref={topDivRef} className='h-screen z-50 absolute w-full text-white hidden  overflow-x-hidden overflow-y-hidden '>



      <div className="h-screen w-full fixed ">
        <div className="h-full w-full flex">
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
          <div className="stairs h-full w-1/5 bg-black"></div>
        </div>
      </div>





      <div ref={fullScreenNavRef} className="relative">
        <div className='navLinks flex relative font-[font2]'>
          <div onClick={() => navigate("/")} className="pt-3 pl-3 cursor-pointer">
            <svg className='w-29' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
              <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
          </div>

          <div className='flex items-start justify-center ml-9 mt-2'>
            <h2>EN</h2>
            <h2 className='px-2'>/</h2>
            <h2 className='text-[#4D4D4D] hover:text-[#D3FD50] cursor-pointer'>FR</h2>
          </div>

          <div

          
            onClick={() => {
              setNavOpen(false)
            }}
            onMouseEnter={() => {
              gRef.current.style.stroke = "#D3FD50"
            }}
            onMouseLeave={() => {
              gRef.current.style.stroke = "#ffffff"
            }}
            className='crossAni absolute right-4 pt-[11px] mb-14 cursor-pointer'>
            <svg xmlns="http://w3.org" viewBox="0 0 110 110" width="110px" height="110px">

              <g ref={gRef} stroke="#ffffff" stroke-width="2.6" stroke-linecap="square">
                {/* <line x1="10" y1="10" x2="100" y2="100" />
            <line x1="10" y1="100" x2="100" y2="10" /> */}

                <line x1="0" y1="0" x2="110" y2="110" />
                <line x1="0" y1="110" x2="110" y2="0" />
              </g>

            </svg>
          </div>


        </div>
        <div className="mt-30">
          <div 
          onClick={() => {
            navigate("/projects")
          }}
          onMouseEnter={() => {
            carouselRef.current.style.height = "100%"
            carouselRef.current.style.transition = "height 0.155679s ease-in-out"
          }}
            onMouseLeave={() => {
              carouselRef.current.style.height = "0%"
              carouselRef.current.style.transition = "height 0.155679s ease-in-out"
            }}
            className='link cursor-pointer origin-top  border-t-1 relative border-white'>
            <h1 className='font-[font2] text-[7.96vw] text-center leading-[5.9vw] pt-6'>WORK</h1>
            <div style={{ height: "0%", overflow: "hidden" }} ref={carouselRef} className='absolute flex text-black  bg-[#D3FD50] top-0'>
              <div className='flex moveXDir  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] pt-[15px]  leading-[6.5vw]'>SEE EVERYTHING</h2>
                <img className="shrink-0 h-22 rounded-full w-61 mx-8 mt-[7px] object-cover" src={imageN1} alt="Image 1"></img>
                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  pt-[15px] leading-[6.5vw]'>SEE EVERYTHING</h2>
                <img className=" shrink-0 h-22 rounded-full w-61 mx-8 mt-[7px] object-cover" src={imageN2} alt="Image 2"></img>
              </div>

              <div className='flex moveXDir  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] pt-[15px]  leading-[6.5vw]'>SEE EVERYTHING</h2>
                <img className="shrink-0 h-22 rounded-full w-61 mx-8 mt-[7px] object-cover" src={imageN1} alt="Image 1"></img>
                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  pt-[15px] leading-[6.5vw]'>SEE EVERYTHING</h2>
                <img className=" shrink-0 h-22 rounded-full w-61 mx-8 mt-[7px] object-cover" src={imageN2} alt="Image 2"></img>
              </div>
            </div>
          </div>

          <div 
          onClick={() => {
            navigate("/agents")
          }}
          onMouseEnter={() => {
            carouselRef2.current.style.height = "100%"
            carouselRef2.current.style.transition = "height 0.155679s ease-in-out"
          }}
            onMouseLeave={() => {
              carouselRef2.current.style.height = "0%"
              carouselRef2.current.style.transition = "height 0.155679s ease-in-out"
            }} className='link cursor-pointer origin-top  border-t-1 relative border-white'>
            <h1 className='font-[font2] text-[7.96vw] text-center leading-[5.9vw] pt-6'>AGENCY</h1>
            <div style={{ height: "0%", overflow: "hidden" }} ref={carouselRef2} className='absolute flex text-black  bg-[#D3FD50] top-0'>
              <div className='flex moveXDir  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] pt-[15px]  leading-[6.5vw]'>KNOW US</h2>
                <img className="shrink-0 h-22 rounded-full w-61 mx-8 mt-[7px] object-cover" src={imageN3} alt="Image 3"></img>
                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  pt-[15px] leading-[6.5vw]'>KNOW US</h2>
                <img className=" shrink-0 h-22 rounded-full w-61 mx-8 mt-[7px] object-cover" src={imageN4} alt="Image 4"></img>
              </div>
              <div className='flex moveXDir  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] pt-[15px]  leading-[6.5vw]'>KNOW US</h2>
                <img className="shrink-0 h-22 rounded-full w-61 mx-8 mt-[7px] object-cover" src={imageN3} alt="Image 3"></img>
                <h2 className=' whitespace-nowrap font-[font2] text-[8vw]  pt-[15px] leading-[6.5vw]'>KNOW US</h2>
                <img className=" shrink-0 h-22 rounded-full w-61 mx-8 mt-[7px] object-cover" src={imageN4} alt="Image 4"></img>
              </div>
            </div>
          </div>


          <div 
          onClick={() => {
            navigate("/contact")
          }}
          onMouseEnter={() => {
            carouselRef3.current.style.height = "100%"
            carouselRef3.current.style.transition = "height 0.155679s ease-in-out"
          }}
            onMouseLeave={() => {
              carouselRef3.current.style.height = "0%"
              carouselRef3.current.style.transition = "height 0.155679s ease-in-out"
            }}
            className='link cursor-pointer origin-top  border-t-1 relative border-white'>
            <h1 className='font-[font2] text-[7.96vw] text-center leading-[5.9vw] pt-6'>CONTACT</h1>
            <div style={{ height: "0%", overflow: "hidden" }} ref={carouselRef3} className='absolute flex text-black  bg-[#D3FD50] top-0' >
              <div className='flex moveXDir  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] pt-[15px]  leading-[6.5vw]'>SEND US A FAX</h2>
                {/* <img src={imageN1} alt="Image 1"></img> */}
                <svg className='mx-6 mt-[6px]' xmlns="http://w3.org" viewBox="0 0 215 200" width="140" height="170">
                  <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
                </svg>

                <h2 className='whitespace-nowrap font-[font2] text-[8vw] pt-[15px]  leading-[6.5vw]'>SEND US A FAX</h2>
                <svg className='mx-6 mt-[6px]' xmlns="http://w3.org" viewBox="0 0 215 200" width="140" height="170">
                  <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
                </svg>
              </div>
              <div className='flex moveXDir  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] pt-[15px]  leading-[6.5vw]'>SEND US A FAX</h2>
                <svg className='mx-6 mt-[6px]' xmlns="http://w3.org" viewBox="0 0 215 200" width="140" height="170">
                  <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
                </svg>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] pt-[15px]  leading-[6.5vw]'>SEND US A FAX</h2>
                <svg className='mx-6 mt-[6px]' xmlns="http://w3.org" viewBox="0 0 215 200" width="140" height="170">
                  <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
                </svg>
              </div>
            </div>
          </div>

          <div
          onClick={() => {
            navigate("/blog")
          }}
          onMouseEnter={() => {
            carouselRef4.current.style.height = "100%"
            carouselRef4.current.style.transition = "height 0.155679s ease-in-out"
          }}
            onMouseLeave={() => {
              carouselRef4.current.style.height = "0%"
              carouselRef4.current.style.transition = "height 0.155679s ease-in-out"
            }} className='link cursor-pointer origin-top  border-y-1 relative border-white'>
            <h1 className='font-[font2] text-[7.96vw] text-center leading-[5.9vw] pt-6'>BLOG</h1>
            <div style={{ height: "0%", overflow: "hidden" }} ref={carouselRef4} className='absolute flex text-black  bg-[#D3FD50] top-0'>
              <div className='flex moveXDir  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] pt-[15px]  leading-[6.5vw]'>READ ARTICLES</h2>
                <img className="shrink-0 h-22 rounded-full w-61 mx-8 mt-[7px] object-cover" src={imageN5} alt="Image 5"></img>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] pt-[15px]  leading-[6.5vw]'>READ ARTICLES</h2>
                <img className="shrink-0 h-22 rounded-full w-61 mx-8 mt-[7px] object-cover" src={imageN7} alt="Image 7"></img>
              </div>
              <div className='flex moveXDir  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] pt-[15px]  leading-[6.5vw]'>READ ARTICLES</h2>
                <img className="shrink-0 h-22 rounded-full w-61 mx-8 mt-[7px] object-cover" src={imageN5} alt="Image 5"></img>
                <h2 className='whitespace-nowrap font-[font2] text-[8vw] pt-[15px]  leading-[6.5vw]'>READ ARTICLES</h2>
                <img className="shrink-0 h-22 rounded-full w-61 mx-8 mt-[7px] object-cover" src={imageN7} alt="Image 7"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full pl-3 pr-7 pb-[8px] pt-32 last-div">

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
            <h2 className="text-[20px] font-[font2] hover:text-[#d3fd50] cursor-pointer">BACK TO TOP</h2>
          </div>
        </div>
      </div>
    </div>


  )
}

export default FullScreenNav
