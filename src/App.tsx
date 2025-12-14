import { useState } from "react";
import {
  Home,
  Code2,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Mail,
  Menu as MenuIcon,
  X,
} from "lucide-react";

import HomePage from "./pages/Home";
import SkillsPage from "./pages/Skills";
import ExperiencePage from "./pages/Experience";
import EducationPage from "./pages/Education";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: "home", text: "Home", icon: <Home size={18} /> },
    { id: "skills", text: "Skills", icon: <Code2 size={18} /> },
    { id: "experience", text: "Experience", icon: <Briefcase size={18} /> },
    { id: "education", text: "Education", icon: <GraduationCap size={18} /> },
    { id: "projects", text: "Projects", icon: <FolderGit2 size={18} /> },
    { id: "contact", text: "Contact", icon: <Mail size={18} /> },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "skills":
        return <SkillsPage />;
      case "experience":
        return <ExperiencePage />;
      case "education":
        return <EducationPage />;
      case "projects":
        return <ProjectsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        {/* NAVBAR */}
        <nav className="flex justify-center pt-8 pb-0 sticky top-0 z-50">
          {/* Desktop Nav - 640px va undan kattada */}
          <div className="hidden sm:flex items-center gap-6 px-6 py-3 rounded-full border-2 border-cyan-500/50 bg-slate-900/90 backdrop-blur-md shadow-lg">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                icon={item.icon}
                text={item.text}
                isActive={currentPage === item.id}
                onClick={() => handleNavClick(item.id)}
              />
            ))}
          </div>

          {/* Mobile Hamburger Button - O'ng yuqorida */}
          <button
            onClick={toggleMobileMenu}
            className="sm:hidden fixed top-10 right-6 z-50 p-3 rounded-full bg-slate-900/90 backdrop-blur-md border border-cyan-500/50"
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-cyan-400" />
            ) : (
              <MenuIcon size={28} className="text-cyan-400" />
            )}
          </button>
        </nav>

        {/* Mobile Menu - CHAP TOMONDAN chiqadi (XB logodan pastda boshlanadi) */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 sm:hidden ${
            isMobileMenuOpen
              ? "bg-black/60 backdrop-blur-sm pointer-events-auto"
              : "pointer-events-none"
          }`}
        >
          {/* Fon bosilganda yopiladi */}
          <div className="absolute inset-0" onClick={toggleMobileMenu} />

          {/* Menyu paneli - chapdan sirpanib chiqadi */}
          <div
            className={`fixed top-0 left-0 h-full w-80 max-w-full bg-slate-900/98 border-r border-cyan-500/40 shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Menyu ichida qo'shimcha logo kerak emas, chunki tashqarida bor */}
            <div className="flex flex-col items-start gap-4 pt-24 px-10">
              {" "}
              {/* pt-24 logo joyini hisobga olgan */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-4 w-full py-4 px-6 rounded-lg transition-all text-left ${
                    currentPage === item.id
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/50"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                  }`}
                >
                  {item.icon}
                  <span className="text-lg font-medium">{item.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asosiy kontent - logo va hamburger joyini hisobga olgan holda */}
        <div className="pt-20">{renderPage()}</div>
      </div>
    </div>
  );
}

function NavItem({
  icon,
  text,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
        isActive
          ? "text-cyan-400 bg-cyan-500/20 shadow-md"
          : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10"
      }`}
    >
      <span className="text-cyan-400">{icon}</span>
      <span>{text}</span>
    </button>
  );
}

export default App;
