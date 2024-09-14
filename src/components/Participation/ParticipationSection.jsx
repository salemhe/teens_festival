import React from 'react';
import { Link } from 'react-scroll';

const ParticipationSection = ({ setActiveTab }) => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How You Can Participate</h2>

        <div className="grid gap-8 md:grid-cols-3">
          
          {/* School Participation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">School Participation</h3>
            <p className="mb-4">Is your school eager to be a part of this transformative event? Here’s how to get involved :</p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Creative Arts Presentations:</strong> Students of your school can showcase their talents in music, poetry, dance, drama, and visual arts.</li>
              <li><strong>Parade Participation:</strong> Join the parade and represent your school with pride and creativity.
              </li>
              <li><strong>Live Attendance:</strong> Be present on that day to experience the festival and its activities firsthand!</li>
            </ul>
            <Link to="school" onClick={() => setActiveTab(0)} className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"  smooth={true} duration={500}>Register Your School</Link>
          </div>

          {/* Individual Participation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Individual Participation</h3>
            <p className="mb-4">Are you a young person looking to be a part of the grand celebration or share your talents? Here’s how to get involved:</p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Showcasing your Creative Arts presentation:</strong> Be a part of the various performances and artistic displays.</li>
              <li><strong>Attending the Festival:</strong> Participate in the immersive and transformative experience of the festival by attending the event.</li>
            </ul>
            <Link to="registration-section" onClick={() => setActiveTab(1)} className="block text-center bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"  smooth={true} duration={500}>Register Individually</Link>
          </div>

          {/* Group Participation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Group Participation</h3>
            <p className="mb-4">Are you a group of friends or an organization that wants to participate in the festival? Register your group now to:</p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Display Creative Arts Presentations:</strong> Showcase your talent and creativity through various creative presentations.</li>
              <li><strong>Attending the Festial:</strong> Be live at the event to participate in this awe-inspiring festival of music & arts.</li>
            </ul>
            <Link to="registration-section" onClick={() => setActiveTab(2)} className="block text-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"  smooth={true} duration={500}>Register Your Group</Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ParticipationSection;



