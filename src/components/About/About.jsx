import React from 'react'
import { motion } from 'framer-motion'
import image from "../../Assets/background.jpg";
import './About.css'

const About = () => {
  return (
    <motion.div 
      className='about__container'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className='about__one'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className='h2'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.</h2>
        <br />
        <p className='p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum illo possimus optio omnis asperiores eius recusandae.</p>
        <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore ipsam excepturi harum, soluta possimus animi iste quaerat.</p>
        <p className='p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo voluptates itaque omnis nobis, assumenda nemo, corrupti, temporibus eaque necessitatibus quas ea.</p>
        <motion.button
          className="bg-yellow-500 hover:bg-yellow-600 text-black mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Register Now
        </motion.button>
      </motion.div>

      <br /><br /><br />

      <motion.div 
        className='about__two'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className='text__section'>
          <h3 className='h3'>Lorem ipsum dolor sit amet.</h3>
          <p className='p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ipsa mollitia aperiam quaerat inventore veniam quia laborum! Nemo, veniam.</p>
          <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt cum enim numquam qui pariatur, quae hic.</p>
          <br />
          <motion.button
            className="bg-yellow-500 hover:bg-yellow-600 text-black mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Register Now
          </motion.button>
        </div>

        <motion.div 
          className='image__section'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={image} alt='webinar' className='image__styled' />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About









