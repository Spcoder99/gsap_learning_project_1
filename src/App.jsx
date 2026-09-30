import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agents from './pages/Agents'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from './components/Navbar/Navbar'
import FullScreenNav from './components/FullScreenNav/FullScreenNav'
import NewNavBar from './components/NavNew/NewNavBar'
import Footer from './components/Footer/Footer'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import ViewProjects from './pages/ViewProjects'

const App = () => {


     const location = useLocation();

    const isHome = location.pathname === "/";
    const isContact = location.pathname === "/contact";

  // const divRef = React.useRef(null);

  // useGSAP(() => {

  //   const tl = gsap.timeline()

  //   tl.to(divRef.current, {
  //     display: "block",
  //   })
  //   tl.from(".stair", {
  //     // delay: 1.2,
  //     transform: "translateY(-100%)",
  //     duration: 0.18,
  //     stagger: {
  //       amount: -0.22, // here we are using amount property
  //       // amount property is used to define the total amount of time that the staggered animations will take. It distributes the staggered animations evenly over the specified amount of time.
  //     },


  //     // stagger: 0.2
  //     // Sets the gap between the start of each animation.
  //     // Example: Animation 1 → 0.2s → Animation 2 → 0.2s → Animation 3

  //     // stagger: { amount: 1 }
  //     // Sets the total time from the start of the first animation
  //     // to the start of the last animation, and distributes that
  //     // time equally between all animation starts.



  //     ease: "power1.in",
  //   })

  //   tl.to(".stair", {
  //     // transform: "translateY(100%)",
  //     duration: 0.63,
  //   })

  //   tl.to(".stair", {
  //     transform: "translateY(100%)",
  //     duration: 0.21,
  //     stagger: {
  //       amount: -0.22, // here we are using amount property
  //       // amount property is used to define the total amount of time that the staggered animations will take. It distributes the staggered animations evenly over the specified amount of time.
  //     },
  //     ease: "power1.in",
  //   })

  //   tl.to(divRef.current, {
  //     display: "none",
  //   })

  //   // tl.to(".stair", {
  //   //   transform: "translateY(0%)",
  //   // })
  // })






  // // Confusion why we need to make extra parent div while we add three new animations like where happening display:block, display:none, and transform:translateY(0%).
  // // And if we remove that div then the animation is not working properly.so why




  return (
    <div className="">
      {/* <Navbar/> */}
      {/* <NewNavBar /> */}
      {isHome || isContact ? <Navbar /> : <NewNavBar />}
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/viewProject" element={<ViewProjects/>}/>
      </Routes>
      {(isHome || isContact) ? <></> : <Footer />}
      {/* {isContact?<></> : <></>} */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
