import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Club2logo from "../assets/Club2logo.jpg";
import clublogo from "../assets/clublogo.jpg";
import FBLA from "../assets/FBLA.png";
import Universitylogo from "../assets/Universitylogo.jpg";
import Schoollogo from "../assets/Schoollogo.png";
import Schoologo2 from "../assets/Schoologo2.jpg";


const imageVariants = {
    hover: {
        scale: 1.1,
        transition: { duration: 0.3 },
    },
};

const Projects = () => {
    const moreInfoUrls = {
        Schoollogo: "https://www.facebook.com/escueladrcarlosgonzalez",
        Universitylogo: "https://www.facebook.com/UPRAguadilla1",
        Club2logo: "https://www.facebook.com/profile.php?id=100087162535652",
        clublogo: "https://www.facebook.com/clubtecnologiadcg",
        FBLA: "https://www.fbla.org/",
        Schoologo2: "https://www.facebook.com/escuelajuansuarezpelegrinaoficial",
    };

    return (
        <section id="education" className="pt-12 pb-12">
            {/* Cabecera */}
            <div className="md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className="font-playfair font-semibold text-4xl text-gray-800"
                >
                    <span className="text-emerald-500"> Education</span>
                </motion.p>
                <div className="flex justify-center mt-3">
                    <LineGradient width="w-1/3"/>
                </div>
                <p className="mt-6 mb-6 text-gray-900 text-center font-semibold text-sm">
                    Explore my active involvement and contributions to various clubs and organizations, where I have honed leadership skills and fostered meaningful connections within diverse communities.
                </p>
            </div>

            {/* Contenedor de imágenes */}
            <div className="container mx-auto mt-6 flex flex-wrap justify-center ">
                {/* Imágenes */}
                <motion.div
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center"
                    whileHover="hover"
                    variants={imageVariants}
                >
                    <br/>
                    <img
                        src={Schoollogo}
                        alt="School Logo"
                        style={{ width: '200px', height: '200px' }} 
                        className=" rounded-lg border-solid border-4 border-gray-800 p-1"
                    />
                    <a
                        href={moreInfoUrls["Schoollogo"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 px-4 py-2 bg-emerald-400 border-solid border-2 font-semibold border-gray-800 text-gray-800 rounded-md text-center hover:text-white duration-500 block w-48"
                    >
                        More Information
                    </a>
                </motion.div>
                <motion.div
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center"
                    whileHover="hover"
                    variants={imageVariants}
                >
                    <br/>
                    <img
                        src={Universitylogo}
                        alt="University Logo"
                        style={{ width: '200px', height: '200px' }} 
                        className="rounded-lg border-solid border-4 border-gray-800 p-1"
                    />
                    <a
                        href={moreInfoUrls["Universitylogo"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 px-4 py-2 bg-emerald-400 border-solid border-2 font-semibold border-gray-800 text-gray-800 rounded-md text-center hover:text-white duration-500 block w-48"
                    >
                        More Information
                    </a>
                </motion.div>

                <motion.div
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center"
                    whileHover="hover"
                    variants={imageVariants}
                >
                    <br/>
                    <img
                        src={Schoologo2}
                        alt="School Logo"
                        style={{ width: '200px', height: '200px' }} 
                        className="rounded-lg border-solid border-4 border-gray-800 p-1"
                    />
                    <a
                        href={moreInfoUrls["Schoologo2"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 px-4 py-2 bg-emerald-400 border-solid border-2 font-semibold border-gray-800 text-gray-800 rounded-md text-center hover:text-white duration-500 block w-48"
                    >
                        More Information
                    </a>
                </motion.div>
                <motion.div
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center"
                    whileHover="hover"
                    variants={imageVariants}
                >
                    <br/>
                    <img
                        src={Club2logo}
                        alt="Club 2 Logo"
                        style={{ width: '200px', height: '200px' }} 
                        className="rounded-lg border-solid border-4 border-gray-800 p-1"
                    />
                    <a
                        href={moreInfoUrls["Club2logo"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 px-4 py-2 bg-emerald-400 border-solid border-2 font-semibold border-gray-800 text-gray-800 rounded-md text-center hover:text-white duration-500 block w-48"
                    >
                        More Information
                    </a>
                </motion.div>
                
                <motion.div
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center"
                    whileHover="hover"
                    variants={imageVariants}
                >
                    <br/>
                    <img
                        src={clublogo}
                        alt="Club Logo"
                        style={{ width: '200px', height: '200px' }} 
                        className=" rounded-lg border-solid border-4 border-gray-800 p-1"
                    />
                    <a
                        href={moreInfoUrls["clublogo"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 px-4 py-2 bg-emerald-400 border-solid border-2 font-semibold border-gray-800 text-gray-800 rounded-md text-center hover:text-white duration-500 block w-48"
                    >
                        More Information
                    </a>
                </motion.div>
                 
                <motion.div
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center"
                    whileHover="hover"
                    variants={imageVariants}
                >
                    <br/>
                    <img
                        src={FBLA}
                        alt="FBLA Logo"
                        style={{ width: '200px', height: '200px' }} 
                        className="rounded-lg border-solid border-4 border-gray-800 p-1"
                    />
                    <a
                        href={moreInfoUrls["FBLA"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 px-4 py-2 bg-emerald-400 border-solid border-2 font-semibold border-gray-800 text-gray-800 rounded-md text-center hover:text-white duration-500 block w-48"
                    >
                        More Information
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
