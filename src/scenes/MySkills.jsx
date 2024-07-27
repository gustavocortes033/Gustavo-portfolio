import LineGradient  from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion} from "framer-motion";
import Skillsimage from "../assets/Skillsimage.jpg";

const MySkills = () => {
   const  isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

   return(
        <section id="skills" className="pt-10 pb-24">
            {/*HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                className="md:w-1/3"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 transition={{ duration: 2 }}
                 variants={{
                     hidden: { opacity: 0, x: -50 },
                     visible: { opacity: 1, x: 0 }
                 }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5 text-gray-800">
                        My <span className="text-emerald-400">Skills</span>
                    </p>
                    <LineGradient width="w-1/3"/>
                    <p className="mt-10 mb-7 text-gray-800 text-base text-justify font-semibold">
                    This section is dedicated to showcasing my skills and abilities. Here, you can explore my
                     expertise across different domains and understand how I contribute to various projects.
                    </p>

                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                         <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                          before:w-full before:h-full  before:z-[-1]">
                         <motion.img
                            src={Skillsimage}
                            alt="Skills-image"
                            className="z-10 rounded-lg border-solid border-4 border-gray-800"
                            style={{ width: '400px', height: '250px' }} 
                            whileHover={{ scale: 1.1 }}
                         />
                     </div>
                    ) : (
                         
                        <motion.img
                            src={Skillsimage}
                            alt="Skills-image"
                            className="z-10 rounded-lg border-solid border-4 border-gray-800 "
                            style={{ width: '350px', height: '250px' }}
                            whileHover={{ scale: 1.1 }}
                         />
                    )}
                </div>
            </div>
            {/*SKILLS*/}
            <div className="md:flex md:justify-between mt-16 gap-32">
                 {/*SKILL 1*/}
                 <motion.div
                  className="md:w-1/3 mt-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                  variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 }
                  }}
                 >
                  <div className="relative h-32">
                      <div className="z-10">
                         <p className="font-playfair font-semibold text-5xl text-emerald-400">01</p>
                         <p className="font-playfair font-semibold text-3xl text-gray-800 mt-3">Web Development</p>
                      </div>
                      <div className="w-1/2 md:w-3/4 h-32 bg-emerald-400 absolute right-0 top-0 z-[-1] "/>
                  </div>
                  <p className="mt-5 text-base text-justify text-gray-800">
                  Proficient in frontend development with CSS, HTML, JavaScript, and React, specializing in creating interactive
                  interfaces.
                  </p>

                 
                 </motion.div>

                  {/*SKILL 2 */}
                  <motion.div
                  className="md:w-1/3 mt-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{delay: 1, duration: 2 }}
                  variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 }
                  }}
                 >
                  <div className="relative h-32">
                      <div className="z-10">
                         <p className="font-playfair font-semibold text-5xl text-emerald-400">02</p>
                         <p className="font-playfair font-semibold text-3xl text-gray-800 mt-3">Research Project</p>
                      </div>
                      <div className="w-1/2 md:w-3/4 h-32 bg-emerald-400 absolute right-0 top-0 z-[-1]"/>
                  </div>
                  <p className="mt-5 text-base text-justify text-gray-800">
                   Conducting software research projects using digital platforms and specialized tools.
                  </p>

                 
                 </motion.div>

                  {/*SKILL 3 */}
                  <motion.div
                  className="md:w-1/3 mt-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 2, duration: 2 }}
                  variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 }
                  }}
                 >
                  <div className="relative h-32">
                      <div className="z-10">
                         <p className="font-playfair font-semibold text-5xl text-emerald-400">03</p>
                         <p className="font-playfair font-semibold text-3xl text-gray-800 mt-3">Communication Skills</p>
                      </div>
                      <div className="w-1/2 md:w-3/4 h-32 bg-emerald-400 absolute right-0 top-0 z-[-1]"/>
                  </div>
                  <p className="mt-5 text-base text-justify text-gray-800">
                  Demonstrated ability in oral presentations, adept at presenting projects and ideas 
                  to diverse audiences.
                  </p>

                 
                 </motion.div>
            </div>

        </section>
   )
};

export default MySkills;