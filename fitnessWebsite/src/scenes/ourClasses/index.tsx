import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import Htext from '@/shared/Htext';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id= "ourclasses" className='w-full bg-primary-100 py-40'>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className='mx-auto w-5/6'
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
                <div>
                    <Htext>OUR CLASSES</Htext>
                    <p className='py-5'>
                        We take pride in offering an exceptional 
                        variety of classes and courses to cater to 
                        every fitness interest and aspiration. 
                        Our diverse range of classes is designed to 
                        challenge, inspire, and empower you on your 
                        fitness journey. From high-energy cardio 
                        workouts and intense strength training 
                        sessions to mind-body classes like yoga and 
                        Pilates, we have something for everyone.
                    </p>
                </div>
            </motion.div>
            <div></div>

        </motion.div>
    </section>
  )
}

export default OurClasses