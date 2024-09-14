import React, { useState } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Faq from '../Faq/Faq';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import ParticipationSection from '../Participation/ParticipationSection';

const RegistrationPage = ({ activeTab, setActiveTab }) => {
   const [selectedTab, setSelectedTab] = useState(0);
   const [selectedParticipation, setSelectedParticipation] = useState([]);
   const [individualParticipation, setIndividualParticipation] = useState([]);
   const [groupParticipation, setGroupParticipation] = useState([]);

   const handleTabSwitch = (tabIndex) => {
      setSelectedTab(tabIndex); // Update selected tab
    };

   const participationOptions = [
     { value: 'Creative Arts Presentations', label: 'Creative Arts Presentations' },
     { value: 'Parade Participation', label: 'Parade Participation' },
     { value: 'Spectator Attendance', label: 'Spectator Attendance' }
   ];
   const individualOptions = [
     { value: 'Workshops', label: 'Workshops' },
     { value: 'Art and Performance Sessions', label: 'Art and Performance Sessions' },
   ]; 
   const groupOptions = [
     { value: 'Technology & Innovation', label: 'Technology & Innovation' },
     { value: 'Arts & Creativity', label: 'Arts & Creativity' },
     { value: 'Leadership & Social Change', label: 'Leadership & Social Change' },
     { value: 'Entrepreneurship & Business', label: 'Entrepreneurship & Business' }
   ];
   const handleParticipationChange = (selectedOptions) => {
      setSelectedParticipation(selectedOptions);
    };
   const handleIndividualChange = (selectedOptions) => {
      setIndividualParticipation(selectedOptions);
    };
   const handleGroupChange = (selectedOptions) => {
      setGroupParticipation(selectedOptions);
    };
   // Handle School form submission
const submitSchoolForm = async (e) => {
   e.preventDefault();
   const formData = {
     schoolName: e.target[0].value,
     contactPerson: e.target[1].value,
     email: e.target[2].value,
     phoneNumber: e.target[3].value,
     totalAttendees: e.target[4].value,
     participationType: selectedParticipation.map(option => option.value), // Store selected values
     specialRequests: e.target[6].value,
     agreeToTerms: e.target[7].checked,
   };
 
   try {
     await addDoc(collection(db, "schoolRegistrations"), formData);
     toast.success("School registration submitted successfully!");
     e.target.reset();
     setSelectedParticipation([]);
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
     participationType: individualParticipation.map(option => option.value),
     specialRequests: e.target[4].value,
     agreeToTerms: e.target[5].checked,
   };
 
   try {
     await addDoc(collection(db, "individualRegistrations"), formData);
     toast.success("Individual registration submitted successfully!");
     e.target.reset();
     setIndividualParticipation([]);
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
     participationType: groupParticipation.map(option => option.value),
     specialRequests: e.target[5].value,
     agreeToTerms: e.target[6].checked,
   };
 
   try {
     await addDoc(collection(db, "groupRegistrations"), formData);
     toast.success("Group registration submitted successfully!");
     e.target.reset();
     setGroupParticipation([]);
   } catch (err) {
     console.error("Error adding document: ", err);
   }
 };
  return (
    <div className="bg-[#07154a] text-white font-sans" id="registration-section">
      {/* <ParticipationSection onTabSwitch={handleTabSwitch} /> */}
      {/* Registration Section */}
      <section className="py-8 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Register Form</h2>
        <p className="mb-6">Please fill out the form below based on your participation type.<br/>  Make sure to complete all relevant sections for a smooth registration process.</p>
        <TabGroup selectedIndex={activeTab} onChange={setActiveTab} >
         <TabList  className="flex justify-center mb-4">
            <Tab   className={({ selected }) =>
                `rounded-full py-1 px-3 text-sm font-semibold focus:outline-none ${
                  selected
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-white hover:bg-white/10'
                }`
              }
            >
               School
            </Tab>
            <Tab  className={({ selected }) =>
                `rounded-full py-1 px-3 text-sm font-semibold focus:outline-none ${
                  selected
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-white hover:bg-white/10'
                }`
              }
            >
               Individual
            </Tab>
            <Tab
              className={({ selected }) =>
                `rounded-full py-1 px-3 text-sm font-semibold focus:outline-none ${
                  selected
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-white hover:bg-white/10'
                }`
              }
            >
              Group
            </Tab>
         </TabList>
         <TabPanels>
         <TabPanel id='school'>
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
                  className="p-2 rounded-md text-black  col-span-2"
                  required
               />
               {/* <select
                  id="participationType"
                  className="p-2 rounded-md text-black col-span-2"
                  required
               >
                  <option value="">Type of Participation:</option>
                  <option value="1">Creative Arts Presentations</option>
                  <option value="2">Cultural Parade</option>
                  <option value="3">Attending only</option>
               </select> */}
               <div className="col-span-2">
                  <Select
                  isMulti
                  options={participationOptions}
                  value={selectedParticipation}
                  onChange={handleParticipationChange}
                  placeholder="Type of Participation" 
                  className="text-black text-left"
                  />
               </div>
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
            <TabPanel id='individual'>
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
                  {/* <select
                     id="participationType"
                     className="p-2 rounded-md text-black col-span-2"
                     required
                  >
                     <option value="">Type of Participation:</option>
                     <option value="1">Art and Performance Sessions</option>
                     <option value="2">Workshops</option>
                  </select> */}
                  <div className="col-span-2">
                     <Select
                     isMulti
                     options={individualOptions}
                     value={individualParticipation}
                     onChange={handleIndividualChange}
                     placeholder="Type of Participation" 
                     className="text-black text-left"
                     />
                  </div>
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
                  {/* <select
                     id="participationType"
                     className="p-2 rounded-md text-black col-span-2"
                     required
                  >
                     <option value="">Type of Participation:</option>
                     <option value="1">Technology & Innovation</option>
                     <option value="2">Arts & Creativity</option>
                     <option value="3">Leadership & Social Change</option>
                     <option value="4">Entrepreneurship & Business</option>
                  </select> */}
                  <div className="col-span-2">
                     <Select
                     isMulti
                     options={groupOptions}
                     value={groupParticipation}
                     onChange={handleGroupChange}
                     placeholder="Type of Participation" 
                     className="text-black text-left"
                     />
                  </div>
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


      <Faq/>
      {/* Footer Section */}
      <footer className="bg-[#07154a] text-white py-6 px-4 text-center">
         <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.instagram.com/theofficialteensvoice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-yellow-500">Instagram</a>
            <a href="https://youtube.com/@theofficialteensvoice?si=kahc5i6GoNAoM4Zc" className="text-yellow-500">YouTube</a>
            <a href="https://www.kingsch.at/p/c1dZM2h" className="text-yellow-500">KingsChat</a>
         </div>

        <div className="text-sm space-x-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="tel:+2348024941683">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default RegistrationPage;





