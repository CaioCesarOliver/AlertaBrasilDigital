import themeToggle from "@/components/ui/themeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Navigation, Shield, Clock, Users, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ThemeToggle from "@/components/ui/themeToggle";

const Evacuation = () => {
  const [destination, setDestination] = useState("");
  const { toast } = useToast();

  const safeZones = [
    {
      id: 1,
      name: "Centro Comunitário São Paulo",
      address: "Rua das Flores, 123 - Centro",
      capacity: 500,
      occupied: 120,
      distance: "2.3 km",
      status: "Disponível"
    },
    {
      id: 2,
      name: "Escola Municipal Santos Dumont",
      address: "Av. Paulista, 456 - Bela Vista",
      capacity: 300,
      occupied: 280,
      distance: "1.8 km",
      status: "Quase Lotado"
    },
    {
      id: 3,
      name: "Ginásio Poliesportivo",
      address: "Rua do Esporte, 789 - Vila Olímpia",
      capacity: 800,
      occupied: 45,
      distance: "3.1 km",
      status: "Disponível"
    }
  ];

  const evacuationRoutes = [
    {
      id: 1,
      name: "Rota Norte - Centro",
      duration: "15 min",
      difficulty: "Fácil",
      type: "Urbana",
      status: "Livre"
    },
    {
      id: 2,
      name: "Rota Sul - Via Expressa",
      duration: "22 min",
      difficulty: "Moderada",
      type: "Urbana",
      status: "Congestionada"
    },
    {
      id: 3,
      name: "Rota Rural - Serra",
      duration: "35 min",
      difficulty: "Difícil",
      type: "Rural",
      status: "Livre"
    }
  ];

  const handlePlanRoute = () => {
    if (!destination) {
      toast({
        title: "Erro",
        description: "Por favor, selecione um destino",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Rota Calculada",
      description: `Rota para ${destination} calculada com sucesso`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponível": return "bg-green-500";
      case "Quase Lotado": return "bg-orange-500";
      case "Lotado": return "bg-red-500";
      case "Livre": return "bg-green-500";
      case "Congestionada": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <header className="bg-white border-b  dark:bg-gray-900 dark:border-gray-800">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-blue-400">
                Plano de Evacuação
              </h1>
              <p className="text-sm text-gray-600 dark:text-white">
                Rotas dinâmicas GPS e zonas seguras
              </p>
            </div>
          </div>

          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto p-6">
        <Tabs defaultValue="routes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="routes">Rotas</TabsTrigger>
            <TabsTrigger value="safezones">Zonas Seguras</TabsTrigger>
            <TabsTrigger value="map">Mapa Offline</TabsTrigger>
            <TabsTrigger value="emergency">Emergência</TabsTrigger>
          </TabsList>

          <TabsContent value="routes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-blue-600" />
                  Calculadora de Rotas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Localização Atual</label>
                    <Input placeholder="GPS detectará automaticamente..." disabled />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Destino</label>
                    <Input
                      placeholder="Digite o endereço de destino"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </div>
                <Button onClick={handlePlanRoute} className="w-full">
                  <Navigation className="h-4 w-4 mr-2" />
                  Calcular Melhor Rota
                </Button>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Rotas Disponíveis</h3>
              {evacuationRoutes.map((route) => (
                <Card key={route.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <MapPin className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{route.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {route.duration}
                            </span>
                            <span>Dificuldade: {route.difficulty}</span>
                            <span>Tipo: {route.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`${getStatusColor(route.status)} text-white`}>
                          {route.status}
                        </Badge>
                        <Button size="sm">Selecionar</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="safezones" className="space-y-6">
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Zonas Seguras Próximas</h3>
              {safeZones.map((zone) => (
                <Card key={zone.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-green-600" />
                        <div>
                          <h4 className="font-semibold">{zone.name}</h4>
                          <p className="text-sm text-gray-600">{zone.address}</p>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(zone.status)} text-white`}>
                        {zone.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Capacidade</p>
                        <p className="font-semibold">{zone.capacity} pessoas</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Ocupação</p>
                        <p className="font-semibold">{zone.occupied} pessoas</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Distância</p>
                        <p className="font-semibold">{zone.distance}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Disponível</p>
                        <p className="font-semibold text-green-600">
                          {zone.capacity - zone.occupied} vagas
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm">
                        <Navigation className="h-4 w-4 mr-2" />
                        Traçar Rota
                      </Button>
                      <Button size="sm" variant="outline">
                        <Users className="h-4 w-4 mr-2" />
                        Reservar Vaga
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="map" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-blue-600" />
                  Mapas Offline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-300">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-blue-700">Mapa Offline Disponível</p>
                    <p className="text-sm text-blue-600 mb-4">Tiles em cache • Rotas offline • Zonas seguras</p>
                    <div className="flex gap-2 justify-center">
                      <Button>
                        <Download className="h-4 w-4 mr-2" />
                        Baixar Região
                      </Button>
                      <Button variant="outline">Ver Cache</Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">15 MB</p>
                    <p className="text-sm text-gray-600 dark:text-white">Região Baixada</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-2xl font-bold text-green-600">Offline</p>
                    <p className="text-sm text-gray-600 dark:text-white">Status do Cache</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-2xl font-bold text-orange-600">72h</p>
                    <p className="text-sm text-gray-600 dark:text-white">Última Atualização</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emergency" className="space-y-6">
            <Card className="border-red-200 bg-red-50 dark:bg-gray-950">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-500">
                  <Shield className="h-5 w-5" />
                  Evacuação de Emergência
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-red-700 dark:text-red-500">
                    Use apenas em situações de emergência real. Este botão ativará:
                  </p>
                  <ul className="list-disc list-inside text-red-700 space-y-1 dark:text-red-500">
                    <li>Alerta geral para todos os dispositivos próximos</li>
                    <li>Rota de evacuação mais rápida disponível</li>
                    <li>Notificação automática para Defesa Civil</li>
                    <li>Ativação de sirenes locais</li>
                  </ul>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6">
                    🚨 ATIVAR EVACUAÇÃO DE EMERGÊNCIA
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contatos de Emergência</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span className="font-medium">Bombeiros</span>
                    <Button size="sm" className="bg-red-600">193</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span className="font-medium">SAMU</span>
                    <Button size="sm" className="bg-red-600">192</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span className="font-medium">Defesa Civil</span>
                    <Button size="sm" className="bg-blue-600">199</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <span className="font-medium">Polícia Militar</span>
                    <Button size="sm" className="bg-blue-600">190</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Kit de Emergência</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>Documentos importantes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>Água potável (3L por pessoa)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>Alimentos não perecíveis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>Medicamentos essenciais</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>Lanterna e pilhas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>Rádio portátil</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>Cobertores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>Dinheiro em espécie</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Evacuation;
