import { BookOpen, UploadCloud, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-glass bg-background/70 border-b border-border shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <BookOpen className="h-8 w-8 text-primary group-hover:text-primary-light transition-colors duration-300" />
              <div className="absolute inset-0 bg-primary opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <span className="ml-3 text-2xl font-bold tracking-tight text-text group-hover:text-primary transition-colors duration-300">
              OnlyChinese
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="relative text-text-secondary hover:text-primary transition-colors duration-300 font-medium group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative text-text-secondary hover:text-primary transition-colors duration-300 font-medium group">
              Browse
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative text-text-secondary hover:text-primary transition-colors duration-300 font-medium group">
              Social
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="relative text-text-secondary hover:text-primary transition-colors duration-300 font-medium group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden sm:flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-background hover:shadow-glow-sm transition-all duration-300 font-semibold">
              <UploadCloud size={18} />
              <span>Share Book</span>
            </button>
            <button className="flex items-center justify-center w-11 h-11 border-2 border-border-light rounded-xl hover:border-primary hover:bg-surface-elevated hover:shadow-glow-sm transition-all duration-300">
              <User size={20} className="text-text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
