import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

function Contact() {
  return (
    <AnimatePresence>
      <motion.div
        id="AboutContent"
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 3 }}
      >
        <div className="min-h-screen flex flex-col justify-between">
          <div className="container-xl flex flex-col xl:flex-row items-center justify-center mb-12 m-0 p-6">
            <div className="xl:max-w-md xl:ml-[1rem] xl:pt-4 py-4">
              <div className="xl:text-center xl:mr-16 xl:max-w-md xl:mb-[2rem]">
                <h1 className="text-4xl xl:text-5xl font-montserrat text-white font-bold pb-4">
                  Embrace Collaboration: Let's Innovate Together!
                </h1>
                <h2 className="text-2xl xl:text-3xl xl:mt-6 font-montserrat text-white font-semibold">
                  Actively looking for Developer Collaborations and Job
                  Opportunities.
                </h2>
              </div>
            </div>
            <div className="mt-10 xl:mb-0 xl:ml-1 h-[30rem] w-[25rem] xl:h-[30rem] xl:w-[30rem]">
              <ContactMe />
            </div>
          </div>
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Contact;
