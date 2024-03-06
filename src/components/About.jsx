import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import user from '../assets/user.jpg';
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
    <>
      <div className='glass-bg pt-2 pb-2 pl-10 pr-10 rounded-[20px] mx-auto'>
        {/* top heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Alivia.</h2>
      </motion.div>
      {/* card body */}
        <div className='w-full'>
          {/* body text */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
              className=
              'mt-4 text-secondary text-[17px] leading-[30px]'
      >
        I'm a web developer with a mastery with Javascript, and frameworks like React, Node.js, and Three.js.
        I collaborate closely with clients to create stunning, scalable, and user-friendly solutions to bring your vision to life.
        </motion.p>
      </div>

     <div className='m-2 sm:mt-20 flex flex-wrap justify-between p-8'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      </div>
    </>
  );
};

export default SectionWrapper(About, "about");