import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import NavLink from './NavLink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'CerviAI Platform', to: '/cerviai-platform' },
    { name: 'Products', to: '/products' },
    { name: 'Impact', to: '/impact' },
    { name: 'Team', to: '/team' },
    { name: 'News', to: '/news' },
    { name: 'Partner/Contact', to: '/partner-contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/1eb4c2e4-4529-4152-86cd-3815897a9374.png" 
            alt="Vyuhaa Med Data Logo" 
            className="h-20 md:h-24"
          />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name}
              to={link.to}
              className="px-2"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 hover:text-blue-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full bg-white md:hidden transform transition-transform duration-300 ease-in-out z-50",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <img 
            src="/lovable-uploads/1eb4c2e4-4529-4152-86cd-3815897a9374.png" 
            alt="Vyuhaa Med Data Logo" 
            className="h-16"
          />
          <button 
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name}
              to={link.to}
              className="py-2 text-lg"
              onClick={toggleMenu}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
