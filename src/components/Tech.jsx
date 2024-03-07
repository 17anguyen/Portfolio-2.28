import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';


import { textVariant } from "../utils/motion";
import { styles } from '../styles';

const Tech = () => {
  return (
       <>
      <div className="p-2 rounded-[25px] mb-0">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>technologies I've used</p>
        <h2 className={`${styles.sectionHeadText}`} >Technologies.</h2>
      </motion.div>
    <div className='flex flex-rw flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          <p className='text-center text-secondary text-[17px]'>{technology.name}</p>
        </div>
      ))}
        </div>
      </div>
      </>
  )
}

export default SectionWrapper(Tech, "tech")