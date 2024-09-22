import React from 'react';
import Profile from '../assets/file.png';

const PortfolioLayout = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 font-sans text-gray-900">
      {/* Header Section */}
      <header className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Jagadish S Munavalli</h1>
            <p className="text-xl text-gray-600 mb-1">Full Stack Engineer focused on building products</p>
            <p className="text-lg text-gray-500">with extra attention to details</p>
            <p className="text-lg text-gray-500">Wrocław, Poland, CET</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-100">
              <img src={Profile} alt="Bartosz Jarocki" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="flex mt-6 space-x-4">
          {/* Add icons for contact methods */}
          <span className="text-2xl text-gray-400">✉️</span>
          <span className="text-2xl text-gray-400">📞</span>
          <span className="text-2xl text-gray-400">👍</span>
          <span className="text-2xl text-gray-400">🔗</span>
          <span className="text-2xl text-gray-400">🐦</span>
        </div>
      </header>

      {/* About Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">Parabol</h3>
              <span className="text-gray-500">2021 - 2024</span>
            </div>
            <p className="text-lg font-medium text-gray-700 mb-1">Senior Full Stack Developer</p>
            <p className="text-base text-gray-500 italic">Remote</p>
            <p className="text-base text-gray-700 mt-2 leading-relaxed">
              Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL
            </p>
          </div>
          {/* Add more work experiences here */}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">Wrocław University of Technology</h3>
            <span className="text-gray-500">2007 - 2010</span>
          </div>
          <p className="text-base text-gray-700">Bachelor's Degree in Control systems engineering and Robotics</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'TypeScript', 'React/Next.js/Remix', 'Node.js', 'GraphQL', 'Relay', 'WebRTC'].map((skill) => (
            <span key={skill} className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { name: 'Consultly', description: 'A platform to build and grow your online business' },
            { name: 'Monito', description: 'Browser extension that records everything happening in a web application' },
            { name: 'Jarocki.me', description: 'My personal website and blog. Built with Next.js and Notion API' },
            { name: 'Minimal', description: 'Minimalist calendars, habit trackers and planners generator' },
            { name: 'Barepapers', description: 'Generates beautiful wallpapers using random shapes and gradients' },
            { name: 'Year progress', description: 'Tracks current year progress and displays a countdown' },
          ].map((project) => (
            <div key={project.name} className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
              <p className="text-gray-700 text-base mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                  Side Project
                </span>
                {/* Add more technology tags here */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioLayout;