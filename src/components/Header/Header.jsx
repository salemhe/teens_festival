import React from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion"; 
import logo from "../../Assets/logo.png";
import video from "../../Assets/festival-vid.mp4"

const Header = () => {
  // Countdown renderer
  const renderer = ({ days, hours, minutes, seconds }) => (
    <motion.div 
      className="flex justify-center space-x-2 sm:space-x-4 mt-4 sm:mt-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="bg-opacity-60 bg-white p-2 sm:p-4 rounded-lg text-xs sm:text-lg font-semibold shadow-lg">
        {days} Days
      </div>
      <div className="bg-opacity-60 bg-white p-2 sm:p-4 rounded-lg text-xs sm:text-lg font-semibold shadow-lg">
        {hours} Hours
      </div>
      <div className="bg-opacity-60 bg-white p-2 sm:p-4 rounded-lg text-xs sm:text-lg font-semibold shadow-lg">
        {minutes} Minutes
      </div>
      <div className="bg-opacity-60 bg-white p-2 sm:p-4 rounded-lg text-xs sm:text-lg font-semibold shadow-lg">
        {seconds} Seconds
      </div>
    </motion.div>
  );

  return (
    <header
      className="relative text-white py-8 flex flex-col items-center justify-center"
      style={{ height: "100vh" }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={video} // Replace with your own video link
        autoPlay
        loop
        muted
      ></video>

      {/* Dark overlay on video */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Logo Section */}
      <nav className="absolute top-4 w-full z-10">
        <motion.div 
          className="flex justify-center mb-4 lg:mb-8"  // Added margin for large devices
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Bigger logo */}
          <img src={logo} alt="Logo" className="h-32 sm:h-40 lg:h-48" />
        </motion.div>
      </nav>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 py-6 sm:py-10">
        <motion.h1 
          className="text-4xl sm:text-6xl font-bold mb-2 sm:mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Lagos City High School Festival <br /> of Music & Arts
        </motion.h1>
        <motion.p 
          className="text-base sm:text-xl mb-4 sm:mb-6"
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

        {/* Register Button */}
        <motion.button
          className="bg-yellow-500 hover:bg-yellow-600 text-black mt-6 px-6 py-3 rounded-lg text-lg font-semibold"
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







