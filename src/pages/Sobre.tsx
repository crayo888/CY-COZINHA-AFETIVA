import clienteImage from "@/assets/cliente.png";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Sobre = () => {
  const values = [
    {
      icon: Heart,
      title: "Afeto em Cada Preparo",
      description:
        "Cada prato é preparado com carinho e dedicação, transformando ingredientes em momentos especiais.",
    },
    {
      icon: Award,
      title: "Qualidade",
      description:
        "Utilizamos apenas ingredientes selecionados e técnicas gastronômicas de alta qualidade.",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description:
        "Cada cliente é único. Adaptamos nossos serviços às suas necessidades e preferências.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          {/* Imagem da cliente */}
          <div className="flex justify-center">
  <div className="w-80 h-80 rounded-full border-4 border-[#e16065]/40 shadow-lg overflow-hidden flex items-center justify-center bg-white">
    <img
      src={clienteImage}
      alt="Chef Cy"
      className="w-full h-full object-contain"
    />
  </div>
</div>


          {/* Texto “Sobre” */}
          <div>
            <h2 className="text-3xl font-playfair font-semibold mb-4 text-primary">
              Cynthia Ambar Moujaes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sou a Cynthia, criadora da <strong>Cy Cozinha Afetiva</strong>.
              Meu propósito é transformar refeições em momentos especiais,
              com sabor, carinho e afeto em cada preparo.
            </p>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">
                Nossa História
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Olá!

                  Muito obrigada por me acompanhar.

                  Para quem ainda não me conhece, eu sou a Cynthia Ambar Moujaes. Sou formada em Engenharia de Alimentos pela Mauá, fiz técnico em Gastronomia na Escola de Culinária Wilma Kovesi e, por 13 anos, fui responsável pela cozinha do Restaurante Abuzuz, de comida libanesa, do qual também fui proprietária.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sempre tive uma paixão enorme pela gastronomia. Em junho de 2020, decidi transformar essa paixão em um projeto próprio e nasceu a <strong>Cy Cozinha Afetiva</strong>. Meu objetivo era criar um cardápio que unisse amor pela comida e todo o conhecimento que construí ao longo da minha trajetória na culinária.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Desde então, tenho realizado esse sonho todos os dias. Nada é mais gratificante do que o carinho e a confiança dos meus clientes, que têm acompanhado e apoiado essa start-up desde o primeiro dia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">
                Nossos Valores
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="text-center p-6 bg-background rounded-lg border border-border smooth-transition hover:shadow-lg"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Pronto para uma experiência gastronômica única?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Entre em contato e descubra como podemos tornar suas refeições ainda
                mais especiais.
              </p>
              <Button size="lg" asChild>
                <Link to="/orcamento">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;