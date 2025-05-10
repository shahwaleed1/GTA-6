import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'


const App = () => {

  const [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      transformOrigin: '50% 50%',
      ease: 'power4.easeInOut',
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.5,
      opacity: 0,
      transformOrigin: '50% 50%',
      ease: "Expo.easeInOut",
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP(() => {
    const main = document.querySelector('.main');
    main?.addEventListener('mousemove', function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 1}`
      });
      gsap.to('.sky', {
        x: xMove,
      });
      gsap.to('.bg', {
        x: xMove * 1.5,
      })
    })
  }, [showContent])


  return (
    <>
      <div className='svg flex items-center justify-center fixed top-0 left-0 z-10 w-full h-screen overflow-hidden bg-black'>
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
          <defs>
            <mask id='vimask'>
              <rect width="100%" height="100%" fill='black' />
              <g className='vi-mask-group'>
                <text className='text' x="50%" y="50%" fontSize="250" textAnchor='middle' fill='white' dominantBaseline='middle' fontFamily='Arial Black'>VI</text>
              </g>
            </mask>
          </defs>
          <image href='/bg.png' width='100%' height='100%' preserveAspectRatio='xMidYMid slice' mask='url(#vimask)' />
        </svg>
      </div>

      {showContent && (
        <div className='main w-full'>
          <div className='landing w-full h-screen'>
            <div className='navbar absolute top-0 left-0 z-10 py-5 px-10 w-full'>
              <div className="logo flex items-center gap-7 ">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-8 h-[3px] bg-white"></div>
                  <div className='line w-6  h-[3px] bg-white'></div>
                  <div className='line w-4  h-[3px] bg-white'></div>
                </div>
                <h3 className='text-2xl text-white'>Rockstar</h3>
              </div>
            </div>
            <div className='imagesdiv relative w-full h-screen overflow-hidden'>
              <img className='absolute sky top-0 left-0 w-full h-full object-cover scale-[1.2]' src="/sky.png" alt="" />
              <img className='absolute bg top-0 left-0 w-full h-full object-cover scale-[1.2]' src="/bg.png" alt="" />
              <div className='text absolute top-10 left-1/2 -translate-x-1/2 text-white text-8xl'>
                <h1 className=' -ms-14'>grand</h1>
                <h1 className='ms-24'>theft</h1>
                <h1>auto</h1>
              </div>
              <img className='absolute charater -bottom-[20%] left-1/2 -translate-x-1/2 w-sm scale-[1.5]' src="/girlbg.png" alt="" />
            </div>
            <div className="btmbar absolute bottom-0 left-0 w-full px-10 py-6 bg-gradient-to-t from-black to-transparent text-white">
              <div className="flex gap-3">
                <i className="text-xl ri-arrow-down-double-line"></i>
                <h4 className='font-sans'>Scroll Down</h4>
              </div>
              <img className='h-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="/ps5.png" alt="" />
              <p className='absolute right-5 bottom-5 font-sans'>Developed by Waleed Shah</p>
            </div>
          </div>

          {/* about section */}
          <div className='w-full h-screen flex items-center justify-center bg-black overflow-hidden'>
            <div className='limg w-1/2 h-full'>
              <img className='w-xl' src="/imag.png" alt="" />
            </div>
            <div className='flex-1 text-white'>
              <h1 className='text-6xl'>Still Running, <br />Not Hunting </h1>
              <div className='font-sans mt-8 me-8'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat possimus velit eos mollitia sequi omnis, praesentium eius repellendus similique recusandae qui. Blanditiis nobis delectus iusto at quibusdam repudiandae unde nesciunt.</p>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nihil laboriosam saepe quidem, pariatur obcaecati aut nostrum magni fuga omnis.</p>
              </div>
              <button className='py-5 px-8 mt-4 rounded bg-yellow-500 text-black text-xl'>Download Now </button>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default App