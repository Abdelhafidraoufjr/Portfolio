import backgroundImage from '../assets/back.jpg';
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
    return (
        <div id="home" className="relative hero-section bg-gray-900 text-white p-4">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            ></div>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[90vh] px-6">
                <h2 className="text-xs md:text-sm font-medium mb-2 rounded-lg px-2 py-1 bg-indigo-700/50 animate__animated animate__fadeInDown">
                    Software Engineer | Fullstack Developer
                </h2>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate__animated animate__slideInDown">
                    Hi, I'm <span className="text-indigo-500">RAOUF Abdelhafid</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-3xl leading-relaxed animate__animated animate__zoomIn">
                    Passionate about building scalable web applications with modern technologies.
                    Experienced in <span className="text-indigo-400">React</span>, <span className="text-indigo-400">Express.js</span>, <span className="text-indigo-400">MongoDB</span>, and <span className="text-indigo-400">REST APIs</span>.
                    I transform ideas into efficient, user-friendly digital solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#about" className="flex flex-col items-center text-white">
                    <ArrowDown className="w-6 h-6 mb-1 text-indigo-500" />
                    <span className="text-sm">About Me</span>
                </a>
            </div>
        </div>
    );
}
