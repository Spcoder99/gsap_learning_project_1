import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Contact1 = () => {
  const carouselRef3 = useRef()

  const papaRef = useRef()

  const carouselRef4 = useRef()

  const papaRef2 = useRef()


  const carouselRef5 = useRef()
  const papaRef3 = useRef()

  useGSAP(() => {
    gsap.to(carouselRef3.current, {
      rotate: 5,
      scrollTrigger: {
        trigger: ".trigger",
        scroller: "body",
        start: "top 85%",
        end: "top 75%",
        scrub: true,
        // markers: true
      },
      duration: 0.61,
      ease: "power1.inOut"
    })
  })



  useGSAP(() => {
    gsap.to(carouselRef4.current, {
      rotate: 5,
      scrollTrigger: {
        trigger: ".trigger2",
        scroller: "body",
        start: "top 115%",
        end: "top 105%",
        scrub: true,
        // markers: true
      },
      duration: 0.61,
      ease: "power1.in"
    })
  })


  useGSAP(() => {
    gsap.to(carouselRef5.current, {
      rotate: 5,
      scrollTrigger: {
        trigger: ".trigger3",
        scroller: "body",
        start: "top 115%",
        end: "top 105%",
        scrub: true,
        // markers: true
      },
      duration: 0.61,
      ease: "power1.in"
    })
  })
  return (
    <>

      <div className="h-[40vw] w-full flex justify-between text-white pt-20 px-28">
        <div className='flex flex-col gap-[3px] items-center justify-end mb-20'>
          <h2 className='font-[font2] text-[16px]'>Onscreen or in an office</h2>
          <h2 className='font-[font2] text-[16px]'>Here.There.</h2>
          <h2 className='font-[font2] text-[16px]'>Anywhere.</h2>
        </div>
        <div className=' flex flex-col gap-1 items-center justify-center relative bottom-[58px]'>
          <h4 className='font-[font1] text-[148px] leading-[128px]'>TO TALK</h4>
          <h4 className='font-[font1] text-[148px] leading-[128px]'>ABOUT</h4>
          <h4 className='font-[font1] text-[148px] leading-[128px]'>YOUR</h4>
          <h4 className='font-[font1] text-[148px] leading-[128px]'>PROJECT</h4>
        </div>
        <div className=' flex flex-col gap-[3px] items-center justify-end mb-20'>
          <h2 className='font-[font2] text-[16px]'>525 Av.Viger O-Suite 400</h2>
          <h2 className='font-[font2] text-[16px]'>Montréal, QC H2Z 1G6 →</h2>
        </div>
      </div>

      <div className='mt-25 trigger '>
        <div
          // 
          ref={carouselRef3}
          onMouseEnter={() => {
            papaRef.current.style.height = "100%"
            papaRef.current.classList.remove("overflow.hidden")
          }}

          onMouseLeave={() => {
            papaRef.current.style.height = "0"
            papaRef.current.classList.add("overflow.hidden")
          }}
          className=' cursor-pointer rotate-[-5deg] translate-y-[-60px]  border-t-1 relative border-white text-white'>

          <div className='a1 flex text-black  bg-[#D3FD50]' >
            <div className='h-[10.5vw] flex moveXDir  items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              {/* <img src={imageN1} alt="Image 1"></img> */}
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>

              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
            </div>
            <div className='h-[10.5vw] flex moveXDir  items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
            </div>
          </div>


          <div
            ref={papaRef}
            style={{
              transition: "height 0.1145s ease-in-out"
            }} className='a2 h-0 overflow-hidden flex text-black  bg-[#fff] absolute top-0' >
            <div className='h-[10.5vw] flex moveXDir  items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              {/* <img src={imageN1} alt="Image 1"></img> */}
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>

              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
            </div>
            <div className='h-[10.5vw] flex moveXDir  items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>


      <div className="h-[40vw] w-full flex justify-between text-white pt-20 px-28">
        <div className='flex flex-col gap-[3px] items-center justify-end mb-20'>
          <h2 className='font-[font2] text-[16px]'>Onscreen or in an office</h2>
          <h2 className='font-[font2] text-[16px]'>Here.There.</h2>
          <h2 className='font-[font2] text-[16px]'>Anywhere.</h2>
        </div>
        <div className=' flex flex-col gap-1 items-center justify-center relative bottom-[58px]'>
          <h4 className='font-[font1] text-[148px] leading-[128px]'>TO TALK</h4>
          <h4 className='font-[font1] text-[148px] leading-[128px]'>ABOUT</h4>
          <h4 className='font-[font1] text-[148px] leading-[128px]'>YOUR</h4>
          <h4 className='font-[font1] text-[148px] leading-[128px]'>PROJECT</h4>
        </div>
        <div className=' flex flex-col gap-[3px] items-center justify-end mb-20'>
          <h2 className='font-[font2] text-[16px]'>525 Av.Viger O-Suite 400</h2>
          <h2 className='font-[font2] text-[16px]'>Montréal, QC H2Z 1G6 →</h2>
        </div>
      </div>

      <div className='mt-25 trigger2'>
        <div
          // 
          ref={carouselRef4}
          onMouseEnter={() => {
            papaRef2.current.style.height = "100%"
            papaRef2.current.classList.remove("overflow.hidden")
          }}

          onMouseLeave={() => {
            papaRef2.current.style.height = "0"
            papaRef2.current.classList.add("overflow.hidden")
          }}
          className=' cursor-pointer rotate-[-5deg] translate-y-[-60px]  border-t-1 relative border-white text-white'>

          <div className='a1 flex text-black  bg-[#D3FD50]' >
            <div className='h-[10.5vw] flex moveXDir  items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              {/* <img src={imageN1} alt="Image 1"></img> */}
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>

              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
            </div>
            <div className='h-[10.5vw] flex moveXDir  items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
            </div>
          </div>


          <div
            ref={papaRef2}
            style={{
              transition: "height 0.1145s ease-in-out"
            }} className='a2 h-0 overflow-hidden flex text-black  bg-[#fff] absolute top-0' >
            <div className='h-[10.5vw] flex moveXDir  items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              {/* <img src={imageN1} alt="Image 1"></img> */}
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>

              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
            </div>
            <div className='h-[10.5vw] flex moveXDir  items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>



      <div className="h-[40vw] w-full flex justify-between text-white pt-20 px-28">
        <div className='flex flex-col gap-[3px] items-center justify-end mb-20'>
          <h2 className='font-[font2] text-[16px]'>Onscreen or in an office</h2>
          <h2 className='font-[font2] text-[16px]'>Here.There.</h2>
          <h2 className='font-[font2] text-[16px]'>Anywhere.</h2>
        </div>
        <div className=' flex flex-col gap-1 items-center justify-center relative bottom-[58px]'>
          <h4 className='font-[font1] text-[148px] leading-[128px]'>TO TALK</h4>
          <h4 className='font-[font1] text-[148px] leading-[128px]'>ABOUT</h4>
          <h4 className='font-[font1] text-[148px] leading-[128px]'>YOUR</h4>
          <h4 className='font-[font1] text-[148px] leading-[128px]'>PROJECT</h4>
        </div>
        <div className=' flex flex-col gap-[3px] items-center justify-end mb-20'>
          <h2 className='font-[font2] text-[16px]'>525 Av.Viger O-Suite 400</h2>
          <h2 className='font-[font2] text-[16px]'>Montréal, QC H2Z 1G6 →</h2>
        </div>
      </div>

      <div className='mt-25 trigger3 '>
        <div
          // 
          ref={carouselRef5}
          onMouseEnter={() => {
            papaRef3.current.style.height = "100%"
            papaRef3.current.classList.remove("overflow.hidden")
          }}

          onMouseLeave={() => {
            papaRef3.current.style.height = "0"
            papaRef3.current.classList.add("overflow.hidden")
          }}
          className=' cursor-pointer rotate-[-5deg] translate-y-[-60px]  border-t-1 relative border-white text-white'>

          <div className='a1 flex text-black  bg-[#D3FD50]' >
            <div className='h-[10.5vw] flex moveXDir  items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              {/* <img src={imageN1} alt="Image 1"></img> */}
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>

              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
            </div>
            <div className='h-[10.5vw] flex moveXDir  items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
            </div>
          </div>


          <div
            ref={papaRef3}
            style={{
              transition: "height 0.1145s ease-in-out"
            }} className='a2 h-0 overflow-hidden flex text-black  bg-[#fff] absolute top-0' >
            <div className='h-[10.5vw] flex moveXDir  items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              {/* <img src={imageN1} alt="Image 1"></img> */}
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>

              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
            </div>
            <div className='h-[10.5vw] flex moveXDir  items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
              <h2 className='whitespace-nowrap font-[font2] text-[11vw] mt-[34px]  leading-[1vw]'>HELLO@K72.CA</h2>
              <svg className='mx-6 mt-4' xmlns="http://w3.org" viewBox="0 0 215 200" width="190" height="240">
                <path d="M 107.5,58 L 129,35.5 L 172.5,35.5 L 180,43 L 180,82 L 107.5,166 L 35,82 L 35,43 L 42.5,35.5 L 86,35.5 Z" fill="#0E0E0E" stroke="#0E0E0E" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact1
