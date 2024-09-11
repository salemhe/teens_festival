import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hear from Past Participants
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial Card 1 */}
          <motion.div
            className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg mb-4">
              *"Participating in the festival last year was a life-changing experience. It gave me a platform to showcase my talent and connect with other young creatives. I’m excited to be a part of it again!"*
            </p>
            <p className="font-bold">Jane A., Student</p>
          </motion.div>

          {/* Testimonial Card 2 */}
          <motion.div
            className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg mb-4">
              *"The festival provides an incredible opportunity for students to express themselves and celebrate their achievements. The parade and art presentations were highlights for our school community."*
            </p>
            <p className="font-bold">Mr. Adekunle, Teacher</p>
          </motion.div>

          {/* Testimonial Card 3 */}
          <motion.div
            className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg mb-4">
              *"Our group had a fantastic time presenting our collaborative project. The exposure and feedback we received were invaluable. Highly recommend it to other groups looking to shine!"*
            </p>
            <p className="font-bold">Chinwe O., Group Leader</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
