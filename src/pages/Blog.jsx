import React, { useRef, useState } from 'react'
import imageB1 from "../assets/blog/imageB1.png"
import imageB2 from "../assets/blog/imageB2.png"

const Blog = () => {

  const imag2Ref1 = useRef()
  const imag2Ref2 = useRef()

  const h2Ref1 = useRef()
  const h2Ref2 = useRef()
  const h2Ref3 = useRef()





  return (
    <div className='min-h-screen pt-20 w-full'>
      <h2 className="text-[60px] items-center relative mt-25 left-40 font-[font1]">&bull; BLOG</h2>
      <div className="flex justify-end items-center relative mt-38 mb-4  border-b-1 pb-2">
        <h2 className="text-[20px] font-[font2] mr-[3px] ">Categories:</h2>
        <h2 className="text-[20px] font-[font2] pt-[3px] bg-[#000] text-white px-2">ALL</h2>
        <h2 className="text-[20px] font-[font2] pt-[3px] bg-[#EDEDED] mr-[2px] px-2">Design</h2>
        <h2 className="text-[20px] font-[font2] pt-[3px] bg-[#EDEDED]  mr-[2px] px-2">Tech & AI</h2>
        <h2 className="text-[20px] font-[font2] pt-[3px] bg-[#EDEDED] px-2">Account</h2>
      </div>
      <div className="flex w-full px-2 gap-2 ">
        <div
          className="flex flex-col w-1/2">
          <div
            onMouseEnter={() => {
              imag2Ref1.current.style.transform = "scale(1.07)";
              imag2Ref1.current.style.transition = "transform 0.25s ease-in-out";
              h2Ref1.current.style.textDecoration = "underline";
              h2Ref1.current.style.transition = "text-decoration 0.3s ease-in-out";
            }}
            onMouseLeave={() => {
              imag2Ref1.current.style.transform = "scale(1)";
              imag2Ref1.current.style.transition = "transform 0.25s ease-in-out";
              h2Ref1.current.style.textDecoration = "none";
              h2Ref1.current.style.transition = "text-decoration 0.3s ease-in-out";
            }}
            className="w-full h-[32.5vw] rounded-[50px] overflow-hidden">
            <img ref={imag2Ref1} className="w-full h-full object-cover" src={imageB1} alt="Blog Image 1" />
          </div>
          <h2 className='text-[25px] font-[font2] items-center mt-3'>&bull; October  3 2025</h2>
          <h2
            onMouseEnter={() => {

              h2Ref1.current.style.textDecoration = "underline";
              h2Ref1.current.style.transition = "text-decoration 0.3s ease-in-out";
            }}
            onMouseLeave={() => {

              h2Ref1.current.style.textDecoration = "none";
              h2Ref1.current.style.transition = "text-decoration 0.3s ease-in-out";
            }}
            ref={h2Ref1} className='text-[35px] font-[font2] w-[90%] cursor-pointer uppercase leading-[35px] mt-3'>Écrire un article sur l’écriture d’un article avec ChatGPT : plongée dans la mise en abyme</h2>
          {/* <h2></h2> */}
          <div className='flex mt-3 gap-2 mb-5'>
            <h2 className='text-[20px] px-2 text-center pt-[5px] bg-[#EDEDED] font-[font2]'>Design</h2>
            <h2 className="text-[20px] px-2 text-center pt-[5px] bg-[#EDEDED] font-[font2]">Tech & AI</h2>
          </div>
        </div>
        <div
          className="flex flex-col w-1/2">
          <div
            onMouseEnter={() => {
              imag2Ref2.current.style.transform = "scale(1.07)";
              imag2Ref2.current.style.transition = "transform 0.25s ease-in-out";
              h2Ref2.current.style.textDecoration = "underline";
              h2Ref2.current.style.transition = "text-decoration 0.3s ease-in-out";
            }}
            onMouseLeave={() => {
              imag2Ref2.current.style.transform = "scale(1)";
              imag2Ref2.current.style.transition = "transform 0.25s ease-in-out";
              h2Ref2.current.style.textDecoration = "none";
              h2Ref2.current.style.transition = "text-decoration 0.3s ease-in-out";
            }}
            className="w-full h-[32.5vw] rounded-[50px] overflow-hidden">
            <img ref={imag2Ref2} className="w-full h-full object-cover" src={imageB2} alt="Blog Image 2" />
          </div>
          <h2 className='text-[25px] font-[font2] items-center mt-3'>&bull; May  9 2025</h2>
          <h2 onMouseEnter={() => {

            h2Ref2.current.style.textDecoration = "underline";
            h2Ref2.current.style.transition = "text-decoration 0.3s ease-in-out";
          }}
            onMouseLeave={() => {

              h2Ref2.current.style.textDecoration = "none";
              h2Ref2.current.style.transition = "text-decoration 0.3s ease-in-out";
            }} ref={h2Ref2} className='text-[35px] font-[font2] w-[70%] cursor-pointer uppercase leading-[35px] mt-3'>Pub prédictive: L’IA révolutionne le ciblage</h2>
          {/* <h2></h2> */}
          <div className='flex mt-3 gap-2 mb-5'>
            <h2 className="text-[20px] px-2 text-center pt-[5px] bg-[#EDEDED] font-[font2]">Tech & AI</h2>
          </div>
        </div>
      </div>



      <div className="flex flex-col ml-2 mt-18 mb-20">
        <div onMouseEnter={() => {
          h2Ref3.current.style.textDecoration = "underline";
          h2Ref3.current.style.transition = "text-decoration 0.3s ease-in-out";
        }} onMouseLeave={() => {
          h2Ref3.current.style.textDecoration = "none";
          h2Ref3.current.style.transition = "text-decoration 0.3s ease-in-out";
        }} className="w-[478px] h-[322px] rounded-[50px] overflow-hidden">
          <img className="w-full h-full object-cover" src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="Blog Image 2" />
        </div>
        <h2 className='text-[20px] font-[font2] items-center mt-3'>&bull; May  9 2025</h2>
        <h2 onMouseEnter={() => {
          h2Ref3.current.style.textDecoration = "underline";
          h2Ref3.current.style.transition = "text-decoration 0.3s ease-in-out";
        }} onMouseLeave={() => {
          h2Ref3.current.style.textDecoration = "none";
          h2Ref3.current.style.transition = "text-decoration 0.3s ease-in-out";
        }} ref={h2Ref3} className='text-[22px] font-[font2] w-[30%] cursor-pointer uppercase leading-[22px] mt-3'>Conseil & relation client: un duo qui ne se briefe pas, qui se construit</h2>
        {/* <h2></h2> */}
        <div className='flex mt-3 gap-2 mb-5'>
          <h2 className="text-[20px] px-2 text-center pt-[5px] bg-[#EDEDED] font-[font2]">Account</h2>
        </div>
      </div>
    </div>
  )
}

export default Blog
