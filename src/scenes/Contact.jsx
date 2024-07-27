import React from "react";
import LineGradient from "../components/LineGradient";
import {useForm} from 'react-hook-form';
import { motion } from "framer-motion";
import Contactimage from "../assets/Contactimage.png";

const Contact = () => {
 const{
    register,
    trigger,
    formState: {errors}
 } = useForm();

 const onSubmit = async (e)  => {
    const isValid = await trigger();
    if(!isValid) {
        e.preventDefault();
    }
 }

 return (
    <section id="contact" className="py-48">
        {/*HEADINGS*/}

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
                    <div>
                    <p className="font-playfair font-semibold text-4xl flex md:justify-end my-5  text-gray-800">
                        Contact<span className="font-playfair font-semibold text-4xl px-2 text-emerald-400"> Me </span>
                    </p>
                    <div className="flex md:justify-end my-5">
                    <LineGradient width=" w-48"/>
                    </div>
                    </div>

                </motion.div>

            {/*FORM & IMAGE */}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                className="basis-1/2 flex justify-center"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 transition={{ duration: 2 }}
                 variants={{
                     hidden: { opacity: 0, y: 50 },
                     visible: { opacity: 1, y: 0 }
                 }}
                >
                   <motion.img
                            src={Contactimage}
                            alt="Skills-image"
                            className=" rounded-lg border-solid border-4 border-gray-800 "
                            style={{ width: '450px', height: '280px' }} 
                            whileHover={{ scale: 1.1 }}
                         />

                </motion.div>

                <motion.div
                className="basis-1/2 mt-10 md:mt-0"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 transition={{ delay: 1, duration: 2 }}
                 variants={{
                     hidden: { opacity: 0, y: 50 },
                     visible: { opacity: 1, y: 0 }
                 }}
                >
                    
                    <form
                     target="blank"
                     onSubmit={onSubmit}
                     action="https://formsubmit.co/a6a9d632b2e5ece7837688ea8219b11d "
                     method="POST"
                    >
                        <input
                        className="w-full bg-emerald-400 font-semibold placeholder-opaque-black p-3"
                        type="text"
                        placeholder="NAME"
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                        />
                        {errors.name && (
                            <p className="text-rose-600 mt-1">
                                {errors.name.type === 'required'  && "This field is required."}
                                {errors.name.type === 'maxLength' && "Max length is 100 char."}

                            </p>
                        )}
                        <input
                         className="w-full bg-emerald-400 font-semibold placeholder-opaque-black p-3 mt-5"
                         type="text"
                         placeholder="EMAIL"
                         {...register("email", {
                             required: true,
                             pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                         })}
                        
                        />
                         {errors.email && (
                            <p className="text-rose-600 mt-1">
                                {errors.email.type === "required"  && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}

                            </p>
                        )}

                     <textarea
                         className="w-full bg-emerald-400 font-semibold placeholder-opaque-black p-3 mt-5"
                         type="text"
                         placeholder="MESSAGE"
                         rows="4"
                         cols="50"
                         {...register("message", {
                             required: true,
                             maxLength: 2000,
                         })}
                        
                        />
                         {errors.message && (
                            <p className="text-rose-600 mt-1">
                                {errors.message.type === "required"  && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 200 char."}

                            </p>
                        )}

                        <button
                          type="submit"
                          className="p-5 bg-emerald-300 text-gray-800 mt-5 rounded-lg  font-semibold
                        hover:bg-gray-800 hover:text-emerald-300 transition duration-500 border-solid border-2
                        border-gray-800 "
                        >
                            SEND ME A MESSAGE
                        </button>


                    </form>

                </motion.div>

            </div>

    </section>
 )
};


export default Contact;

