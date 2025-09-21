
const EducationItems = [
    {
        degree: "Diploma in Advanced Computing and Big Data (Master 2)",
        institution: "Université Côte d'Azur - France",
        year: "2024",
        details: "Focused on big data technologies, data analysis, and system integration techniques, completing a thesis on scalable data processing solutions."
    },
    {
        degree: "Diploma in Software Engineering (MIAGE)",
        institution: "Ecole Marocaine des Sciences de l'Ingenieur - Casablanca",
        year: "2021 - 2024",
        details: "Specialized in software development, project management, and information systems, with hands-on experience in various programming languages and frameworks."
    },
    {
        degree: "Class Preparatory for Engineering Schools",
        institution: "Ecole Marocaine des Sciences de l'Ingenieur - Casablanca",
        year: "2019 - 2021",
        details: "Completed rigorous coursework in mathematics, physics, and engineering principles to prepare for entrance into top engineering schools."
    },
    {
        degree: "Bacaloreate in Science Physics",
        institution: "Ecole El Yassamine - Berrechid",
        year: "2018 - 2019",
        details: "Graduated with honors, focusing on advanced physics and mathematics courses."
    },
]

const EducationPage = () => {
    return (
        <section
            id="education"
            className="py-20 px-6 lg:px-20 bg-gradient-to-tr from-indigo-100 via-white to-indigo-300"
        >
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold text-indigo-900 mb-4">
                    My Education
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Highlighting my academic journey in a professional timeline.
                </p>
            </div>

            <ol className="relative flex flex-col md:flex-row gap-8 md:before:absolute md:before:top-2.5 md:before:left-0 md:before:h-0.5 md:before:w-full md:before:rounded-full md:before:bg-gray-200">
                {EducationItems.map((item, index) => (
                    <li key={index} className="relative md:-mt-1.5 flex-1">
                        <span className="block w-3 h-3 rounded-full bg-indigo-600 mx-auto md:mx-0"></span>

                        <div className="mt-4 text-center md:text-left">
                            <time className="text-xs font-medium text-gray-700">{item.year}</time>
                            <h3 className="text-lg font-bold text-gray-900 mt-1">{item.degree}</h3>
                            <span className="text-indigo-700 font-medium">{item.institution}</span>
                            <p className="mt-1 text-sm text-gray-600">{item.details}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default EducationPage;
