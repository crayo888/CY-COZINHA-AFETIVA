import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre" },
    { to: "/servicos", label: "Serviços" },
    { to: "/orcamento", label: "Orçamento" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start md:justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center mb-3 md:mb-0">
          <div className="flex justify-center">
            <img src={logo} alt="Cy Cozinha Afetiva" className="h-20 w-auto" /></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium smooth-transition ${isActive(link.to)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="smooth-transition"
            >

            </Button>
            <Button variant="default" size="sm" asChild>
              <Link to="/orcamento">Solicitar Orçamento</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex justify-start md:hidden">
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button> </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium smooth-transition ${isActive(link.to)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="justify-start"
                >
                
                </Button>
                <Button variant="default" size="sm" asChild>
                  <Link to="/orcamento">Solicitar Orçamento</Link>
                </Button>

               
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;