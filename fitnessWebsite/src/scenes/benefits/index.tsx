import React from 'react'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import Htext from '@/shared/Htext'
import Benefit from './Benefit'
import ActionButton from '@/shared/ActionButton'
import BenefitsPageGraphics from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description: "Modern and Engaging Design, Personalized Workouts and Training Plans, Virtual Tours and 360° Views, Social Media Integration, Progress Tracking and Analytics and Responsive Customer Support."

    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's of Diverse Classes",
        description: "Diverse classes offer an array of fitness options to cater to the unique preferences, abilities, and fitness goals of its members. These classes go beyond traditional workouts, providing a dynamic and engaging experience."

    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Expert and Pro Trainers",
        description: "Variety and Innovation, Personalized Training Programs, Proper Form and Technique, Motivation and Accountability, In-Depth Fitness Knowledge, Specialized Training."

    }

];

// here we want the benifits cards to have a staggered animation
// and instead of adding motion.div to all the cards this is an alternate
// approach where we put animation to the parent component and set it
// for the children component
const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id='benefits'
        // using id here so that anchor link scrolls smoothly
        className='mx-auto min-h-full w-5/6 py-20 mt-12'
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            //this for highlighting where we are on the navigation
        >
            {/* Header section */}
            <motion.div 
            className='md:my-5 md:w-3/5'
            initial ="hidden"
            whileInView="visible"
            //we only want the animation to happen once so we set once : true
            // amount: 0.5 means we will have to see 50% of div for the animation to trigger
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.7}}
            variants={{
                hidden: { opacity: 0, x:-50},
                visible: {opacity: 1, x: 0}
            }}
            >
                <Htext>MORE THAN JUST GYM</Htext>
                <p className='my-5 text-sm'>
                    We provide world class fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true
                    care into each and every member.
                </p>
            </motion.div>

            {/* Benefits section */}
            <motion.div 
                className='md:flex items-center justify-between gap-8 mt-5'
                initial= "hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key = {benefit.title}
                        icon = {benefit.icon}
                        title = {benefit.title}
                        description = {benefit.description}
                        setSelectedPage = {setSelectedPage}
                        // we are passing this because learn more is gonna redirect us
                    />
                ))}

            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img 
                    className='mx-auto'
                    alt='benefits-page-graphic'
                    src={BenefitsPageGraphics}
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 before:z-[-1] before:content-abstractwaves'>
                           <motion.div
                                className='md:my-5 md:w-3/5'
                                initial ="hidden"
                                whileInView="visible"
                                //we only want the animation to happen once so we set once : true
                                // amount: 0.5 means we will have to see 50% of div for the animation to trigger
                                viewport={{ once: true, amount: 0.5}}
                                transition={{ duration: 0.7}}
                                variants={{
                                    hidden: { opacity: 0, x:50},
                                    visible: {opacity: 1, x: 0}
                                }}
                            >
                                <Htext>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className='text-primary-500'>FIT</span>
                                </Htext>
                           </motion.div> 
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <motion.div
                        className='md:my-5 md:w-3/5'
                        initial ="hidden"
                        whileInView="visible"
                        //we only want the animation to happen once so we set once : true
                        // amount: 0.5 means we will have to see 50% of div for the animation to trigger
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ duration: 0.7}}
                        variants={{
                            hidden: { opacity: 0, x:50},
                            visible: {opacity: 1, x: 0}
                        }}
                    >
                        <p className='my-5'>
                            We believe that a healthy and active lifestyle is the foundation 
                            for a happier and more fulfilling life. 
                            Our gym is not just a place to work out; 
                            it's a vibrant community of individuals striving for better 
                            health and well-being. With expert trainers who are 
                            passionate about helping you achieve your fitness goals, 
                            personalized workout programs, and a diverse range of classes 
                            to keep you engaged and motivated, we are committed to 
                            supporting you every step of the way. </p>
                        <p className='mb-5'>
                            Join us today, and together, 
                            let's unlock your true potential and 
                            transform your life through fitness! 
                            Remember, the first step towards a healthier, 
                            stronger, and more confident you starts right here, right now.</p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className='relative mt-16'>
                        <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>

                    </div>
                </div>
            </div>
            

        </motion.div>

    </section>
  )
}

export default Benefits