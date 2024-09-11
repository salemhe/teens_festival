// ======================================================
import React from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion"; 
import logo from '../../Assets/logo.png';  
import bgImage from '../../Assets/background.jpg'; 

const Header = () => {
  // Countdown renderer
  const renderer = ({ days, hours, minutes, seconds }) => (
    <motion.div 
      className="flex justify-center space-x-4 sm:space-x-6 mt-6 sm:mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="bg-opacity-60 bg-white p-4 sm:p-6 rounded-lg text-lg sm:text-2xl font-semibold shadow-lg">
        {days} Days
      </div>
      <div className="bg-opacity-60 bg-white p-4 sm:p-6 rounded-lg text-lg sm:text-2xl font-semibold shadow-lg">
        {hours} Hours
      </div>
      <div className="bg-opacity-60 bg-white p-4 sm:p-6 rounded-lg text-lg sm:text-2xl font-semibold shadow-lg">
        {minutes} Minutes
      </div>
      <div className="bg-opacity-60 bg-white p-4 sm:p-6 rounded-lg text-lg sm:text-2xl font-semibold shadow-lg">
        {seconds} Seconds
      </div>
    </motion.div>
  );

  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat text-white py-12 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})`, height: "100vh" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Logo Section */}
      <nav className="absolute top-4 w-full z-10">
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="Logo" className="h-24 sm:h-32 lg:h-40 shadow-lg rounded-full border-4 border-yellow-400" /> {/* Updated styling */}
        </motion.div>
      </nav>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 py-6 sm:py-12 mt-8 bg-opacity-70 bg-black rounded-lg shadow-lg">
        <motion.h1 
          className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Lagos City High School Festival <br />of Music & Arts
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-2xl mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Wednesday, October 9, 2024 @ 10am WAT
        </motion.p>

        {/* Countdown */}
        <Countdown 
          date={new Date("2024-10-09T10:00:00+01:00")}  // Nigerian time
          renderer={renderer} 
        />

        {/* Register Button with hover effect */}
        <motion.button
          className="bg-yellow-500 hover:bg-yellow-600 text-black mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-xl font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Register Now
        </motion.button>
      </div>
    </header>
  );
};

export default Header;






