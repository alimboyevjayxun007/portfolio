import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {
  Github,
  Linkedin,
  Instagram,
  Send,
  Code,
  Database,
  Server,
  Globe,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  Users,
  ChevronDown,
  Menu,
  X,
  Calendar,
  Briefcase,
  User,
  Phone,
  MessageSquare,
  Star,
  Zap,
  Target,
  CheckCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'JavaScript', icon: <Code size={32} />, category: 'Language', level: 70 },
    { name: 'Node.js', icon: <Server size={32} />, category: 'Runtime', level: 75 },
    { name: 'Express.js', icon: <Code size={32} />, category: 'Framework', level: 70 },
    { name: 'NestJS', icon: <Code size={32} />, category: 'Framework', level: 75 },
    { name: 'MongoDB', icon: <Database size={32} />, category: 'Database', level: 75 },
    { name: 'PostgreSQL', icon: <Database size={32} />, category: 'Database', level: 75 },
    { name: 'GraphQL', icon: <Globe size={32} />, category: 'API', level: 60 },
    { name: 'Docker', icon: <Server size={32} />, category: 'DevOps', level: 60 },
    { name: 'Redis', icon: <Database size={32} />, category: 'Cache', level: 60 },
    { name: 'RabbitMQ', icon: <MessageSquare size={32} />, category: 'Message Queue', level: 60 },
  ];

  const experience = [
    {
      title: "Backend Developer",
      company: "Freelance Projects",
      period: "2023 - Present",
      description: "Developed 6+ full-stack applications using Node.js, Express.js, and NestJS. Specialized in building scalable APIs, database design, and system architecture.",
      achievements: [
        "Built 6+ production-ready applications",
        "Implemented microservices architecture",
        "Optimized database performance by 40%",
        "Integrated third-party APIs and payment systems"
      ]
    },
    {
      title: "Node.js Backend Course",
      company: "Najot Ta'lim Urgench",
      period: "2023",
      description: "Completed comprehensive Node.js backend development course covering modern backend technologies, best practices, and real-world project development.",
      achievements: [
        "Mastered Node.js and Express.js",
        "Learned database design and optimization",
        "Implemented authentication and authorization",
        "Built RESTful APIs and GraphQL endpoints"
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Form validatsiyasi
      if (!formData.name.trim()) {
        throw new Error('Ism maydonini to\'ldiring');
      }
      if (!formData.email.trim()) {
        throw new Error('Email maydonini to\'ldiring');
      }
      if (!formData.message.trim()) {
        throw new Error('Xabar maydonini to\'ldiring');
      }

      // Email validatsiyasi
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Email manzilini to\'g\'ri formatda kiriting');
      }

      // EmailJS template parametrlari - to'g'ri format
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Jayxun Alimboyev',
        to_email: 'alimboyevjayxun007@gmail.com'
      };

      console.log('EmailJS ga yuborilayotgan parametrlar:', templateParams);

      // EmailJS orqali email yuborish
      const response = await emailjs.send(
        'service_rmr5i9a',    // Service ID
        'template_9i16kck',   // Template ID
        templateParams,
        'AkGG0XWlUK4psm4wH'   // Public Key
      );

      console.log('EmailJS muvaffaqiyatli yuborildi:', response);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // 5 soniyadan keyin success xabarini yashirish
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);

    } catch (error: any) {
      console.error('Email yuborish xatoligi:', error);

      let errorMessage = 'Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.';

      if (error.text) {
        errorMessage = `EmailJS xatoligi: ${error.text}`;
      } else if (error.message) {
        errorMessage = error.message;
      }

      setSubmitStatus('error');
      console.log('Xatolik xabari:', errorMessage);

      // 7 soniyadan keyin error xabarini yashirish
      setTimeout(() => {
        setSubmitStatus('');
      }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold gradient-text">
              Jayxun Alimboyev
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 font-medium px-4 py-2 rounded-lg ${activeSection === item
                    ? 'text-primary-600 font-semibold bg-primary-50 shadow-sm'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'skills', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 px-4 text-gray-600 hover:text-primary-600 hover:bg-primary-50 capitalize font-medium rounded-lg transition-all duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Section */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="p-2 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden" style={{ transform: 'scale(0.67)', transformOrigin: 'top left' }}>
                  <img
                    src="/image.png"
                    alt="Jayxun Alimboyev - Node.js Backend Developer"
                    className="rounded-2xl"
                    style={{ display: 'block' }}
                  />
                </div>
              </div>
            </div>




            {/* Content Section */}
            <div className="text-center lg:text-left animate-slide-up">
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                  <Star size={16} className="mr-2" />
                  Available for Projects
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  <span className="gradient-text">Jayxun Alimboyev</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-gray-500 mb-2 font-medium">
                Jayxun Alimboyev Jasurbek o'g'li
              </p>

              <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-bold">
                Node.js Backend Developer
              </p>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl">
                Passionate backend developer specializing in Node.js, Express.js, and NestJS.
                I build scalable, secure, and high-performance web applications with modern technologies.
                6+ projects experience with strong team collaboration skills.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button
                  onClick={() => scrollToSection('experience')}
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Briefcase size={20} />
                  <span>View My Experience</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-xl font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Mail size={20} />
                  <span>Get In Touch</span>
                </button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="https://github.com/alimboyevjayxun007" target="_blank" rel="noopener noreferrer"
                  className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100 group">
                  <Github size={24} className="text-gray-700 group-hover:text-gray-900" />
                </a>
                <a href="https://www.linkedin.com/in/alimboyev-jayxun-89259b347/" target="_blank" rel="noopener noreferrer"
                  className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100 group">
                  <Linkedin size={24} className="text-blue-600 group-hover:text-blue-700" />
                </a>
                <a href="https://t.me/AlimboyevJayxun" target="_blank" rel="noopener noreferrer"
                  className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100 group">
                  <Send size={24} className="text-blue-500 group-hover:text-blue-600" />
                </a>
                <a href="https://www.instagram.com/alimboyevvv.jayxun/" target="_blank" rel="noopener noreferrer"
                  className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100 group">
                  <Instagram size={24} className="text-pink-600 group-hover:text-pink-700" />
                </a>
                <a href="mailto:alimboyevjayxun007@gmail.com"
                  className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-100 group">
                  <Mail size={24} className="text-red-600 group-hover:text-red-700" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <Target size={16} className="mr-2" />
              Get to Know Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated backend developer with expertise in modern web technologies and a passion for creating robust solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-100">
                <div className="p-3 bg-primary-500 rounded-xl flex-shrink-0 shadow-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
                  <p className="text-gray-600 mb-1 font-medium">
                    Tashkent University of Information Technologies, Urgench Branch
                  </p>
                  <p className="text-primary-600 font-semibold">Software Engineering</p>
                  <p className="text-sm text-gray-500">Currently pursuing Bachelor's degree</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <div className="p-3 bg-green-500 rounded-xl flex-shrink-0 shadow-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Certification</h3>
                  <p className="text-gray-600 mb-1 font-medium">
                    Najot Ta'lim Urgench Branch
                  </p>
                  <p className="text-green-600 font-semibold">Node.js Backend Development Course</p>
                  <p className="text-sm text-gray-500">Completed comprehensive backend training</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="p-3 bg-blue-500 rounded-xl flex-shrink-0 shadow-lg">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience</h3>
                  <p className="text-gray-600 mb-1 font-medium">
                    6+ Personal Projects
                  </p>
                  <p className="text-blue-600 font-semibold">Backend & Full-Stack Development</p>
                  <p className="text-sm text-gray-500">Production-ready applications</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-100">
                <div className="p-3 bg-purple-500 rounded-xl flex-shrink-0 shadow-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Collaboration</h3>
                  <p className="text-gray-600 mb-1 font-medium">
                    Strong teamwork skills
                  </p>
                  <p className="text-purple-600 font-semibold">Agile Methodology & Git Workflow</p>
                  <p className="text-sm text-gray-500">Collaborative development experience</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 p-8 rounded-3xl animate-slide-up shadow-xl border border-primary-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary-500 rounded-lg">
                  <Zap className="text-white" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">My Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                I am a dedicated Node.js backend developer with deep expertise in modern web technologies.
                My goal is to create high-quality, scalable, and secure solutions for every project I work on.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Through continuous learning and development, I strive to leverage the latest technologies
                to deliver the best possible results for clients and contribute to innovative projects.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                I believe in writing clean, maintainable code and following best practices to ensure
                long-term success and scalability of applications.
              </p>
              <div className="flex items-center space-x-2 text-primary-600 bg-white p-4 rounded-xl shadow-sm">
                <MapPin size={20} />
                <span className="font-semibold">Urgench, Uzbekistan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <Code size={16} className="mr-2" />
              My Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise in backend development with modern technologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white p-6 rounded-2xl shadow-lg card-hover animate-slide-up border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-primary-600 p-2 bg-primary-50 rounded-lg">{skill.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                      <span className="tech-badge">{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-primary-600 font-bold text-lg">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-blue-500 h-3 rounded-full transition-all duration-1000 shadow-sm"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg card-hover border border-gray-100">
              <div className="p-4 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Server className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert in building robust APIs with Node.js, Express.js, and NestJS.
                Focus on scalable architecture and performance optimization.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg card-hover border border-gray-100">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Database className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Database Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Proficient in database design and optimization with MongoDB and PostgreSQL.
                Experience in data modeling and query optimization.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg card-hover border border-gray-100">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Globe className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">DevOps & Deployment</h3>
              <p className="text-gray-600 leading-relaxed">
                Skilled in containerization with Docker, caching with Redis,
                and deploying applications with monitoring and scaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <Briefcase size={16} className="mr-2" />
              My Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My journey in backend development and continuous learning
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={exp.title}
                className="bg-gradient-to-r from-white via-primary-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-primary-100 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-lg text-primary-600 font-semibold mb-2">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 bg-white px-4 py-2 rounded-lg shadow-sm">
                    <Calendar size={18} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-2" />
                    Key Achievements:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <Mail size={16} className="mr-2" />
              Let's Connect
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects.
                  Whether you're looking for a backend developer for your team or need help with a specific project,
                  I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Urgench, Uzbekistan</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+998943142604"
                      className="text-green-600 hover:text-green-700 transition-colors font-medium">
                      +998 94 314 26 04
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-3 bg-red-100 rounded-xl">
                    <Mail className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:alimboyevjayxun007@gmail.com"
                      className="text-red-600 hover:text-red-700 transition-colors font-medium">
                      alimboyevjayxun007@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Send className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telegram</h4>
                    <a href="https://t.me/AlimboyevJayxun" target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
                      @AlimboyevJayxun
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/alimboyevjayxun007" target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm border border-gray-100 hover:shadow-md">
                    <Github size={24} className="text-gray-700" />
                  </a>
                  <a href="https://www.linkedin.com/in/alimboyev-jayxun-89259b347/" target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-sm border border-gray-100 hover:shadow-md">
                    <Linkedin size={24} className="text-blue-600" />
                  </a>
                  <a href="https://t.me/AlimboyevJayxun" target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-sm border border-gray-100 hover:shadow-md">
                    <Send size={24} className="text-blue-500" />
                  </a>
                  <a href="https://www.instagram.com/alimboyevvv.jayxun/" target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white rounded-xl hover:bg-pink-50 transition-all duration-200 shadow-sm border border-gray-100 hover:shadow-md">
                    <Instagram size={24} className="text-pink-600" />
                  </a>
                  <a href="mailto:alimboyevjayxun007@gmail.com"
                    className="p-3 bg-white rounded-xl hover:bg-red-50 transition-all duration-200 shadow-sm border border-gray-100 hover:shadow-md">
                    <Mail size={24} className="text-red-600" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <p className="text-green-800 font-medium">Xabar muvaffaqiyatli yuborildi! Tez orada javob beraman.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <X className="text-red-600" size={20} />
                  <div>
                    <p className="text-red-800 font-medium">Xabar yuborishda xatolik yuz berdi.</p>
                    <p className="text-red-700 text-sm mt-1">Iltimos, to'g'ridan-to'g'ri email yoki Telegram orqali bog'laning.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ismingiz *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 shadow-sm"
                    placeholder="Ismingizni kiriting"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email manzil *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 shadow-sm"
                    placeholder="Email manzilingizni kiriting"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Xabar *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none shadow-sm"
                    placeholder="Loyihangiz haqida yozing..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Yuborilmoqda...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Xabar Yuborish</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Yoki to'g'ridan-to'g'ri bog'laning:
                </p>
                <div className="flex justify-center space-x-4 mt-3">
                  <a href="mailto:alimboyevjayxun007@gmail.com"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Email
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href="https://t.me/AlimboyevJayxun" target="_blank" rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Telegram
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href="tel:+998943142604"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                    Qo'ng'iroq
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-4">
              Jayxun Alimboyev
            </div>
            <p className="text-gray-400 mb-6">
              Node.js Backend Developer | Building the future, one API at a time
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/alimboyevjayxun007" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/alimboyev-jayxun-89259b347/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800">
                <Linkedin size={24} />
              </a>
              <a href="https://t.me/AlimboyevJayxun" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800">
                <Send size={24} />
              </a>
              <a href="https://www.instagram.com/alimboyevvv.jayxun/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800">
                <Instagram size={24} />
              </a>
              <a href="mailto:alimboyevjayxun007@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800">
                <Mail size={24} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2024 Jayxun Alimboyev. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;