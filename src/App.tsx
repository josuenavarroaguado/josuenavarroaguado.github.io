import React from 'react';
import { Linkedin, ExternalLink, BookOpen, Briefcase, GraduationCap, LibraryBig, Quote } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      {/* Header */}
      {/* <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-10"> */}
        {/* <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between" role="navigation" aria-label="Main navigation"> */}
          {/* <a href="https://josuenavarro.com"><img src="/favicon-32x32.png" alt="Yoshua.pro"/></a> */}
          {/* <a href="https://yoshua.pro"><h1 className="text-2xl font-bold text-[#1064c4]">Yoshua.pro</h1></a> */}
          {/* <div className="flex items-center gap-4"> */}
            {/* <a 
              href="https://github.com" 
              className="text-gray-600 hover:text-[#1064c4] transition-colors p-2" 
              aria-label="GitHub Profile"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a> */}
            {/* <a 
              href="https://www.linkedin.com/in/yoshuadotpro/" 
              className="text-gray-600 hover:text-[#1064c4] transition-colors p-2" 
              aria-label="LinkedIn Profile"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a> */}
            {/* <a 
              href="https://www.linkedin.com/company/yoshuadotpro/" 
              className="text-gray-600 hover:text-[#1064c4] transition-colors p-2" 
              aria-label="LinkedIn Page"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a 
              href="mailto:yoshua@yoshua.pro" 
              className="text-gray-600 hover:text-[#1064c4] transition-colors p-2" 
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a> */}
          {/* </div> */}
        {/* </nav> */}
      {/* </header> */}

      <main className="pt-1 pb-12">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          {/* Hero Section */}
          <section className="bg-white rounded-lg shadow-sm p-6 mt-6" aria-labelledby="profile-heading">
            <div className="flex items-start gap-6">
              <img
                src="me.png"
                alt="Josué Navarro"
                className="w-40 h-40 rounded-lg object-cover"
                width="160"
                height="160"
                loading="eager"
              />
              <div>
                <h2 id="profile-heading" className="text-3xl font-bold text-gray-900">Josué Navarro</h2>
                <p className="text-xl text-gray-600 mt-1">Solutions Architect</p>
                <p className="text-gray-600 mt-2">Madrid, Spain</p>
                <div className="flex gap-4 mt-4">
                  <a 
                    href="https://www.linkedin.com/in/josuenavarroaguado/" 
                    className="bg-[#1064c4] text-white px-6 py-2 rounded-full hover:bg-[#0d4fa0] transition-colors"
                    aria-label="LinkedIn Profile"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Contact me
                  </a>
                  {/* <button 
                    className="bg-[#1064c4] text-white px-6 py-2 rounded-full hover:bg-[#0d4fa0] transition-colors"
                    onClick={() => window.location.href = 'mailto:yoshua@yoshua.pro'}
                    aria-label="Contact me via email"
                  >
                    Contact Me
                  </button> */}
                  {/* <button 
                    className="border border-[#1064c4] text-[#1064c4] px-6 py-2 rounded-full hover:bg-[#1064c4]/5 transition-colors"
                    onClick={() => }
                    aria-label="Download CV"
                  >
                    Download CV
                  </button> */}
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="bg-white rounded-lg shadow-sm p-6" aria-labelledby="about-heading">
            <h3 id="about-heading" className="text-xl font-semibold text-gray-900 mb-4">About</h3>
            <p className="text-gray-600 leading-relaxed">
              I am a seasoned Solutions Architect with over 10 years of experience in the IT industry, driven by a commitment to innovation and continuous learning. I have designed, developed, and delivered solutions across diverse domains, consistently aligning technology with business outcomes.
              <br /><br />
              <b>Specialties</b><br />
              • Software Architecture — Proficient in SOLID principles, Clean Architecture, Domain-Driven Design (DDD), and design patterns for scalable, modular solutions.<br />
              • Modern Development — Skilled in git flow, continuous deployments, and writing clean, maintainable code.<br />
              • Microservices & Frontend/Backend — Expert in C#, .NET, TypeScript, Angular, and microfrontends for modular, independently deployable systems.<br />
              • Cloud & DevOps — Experienced with AWS, GCP, Docker, Kubernetes, CI/CD pipelines, and GitHub Actions.<br />
              • Linux & Open Source — Passionate about leveraging open-source tools to build robust, efficient platforms.<br />
              • Research & Development — Actively exploring emerging technologies such as Generative AI and facilitating collaborative modeling for domain insights.<br />
              <br /><br />
              <b>Attributes</b><br />
              – Collaboration — Clear communicator who bridges gaps between technical and non-technical stakeholders.<br />
              – Problem-Solving — Skilled at addressing complex challenges with a structured, solution-oriented approach.<br />
              – Continuous Learning — Dedicated to staying ahead of trends to deliver sustainable, future-ready solutions.<br />
              <br /><br />
              <b>Let’s Connect</b><br />
              Open to discussing architectural challenges, mentorship opportunities, or collaborative projects that drive measurable success.
            </p>
          </section>

          {/* Experience Section */}
          <section className="bg-white rounded-lg shadow-sm p-6" aria-labelledby="experience-heading">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-[#1064c4]" aria-hidden="true" />
              <h3 id="experience-heading" className="text-xl font-semibold text-gray-900">Experience</h3>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <img
                  src="tecnocim.jpg"
                  alt="Tecnocim company logo"
                  className="w-12 h-12 rounded object-cover"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Solutions Architect</h4>
                  <p className="text-gray-600">Software Tecnic Tecnocim SL • Full-time</p>
                  <p className="text-gray-500 text-sm">Oct 2020 - Present • 2 years 4 months</p>
                  <p className="text-gray-500 text-sm">Remote</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="/favicon-96x96.png"
                  alt="Yoshua.pro company logo"
                  className="w-12 h-12 rounded object-cover"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Solutions Architect</h4>
                  <p className="text-gray-600">Yoshua.pro</p>
                  <p className="text-gray-500 text-sm">Sep 2020 - Present • 4 years 5 months</p>
                  <p className="text-gray-500 text-sm">Remote</p>
                  <p className="text-gray-700 leading-relaxed text-sm mt-3">I provide expert guidance to deliver scalable, high-quality solutions by tailoring technologies and architectural frameworks to meet diverse project needs. My expertise includes clean architecture, microservices, cloud-native solutions, CI/CD pipelines, and modular software design. I excel in frontend and backend development, creating responsive and maintainable systems. With strong collaboration, problem-solving skills, and a commitment to continuous learning, I ensure adaptable, future-proof solutions aligned with project goals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="/favicon-96x96.png"
                  alt="Yoshua.pro company logo"
                  className="w-12 h-12 rounded object-cover"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Training and Development Specialist</h4>
                  <p className="text-gray-600">Yoshua.pro</p>
                  <p className="text-gray-500 text-sm">Sep 2017 - Oct 2022 • 5 years 2 months</p>
                  <p className="text-gray-500 text-sm">Madrid, Spain • Hybrid</p>
                  <p className="text-gray-700 leading-relaxed text-sm mt-3">I provided training across various domains, equipping individuals with essential skills in web development, operating systems, networks, databases, video game programming, and cybersecurity. My courses covered technologies like HTML, CSS, JavaScript, Angular, PHP, Python, .NET Core, MySQL, MongoDB, Unity3D, and ethical hacking, emphasizing best practices and hands-on learning. I also mentored junior developers, fostering their growth and navigating technical challenges. This role demanded expertise in diverse technical areas, effective teaching across skill levels, and strong communication to inspire and engage learners.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="/atisa.jpg"
                  alt="Atisa company logo"
                  className="w-12 h-12 rounded object-cover"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Lead Full-Stack Web Developer</h4>
                  <p className="text-gray-600">Grupo Atisa • Full-time</p>
                  <p className="text-gray-500 text-sm">Feb 2020 - Nov 2022 • 2 years 10 months</p>
                  <p className="text-gray-500 text-sm">Torrejón de Ardoz, Madrid, Spain • Hybrid</p>
                  <p className="text-gray-700 leading-relaxed text-sm mt-3">I led the development of web and mobile applications using Angular 12+, PHP 8.x, Symfony 5+, and API Platform, combining technical expertise with team leadership and Linux administration. My responsibilities spanned dynamic front-end development with Angular, scalable backend APIs using Symfony, and database management with MySQL. I also developed cross-platform mobile applications with Ionic 5+ and Angular, integrating features like offline access and push notifications for enhanced user engagement. Additionally, I managed Linux servers, configuring LAMP stacks, monitoring performance, and troubleshooting issues. This role demanded a strong blend of technical proficiency, project planning, and team leadership to deliver high-quality solutions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="/quelinka.jpg"
                  alt="Quelinka company logo"
                  className="w-12 h-12 rounded object-cover"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Lead Full-Stack Web Developer</h4>
                  <p className="text-gray-600">Quelinka • Full-time</p>
                  <p className="text-gray-500 text-sm">Mar 2019 - Feb 2020 • 1 year</p>
                  <p className="text-gray-500 text-sm">Madrid, Spain</p>
                  <p className="text-gray-700 leading-relaxed text-sm mt-3">As Head of the Development Department, I oversaw the team and ensured the successful delivery of complex projects for major clients. I managed and mentored the team, fostering collaboration, resolving technical challenges, and translating technical requirements into clear project proposals. I led large-scale projects using Laravel 5.x-6, Symfony 3.x, Angular 8, and Ionic 4, defining scalable and maintainable software architectures. I implemented innovative solutions, including AR.js and Three.js for Augmented Reality, and managed deployments on Google Cloud Platform and AWS. Actively involved in development, I maintained technical expertise while ensuring efficient team organization and high-quality outcomes. This role required a blend of technical proficiency, cloud computing expertise, and strong leadership.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="/gobalo.jpg"
                  alt="Gobalo company logo"
                  className="w-12 h-12 rounded object-cover"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Senior Full-Stack Web Developer</h4>
                  <p className="text-gray-600">Góbalo • Full-time</p>
                  <p className="text-gray-500 text-sm">Mar 2018 - Mar 2019 • 1 year 1 month</p>
                  <p className="text-gray-500 text-sm">Madrid, Spain</p>
                  <p className="text-gray-700 leading-relaxed text-sm mt-3">As a member of the Development Team, I contributed to projects for Google and other major clients, leveraging diverse technologies and roles. I developed scalable web applications using Django 1.x, Laravel 5.x, and Symfony 2.x, and created responsive front-end solutions with Angular 2+ and Vue.js 2+. I managed MySQL databases, integrated with Google Cloud Platform for cloud-based deployments, and utilized Git for version control. I conducted project analyses, proposed technological improvements, engaged with clients, and led framework migrations to modern systems. This role required expertise in full-stack development, cloud computing, and client collaboration to deliver complex, high-impact solutions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="/zasylogic.jpg"
                  alt="Zasylogic company logo"
                  className="w-12 h-12 rounded object-cover"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Full-Stack Web Developer</h4>
                  <p className="text-gray-600">Zasylogic • Full-time</p>
                  <p className="text-gray-500 text-sm">Apr 2017 - Feb 2018 • 11 months</p>
                  <p className="text-gray-500 text-sm">Madrid, Spain</p>
                  <p className="text-gray-700 leading-relaxed text-sm mt-3">Developed a robust application to manage distributed services across client nodes through a centralized web interface. Using ASP.NET Core 2.0, I built a scalable, high-performance backend and created an interactive, responsive UI with Webix Jet 1. Couchbase 4 was integrated for real-time data synchronization across nodes, ensuring reliability and consistency. The application enabled real-time monitoring, configuration, and control of distributed services, with features like service settings, logs, and alerts accessible via a user-friendly web interface. This solution streamlined service management, enhanced operational efficiency, and reduced downtime for distributed networks.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="/avanzo.jpg"
                  alt="Avanzo company logo"
                  className="w-12 h-12 rounded object-cover"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Junior Full-Stack Web Developer</h4>
                  <p className="text-gray-600">AVANZO • Full-time</p>
                  <p className="text-gray-500 text-sm">Jun 2015 - Mar 2017 • 1 year 10 months</p>
                  <p className="text-gray-500 text-sm">Madrid, Spain</p>
                  <p className="text-gray-700 leading-relaxed text-sm mt-3">Led the development of interactive and scalable learning environments using cutting-edge technologies. I built maintainable learning management systems (LMS) with the Conecto PHP and Yii frameworks, utilizing an MVC architecture for organized code. User-friendly interfaces were designed with HTML5, CSS3, and Bootstrap, while dynamic functionality was added with JavaScript, jQuery, and jQuery UI. MySQL databases were integrated to manage course data, user progress, and analytics securely. Additionally, I developed cross-platform mobile applications using Ionic and AngularJS, incorporating features like offline access, real-time notifications, and interactive quizzes. This role demanded expertise in full-stack and mobile development to create seamless, engaging learning solutions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="/exceltic.webp"
                  alt="Exceltic company logo"
                  className="w-12 h-12 rounded object-cover"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Junior Full-Stack Web Developer</h4>
                  <p className="text-gray-600">Exceltic • Intership</p>
                  <p className="text-gray-500 text-sm">Apr 2015 - Jun 2015 • 3 months</p>
                  <p className="text-gray-500 text-sm">Madrid, Spain</p>
                  <p className="text-gray-700 leading-relaxed text-sm mt-3">Developed a sophisticated questionnaire application using C#, ASP.NET Web Forms, and Microsoft SQL. I designed interactive questionnaires to capture detailed user responses, implemented dynamic and user-friendly web forms with ASP.NET, and crafted complex SQL queries for efficient data storage, retrieval, and analysis. The application was optimized for scalability, performance, and security, with rigorous testing conducted to ensure stability and reliability. This role required expertise in front-end and back-end development, seamlessly integrating technologies to deliver an intuitive and robust user experience.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="/ie_business_school.jpg"
                  alt="IE Business School company logo"
                  className="w-12 h-12 rounded object-cover"
                  width="48"
                  height="48"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">IT Support Specialist</h4>
                  <p className="text-gray-600">IE Business School • Intership</p>
                  <p className="text-gray-500 text-sm">Apr 2013 - Jun 2013 • 3 months</p>
                  <p className="text-gray-500 text-sm">Madrid, Spain</p>
                  <p className="text-gray-700 leading-relaxed text-sm mt-3">Provided technical support for Windows 7, Windows Server 2003, and macOS systems, ensuring seamless functionality for educators and students. Key responsibilities included managing Active Directory and DNS configurations, resolving macOS-specific issues, optimizing streaming services and network performance, and configuring and troubleshooting printers in diverse network setups. I addressed technical challenges across multiple platforms, demonstrating the ability to prioritize tasks, deliver timely solutions, and ensure system reliability and user satisfaction.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="bg-white rounded-lg shadow-sm p-6" aria-labelledby="education-heading">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-[#1064c4]" aria-hidden="true" />
              <h3 id="education-heading" className="text-xl font-semibold text-gray-900">Education</h3>
            </div>
            <div className="flex gap-4">
              <img
                src="/claradelrey.webp"
                alt="I.E.S. Clara del Rey logo"
                className="w-12 h-12 rounded object-cover"
                width="48"
                height="48"
                loading="lazy"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Higher Technician in Cross-Platform Application Development</h4>
                <p className="text-gray-600">I.E.S. Clara del Rey</p>
                <p className="text-gray-600">Madrid, Spain</p>
                <p className="text-gray-500 text-sm">2013 - 2015</p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <img
                src="/claradelrey.webp"
                alt="I.E.S. Clara del Rey logo"
                className="w-12 h-12 rounded object-cover"
                width="48"
                height="48"
                loading="lazy"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Higher Technician in Networked Computer Systems Administration</h4>
                <p className="text-gray-600">I.E.S. Clara del Rey</p>
                <p className="text-gray-600">Madrid, Spain</p>
                <p className="text-gray-500 text-sm">2011 - 2013</p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <img
                src="/centro_didactico.png"
                alt="I.E.S. Clara del Rey logo"
                className="w-12 h-12 rounded object-cover"
                width="48"
                height="48"
                loading="lazy"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Technician in Computer Systems Operations</h4>
                <p className="text-gray-600">Centro Didactico</p>
                <p className="text-gray-600">Valladolid, Spain</p>
                <p className="text-gray-500 text-sm">2007 - 2009</p>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="bg-white rounded-lg shadow-sm p-6" aria-labelledby="certifications-heading">
            <div className="flex items-center gap-2 mb-4">
              <LibraryBig className="w-5 h-5 text-[#1064c4]" aria-hidden="true" />
              <h3 id="certifications-heading" className="text-xl font-semibold text-gray-900">Certifications</h3>
            </div>
            <div className="flex gap-4 mt-4">
              <img
                src="/microsoft.png"
                alt="Microsoft logo"
                className="w-12 h-12 rounded object-cover"
                width="48"
                height="48"
                loading="lazy"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Career Essentials in Generative AI</h4>
                <p className="text-gray-600">Microsoft</p>
                <p className="text-gray-500 text-sm">2024</p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <img
                src="/google.jpg"
                alt="Google logo"
                className="w-12 h-12 rounded object-cover"
                width="48"
                height="48"
                loading="lazy"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Introduction to Generative AI</h4>
                <p className="text-gray-600">Google</p>
                <p className="text-gray-500 text-sm">2024</p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <img
                src="/docker.png"
                alt="Docker logo"
                className="w-12 h-12 rounded object-cover"
                width="48"
                height="48"
                loading="lazy"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Docker</h4>
                <p className="text-gray-600">Imagina formación</p>
                <p className="text-gray-500 text-sm">2023</p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <img
                src="/gcp.png"
                alt="Google Cloud Platform logo"
                className="w-12 h-12 rounded object-cover"
                width="48"
                height="48"
                loading="lazy"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Professional Cloud Architect</h4>
                <p className="text-gray-600">Google</p>
                <p className="text-gray-500 text-sm">2018</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          {/* <section className="bg-white rounded-lg shadow-sm p-6" aria-labelledby="projects-heading">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-[#1064c4]" aria-hidden="true" />
              <h3 id="projects-heading" className="text-xl font-semibold text-gray-900">Featured Projects</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">E-commerce Platform</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Built a scalable e-commerce platform using React, Node.js, and MongoDB.
                  Implemented real-time inventory management and payment processing.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#1064c4] mt-3 hover:text-[#0d4fa0]"
                  aria-label="View E-commerce Platform project"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-1" aria-hidden="true" />
                </a>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Analytics Dashboard</h4>
                <p className="text-gray-600 text-sm mt-2">
                  Developed a real-time analytics dashboard using React, D3.js, and WebSocket.
                  Processes over 1M data points daily.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[#1064c4] mt-3 hover:text-[#0d4fa0]"
                  aria-label="View Analytics Dashboard project"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-1" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section> */}

        <div className="text-center text-gray-600 text-sm">
          The logos displayed are the property of their respective owners and are used solely to showcase my work, with no implied endorsement or affiliation.
        </div>

        </div>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} Yoshua.pro | All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;