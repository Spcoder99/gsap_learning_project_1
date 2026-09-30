import React, { useRef } from 'react'
import image1 from "../assets/images/image1.png"
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import img1 from "../assets/images/image1.png"
import img2 from "../assets/images/image2.png"
import img3 from "../assets/images/image3.png"
import img4 from "../assets/images/image4.png"
import img5 from "../assets/images/image5.png"
import img6 from "../assets/images/image6.png"
import img7 from "../assets/images/image7.png"
import img8 from "../assets/images/image8.png"
import NewAgentsTeamCompo from '../components/NewAgentsTeam/NewAgentsTeamCompo'
import AgentsAbout from '../components/Agents/AgentsAbout'




const scrollingImagesArray = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8
]

const Agents = () => {


  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {
    const imageDiv = imageDivRef.current;

    gsap.to(imageDiv, {
      scrollTrigger: {
        trigger: imageDiv,
        scroller: "body",
        start: "top 26.58%",
        end: "top -118.45%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        // markers: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // ease: "power1.inOut",
        onUpdate: (scroll) => {



          // My Way -> if Want to use round then use this way
          // const imageIndex = Math.round(scroll.progress * ((scrollingImagesArray.length)-1));
          // console.log(imageIndex);
          // imageRef.current.src = scrollingImagesArray[imageIndex]





          // 2nd Way -> if want to use floor then use this way
          let imageIndex;

          if (scroll.progress < 1) {
            imageIndex = Math.floor(scroll.progress * scrollingImagesArray.length)
            console.log(imageIndex);
          } else {
            imageIndex = scrollingImagesArray.length - 1

          }
          imageRef.current.src = scrollingImagesArray[imageIndex]


        }


        // onUpdate is a callback function that runs whenever the ScrollTrigger updates(means when the scroll position changes i.e. when we scroll).
        // The "scroll" parameter is the ScrollTrigger instance(that gives as object while console.log) that contains
        // information about the current ScrollTrigger(means the current scroll position).
        // The main important thing in Every ScrollTrigger instance Object is the "progress" property, which represents the current progress of the ScrollTrigger as a value between 0 and 1.



      },
    });
  })



  return (
    <>
      <div className="parent ">

        <div className="section-1 py-1">
          <div ref={imageDivRef} className="absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-54 left-[29.8vw]">
            <img ref={imageRef} className='img-1 h-full w-full object-cover' src={image1} alt='Agent 1'></img></div>
          <div className=" relative font-[font2]">
            <div className="mt-[53.5vh]">
              <h1 className="text-[20vw] text-center uppercase leading-[18vw]">SEVEN7Y<br></br>
                TWO
              </h1>
            </div>
            <div className='pl-[39.5%]'>
              <p className="text-[56px] leading-[57px]">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
              </p>
            </div>
            <div className='flex text-start justify-start gap-[24vw] pl-[12%] leading-[26px] text-[20px] mt-[13vw]'>
              <p>Expertise</p>
              <div>
                <p>Strategy</p>
                <p>Advertising</p>
                <p>Branding</p>
                <p>Design</p>
                <p>Content</p>
              </div>
            </div>
            <div className='flex pl-[9%] pr-[6.5%] text-start justify-around mt-[11.5vw] text-[20px] leading-[26px]'>
              <p className="w-[25vw]">Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</p>
              <p className="w-[25vw]">Our Creative_ Simmering in an<br></br> environment where talent can come to a<br></br> full boil. Encouraged to become the best versions of ourselves.</p>
              <p className="w-[18vw]">Our Culture_ We’re open to <br></br>each other. Period. The team<br></br> works together to create a<br></br> space that makes us proud.</p>
            </div></div>
        </div>
        

        <div className="section-2 mt-[25vw]">
          <NewAgentsTeamCompo></NewAgentsTeamCompo>
        </div>
        <AgentsAbout/>
      </div>

    </>
  )
}

export default Agents
