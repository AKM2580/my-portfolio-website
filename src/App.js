import React, { useState } from 'react';
import { Briefcase, User, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

// Main App component
const App = () => {
  const [activeSection, setActiveSection] = useState('work'); // State to manage active section for navigation

  // Function to scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-inter text-neutral-800 antialiased">
      {/* Header and Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center rounded-b-lg">
        <h1 className="text-2xl font-bold text-neutral-900">Your Name</h1>
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('work')}
            className={`text-lg font-medium hover:text-neutral-600 transition-colors duration-200 ${activeSection === 'work' ? 'text-neutral-800' : 'text-neutral-600'}`}
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-lg font-medium hover:text-neutral-600 transition-colors duration-200 ${activeSection === 'about' ? 'text-neutral-800' : 'text-neutral-600'}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-lg font-medium hover:text-neutral-600 transition-colors duration-200 ${activeSection === 'contact' ? 'text-neutral-800' : 'text-neutral-600'}`}
          >
            Contact
          </button>
        </nav>
        {/* Mobile Navigation (Hamburger menu could be added here) */}
        <div className="md:hidden">
          {/* For simplicity, mobile nav is omitted but could be implemented with a state-driven dropdown */}
          <span className="text-neutral-600">Menu</span>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="flex items-center justify-center min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 text-center pt-24 pb-12">
        <div className="max-w-3xl px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold text-neutral-900 leading-tight mb-4 animate-fade-in-up">
            Hello, I'm <span className="text-neutral-800">Your Name</span>.
          </h2>
          <p className="text-xl md:text-2xl text-neutral-700 mb-8 animate-fade-in-up delay-100">
            A passionate <span className="font-semibold">[Your Profession, e.g., UI/UX Designer]</span> crafting intuitive digital experiences.
          </p>
          <button
            onClick={() => scrollToSection('work')}
            className="inline-flex items-center px-8 py-4 bg-neutral-800 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-neutral-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200"
          >
            View My Work <Briefcase className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 px-6 md:px-12 bg-white rounded-lg shadow-md max-w-6xl mx-auto my-12">
        <h2 className="text-4xl font-bold text-center text-neutral-900 mb-12">
          <Briefcase className="inline-block mr-3 w-8 h-8 text-neutral-600" /> My Work
        </h2>
        {/* Grid is set to a single column to ensure each project card takes full width */}
        <div className="grid grid-cols-1 gap-10">
          {/* Project Card 1 */}
          <ProjectCard
            title="E-commerce Redesign"
            description="A complete overhaul of an existing e-commerce platform focusing on user experience and conversion rates. This project involved extensive user research, wireframing, and high-fidelity prototyping to deliver a seamless shopping experience."
            imageUrl="https://placehold.co/800x450/E0F2FE/2563EB?text=Project+1+Screenshot" // Placeholder for a screenshot
            projectLink="#"
          />
          {/* Project Card 2 */}
          <ProjectCard
            title="Mobile App Concept"
            description="Designed a new mobile application for seamless task management and team collaboration. The app features an intuitive interface, real-time updates, and robust notification system to keep teams in sync."
            imageUrl="https://placehold.co/800x450/E0F2FE/2563EB?text=Project+2+Screenshot" // Placeholder for a screenshot
            projectLink="#"
          />
          {/* Project Card 3 */}
          <ProjectCard
            title="Brand Identity Refresh"
            description="Developed a modern brand identity system for a tech startup, including logo, typography, and color palette. The goal was to create a fresh and memorable brand that resonates with their target audience."
            imageUrl="https://placehold.co/800x450/E0F2FE/2563EB?text=Project+3+Screenshot" // Placeholder for a screenshot
            projectLink="#"
          />
          {/* Add more ProjectCard components as needed */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-12 bg-neutral-100 rounded-lg shadow-md max-w-6xl mx-auto my-12">
        <h2 className="text-4xl font-bold text-center text-neutral-900 mb-12">
          <User className="inline-block mr-3 w-8 h-8 text-neutral-600" /> About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://placehold.co/300x300/E0F2FE/2563EB?text=Your+Photo"
              alt="Your Photo"
              className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-neutral-200"
            />
          </div>
          <div className="md:w-2/3 text-lg text-neutral-700 leading-relaxed">
            <p className="mb-4">
              Hello! I'm <span className="font-semibold">Your Name</span>, a [Your Profession] with X years of experience in [Your Industry/Field]. My passion lies in creating user-centered designs that are not only aesthetically pleasing but also highly functional and intuitive.
            </p>
            <p className="mb-4">
              I specialize in [mention 2-3 key skills, e.g., UI/UX design, front-end development, graphic design, prototyping, user research]. I thrive on solving complex problems and transforming ideas into tangible, impactful digital products.
            </p>
            <p>
              When I'm not designing, you can find me [mention a hobby or interest, e.g., exploring new technologies, hiking, reading, playing music]. I'm always eager to learn and grow, and I believe in the power of collaboration to achieve great results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-12 bg-white rounded-lg shadow-md max-w-6xl mx-auto my-12">
        <h2 className="text-4xl font-bold text-center text-neutral-900 mb-12">
          <Mail className="inline-block mr-3 w-8 h-8 text-neutral-600" /> Get in Touch
        </h2>
        <div className="max-w-2xl mx-auto text-center text-lg text-neutral-700">
          <p className="mb-6">
            I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center px-8 py-4 bg-neutral-800 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-neutral-700 transition-all duration-300 transform hover:scale-105"
          >
            Email Me <Mail className="ml-2 w-5 h-5" />
          </a>
          <div className="flex justify-center space-x-6 mt-10">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-700 transition-colors duration-200">
              <Linkedin className="w-8 h-8" />
            </a>
            {/* Add more social links as needed */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8 text-center rounded-t-lg">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-xs mt-2">Built with React and Tailwind CSS</p>
      </footer>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row-reverse transform hover:scale-102 transition-transform duration-300 group">
      {/* Image container: takes full width on small screens, 1/2 on medium and up, ordered last (right) */}
      <div className="md:w-1/2 flex items-center justify-center p-4 md:p-8"> {/* Added padding to image container */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-80 md:h-[400px] object-contain object-center group-hover:brightness-90 transition-brightness duration-300" // Adjusted height to h-80 and md:h-[400px]
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x450/E0F2FE/2563EB?text=Project+Image"; }} // Updated placeholder to a larger landscape
        />
      </div>
      {/* Text content container: takes full width on small screens, 1/2 on medium and up, ordered first (left) */}
      <div className="p-6 md:w-1/2 flex flex-col justify-center">
        <h3 className="text-3xl font-semibold text-neutral-900 mb-2">{title}</h3>
        <p className="text-neutral-700 mb-4">{description}</p>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-white text-neutral-800 border border-neutral-800 font-semibold rounded-full shadow-md hover:bg-neutral-100 transition-colors duration-200 text-sm" // Styled as a white button with grey text and border, slightly smaller
        >
          Read More <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default App;
