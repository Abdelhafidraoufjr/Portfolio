import { Briefcase, GraduationCap, Code } from "lucide-react";
import imageprofile from '../assets/profile.jpg';

const AboutPage = () => {
  return (
    <section id="about" className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20 px-6 lg:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-indigo-900 mb-4">
          About Me
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Passionate about technology and innovation, I am a dedicated software engineer committed to delivering high-quality solutions and continuous learning.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="flex justify-center">
          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500">
            <img
              src={imageprofile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-indigo-700 mb-6">
            Qui suis-je ?
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Je suis <span className="font-semibold text-indigo-600">ingénieur logiciel</span> diplômé de l’
            <span className="font-semibold"> École Marocaine des Sciences de l’Ingénieur (EMSI)</span>, 
            option MIAGE. Passionné par le développement, l’innovation et la gestion de projets, 
            je combine compétences techniques et sens du détail.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <GraduationCap className="text-indigo-600 w-6 h-6" />
              </div>
              <p className="text-gray-800 text-base">
                Master 2 en Informatique – Université Côte d’Azur
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Briefcase className="text-indigo-600 w-6 h-6" />
              </div>
              <p className="text-gray-800 text-base">
                Expérience en gestion de projets et développement logiciel
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Code className="text-indigo-600 w-6 h-6" />
              </div>
              <p className="text-gray-800 text-base">
                Maîtrise des technologies modernes et frameworks innovants
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
