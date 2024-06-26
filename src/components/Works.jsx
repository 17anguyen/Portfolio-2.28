import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import HoverVideoPlayer from 'react-hover-video-player';

const ProjectCard = ({ index, name, description, tags, image, video, source_code_link }) => {
  return (
    <div
    // variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='p-5 p-[1px] rounded-[20px]  sm:w-[360px] w-full'
      >
        <div className="works-cards glass-bg rounded-[20px] py-2 px-2 h-[550px]"
          onClick={() => window.open
            (source_code_link, "_blank")}>
          <div
            className="w-full h-[230px] rounded-2xl">
            <HoverVideoPlayer
              className="w-full h-full object-cover rounded-2xl overflow-hidden"
              videoSrc={video}
              pausedOverlay={
                <img
                  src={image}
                  alt={name}
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  className="w-full h-full object-cover rounded-2xl"
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div

                className="github-card glass-bg w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain  z-10"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

        </div>

      </Tilt>
    </div>
  )
}

const Works = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My Projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p
          className="glass-bg rounded-[25px] p-8 mt-3 text-secondary text-[17px] max-w-3x1 leading-[30px]"
        >
          The following Projects showcase my skills and experience through real world examples of my work. Each project is briefly described with links to code repositiories. It reflexts my ability to solve complex problems, work with different technologies, and manage projects effectively. Walk through my gallery of growth as a developer adding technologies to my toolbox!
        </p>
      </div>

      <div dir="ltr" className="works-scroll">
        <div
          className="works-body flex flex-row gap-12 h-[600px]">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}

        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work");