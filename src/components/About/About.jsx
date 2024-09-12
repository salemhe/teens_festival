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
        <h2 className='h2'>Welcome !</h2>
        <br />
        <p className='p'>The Lagos City High School Festival of Music & Arts is a grand celebration of Nigeria's youth, creativity, and cultural diversity. Organized in honor of Nigeria’s Independence Day, this first of its kind festival provides a dynamic platform for young people to express themselves through various creative outlets and contribute positively to the future of our nation.</p>
        <h4 className='h2'>Event Highlights</h4>
        <p className='p'>◾ <b>Creative Art Presentations: </b>Experience an array of artistic performances and exhibitions that showcase the immense talent and creativity of Nigeria’s youth. From music and dance to visual arts, there’s something for everyone to enjoy.</p>
        <p className='p'>◾ <b>Colorful Parade:</b> Witness a spectacular parade featuring participating schools, each bringing their unique flair and enthusiasm. This vibrant procession celebrates unity and school spirit with colorful floats and enthusiastic performers.</p>
        <p className='p'>◾ <b>Symposiums on Nation Building: </b> Engage in insightful symposiums and workshops that focus on nation-building, leadership, and innovation. These sessions aim to inspire and equip young minds with the tools needed to contribute effectively to our society.</p>
        
        <p className='p'>◾ <b>Special Performances:</b> Look forward to guest performances from renowned artists and speakers who will add a unique touch to the festival.</p>
        <motion.button
          className="bg-yellow-500 hover:bg-yellow-600 text-black mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Register Now
        </motion.button>
      </motion.div>

      <br /><br /><br />

      {/* <motion.div 
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
      </motion.div> */}
    </motion.div>
  )
}

export default About









