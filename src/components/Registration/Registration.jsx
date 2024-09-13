import React from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Faq from '../Faq/Faq';
import Testimonials from '../Testimonials/Testimonials';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationPage = () => {
   // Handle School form submission
const submitSchoolForm = async (e) => {
   e.preventDefault();
   const formData = {
     schoolName: e.target[0].value,
     contactPerson: e.target[1].value,
     email: e.target[2].value,
     phoneNumber: e.target[3].value,
     totalAttendees: e.target[4].value,
     participationType: e.target[5].value,
     specialRequests: e.target[6].value,
     agreeToTerms: e.target[7].checked,
   };
 
   try {
     await addDoc(collection(db, "schoolRegistrations"), formData);
     toast.success("School registration submitted successfully!");
     e.target.reset();
   } catch (err) {
     console.error("Error adding document: ", err);
   }
 };
 
 // Handle Individual form submission
 const submitIndividualForm = async (e) => {
   e.preventDefault();
   const formData = {
     fullName: e.target[0].value,
     email: e.target[1].value,
     phoneNumber: e.target[2].value,
     participationType: e.target[3].value,
     specialRequests: e.target[4].value,
     agreeToTerms: e.target[5].checked,
   };
 
   try {
     await addDoc(collection(db, "individualRegistrations"), formData);
     toast.success("School registration submitted successfully!");
     e.target.reset();
   } catch (err) {
     console.error("Error adding document: ", err);
   }
 };
 
 // Handle Group form submission
 const submitGroupForm = async (e) => {
   e.preventDefault();
   const formData = {
     groupName: e.target[0].value,
     groupLeader: e.target[1].value,
     totalAttendees: e.target[2].value,
     phoneNumber: e.target[3].value,
     participationType: e.target[4].value,
     specialRequests: e.target[5].value,
     agreeToTerms: e.target[6].checked,
   };
 
   try {
     await addDoc(collection(db, "groupRegistrations"), formData);
     toast.success("School registration submitted successfully!");
     e.target.reset();
   } catch (err) {
     console.error("Error adding document: ", err);
   }
 };
  return (
    <div className="bg-blue-900 text-white font-sans">
      {/* Registration Section */}
      <section className="py-8 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Register Form</h2>
        <p className="mb-6">Please fill out the form below based on your participation type.<br/>  Make sure to complete all relevant sections for a smooth registration process.</p>
        <TabGroup>
         <TabList clas>
            <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">School</Tab>
            <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">Individual</Tab>
            <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">Group</Tab>
         </TabList>
         <TabPanels>
         <TabPanel>
            <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="colored"
            />
            <form
               className="max-w-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
               onSubmit={submitSchoolForm}
            >
               <input
                  type="text"
                  placeholder="School Name"
                  className="p-2 rounded-md text-black col-span-2"
                  required
               />
               <input
                  type="text"
                  placeholder="Contact Person"
                  className="p-2 rounded-md text-black col-span-2"
                  required
               />
               <input
                  type="email"
                  placeholder="Email"
                  className="p-2 rounded-md text-black sm:col-auto col-span-2"
                  required
               />
               <input
                  type="number"
                  placeholder="Phone Number"
                  className="p-2 rounded-md text-black sm:col-auto col-span-2"
                  required
               />
               <input
                  type="number"
                  placeholder="Total Number of Attendees"
                  className="p-2 rounded-md text-black sm:col-auto col-span-2"
                  required
               />
               <select
                  id="participationType"
                  className="p-2 rounded-md text-black col-span-2"
                  required
               >
                  <option value="">Type of Participation:</option>
                  <option value="1">Creative Arts Presentations</option>
                  <option value="2">Cultural Parade</option>
                  <option value="3">Attending only</option>
               </select>
               <input
                  type="text"
                  placeholder="Special Requests or Needs e.g Accessibility, dietary needs, etc."
                  className="p-2 rounded-md text-black m:col-auto col-span-2"
                 
               />
               <p htmlFor="" className="col-span-2 text-left">
                  Agree to Terms and Conditions
               </p>
               <div className="flex space-x-2 col-span-2">
                  <input type="checkbox" required />
                  <label htmlFor="" className="col-span-2">
                  I agree to the terms and conditions of the event.
                  </label>
               </div>
               <button
                  type="submit"
                  className="bg-yellow-500 text-black px-4 py-2 rounded-md col-span-2"
               >
                  Submit
               </button>
            </form>
         </TabPanel>


            {/* individual form */}
            <TabPanel>
               <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
               />
               <form
                  className="max-w-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
                  onSubmit={submitIndividualForm}
               >
                  <input
                     type="text"
                     placeholder="Full Name"
                     className="p-2 rounded-md text-black col-span-2"
                     required
                  />
                  <input
                     type="email"
                     placeholder="Email"
                     className="p-2 rounded-md text-black sm:col-auto col-span-2"
                     required
                  />
                  <input
                     type="number"
                     placeholder="Phone Number"
                     className="p-2 rounded-md text-black sm:col-auto col-span-2"
                     required
                  />
                  <select
                     id="participationType"
                     className="p-2 rounded-md text-black col-span-2"
                     required
                  >
                     <option value="">Type of Participation:</option>
                     <option value="1">Art and Performance Sessions</option>
                     <option value="2">Workshops</option>
                  </select>
                  <input
                     type="text"
                     placeholder="Special Requests or Needs e.g Accessibility, dietary needs, etc."
                     className="p-2 rounded-md text-black m:col-auto col-span-2"
                     
                  />
                  <p htmlFor="" className="col-span-2 text-left">
                     Agree to Terms and Conditions
                  </p>
                  <div className="flex space-x-2 col-span-2">
                     <input type="checkbox" required />
                     <label htmlFor="" className="col-span-2">
                     I agree to the terms and conditions of the event.
                     </label>
                  </div>
                  <button
                     type="submit"
                     className="bg-yellow-500 text-black px-4 py-2 rounded-md col-span-2"
                  >
                     Submit
                  </button>
               </form>
            </TabPanel>

            {/* Group form */}
            <TabPanel>
               <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
               />
               <form
                  className="max-w-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
                  onSubmit={submitGroupForm}
               >
                  <input
                     type="text"
                     placeholder="Group Name"
                     className="p-2 rounded-md text-black col-span-2"
                     required
                  />
                  <input
                     type="text"
                     placeholder="Group Leader's Name"
                     className="p-2 rounded-md text-black col-span-2"
                     required
                  />
                  <input
                     type="number"
                     placeholder="Total Number of Attendees"
                     className="p-2 rounded-md text-black sm:col-auto col-span-2"
                     required
                  />
                  <input
                     type="number"
                     placeholder="Phone Number"
                     className="p-2 rounded-md text-black sm:col-auto col-span-2"
                     required
                  />
                  <select
                     id="participationType"
                     className="p-2 rounded-md text-black col-span-2"
                     required
                  >
                     <option value="">Type of Participation:</option>
                     <option value="1">Technology & Innovation</option>
                     <option value="2">Arts & Creativity</option>
                     <option value="3">Leadership & Social Change</option>
                     <option value="4">Entrepreneurship & Business</option>
                  </select>
                  <input
                     type="text"
                     placeholder="Special Requests or Needs e.g Accessibility, dietary needs, etc."
                     className="p-2 rounded-md text-black m:col-auto col-span-2"
                     
                  />
                  <p htmlFor="" className="col-span-2 text-left">
                     Agree to Terms and Conditions
                  </p>
                  <div className="flex space-x-2 col-span-2">
                     <input type="checkbox" required />
                     <label htmlFor="" className="col-span-2">
                     I agree to the terms and conditions of the event.
                     </label>
                  </div>
                  <button
                     type="submit"
                     className="bg-yellow-500 text-black px-4 py-2 rounded-md col-span-2"
                  >
                     Submit
                  </button>
               </form>
            </TabPanel>

         </TabPanels>
        </TabGroup>
      </section>

      {/* Webinar Section */}
      {/* <section className="py-8 px-4 bg-white text-black">
        <div className="max-w-lg mx-auto text-center">
          <img
            src="https://via.placeholder.com/300" // replace this with the actual image URL
            alt="Webinar"
            className="w-full h-auto rounded-md mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">
            Have You Been Watching Our Webinar Series?
          </h3>
          <p className="mb-4">
            We cover a variety of topics designed to help you grow. Don’t miss
            out on valuable content from experts.
          </p>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">
            Watch Webinars
          </button>
        </div>
      </section> */}

      {/* <Testimonials /> */}

      {/* Subscription Section */}
      {/* <section className="py-8 px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Receive the Latest Articles and Webinar Invites
        </h3>
        <p className="mb-6">Direct to your inbox</p>
        <form className="max-w-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 rounded-md text-black col-span-2"
          />
          <input
            type="text"
            placeholder="Professional Role"
            className="p-2 rounded-md text-black col-span-2"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black px-4 py-2 rounded-md col-span-2"
          >
            Subscribe
          </button>
        </form>
      </section> */}


      <Faq/>
      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-6 px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-yellow-500">Facebook</a>
          <a href="#" className="text-yellow-500">Twitter</a>
          <a href="#" className="text-yellow-500">LinkedIn</a>
        </div>
        <div className="text-sm space-x-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default RegistrationPage;
