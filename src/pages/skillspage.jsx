import { Code, Database, Server, Smartphone } from "lucide-react";

import Reactjs from '../assets/physics.png';
import Tailwindcss from '../assets/tailwindcss.png';
import Vite from '../assets/vite.svg';
import Js from '../assets/js.png';
import Nextjs from '../assets/next.png';
import Redux from '../assets/redux.png';
import TypeScript from '../assets/typescript.png';
import Figma from '../assets/figma.png';
import Nodejs from '../assets/node.png';
import Expressjs from '../assets/express.png';
import Restful from '../assets/rest.jpg';
import Graphql from '../assets/grapheql.png';
import JsonWebToken from '../assets/jwt.png';
import Postman from '../assets/postman.png';
import Swagger from '../assets/swagger.png';
import Sql from '../assets/swl.png';
import NoSql from '../assets/nosql.png';
import MongoDB from '../assets/mongoo.png';
import PostgreSQL from '../assets/postgres.png';
import MySQL from '../assets/mysql.png';
import aws from '../assets/aws.svg';
import azure from '../assets/azure.png';
import gcloud from '../assets/gcp.png';
import docker from '../assets/docker.png';
import jenkins from '../assets/jenkkins.png';
import grafana from '../assets/grafana.webp';
import prometheus from '../assets/prometheuse.png';
import terraform from '../assets/terra.png';
import vercel from '../assets/vercel.png';


const skills = [
    {
        name: "Frontend Development",
        description: "I can build responsive and interactive user interfaces using modern tools and frameworks.",
        level: "Intermediate",
        experience: "Hands-on",
        updated: "2025",
        technologies: [
            { name: "React", icon: Reactjs, color: "text-blue-500" },
            { name: "Next.js", icon: Nextjs, color: "text-black" },
            { name: "Tailwind CSS", icon: Tailwindcss, color: "text-teal-500" },
            { name: "Vite", icon: Vite, color: "text-purple-500" },
            { name: "JavaScript", icon: Js, color: "text-yellow-500" },
            { name: "TypeScript", icon: TypeScript, color: "text-blue-700" },
            { name: "Redux", icon: Redux, color: "text-purple-600" },
            { name: "Figma", icon: Figma, color: "text-pink-500" },
        ],
    },
    {
        name: "Backend Development",
        description: "I have experience in building and managing server-side applications and databases.",
        level: "Professional",
        experience: "Hands-on",
        updated: "2025",
        technologies: [
            { name: "Node.js", icon: Nodejs, color: "text-green-600" },
            { name: "Express.js", icon: Expressjs, color: "text-gray-800" },
            { name: "RESTful APIs", icon: Restful, color: "text-blue-400" },
            { name: "GraphQL", icon: Graphql, color: "text-pink-600" },
            { name: "JSON Web Tokens", icon: JsonWebToken, color: "text-yellow-600" },
            { name: "Postman", icon: Postman, color: "text-orange-500" },
            { name: "Swagger", icon: Swagger, color: "text-blue-500" },
        ],
    },
    {
        name: "Database Management",
        description: "I can design, implement, and manage databases to ensure data integrity and performance.",
        level: "Professional",
        experience: "Hands-on",
        updated: "2025",
        technologies: [
            { name: "SQL", icon: Sql, color: "text-blue-700" },
            { name: "NoSQL", icon: NoSql, color: "text-yellow-700" },
            { name: "MongoDB", icon: MongoDB, color: "text-green-500" },
            { name: "PostgreSQL", icon: PostgreSQL, color: "text-blue-800" },
            { name: "MySQL", icon: MySQL, color: "text-blue-600" },
        ],
    },
    {
        name: "Devops & Cloud",
        description: "I have knowledge of deploying and managing applications in cloud environments.",
        level: "Beginner",
        experience: "Learning",
        updated: "2025",
        technologies: [
            { name: "AWS", icon: aws, color: "text-orange-400" },
            { name: "Azure", icon: azure, color: "text-blue-600" },
            { name: "Google Cloud", icon: gcloud, color: "text-blue-400" },
            { name: "Docker", icon: docker, color: "text-blue-500" },
            { name: "Jenkins", icon: jenkins, color: "text-red-600" },
            { name: "Grafana", icon: grafana, color: "text-orange-600" },
            { name: "Prometheus", icon: prometheus, color: "text-orange-500" },
            { name: "Terraform", icon: terraform, color: "text-green-600" },
            { name: "Vercel", icon: vercel, color: "text-black" },
        ],

    }
];

const SkillsPage = () => {
    return (
        <section id="skills" className="bg-white py-25 px-6 lg:px-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-indigo-900 mb-4">
                    My Skills
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Here are some of the modern technologies and tools I excel in for creating professional front-end experiences:
                </p>
            </div>
            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        {/* Titre */}
                        <h3 className="text-2xl font-semibold text-indigo-800 mb-2">{skill.name}</h3>
                        <div className="w-12 h-1 bg-indigo-400 rounded-full mb-4"></div>

                        {/* Description */}
                        <p className="text-gray-700 mb-4">{skill.description}</p>

                        {/* Infos supplémentaires */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium">
                                Experience: {skill.experience}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                                Level: {skill.level}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
                                Updated: {skill.updated}
                            </span>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-3">
                            {skill.technologies.map((tech) => (
                                <div
                                    key={tech.name}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-opacity-20 ${tech.color} border border-opacity-20 border-gray-300 hover:scale-105 transition-transform`}
                                >
                                    <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                                    <span className="text-sm font-medium text-gray-800">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsPage;
