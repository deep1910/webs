// @ts-ignore
import Slider from 'react-slick';
import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, BookOpen, Briefcase, Code, Database, Terminal, ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from './data.json';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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

  // Custom arrow components
  function CustomNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="absolute -right-12 top-1/2 -translate-y-1/2 cursor-pointer bg-gray-800/50 p-3 rounded-full hover:bg-gray-700 transition-all duration-300 group"
        onClick={onClick}
      >
        <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-blue-300 transition-colors duration-300" />
      </div>
    );
  }

  function CustomPrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="absolute -left-12 top-1/2 -translate-y-1/2 cursor-pointer bg-gray-800/50 p-3 rounded-full hover:bg-gray-700 transition-all duration-300 group"
        onClick={onClick}
      >
        <ChevronLeft className="w-6 h-6 text-gray-300 group-hover:text-blue-300 transition-colors duration-300" />
      </div>
    );
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscriptionStatus('error');
      return;
    }

    try {
      // Send email using mailto link
      const mailtoLink = `mailto:deeppande2117@gmail.com?subject=New Newsletter Subscription&body=New subscriber email: ${email}`;
      window.location.href = mailtoLink;
      
      setSubscriptionStatus('success');
      setEmail('');
    } catch (error) {
      setSubscriptionStatus('error');
    }
  };

  const filteredBlogs = activeFilter === 'all' ? data.blogs : data.blogs.filter(blog => blog.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-800 to-fuchsia-900 opacity-90 animate-gradient">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-800 to-fuchsia-900 opacity-90 animate-gradient-delayed"></div>
        </div>
        <div className="relative container mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
              Deep Pande
            </h1>
            <p className="text-xl mb-8 text-gray-200 font-medium">
              Technical Content Writer & Full Stack Developer
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/deep1910/" className="transform hover:scale-110 transition-transform duration-200">
                <Github size={28} className="hover:text-blue-300 transition-colors duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/deep-pande-6bb86521b/" className="transform hover:scale-110 transition-transform duration-200">
                <Linkedin size={28} className="hover:text-blue-300 transition-colors duration-200" />
              </a>
              <a href="https://x.com/DeepPande7" className="transform hover:scale-110 transition-transform duration-200">
                <Twitter size={28} className="hover:text-blue-300 transition-colors duration-200" />
              </a>
              <a href="mailto:deeppande2117@gmail.com" className="transform hover:scale-110 transition-transform duration-200">
                <Mail size={28} className="hover:text-blue-300 transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* How I Can Help Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Terminal className="mr-4 text-blue-300" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
              How I Can Help
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-lg p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] backdrop-blur-sm">
              <div className="text-blue-300 mb-4">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-4">Technical Writing</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Creating clear, engaging technical content that helps businesses communicate complex ideas effectively to their audience.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] backdrop-blur-sm">
              <div className="text-blue-300 mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-4">Development</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Building robust web applications and automation solutions using modern technologies and best practices.
              </p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] backdrop-blur-sm">
              <div className="text-blue-300 mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-4">Content Strategy</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Developing comprehensive content strategies that align with business goals and drive meaningful engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Briefcase className="mr-4 text-blue-300" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
              Experience
            </h2>
          </div>
          <div className="space-y-8">
            {data.experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-8 transform hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] backdrop-blur-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-300">{exp.title}</h3>
                    <p className="text-gray-300 font-medium text-lg mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-200 font-medium text-lg">{exp.period}</p>
                    <p className="text-gray-400 text-base mt-1">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-200 space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="font-medium text-lg leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Code className="mr-4 text-blue-300" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
              Skills
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(data.skills).map(([category, items]) => (
              <div key={category} className="bg-gray-900/50 rounded-lg p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] backdrop-blur-sm">
                <h3 className="text-xl font-bold text-blue-300 mb-6 border-b border-gray-700 pb-3">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-800/80 rounded-full text-sm text-gray-200 font-medium hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="pt-24 pb-16 bg-gray-800" id="blog">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <BookOpen className="mr-4 text-blue-300" />
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
                Blogs
              </h2>
            </div>
            <div className="flex space-x-0">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-l-lg text-sm font-medium ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200 hover:bg-gray-700'}`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter('tech')}
                className={`px-3 py-1.5 text-sm font-medium ${activeFilter === 'tech' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200 hover:bg-gray-700'}`}
              >
                Tech
              </button>
              <button
                onClick={() => setActiveFilter('finance')}
                className={`px-3 py-1.5 rounded-r-lg text-sm font-medium ${activeFilter === 'finance' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200 hover:bg-gray-700'}`}
              >
                Finance
              </button>
            </div>
          </div>
          <div className="px-4 relative">
            <Slider {...settings}>
              {filteredBlogs.map((blog, index) => (
                <div key={index} className="p-3">
                  <div className="bg-gray-900/50 rounded-lg p-5 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 h-[260px] flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold mb-3 text-blue-300 line-clamp-2 h-12">{blog.title}</h3>
                      <p className="text-gray-300 text-base leading-relaxed line-clamp-4 mb-2">
                        {blog.content?.split(' ').slice(0, 25).join(' ')}...
                      </p>
                    </div>
                    <div className="mt-auto">
                      <a 
                        href={blog.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-teal-300 hover:text-teal-200 flex items-center group font-medium text-sm"
                      >
                        Read More 
                        <ExternalLink size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300 mb-6">
              Stay Updated
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Subscribe to my newsletter for the latest insights on technical writing, development, and content strategy.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg bg-gray-800/50 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow max-w-md"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-blue-500/25"
              >
                Subscribe
              </button>
            </form>
            {subscriptionStatus === 'success' && (
              <p className="mt-4 text-green-400">Thank you for subscribing!</p>
            )}
            {subscriptionStatus === 'error' && (
              <p className="mt-4 text-red-400">Please enter a valid email address.</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 font-medium">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>

      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 15s ease infinite;
          }

          .animate-gradient-delayed {
            background-size: 200% 200%;
            animation: gradient 15s ease infinite;
            animation-delay: -7.5s;
          }
        `}
      </style>
    </div>
  );
}

export default App;