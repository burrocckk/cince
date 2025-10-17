import { BookOpen, UploadCloud, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="ml-3 text-2xl font-bold tracking-tight text-text">OnlyChinese</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">Home</a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">Browse</a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">Social</a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hidden sm:flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-background transition-all duration-300">
              <UploadCloud size={18} />
              <span>Share Book</span>
            </button>
            <button className="flex items-center justify-center p-2 border border-border rounded-lg hover:bg-surface">
              <User size={20} className="text-text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
