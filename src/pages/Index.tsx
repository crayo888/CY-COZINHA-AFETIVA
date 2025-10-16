import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero */}
        <Hero />

        {/* Services */}
        <ServicesSection />

        {/* About Preview */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Cozinha Feita com Afeto
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A Cy Cozinha Afetiva nasceu do desejo de transformar a alimentação em
                uma experiência única e acolhedora. Acreditamos que a comida vai muito
                além do sabor - ela carrega memórias, afeto e cuidado. Cada prato é
                preparado com dedicação para tornar seus momentos ainda mais especiais.
              </p>
              <Button size="lg" variant="outline" asChild>
                <Link to="/sobre">Conheça Nossa História</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Sparkles className="h-12 w-12 mx-auto mb-6" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Pronto para uma Experiência Única?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Entre em contato e descubra como podemos tornar suas refeições ainda
                mais especiais com nosso toque de carinho e profissionalismo.
              </p>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link to="/orcamento">Solicitar Orçamento Agora</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;