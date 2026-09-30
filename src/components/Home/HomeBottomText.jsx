import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
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
    <>
      <div className="flex items-center relative bottom-[-120px] pl-2 gap-3.5 ">
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

      <div className="font-[font2] flex items-center justify-center mb-3 uppercase gap-6">
        {/* <h2 className="text-[20px] font-[font2] mt-[4px]">MONTREAL_{Dat}</h2> */}

        <Link to="/projects" className="lg:text-[6.7vw] hover:text-[#d3fd50] hover:border-[#d3fd50] lg:leading-[4.59vw] border-3 border-white rounded-full lg:px-8 lg:pt-6 uppercase">Work</Link>
        <Link to="/agents" className="lg:text-[6.7vw] hover:text-[#d3fd50] hover:border-[#d3fd50] lg:leading-[4.59vw] border-3 border-white rounded-full lg:px-8 lg:pt-6 uppercase">Agency</Link>
      </div>
    </>
  )
}

export default HomeBottomText
