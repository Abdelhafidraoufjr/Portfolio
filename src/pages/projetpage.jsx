import { Code, Database, Server, Smartphone } from "lucide-react";
import carsRental from '../assets/learning-proj/cars-projet.png';
import eLearning from '../assets/learning-proj/elearning.png';
import devopsDashboard from '../assets/learning-proj/devops.png';

const ProjetItems = [{
    title: "Cars Rental System",
    description: "A full-featured car rental platform with real-time booking, vehicle management, and secure payment integration. Includes user roles, admin dashboard, and automated notifications.",
    imageUrl: carsRental,
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "JWT","TailwindCSS"],
    githubLink: "https://github.com/abdelhafid/cars-rental-system",
    features: [
        "User authentication with JWT and OAuth",
        "Real-time car availability and booking",
        "Admin dashboard for fleet and user management",
        "Secure online payments with Stripe",
        "Email/SMS notifications for reservations",
        "Responsive design with TailwindCSS"
    ]
},{
    title: "E-learning Platform",
    description: "A comprehensive e-learning platform offering course management, video streaming, quizzes, and progress tracking. Features include user roles, admin controls, and interactive learning tools.",   
    imageUrl: eLearning,   
    technologies: ["Next.js", "Node.js", "Express", "PostgreSQL", "GraphQL","TailwindCSS"],
    githubLink: "https://github.com/abdelhafid/e-learning-platform",
    features: [
        "User roles: students, instructors, admins",
        "Course creation and management",
        "Video streaming and downloadable resources",
        "Quizzes and interactive assignments",
        "Progress tracking and analytics",  
        "Responsive design with TailwindCSS"
    ]
},{
    title: "Devops Dashboard System",
    description: "A DevOps dashboard system for monitoring and managing CI/CD pipelines, infrastructure, and application performance. Integrates with popular tools and provides real-time insights and alerts.",   
    imageUrl: devopsDashboard,
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Docker"],
    githubLink: "https://github.com/abdelhafid/devops-dashboard-system",
    features: [
        "Integration with CI/CD tools like Jenkins, GitLab CI",
        "Real-time monitoring of pipelines and deployments",
        "Infrastructure management and automation",
        "Application performance monitoring",
        "Customizable alerts and notifications",
        "Responsive design with TailwindCSS"
    ]
}
]

const ProjetPage = () => {
    return (
        <section id="projects" className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20 px-6 lg:px-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-indigo-900 mb-4">
                    My Projects
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Here are some of the projects I have worked on, showcasing my skills in various technologies and frameworks:
                </p>
            </div>
            <div className="space-y-20 max-w-6xl mx-auto">
                {ProjetItems.map((project, index) => (
                    <div key={index} className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-full lg:w-1/2">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-2xl font-bold text-indigo-700 mb-4">{project.title}</h3>
                            <p className="text-gray-700 text-lg mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <ul className="list-disc list-inside mb-4 text-gray-700">
                                {project.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>{feature}</li>
                                ))}
                            </ul>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjetPage;