import { SelectedPage } from '@/shared/types'
import React from 'react'
import {useForm} from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { motion } from 'framer-motion';
import Htext from '@/shared/Htext';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
    px-5 py-3 placeholder-white`;

    const {
        register,
        // trigger is an asynchronous function
        trigger,
        formState: { errors }
    } = useForm();

    // we are using e: any because we are not sure as it can be different things here
    const onSubmit = async (e: any) => {
        // trigger allows us to validate our form if needed
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
            // if it is invalid we dont want the page to refresh or go to another page
        }
    };

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
            {/* HEADER */}
                <motion.div
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                    //we only want the animation to happen once so we set once : true
                    // amount: 0.5 means we will have to see 50% of div for the animation to trigger
                    viewport={{ once: true, amount: 0.5}}
                    transition={{ delay: 0.3, duration: 0.7}}
                    variants={{
                        hidden: { opacity: 0, x:-50},
                        visible: {opacity: 1, x: 0}
                    }}>
                    <Htext>
                        <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE 
                    </Htext>
                    <p className='my-5'>
                    Are you ready to embark on a transformative fitness 
                    journey? At our gym, we wholeheartedly invite you to 
                    join our vibrant community and embark on a path to a 
                    healthier, fitter, and more energetic version of 
                    yourself. Whether you are a fitness enthusiast or 
                    just beginning your wellness journey, our 
                    state-of-the-art facilities and expert trainers are 
                    here to support and guide you every step of the way.
                    </p>
                </motion.div>

                {/* FORM */}
                <div className='mt-10 justify-between gap-8 md:flex'>
                    <motion.div
                        className = "mt-10 basis-3/5 md:mt-0"
                        initial ="hidden"
                        whileInView="visible"
                        //we only want the animation to happen once so we set once : true
                        // amount: 0.5 means we will have to see 50% of div for the animation to trigger
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ delay: 0.1, duration: 0.7}}
                        variants={{
                            hidden: { opacity: 0, y:50},
                            visible: {opacity: 1, y: 0}}}

                    >
                        <form
                            target="_blank"
                            // _blank so we dont go to a new page
                            onSubmit={onSubmit}
                            action= "https://formsubmit.co/45cf6dfa01b82bb76e357412c1714113"
                            method = "POST"
                        >
                            <input
                                className={inputStyles}
                                type='text'
                                placeholder='NAME'
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                                // the register function will store the input name inside "name"
                            ></input>
                            {/* error conditional , we use to validate errors*/}
                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === "required" && "This is field is required."}
                                    {errors.name.type === "maxLenght" && "Max lenght is 100 characters."}

                                </p>
                            )}

                            <input
                                className={inputStyles}
                                type='text'
                                placeholder='EMAIL'
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9.%+-]+@[A-Z0-9]+\.[A-Z]{2,}$/i,
                                })}
                                // the register function will store the input name inside "name"
                            ></input>
                            {/* error conditional , we use to validate errors*/}
                            {errors.email && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === "required" && "This is field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address."}

                                </p>
                            )}

                            <textarea
                                className={inputStyles}
                                rows = {4}
                                cols = {50}
                                placeholder='MESSAGE'
                                {...register("message", {
                                    required: true,
                                    maxLength: 5000,
                                })}
                                // the register function will store the input name inside "name"
                            ></textarea>
                            {/* error conditional , we use to validate errors*/}
                            {errors.message && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.message.type === "required" && "This is field is required."}
                                    {errors.message.type === "maxLenght" && "Max lenght is 5000 characters."}

                                </p>
                            )}

                            <button type="submit"
                                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                                SUBMIT
                            </button>

                        </form>
                    </motion.div>
                    <motion.div
                        className='relative mt-16 basis-2/5 md:mt-0'
                        initial ="hidden"
                        whileInView="visible"
                        //we only want the animation to happen once so we set once : true
                        // amount: 0.5 means we will have to see 50% of div for the animation to trigger
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ delay: 0.3, duration: 0.7}}
                        variants={{
                            hidden: { opacity: 0, y:50},
                            visible: {opacity: 1, y: 0}}}
                    >
                        <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                            <img  className='w-full' alt='contact-us-page-graphic' src={ContactUsPageGraphic}/>
                        </div>

                    </motion.div>
                </div>

                {/* IMAGE */}
            </motion.div>
        </section>
        )
        }

export default ContactUs; 