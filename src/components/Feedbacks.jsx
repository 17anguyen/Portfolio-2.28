import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='p-10 w-full glass-bg rounded-[25px] shadow-card'
  >
    <p className='text-[#6D5C49] text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-[#6D5C49] tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-[#F4F1E8] font-medium text-[16px]'>
            <span className='text-[#F4F1E8]'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-0 rounded-[20px]`}>
      <div>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");