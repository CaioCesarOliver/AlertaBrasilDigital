import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, MapPin, Users, Zap, Shield, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ui/themeToggle";

const Index = () => {
  const features = [
    {
      icon: Bell,
      title: "Alertas Antecipados",
      description: "Sistema de monitoramento em tempo real com IoT e IA para prever enchentes, deslizamentos e incêndios.",
      link: "/alerts"
    },
    {
      icon: MapPin,
      title: "Plano de Evacuação",
      description: "Rotas dinâmicas GPS para áreas urbanas e rurais com funcionamento offline.",
      link: "/evacuation"
    },
    {
      icon: Users,
      title: "Coordenação Comunitária",
      description: "Ferramentas para voluntários, treinamento gamificado e comunicação em tempo real.",
      link: "/community"
    },
    {
      icon: Zap,
      title: "Estações de Energia",
      description: "Monitoramento de estações solares e sistemas de purificação de água portáteis.",
      link: "/resources"
    },
    {
      icon: Shield,
      title: "Portal da Defesa Civil",
      description: "Gestão de recursos, abrigos e coordenação de equipes para autoridades.",
      link: "/admin"
    }
  ];

  return (
    <div className="border-b bg-white/80 dark:bg-black/90 backdrop-blur-sm sticky top-0 z-50">
      <header className="border-b bg-white/80 dark:bg-gray-900 dark:border-gray-800">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <div>
                <h1 className="font-bold text-xl text-blue-900 dark:text-blue-400">DisasterRescueBR</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Preparação, Resposta e Recuperação</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="bg-blue-600 hover:bg-blue-800">
              <Link to="/dashboard" className="dark:text-white">Começar Agora</Link>
            </Button>
          </div>
        </div>
      </header>


      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 dark:text-gray-300">
              Protegendo o Brasil contra{" "}
              <span className="text-blue-600 dark:text-blue-400">Desastres Naturais</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
              Plataforma inovadora e multidisciplinar para preparação, resposta e recuperação de desastres—
              adaptada à geografia e realidades socioeconômicas do Brasil. Baixo custo, offline-friendly,
              escalável desde aldeias quilombolas remotas até a megacidade de São Paulo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 dark:text-white">
                <Link to="/dashboard">Explorar Dashboard</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/community">Participar da Comunidade</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-300">
            Recursos Principais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 dark:text-white">
                    {feature.description}
                  </CardDescription>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={feature.link}>Saiba Mais</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Impacto em Números</h3>
            <p className="text-blue-100 text-lg">Protegendo comunidades em todo o Brasil</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,570</div>
              <div className="text-blue-100">Municípios Cobertos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Monitoramento</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Offline Ready</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Multi</div>
              <div className="text-blue-100">Idiomas</div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-300">
              Pronto para Começar?
            </h3>
            <p className="text-xl text-gray-600 mb-8 dark:text-white">
              Junte-se a comunidades, municípios e ONGs que já utilizam nossa plataforma
              para criar um Brasil mais resiliente a desastres naturais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-800">
                <Link to="/dashboard">Iniciar Dashboard</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/support">Obter Suporte</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">DisasterRescueBR</span>
          </div>
          <p className="text-gray-400 mb-4">
            Plataforma open-source para gestão de desastres naturais no Brasil
          </p>
          <p className="text-sm text-gray-500">
            © 2024 DisasterRescueBR. Desenvolvido para proteger vidas e comunidades.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
