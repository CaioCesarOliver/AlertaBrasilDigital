
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Phone, Globe, Accessibility, Volume2, Eye } from "lucide-react";
import { useState } from "react";

const Support = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("pt");

  const languages = [
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "indigenous", name: "Tupi-Guarani", flag: "🌿" },
    { code: "libras", name: "LIBRAS", flag: "🤟" }
  ];

  const supportChannels = [
    {
      type: "WhatsApp",
      contact: "+55 11 99999-0001",
      status: "Online",
      responseTime: "< 5 min",
      icon: MessageCircle
    },
    {
      type: "Telegram",
      contact: "@DisasterRescueBR",
      status: "Online", 
      responseTime: "< 10 min",
      icon: MessageCircle
    },
    {
      type: "Telefone",
      contact: "0800-RESGATE (737-4283)",
      status: "24/7",
      responseTime: "Imediato",
      icon: Phone
    }
  ];

  const faqs = [
    {
      question: "Como funciona o sistema de alertas?",
      answer: "O sistema monitora sensores IoT em tempo real e usa IA para prever riscos naturais, enviando alertas via SMS, WhatsApp e notificações push."
    },
    {
      question: "Posso usar o app offline?",
      answer: "Sim! O app foi projetado para funcionar offline com mapas em cache, rotas salvas e comunicação via Bluetooth mesh."
    },
    {
      question: "Como me tornar voluntário?",
      answer: "Acesse a seção 'Comunidade', complete os treinamentos gamificados e se cadastre como voluntário da sua região."
    },
    {
      question: "O sistema funciona em áreas rurais?",
      answer: "Sim, foi especialmente desenvolvido para atender desde aldeias remotas até grandes centros urbanos, com soluções de baixo custo."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="flex items-center gap-4 p-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Suporte & Inclusão</h1>
            <p className="text-sm text-gray-600">
              Suporte multilíngue e recursos de acessibilidade
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <Tabs defaultValue="help" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="help">Central de Ajuda</TabsTrigger>
            <TabsTrigger value="language">Idiomas</TabsTrigger>
            <TabsTrigger value="accessibility">Acessibilidade</TabsTrigger>
            <TabsTrigger value="contact">Contato</TabsTrigger>
          </TabsList>

          <TabsContent value="help" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Perguntas Frequentes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <h4 className="font-semibold mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Guias Rápidos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Como usar alertas de emergência",
                      "Configurar mapas offline",
                      "Participar de treinamentos",
                      "Reportar riscos na comunidade",
                      "Operar drones de resgate"
                    ].map((guide, index) => (
                      <Button key={index} variant="outline" className="w-full justify-start">
                        {guide}
                      </Button>
                    ))}
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Vídeo Tutoriais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-300">
                      <div className="text-center">
                        <Eye className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                        <p className="text-sm text-blue-700">Tutoriais em Vídeo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="language" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  Seletor de Idioma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {languages.map((language) => (
                    <div
                      key={language.code}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedLanguage === language.code
                          ? "border-blue-500 bg-blue-50"
                          : "hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedLanguage(language.code)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{language.flag}</span>
                        <div>
                          <p className="font-semibold">{language.name}</p>
                          {language.code === selectedLanguage && (
                            <Badge className="bg-blue-500 text-white mt-1">Selecionado</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Idiomas Principais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🇧🇷</span>
                      <span className="font-medium">Português (Brasil)</span>
                    </div>
                    <Badge className="bg-green-500 text-white">Nativo</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🇺🇸</span>
                      <span className="font-medium">English</span>
                    </div>
                    <Badge variant="outline">Disponível</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🇪🇸</span>
                      <span className="font-medium">Español</span>
                    </div>
                    <Badge variant="outline">Disponível</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Idiomas Indígenas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌿</span>
                      <span className="font-medium">Tupi-Guarani</span>
                    </div>
                    <Badge className="bg-orange-500 text-white">Beta</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌿</span>
                      <span className="font-medium">Ticuna</span>
                    </div>
                    <Badge variant="outline">Em desenvolvimento</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🤟</span>
                      <span className="font-medium">LIBRAS</span>
                    </div>
                    <Badge className="bg-blue-500 text-white">Disponível</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Accessibility className="h-5 w-5 text-blue-600" />
                  Recursos de Acessibilidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Visual</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Alto Contraste</span>
                        <Button variant="outline" size="sm">Ativar</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Aumentar Fonte</span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">A</Button>
                          <Button variant="outline" size="sm">A+</Button>
                          <Button variant="outline" size="sm">A++</Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Leitor de Tela</span>
                        <Badge className="bg-green-500 text-white">Compatível</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Auditivo</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Alertas Visuais</span>
                        <Button variant="outline" size="sm">Configurar</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Vibração</span>
                        <Button variant="outline" size="sm">Ativar</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>LIBRAS</span>
                        <Badge className="bg-blue-500 text-white">Disponível</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-blue-600" />
                    Configurações Visuais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Tamanho da Fonte</label>
                    <div className="flex gap-2 mt-2">
                      <Button variant="outline" size="sm">Pequeno</Button>
                      <Button size="sm">Normal</Button>
                      <Button variant="outline" size="sm">Grande</Button>
                      <Button variant="outline" size="sm">Extra Grande</Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Tema de Cores</label>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm">Padrão</Button>
                      <Button variant="outline" size="sm">Alto Contraste</Button>
                      <Button variant="outline" size="sm">Escuro</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Volume2 className="h-5 w-5 text-green-600" />
                    Configurações de Áudio
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Volume dos Alertas</label>
                    <div className="mt-2">
                      <input type="range" className="w-full" min="0" max="100" defaultValue="80" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Tipo de Alerta</label>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm">Som</Button>
                      <Button variant="outline" size="sm">Vibração</Button>
                      <Button variant="outline" size="sm">Visual</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Canais de Suporte</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {supportChannels.map((channel, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <channel.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold">{channel.type}</p>
                          <p className="text-sm text-gray-600">{channel.contact}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-500 text-white mb-1">{channel.status}</Badge>
                        <p className="text-xs text-gray-600">{channel.responseTime}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Formulário de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nome</label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Tipo de Solicitação</label>
                    <select className="w-full p-2 border rounded-lg">
                      <option>Suporte Técnico</option>
                      <option>Dúvida sobre Funcionalidades</option>
                      <option>Reportar Bug</option>
                      <option>Sugestão de Melhoria</option>
                      <option>Emergência</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Mensagem</label>
                    <textarea 
                      className="w-full p-2 border rounded-lg min-h-24"
                      placeholder="Descreva sua solicitação..."
                    />
                  </div>
                  <Button className="w-full">Enviar Solicitação</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Horários de Atendimento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Emergências</h4>
                    <p className="text-2xl font-bold text-red-600">24/7</p>
                    <p className="text-sm text-gray-600">Sempre disponível</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Suporte Técnico</h4>
                    <p className="text-2xl font-bold text-blue-600">8h-18h</p>
                    <p className="text-sm text-gray-600">Segunda a Sexta</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Chat Online</h4>
                    <p className="text-2xl font-bold text-green-600">24h</p>
                    <p className="text-sm text-gray-600">WhatsApp/Telegram</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Support;
