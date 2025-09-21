import HeroSection from "./homepage";
import Aboutpage from "./aboutpage";
import SkillsPage from "./skillspage";
import ProjetPage from "./projetpage";
import ExperiencePage from "./experiencepage";
import EducationPage from "./educationpage";


export default function HomePages() {
    return (
        <div className="home-page">
            <HeroSection />
            <Aboutpage />
            <EducationPage />
            <SkillsPage />
            <ProjetPage />
            <ExperiencePage />
        </div>
    );
}
