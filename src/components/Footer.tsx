import { Link } from "react-router-dom";
import { Phone, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <img src={logo} alt="Cy Cozinha Afetiva" className="h-16 w-auto mb-4" />
            <p className="text-sm text-muted-foreground max-w-md">
              Transformando cada refeição em momentos inesquecíveis através de uma
              cozinha feita com afeto e dedicação.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/orcamento"
                  className="text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5511982229902"
                  className="flex items-center text-sm text-muted-foreground hover:text-primary smooth-transition"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (11) 98222-9902
                </a>
              </li>
             
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/cy_cozinhaafetiva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary smooth-transition"
                aria-label="Instagram"
              > 
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/cycozinhaafetiva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary smooth-transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cy Cozinha Afetiva. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;