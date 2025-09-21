import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  House,
  User,
  Wrench,
  FolderOpen,
  Briefcase,
  GraduationCap,
  Mail,
  FileText,
  Menu,
  X,
} from "lucide-react";

const NavigationBarItems = [
  { name: "Home", to: "home", icon: House },
  { name: "About", to: "about", icon: User },
  { name: "Education", to: "education", icon: GraduationCap },
  { name: "Skills", to: "skills", icon: Wrench },
  { name: "Projects", to: "projects", icon: FolderOpen },
  { name: "Experience", to: "experience", icon: Briefcase },
  { name: "Contact", to: "contact", icon: Mail },
  { name: "Resume", href: "https://www.mediafire.com/file/0r3d99d31mvq84b/CV_2025-09-01_Abdelhafid_RAOUF.pdf/file", icon: FileText },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white text-gray-700 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-lg font-bold text-indigo-600">RAOUF Abdelhafid</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-2">
          {NavigationBarItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            // External link (resume)
            if (item.href) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-200 transition-colors"
                >
                  <Icon className="mr-2 w-5 h-5" />
                  {item.name}
                </a>
              );
            }

            // Scroll link
            return (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70} // adjust for navbar height
                onClick={() => setActive(item.name)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-indigo-200 transition-colors ${isActive ? "bg-indigo-300" : ""
                  }`}
              >
                <Icon className="mr-2 w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 px-4 pb-4">
          {NavigationBarItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            if (item.href) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-200 transition-colors"
                >
                  <Icon className="mr-2 w-5 h-5" />
                  {item.name}
                </a>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => {
                  setActive(item.name);
                  setMenuOpen(false);
                }}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-indigo-200 transition-colors ${isActive ? "bg-indigo-300" : ""
                  }`}
              >
                <Icon className="mr-2 w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
