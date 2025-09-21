const ExperenceItems = [
  {
    title: "Full Stack Developer",
    subject:"Development of Web Applications using the MERN Stack for Receipt Management, application for the Ministry of Justice",
    company: "Ministry of Justice - Morocco",
    duration: "jan 2025 - feb 2025",
    months: "2 months",
    contrat: "Freelance",
    location: "Remote",
    description:"Currently engaged in the development of a web application for managing receipts using the MERN stack (MongoDB, Express.js, React.js, Node.js). Responsible for designing and implementing RESTful APIs and contributing to front-end development to enhance user interfaces.", 
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Docker"],
    achievements: [
      "Successfully initiated the development of a full-stack web application for receipt management, focusing on user experience and efficient data handling.",
        "Implemented responsive UI components using React.js, ensuring accessibility across various devices.",
        "Designed and developed RESTful APIs with Node.js and Express, facilitating seamless communication between the front-end and back-end.",
        "Collaborated with stakeholders to gather requirements and translate them into technical specifications, ensuring the application meets user needs.",
    ],
  },{
    title: "Software Engineer And Api Tester",
    subject:
      "A Full-stack Application for Automated Testing and Monitoring of RESTful APIs",
    company: "Societe Generale African Business Service (SGABS)",
    duration: "Feb 2024 - Aug 2024",
    months: "7 months",
    contrat: "Stage",
    location: "Marina-Casablanca, Morocco",
    description:
      "Contributed to the development and maintenance of internal tools and applications using React, Node.js, and RESTful APIs. Collaborated with cross-functional teams to design and implement new features, improving user experience and functionality.",
    technologies: [
      "Java Spring Boot",
      "React.js",
      "PostgresSQl",
      "Docket",
      "Jenkins",
      "Grafana",
      "Prometheus",
      "Vagrant",
      "Linux",
    ],
    testing: ["Postman", "Vegeta Loading Testing", "Selenium", "Junit"],
    achievements: [
      "Developed and deployed a customer management system that improved client data handling efficiency by 30%.",
      "Implemented automated testing protocols using Postman and Jest, reducing bug incidence by 25%.",
      "Optimized database queries, resulting in a 20% reduction in load times for key applications.",
      "Collaborated in an Agile environment, participating in daily stand-ups, sprint planning, and retrospectives to enhance team productivity.",
    ],
  },
  {
    title: "Full Stack Developer",
    subject:
      "Development of Web Applications using the MERN Stack For Doctor Appointment Booking System",
    company: "6 Solutions Consulting",
    duration: "Jul 2023 - Sep 2023",
    months: "3 months",
    contrat: "Stage",
    location: "Remote",
    description:
      "Worked on the development of web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Assisted in the design and implementation of RESTful APIs and contributed to front-end development to enhance user interfaces.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Docker"],
    achievements: [
      "Developed a full-stack web application for booking doctor appointments, improving user experience and appointment management.",
      "Implemented responsive UI components using React.js, enhancing the application's accessibility across devices.",
      "Designed and developed RESTful APIs with Node.js and Express, facilitating seamless communication between the front-end and back-end.",
      "Collaborated with a team of developers in an Agile environment, participating in code reviews and sprint planning sessions.",
    ],
  },
  {
    title: "Observation And Training Internship",
    subject: "Introduction to Devops Engineer and IT Practices",
    company: "Attijari It Africa",
    duration: "Jul 2022 - Aug 2022",
    months: "2 months",
    contrat: "Stage",
    location: "Casablanca, Morocco",
    description:
      "Gained practical experience in IT operations and DevOps practices. Observed and assisted in the implementation of CI/CD pipelines, infrastructure management, and monitoring solutions.",
    technologies: [
      "Docker",
      "Jenkins",
      "Grafana",
      "Prometheus",
      "Nexus Repository",
      "Putty",
      "Linux",
      "Windows Server",
      "VMware",
      "Hyper-V",
    ],
    achievements: [
      "Assisted in setting up and configuring CI/CD pipelines using Jenkins, improving deployment efficiency.",
      "Gained hands-on experience with containerization using Docker, enhancing application deployment processes.",
      "Participated in monitoring and logging activities using Grafana and Prometheus, contributing to improved system reliability.",
      "Learned best practices in IT operations and DevOps methodologies, preparing for a career in software development and IT management.",
    ],
  },
];

const ExperiencePage = () => {
  return (
    <section id="experience" className="bg-white py-25 px-6 lg:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-indigo-900 mb-4">
          My Experience
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A summary of my professional journey, highlighting key roles and
          achievements in the tech industry.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <ol className="relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200">
          {ExperenceItems.map((item, index) => (
            <li key={index} className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
              <div
                className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last"
              >
                {/* Point rond */}
                <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

                {/* Contenu */}
                <div className="">
                  <time className="text-x font-medium text-indigo-700">
                    {item.duration} • {item.months}
                  </time>

                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>

                  <p className="text-sm text-gray-700 font-semibold">
                    {item.company} — {item.location}
                  </p>

                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>

                  {/* Technologies */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-indigo-100 text-indigo-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                    {item.achievements.map((ach, j) => (
                      <li key={j}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div aria-hidden="true"></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperiencePage;



