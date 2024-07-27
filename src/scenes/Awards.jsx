import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import FeriaCientifica from "../assets/FeriaCientifica.png";
import FBLA2 from "../assets/FBLA2.jpg";
import DE from "../assets/DE.jpg";

const Awards = () => {
   // Estilo simplificado para las tarjetas
   const awardStyles = `relative w-full max-w-[350px] flex flex-col items-center bg-emerald-300 rounded-lg overflow-hidden shadow-md`;

   return (
      <section id="achievements" className="pt-32 pb-16 px-4">
         {/* HEADING */}
         <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0 }
            }}
         >
            <p className="font-playfair font-semibold text-4xl text-emerald-400">
               Awards
            </p>
            <div className="flex justify-center mt-3">
                    <LineGradient width="w-1/4"/>
                </div>
            <p className="mt-10 mb-7 text-gray-800 text-base font-semibold">
               In this section, you will be able to view the awards that I have received.
            </p>
         </motion.div>

         {/* AWARDS SECTION */}
         <div className="flex flex-wrap gap-8 justify-center">
            {/* Award 1 */}
            <motion.div
               className={awardStyles}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{ duration: 2 }}
               variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
               }}
            >
               {/* AWARD IMAGE 1 */}
               <img
                  src={FeriaCientifica}
                  alt="FeriaCientifica"
                  className="w-full h-64 object-cover"
               />
               <div className="p-4 text-center">
                  <p className="text-gray-800 text-lg font-semibold">
                     Regional Science Fair-2024, ORE of Mayagüez Puerto Rico. Second Place in Software Engineering Category,
                     Project a Weather Data Website using an API.
                  </p>
               </div>
            </motion.div>

            {/* Award 2 */}
            <motion.div
               className={awardStyles}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{ duration: 2 }}
               variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
               }}
            >
               {/* AWARD IMAGE 2 */}
               <img
                  src={DE}
                  alt="DE"
                  className="w-full h-64 object-cover"
               />
               <div className="p-4 text-center">
                  <p className="text-gray-800 text-lg font-semibold">
                     Academic Excellence Scholarship-2024, awarded by the Department of Education of Puerto Rico for 
                     maintaining a 400 GPA from ninth grade to twelfth grade.
                  </p>
               </div>
            </motion.div>

            {/* Award 3 */}
            <motion.div
               className={awardStyles}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{ duration: 2 }}
               variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
               }}
            >
               {/* AWARD IMAGE 3 */}
               <img
                  src={FBLA2}
                  alt="FBLA"
                  className="w-full h-64 object-cover"
               />
               <div className="p-4 text-center">
                  <p className="text-gray-800 text-lg font-semibold">
                     FBLA Puerto Rico-2024, Achieved First Place in the Website Coding and Development category, 
                     demonstrating exceptional proficiency in programming.
                  </p>
               </div>
            </motion.div>
         </div>
      </section>
   );
}

export default Awards;
