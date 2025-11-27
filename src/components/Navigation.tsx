import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo Section */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 transition-opacity hover:opacity-80 flex-shrink-0"
        >
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary md:text-2xl">
              StudySprint
            </span>
            <span className="text-xs text-muted-foreground hidden md:block">
              Unlock Your Potential
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Chip Tabs Style */}
        <div className="hidden md:flex md:items-center md:space-x-2">
          <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(link.to)
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive(link.to) && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", duration: 0.5 }}
                    className="absolute inset-0 z-0 bg-primary rounded-md"
                  />
                )}
              </Link>
            ))}
          </div>
          <Button variant="default" asChild className="ml-4">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t md:hidden bg-card/95 backdrop-blur">
          <div className="container space-y-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 px-4 text-base font-medium transition-colors rounded-lg relative ${
                  isActive(link.to)
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-accent/50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.span
                    layoutId="mobile-nav-pill"
                    transition={{ type: "spring", duration: 0.5 }}
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-md"
                  />
                )}
              </Link>
            ))}
            <div className="pt-2">
              <Button variant="default" asChild className="w-full">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;