import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Package, PartyPopper, Check } from "lucide-react";
import { Link } from "react-router-dom";
import chefImage from "@/assets/chef-em-casa.jpg";
import marmitasImage from "@/assets/marmitas.jpg";
import eventosImage from "@/assets/eventos.jpg";

const Servicos = () => {
  const services = [
    {
      title: "Chef em Casa",
      subtitle: "Leve a experiência de alta gastronomia para o conforto do seu lar. Nossa chef prepara as refeições especialmente para você e sua família.",
      description:
        "Agora isso é possível com o nosso novo serviço Chef em Casa!",
      icon: ChefHat,
      image: chefImage,
      features: [
        "O cliente escolhe até 8 pratos do cardápio enviado",
        "Produção para 15 dias (até 30 marmitas)",
        "Enviamos uma lista de compras detalhada, com as quantidades exatas e necessárias para sua casa",
        "Vou a sua casa, cozinho, porciono, etiqueto e organizo tudo na cozinha",
      ],
    },
    {
      title: "Marmitas Personalizadas",
      subtitle: "Alimentação Pronta Para o Seu Dia a Dia",
      description:
        "Aqui tudo é feito sob medida para você! Olha só como é simples:",
      icon: Package,
      image: marmitasImage,
      features: [
        "Você faz seu pedido com suas preferências alimentares",
        "elaboramos um orçamento exclusivo com base na composição dos pratos e na sua necessidade",
        "Montamos juntos um combo personalizado: envio opções de pratos, e definimos um cardápio, equilibrado e com a sua cara",
        "Hora de cozinhar! Preparo tudo com muito carinho, ingredientes frescos e técnicas que valorizam o sabor",
        "Montagem minuciosa: cada marmita é pesada e montada individualmente, garantindo equilíbrio e porção exata",
        "Entrega com hora marcada: nosso entregador leva tudo fresquinho e embalado direto para você, no horário combinado!",
      ],
    },
    {
      title: "Eventos",
      subtitle: "Buffets para Celebrações Especiais",
      description:
        "Nossos eventos são totalmente personalizados. Cuidamos de cada detalhe para transformar sua ocasião em uma experiência única. Atendemos desde pequenos encontros e celebrações intimistas até grandes eventos corporativos e festas infantis. Cada cardápio é desenvolvido de forma exclusiva, levando em conta o perfil dos convidados, as preferências e o estilo do evento. Contamos com uma equipe experiente para o serviço, cuidamos de toda a preparação e entrega das comidas e bebidas não alcoólicas, garantindo praticidade, sabor e elegância em cada momento.",
      icon: PartyPopper,
      image: eventosImage,
      features: [
        "Cardápios personalizados para cada ocasião, Basta solicitar",
        "Equipe completa de garçons e apoio",
        "Opções de finger food, buffet completo ou estações",
        "Assessoria na escolha do menu",
        "Atendimento para eventos corporativos e sociais",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Nossos Serviços
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Três formas especiais de levar afeto e sabor para sua mesa
              </p>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`flex flex-col ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-8 lg:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute top-6 left-6 bg-primary text-primary-foreground p-4 rounded-full">
                        <service.icon className="h-8 w-8" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <Card className="border-none shadow-none">
                      <CardHeader>
                        <CardTitle className="font-playfair text-3xl md:text-4xl mb-2">
                          {service.title}
                        </CardTitle>
                        <p className="text-lg text-primary font-medium">
                          {service.subtitle}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button size="lg" asChild>
                          <Link to="/orcamento">Solicitar Orçamento</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Tem alguma dúvida ou pedido especial?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Entre em contato conosco. Estamos prontos para criar uma experiência
                gastronômica perfeita para você.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <Link to="/orcamento">Solicitar Orçamento</Link>
                </Button>
                
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;