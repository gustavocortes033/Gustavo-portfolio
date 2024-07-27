import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import FeriaCientifica from "../assets/FeriaCientifica.png";
import FBLA2 from "../assets/FBLA2.jpg";
import DE from "../assets/DE.jpg";


const Awards = () => {
   const awardStyles = `max-auto relative max-w-[350px] h-[350px] flex flex-col justify-end pt-16 mt-16
    before:absolute before:top-[-120px] before:ml-[110px] before:left-1/2 `;

   return(
      <section id="achievements" className="pt-32 pb-16">
         {/* HEADING */}
         <motion.div
            className="md:w-1/3 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0 }
            }}
         >
             <p className="font-playfair font-semibold text-4xl text-left mb-5 text-emerald-400">
                          Awards
                    </p>
                    <LineGradient width="w-1/3"/>
            
            <p className="mt-10 mb-7 text-gray-800 text-base text-justify font-semibold">
               In this section, you will be able to view the awards that I have received.
            </p>
         </motion.div>

         {/* AWARDS SECTION */}
         <div className="md:flex md:justify-between gap-8">
            <motion.div
               className={`bg-emerald-300 ${awardStyles}`}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{ duration: 2 }}
               variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
               }}
            >
               {/* AWARD IMAGE 1*/}
               <img src={FeriaCientifica} alt="FeriaCientifica-logo" className="w-full h-full object-cover" />
                <p className="text-center text-gray-800 text-lg font-semibold">
                Regional Science Fair-2024, ORE of Mayagüez Puerto Rico.  Second Place in Software Engineering Category,
                Project a Weather Data Website using an API.
               </p>
            </motion.div>

            <motion.div
               className={`bg-emerald-300 ${awardStyles}`}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{ duration: 2 }}
               variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
               }}
            >
               {/* AWARD IMAGE 2*/}
               <img src={DE} alt="DE-logo" className="w-full h-full object-cover " />
                <p className="text-center text-gray-800 text-lg font-semibold">
                Academic Excellence Scholarship-2024, awarded by the Department of Education of Puerto Rico for 
                maintaining a 400 GPA from ninth grade to twelfth grade.
               </p>
            </motion.div>

            <motion.div
               className={`bg-emerald-300 ${awardStyles}`}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{ duration: 2 }}
               variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
               }}
            >
               {/* Assuming FeriaCientifica is an image */}
               <img src={FBLA2} alt="FBLA-logo" className="w-full h-full object-cover" />
                <p className="text-center text-gray-800 text-lg font-semibold">
                FBLA Puerto Rico-2024, Achieved First Place in the Website Coding and Development category, 
                demonstrating exceptional proficiency in programming.
               </p>
            </motion.div>
         </div>
      </section>
   );
}

export default Awards;
