import React, { useState } from 'react';
import { Briefcase, User, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('work');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-inter text-neutral-800 antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center rounded-b-lg">
        <h1 className="text-2xl font-bold text-neutral-900">Your Name</h1>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('work')} className={`text-lg font-medium hover:text-neutral-600 transition-colors duration-200 ${activeSection === 'work' ? 'text-neutral-800' : 'text-neutral-600'}`}>Work</button>
          <button onClick={() => scrollToSection('about')} className={`text-lg font-medium hover:text-neutral-600 transition-colors duration-200 ${activeSection === 'about' ? 'text-neutral-800' : 'text-neutral-600'}`}>About</button>
          <button onClick={() => scrollToSection('contact')} className={`text-lg font-medium hover:text-neutral-600 transition-colors duration-200 ${activeSection === 'contact' ? 'text-neutral-800' : 'text-neutral-600'}`}>Contact</button>
        </nav>
        <div className="md:hidden"><span className="text-neutral-600">Menu</span></div>
      </header>

      <section id="hero" className="flex items-center justify-center min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 text-center pt-24 pb-12">
        <div className="max-w-3xl px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold text-neutral-900 leading-tight mb-4 animate-fade-in-up">Hello, I'm <span className="text-neutral-800">Your Name</span>.</h2>
          <p className="text-xl md:text-2xl text-neutral-700 mb-8 animate-fade-in-up delay-100">A passionate <span className="font-semibold">[Your Profession, e.g., UI/UX Designer]</span> crafting intuitive digital experiences.</p>
          <button onClick={() => scrollToSection('work')} className="inline-flex items-center px-8 py-4 bg-neutral-800 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-neutral-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200">View My Work <Briefcase className="ml-2 w-5 h-5" /></button>
        </div>
      </section>

      <section id="work" className="py-16 px-6 md:px-12 bg-white rounded-lg shadow-md max-w-6xl mx-auto my-12">
        <h2 className="text-4xl font-bold text-center text-neutral-900 mb-12"><Briefcase className="inline-block mr-3 w-8 h-8 text-neutral-600" /> My Work</h2>
        <div className="grid grid-cols-1 gap-10">
          <ProjectCard title="E-commerce Redesign" description="A complete overhaul..." imageUrl="https://placehold.co/800x450/E0F2FE/2