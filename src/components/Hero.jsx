import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import portraitImage from '../assets/portraitImage.png';
// import portraitImage from '../assets/portrait2.png';
// import portraitImage from '../assets/portrait3.png';
// import portraitImage from '../assets/portrait4.png';


import { styles } from "../styles";

const Hero = () => {
  const [active, setActive] = useState("");

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`relative inset-0 top-[120px] mx-auto ${styles.paddingX} flex flex-col gap-5 justify-center`}
      >
        <div className="w-full">
          <p className={`${styles.heroSubText} radley-regular-italic text-[#5E4B3A] text-center`}>
            Hi, I'm <span className='radley-regular-italic text-[#7F886A]'>Alivia</span> and I am a
          </p>
        </div>
        <div className="hero-title w-full text-center relative hover:z-50">

          <a href='#work'>
            <h1 className={`${styles.heroHeadText}
          fxnow-font hero-head-text text-transparent hover::`}>
              F U L L  S T A C K
              <br />
              <span className='fxnow-font'>
                D E V E L O P E R
              </span>
            </h1>
          </a>
        </div>
      </div>
      <div className="hero-image absolute xs:bottom-0 bottom-0 w-full flex justify-center items-center">
        <img
          src={portraitImage}
          className='mx-auto h-[55vh]'
          loading="lazy"
        />
      </div>
      {/* slider */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-4 h-5 rounded-full bg-secondary hover:bg-[#B9C5AD] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;