import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, BookOpen, Briefcase } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const projects = [
    {
      title: 'Zyra App',
      description: 'Fasion Ecommerce React Native application using Expo Framework',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      link: 'https://github.com/deep1910/ZyraApp'
    }
  ];

  const blogs = [
    {
      title: 'Single Entry vs Double Entry Accounting: Key Differences Explained',
      date: 'Jul 31, 2023',
      preview: '6 min read',
      link: 'https://drive.google.com/file/d/12s-6fhQogue31ORI8eDEvRS_sNgyU2nH/view?usp=sharing',
      category: 'finance'
    },
    {
      title: 'Revenue Recognition Made Simple: Deferred vs. Unbilled Revenue',
      date: 'Jul 31, 2023',
      preview: '6 min read',
      link: 'https://drive.google.com/file/d/10FdsVPw8FpUM54BoZUvgIlwJ3dBaoid_/view?usp=sharing',
      category: 'finance'
    },
    {
      title: 'How to generate documents from the Oracle database',
      date: 'Jul 31, 2023',
      preview: '6 min read',
      link: 'https://drive.google.com/file/d/1SPjHr7IGYDOeYtszum1V5nZfWDVM01sc/view?usp=sharing',
      category: 'tech'
    },
    {
      title: 'How to Choose the Best Recurring Revenue Model for SaaS',
      date: 'Jul 31, 2023',
      preview: '6 min read',
      link: 'https://drive.google.com/file/d/1q0GzCHvrZTXAXKfPOlgigr6VrL9DB_60/view?usp=sharing',
      category: 'finance'
    },
    {
      title: 'Deep dive in analysis of linear regression',
      date: 'Jul 22, 2023',
      preview: '4 min read',
      link: 'https://dpblog.hashnode.dev/linear-regression',
      category: 'tech'
    },
    {
      title: 'Get Started with Bash Scripting',
      date: 'Jan 3, 2023',
      preview: '3 min read',
      link: 'https://deeppande.hashnode.dev/get-started-with-bash-scripting',
      category: 'tech'
    },
    {
      title: 'Brief About Babel -the compiler',
      date: 'Feb 15, 2023',
      preview: '3 min read',
      link: 'https://dpblog.hashnode.dev/brief-about-babel-the-compiler',
      category: 'tech'
    },
    {
      title: 'Explore the Discord API',
      date: 'Feb 15 , 2023',
      preview: '3 min read',
      link: 'https://dpblog.hashnode.dev/explore-the-discord-api',
      category: 'tech'
    },
    {
      title: 'State and Local Tax 101: What Every U.S. Business Should Know',
      date: 'Jul 31, 2023',
      preview: '6 min read',
      link: 'https://drive.google.com/file/d/17gtkuN7teGXHTtMty9J7a0f2FwR7nRz-/view?usp=sharing',
      category: 'finance'
    }
  ];

  const filteredBlogs = activeFilter === 'all' ? blogs : blogs.filter(blog => blog.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-teal-900"></div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Deep Pande
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              On the Journey of <strong>Data to Agents</strong>
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/deep1910/" className="transform hover:scale-110 transition-transform duration-200">
                <Github size={28} className="hover:text-blue-400 transition-colors duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/deep-pande-6bb86521b/" className="transform hover:scale-110 transition-transform duration-200">
                <Linkedin size={28} className="hover:text-blue-400 transition-colors duration-200" />
              </a>
              <a href="https://x.com/DeepPande7" className="transform hover:scale-110 transition-transform duration-200">
                <Twitter size={28} className="hover:text-blue-400 transition-colors duration-200" />
              </a>
              <a href="mailto:deeppande2117@gmail.com" className="transform hover:scale-110 transition-transform duration-200">
                <Mail size={28} className="hover:text-blue-400 transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Section */}
      <section className="py-10 bg-gray-900" id="blog">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <BookOpen className="mr-4 text-blue-400" />
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Blogs
              </h2>
            </div>
            <div className="flex space-x-0">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-l-lg ${activeFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter('tech')}
                className={`px-4 py-2 ${activeFilter === 'tech' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              >
                Tech
              </button>
              <button
                onClick={() => setActiveFilter('finance')}
                className={`px-4 py-2 rounded-r-lg ${activeFilter === 'finance' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              >
                Finance
              </button>
            </div>
          </div>
          <Slider {...settings}>
            {filteredBlogs.map((blog, index) => (
              <a href={blog.link} key={index}>
                <div className="p-4">
                  <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 h-60 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-blue-400 truncate">{blog.title}</h3>
                      <p className="text-sm text-gray-400 mb-3">{blog.date}</p>
                      <p className="text-gray-300 mb-4 overflow-hidden">{blog.preview}</p>
                    </div>
                    <a href={blog.link} className="text-teal-400 hover:text-teal-300 flex items-center group">
                      Read More 
                      <ExternalLink size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </a>
            ))}
          </Slider>
        </div>
      </section>
      {/* Projects Section */}
      <section className="py-20 bg-gray-800" id="projects">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Briefcase className="mr-4 text-blue-400" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a href={project.link} className="text-teal-400 hover:text-teal-300 flex items-center group">
                    View Project 
                    <ExternalLink size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;