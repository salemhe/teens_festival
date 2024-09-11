import React from 'react';

const ParticipationSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How You Can Participate</h2>

        <div className="grid gap-8 md:grid-cols-3">
          
          {/* School Participation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">School Participation</h3>
            <p className="mb-4">Is your school eager to be a part of this transformative event? We offer several opportunities for schools to get involved:</p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Creative Arts Presentations:</strong> Your students can showcase their talents in music, dance, drama, and visual arts.</li>
              <li><strong>Parade Participation:</strong> Join the parade and represent your school with pride and creativity.</li>
              <li><strong>Spectator Attendance:</strong> Enjoy the festival as spectators and experience the festivities firsthand.</li>
            </ul>
            <a href="/register-school" className="block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Register Your School</a>
          </div>

          {/* Individual Participation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Individual Participation</h3>
            <p className="mb-4">Are you a teen looking to make a difference and share your talents? Register as an individual to:</p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Participate in Workshops:</strong> Engage in sessions that cover a range of topics from arts and creativity to technology and innovation.</li>
              <li><strong>Join Art and Performance Sessions:</strong> Be a part of various performances and artistic displays.</li>
            </ul>
            <a href="/register-individual" className="block text-center bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Register Individually</a>
          </div>

          {/* Group Participation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Group Participation</h3>
            <p className="mb-4">Got a group of friends or an organization that wants to collaborate and showcase talent? Register your group to:</p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Showcase Collaborative Projects:</strong> Present group projects and performances that highlight your collective skills.</li>
              <li><strong>Display Talents and Ideas:</strong> Share your innovative ideas and talents with a broader audience.</li>
            </ul>
            <a href="/register-group" className="block text-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">Register Your Group</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ParticipationSection;
