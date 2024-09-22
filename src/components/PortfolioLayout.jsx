import React from 'react';
import Profile from '../assets/profile.jpeg';

const PortfolioLayout = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <header className="mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h1 className="text-3xl font-bold">Bartosz Jarocki</h1>
            <p className="text-gray-600">Full Stack Engineer focused on building products</p>
            <p className="text-gray-600">Wrocław, Poland, CET</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <img src={Profile} />
          </div>
        </div>
        <div className="flex mt-4 space-x-4">
          {/* Add icons for contact methods */}
        </div>
      </header>

      {/* About Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p className="text-gray-700">
          As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Parabol</h3>
              <span className="text-gray-600">2021 - 2024</span>
            </div>
            <p className="text-gray-700">Senior Full Stack Developer</p>
            <p className="text-gray-600 text-sm">
              Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL
            </p>
          </div>
          {/* Add more work experiences here */}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Wrocław University of Technology</h3>
            <span className="text-gray-600">2007 - 2010</span>
          </div>
          <p className="text-gray-700">Bachelor's Degree in Control systems engineering and Robotics</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'TypeScript', 'React/Next.js/Remix', 'Node.js', 'GraphQL', 'Relay', 'WebRTC'].map((skill) => (
            <span key={skill} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: 'Consultly', description: 'A platform to build and grow your online business' },
            { name: 'Monito', description: 'Browser extension that records everything happening in a web application' },
            { name: 'Jarocki.me', description: 'My personal website and blog. Built with Next.js and Notion API' },
            { name: 'Minimal', description: 'Minimalist calendars, habit trackers and planners generator' },
            { name: 'Barepapers', description: 'Generates beautiful wallpapers using random shapes and gradients' },
            { name: 'Year progress', description: 'Tracks current year progress and displays a countdown' },
          ].map((project) => (
            <div key={project.name} className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
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