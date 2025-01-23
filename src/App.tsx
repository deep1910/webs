import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, BookOpen, Briefcase } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const [email, setEmail] = useState('');
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
    },
    
  ];

  const blogs = [
    {
      title: 'Deep dive in analysis of linear regression',
      date: 'Jul 22, 2023',
      preview: '4 min read',
      link: 'https://dpblog.hashnode.dev/linear-regression'
    },

    {
      title: 'The Power of Probabilities: How Chance Rules Our World',
      date: 'Jul 31, 2023',
      preview: '6 min read',
      link: 'https://deeppande.hashnode.dev/the-power-of-probabilities-how-chance-rules-our-world'
    },
    {
      title: 'Get Started with Bash Scripting',
      date: 'Jan 3, 2023',
      preview: '3 min read',
      link: 'https://deeppande.hashnode.dev/get-started-with-bash-scripting'
    },
    {
      title: 'Brief About Babel -the compiler',
      date: 'Feb 15, 2023',
      preview: '3 min read',
      link: 'https://dpblog.hashnode.dev/brief-about-babel-the-compiler'
    },
    {
      title:'Explore the Discord API',
      date: 'Feb 15 , 2023',
      preview: '3 min read',
      link: 'https://dpblog.hashnode.dev/explore-the-discord-api'
    }
    
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-purple-900 via-blue-900 to-teal-900"></div>
        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-3xl animate-float">
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

      {/* Blog Section */}
      <section className="py-10 bg-gray-900" id="blog">
  <div className="container mx-auto px-6">
    <div className="flex items-center mb-12">
      <BookOpen className="mr-4 text-blue-400" />
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
        Blog Posts
      </h2>
    </div>
    <Slider {...settings}>
      {blogs.map((blog, index) => (
        <div key={index} className="p-4">
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
      ))}
    </Slider>
  </div>
</section>
      {/* Newsletter Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-blue-900 via-purple-900 to-teal-900 opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Subscribe to My Newsletter
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-300">
            Stay updated with my latest projects, blog posts, and tech insights delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-2 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {['github', 'linkedin', 'twitter', 'mail'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="transform hover:scale-110 hover:text-blue-400 transition-all duration-200"
              >
                {social === 'github' && <Github size={20} />}
                {social === 'linkedin' && <Linkedin size={20} />}
                {social === 'twitter' && <Twitter size={20} />}
                {social === 'mail' && <Mail size={20} />}
              </a>
            ))}
          </div>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;