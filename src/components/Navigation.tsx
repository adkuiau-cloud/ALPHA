import { Button } from '@/components/ui/button';
import { Car, MessageCircle, Menu } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-accent" />
            <div>
              <div className="text-xl font-bold text-foreground">GARAN MOTORS</div>
              <div className="text-xs text-muted-foreground">Bush Motors Excellence</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="#inventory" className="text-foreground hover:text-accent transition-colors">
              Inventory
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button variant="automotive" size="sm">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-accent transition-colors">
                Home
              </a>
              <a href="#inventory" className="text-foreground hover:text-accent transition-colors">
                Inventory
              </a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </a>
              <Button variant="automotive" size="sm" className="w-fit">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;