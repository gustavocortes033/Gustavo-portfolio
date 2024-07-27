import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Myphoto from '../assets/Me-photo.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex flex-col justify-center items-center md:flex-row md:items-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div className="relative overflow-hidden rounded-full border-4 border-gray-800 w-64 h-64 md:w-96 md:h-96 mb-8 md:mb-0">
                        <motion.img
                            src={Myphoto}
                            alt="A Person"
                            className="w-full h-full object-cover rounded-full transition duration-500 transform hover:scale-110"
                            whileHover={{ scale: 1.1 }}
                        />
                    </div>
                ) : (
                    <div className="relative overflow-hidden rounded-full border-4 border-gray-800 w-48 h-48 mt-8">
                        <motion.img
                            src={Myphoto}
                            alt="A Person"
                            className="w-full h-full object-cover rounded-full transition duration-500 transform hover:scale-110"
                            whileHover={{ scale: 1.1 }}
                        />
                    </div>
                )}

                {/* MAIN SECTION */}
                <div className="z-30 basis-2/5 mt-12 md:mt-0 md:ml-8">
                    {/* HEADINGS */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <h1 className="text-4xl md:text-5xl font-playfair text-center md:text-left mb-4 md:mb-6 text-gray-800">
                            Gustavo{" "}
                            <span className="text-emerald-400 font-playfair">Cortés</span>
                        </h1>
                    </motion.div>

                    {/* DESCRIPTION */}
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className=" font-playfair text-lg text-gray-800  text-center md:text-left"
                    >
                        Biology student at the University of Aguadilla Puerto Rico.
                    </motion.p>

                    {/*CALL TO ACTIONS */}
                    <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 2 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    
                    >
                        <AnchorLink
                        className="bg-emerald-300 text-gray-800 rounded-sm py-3 px-7 font-semibold
                        hover:bg-gray-800 hover:text-emerald-300 transition duration-500"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                        >
                            Contact Me
                        </AnchorLink>

                        <AnchorLink
                        className="rounded-r-sm bg-emerald-300 py-0.5 pr-0.5"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                        >
                        <div
                         className="bg-gray-200 text-gray-800 hover:text-emerald-500 transition duration-500 w-full h-full flex items-center
                            justify-center font-playfair font-semibold px-10"
                         >
                             Let's talk
                        </div>
                        </AnchorLink>
                    </motion.div>

                    <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 2 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    >
                        <SocialMediaIcons/>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
