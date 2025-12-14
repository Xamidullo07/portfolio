import { useState } from 'react';
import { Home, Code2, Briefcase, GraduationCap, FolderGit2, Mail } from 'lucide-react';
import HomePage from './pages/Home';
import SkillsPage from './pages/Skills';
import ExperiencePage from './pages/Experience';
import EducationPage from './pages/Education';
import ProjectsPage from './pages/Projects';
import ContactPage from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'skills':
        return <SkillsPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'education':
        return <EducationPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10">
        <nav className="flex justify-center pt-8 pb-4 sticky top-0 z-50">
          <div className="flex items-center gap-8 px-8 py-4 rounded-full border-2 border-cyan-500/50 bg-slate-900/90 backdrop-blur-md">
            <NavItem
              icon={<Home size={18} />}
              text="Home"
              isActive={currentPage === 'home'}
              onClick={() => setCurrentPage('home')}
            />
            <NavItem
              icon={<Code2 size={18} />}
              text="Skills"
              isActive={currentPage === 'skills'}
              onClick={() => setCurrentPage('skills')}
            />
            <NavItem
              icon={<Briefcase size={18} />}
              text="Experience"
              isActive={currentPage === 'experience'}
              onClick={() => setCurrentPage('experience')}
            />
            <NavItem
              icon={<GraduationCap size={18} />}
              text="Education"
              isActive={currentPage === 'education'}
              onClick={() => setCurrentPage('education')}
            />
            <NavItem
              icon={<FolderGit2 size={18} />}
              text="Projects"
              isActive={currentPage === 'projects'}
              onClick={() => setCurrentPage('projects')}
            />
            <NavItem
              icon={<Mail size={18} />}
              text="Contact"
              isActive={currentPage === 'contact'}
              onClick={() => setCurrentPage('contact')}
            />
          </div>
        </nav>

        {renderPage()}
      </div>
    </div>
  );
}

function NavItem({
  icon,
  text,
  isActive,
  onClick
}: {
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 transition-colors cursor-pointer ${
        isActive
          ? 'text-cyan-400'
          : 'text-gray-300 hover:text-cyan-400'
      }`}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </button>
  );
}

export default App;
