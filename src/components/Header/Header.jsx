import React from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion"; // Import Framer Motion
import logo from '../../Assets/logo.png';  // Import your logo
import bgImage from '../../Assets/background.jpg'; // Import your background image

const Header = () => {
  // Adjust the countdown renderer function
  const renderer = ({ days, hours, minutes, seconds }) => (
    <motion.div 
      className="flex justify-center space-x-2 sm:space-x-4 mt-4 sm:mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="glass-bg p-2 sm:p-4 rounded-lg text-base sm:text-xl">
        {days} Days
      </div>
      <div className="glass-bg p-2 sm:p-4 rounded-lg text-base sm:text-xl">
        {hours} Hours
      </div>
      <div className="glass-bg p-2 sm:p-4 rounded-lg text-base sm:text-xl">
        {minutes} Minutes
      </div>
      <div className="glass-bg p-2 sm:p-4 rounded-lg text-base sm:text-xl">
        {seconds} Seconds
      </div>
    </motion.div>
  );

  return (
    <header
      className="relative bg-blue-900 text-white py-8 sm:py-12 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // Ensure the height doesn't exceed the viewport
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Logo Section */}
      <nav className="absolute top-0 w-full z-10">
        <motion.div 
          className="flex justify-center py-4 sm:py-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="Logo" className="h-20 sm:h-28 lg:h-32" /> {/* Larger logo for visibility */}
        </motion.div>
      </nav>

      {/* Content */}
      <div className="relative z-10 text-center px-2 sm:px-4 py-4 sm:py-8 mt-8">
        <motion.h1 
          className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 p-2 sm:p-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
         Lagos High School Festival and <br /> Arts Conference
        </motion.h1>
        <motion.p 
          className="text-md sm:text-xl mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Saturday, October 5, 2024 @ 10am WAT
        </motion.p>

        {/* Countdown */}
        <Countdown 
          date={new Date("2024-10-05T10:00:00+01:00")}  // Nigerian time
          renderer={renderer} 
        />

        {/* Register Button with hover effect */}
        <motion.button
          className="bg-yellow-500 hover:bg-yellow-600 text-black mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Register Now
        </motion.button>
      </div>
    </header>
  );
};

export default Header;








