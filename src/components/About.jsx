import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant, slideIn } from '../utils/motion';

import { Blocks } from './canvas';

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-[#D8D5D0] text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <div className='glass-bg p-8 rounded-[25px]'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Alivia.</h2>
      </motion.div>
      {/* card body */}
      <div className=' xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        {/* body text */}
        <div className='flex-[0.75] p-8'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className=
            'flex flex-col text-secondary text-[17px] leading-[30px]'
          >
            I'm a web developer based in Seattle, Washington with a mastery with Javascript, and frameworks like React, Node.js, and Three.js.
            I collaborate closely with clients to create stunning, scalable, and user-friendly solutions to bring your vision to life.
            <br />
            <br />
            I have been in Operations Management since 2018 successfully growing a start up and managing the Fortune 500 company Enterprise Holdings at one of their largest US locations.
            I returned to school in March 2023 finishing in June 2023 with a Full Stack Web Development Certificate from the University of Washington.
            <br />
            <br />
            Enthusiastic, results-driven client services professional with strong background in quality assurance, directly interfacing with industry customers. Well-versed in products, services, and consumer trends. Dependable achiever committed to holding highest ethical standards and maintaining customer trust.
          </motion.p>
        </div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='ui-graphic xl:flex-1 xl:h-auto md:h-[550px] h-[550px]'
        >
          <Blocks />
        </motion.div>
      </div>

      <div className='m-2 flex flex-wrap justify-between p-8'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(About, "about");