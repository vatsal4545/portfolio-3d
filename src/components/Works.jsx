import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { play } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_Link,
  backend_link,
  demo_link,
}) => {
  const handleGitHubClick = () => {
    // Open frontend repository
    window.open(source_code_Link, "_blank");
    // Open backend repository if it exists
    if (backend_link) {
      setTimeout(() => window.open(backend_link, "_blank"), 100);
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
            {/* Left side - Demo link */}
            {demo_link && (
              <div
                onClick={() => window.open(demo_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="Watch Demo"
              >
                <img
                  src={play}
                  alt="demo"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}

            {/* Right side - GitHub links */}
            <div className="flex gap-2">
              <div
                onClick={handleGitHubClick}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title={
                  backend_link
                    ? "Open Frontend & Backend Repositories"
                    : "Open Repository"
                }
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
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
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different techologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
