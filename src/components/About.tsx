import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Angel Tapia" className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4 leading-relaxed">
              Hi, I'm Angel Tapia, a passionate Full Stack Developer with expertise in building web applications using modern technologies. I love creating elegant solutions to complex problems and am always eager to learn new skills.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              With a strong foundation in both front-end and back-end development, I strive to create seamless user experiences while ensuring robust and scalable architectures.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;