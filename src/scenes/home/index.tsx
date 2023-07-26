import React from 'react'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
        <section
        id='home'
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
        >
            {/* image and main header */}
            <motion.div 
            className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 mt-12'
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            // this will help to switch back the highlight on home page 
            // back after scrolling back up and reaching the top
            >
                {/* main header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* basis is flex basis does the same this as width, it aligns things properly when working with responsiveness */}
                    {/* headings */}
                    <motion.div 
                        className='md: -mt-20'
                        initial ="hidden"
                        whileInView="visible"
                        //we only want the animation to happen once so we set once : true
                        // amount: 0.5 means we will have to see 50% of div for the animation to trigger
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ delay: 0.3, duration: 0.7}}
                        variants={{
                            hidden: { opacity: 0, x:-50},
                            visible: {opacity: 1, x: 0}
                        }}

                    >
                        {/* this belove parent div is set relative */}
                        <div className='relative'>
                            {/* the below child div is set before to place it contents relatively */}
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                <img alt='home-page-text' src={HomePageText}/>
                            </div>

                        </div>
                        <p className='mt-8 text-sm'>
                          Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                          Studios to get the body Shapes That you Dream of.. Get Your Dream Body Now. 
                        </p>
                    </motion.div>

                    {/* actions */}
                    <div className='mt-8 flex items-center gap-8'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink 
                            className='text-sm font-bold text-primary-500
                            underline hover:text-secondary-500 '
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>
                </div>

                {/* image */}
                <div className='flex basis-3/5 justify-center md:z-10
                md:ml-40 md:mt-16 md:justify-items-end'>
                    <img alt='home-page-graphic' src={HomePageGraphic}/>
                </div>
            </motion.div>

            {/* Sponsers */}
            {isAboveMediumScreens && (
                <div className='h-[150px] w-full bg-primary-100 py-10'>
                    <div className='mx-auto w-5/6'>
                        <div className='flex w-3/5 items-center justify-between gap-8'>
                            <img alt="redbull-sponsor" src={SponsorRedBull} />
                            <img alt="forbes-sponsor" src={SponsorForbes} />
                            <img alt="fortune-sponsor" src={SponsorFortune} />
                        </div>
                    </div>
                </div>
            )}

        </section>
    )
};

export default Home;