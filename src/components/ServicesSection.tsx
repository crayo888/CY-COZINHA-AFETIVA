import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Package, PartyPopper, ArrowRight } from "lucide-react";
import chefImage from "@/assets/chef-em-casa.jpg";
import marmitasImage from "@/assets/marmitas.jpg";
import eventosImage from "@/assets/eventos.jpg";

const services = [
  {
    title: "Chef em Casa",
    description:
      "Você já imaginou ter suas refeições do almoço e jantar prontas por até 15 dias, com sabor, qualidade e afeto em cada porção?",
    icon: ChefHat,
    image: chefImage,
    features: ["Você nos contrata", "Montamos sua lista de compras", "Preparamos tudo na sua casa com carinho", "Deixamos tudo pronto e embalado para consumo!"],
  },
  {
    title: "Marmitas Personalizadas",
    description:
      "Refeições saudáveis e saborosas, preparadas sob medida para o seu dia a dia. Práticas e nutritivas.",
    icon: Package,
    image: marmitasImage,
    features: ["Envie seu plano alimentar", "Receba seu orçamento", "Escolha o cardápio ideal", "Combinamos a data de entrega"],
  },
  {
    title: "Eventos",
    description:
      "Realizamos eventos personalizados, de encontros intimistas a grandes celebrações e eventos corporativos. Criamos cardápios sob medida, com equipe completa e todo o serviço de comidas e bebidas não alcoólicas.",
    icon: PartyPopper,
    image: eventosImage,
    features: ["Buffet completo", "Equipe dedicada", "Decoração elegante"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Três formas especiais de levar afeto e sabor para sua mesa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="overflow-hidden group hover:shadow-xl smooth-transition border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-full">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="w-full group/btn"
                  asChild
                >
                  <Link to="/orcamento">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 smooth-transition" />
                  </Link>
                </Button>
                <div className="text-center mt-10">
                  <Link
                    to="/servicos"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/80 transition-colors"
                  >
                    Saiba mais
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;