import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Instagram, Send } from "lucide-react";

const Orcamento = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Criar mensagem para WhatsApp
    const message = `
Novo orçamento - Cy Cozinha Afetiva

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Data: ${formData.date || "A definir"}
Nº de pessoas: ${formData.guests || "A definir"}

Mensagem:
${formData.message || "Sem mensagem adicional"}
    `.trim();

    const whatsappNumber = "+5511982229902";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando...",
      description: "Você será direcionado ao WhatsApp para finalizar seu orçamento.",
    });

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      guests: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Solicite seu Orçamento
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Preencha o formulário abaixo e entraremos em contato em breve
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-6">
                  <div>
                    <h2 className="font-playfair text-2xl font-bold mb-6">
                      Outras Formas de Contato
                    </h2>
                    <div className="space-y-4">
                      <a
                        href="https://api.whatsapp.com/send/?phone=%2B5511982229902&" target="_blank"
                        className="flex items-center p-4 bg-muted rounded-lg hover:bg-muted/80 smooth-transition"
                      >
                        <Phone className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="text-sm text-muted-foreground">Whatsapp</p>
                          <p className="font-medium">(11) 98222-9902</p>
                        </div>
                      </a>
                      <a
                        href="https://www.instagram.com/cy_cozinhaafetiva"
                        target="_blank"
                        className="flex items-center p-4 bg-muted rounded-lg hover:bg-muted/80 smooth-transition"
                      >
                        <Instagram className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="text-sm text-muted-foreground">Instagram</p>
                          <p className="font-medium">@cy_cozinhaafetiva</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                    <p className="text-sm text-muted-foreground">
                      Segunda a Sábado: 9h às 19h
                    </p>
                  </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">
                          Nome Completo <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">
                          Telefone <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(11) 99999-9999"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">
                          Serviço de Interesse <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData({ ...formData, service: value })
                          }
                          required
                        >
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="chef-em-casa">Chef em Casa</SelectItem>
                            <SelectItem value="marmitas">
                              Marmitas Personalizadas
                            </SelectItem>
                            <SelectItem value="eventos">Eventos</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="date">Data Desejada</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests">Número de Pessoas</Label>
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          value={formData.guests}
                          onChange={handleChange}
                          placeholder="Ex: 10"
                          min="1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem Adicional</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Conte-nos mais sobre o que você precisa..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Enviar Orçamento via WhatsApp
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Ao enviar, você será redirecionado ao WhatsApp para finalizar seu
                      orçamento.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Orcamento;