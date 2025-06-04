
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, MapPin, Battery, Radio, Upload, Download, Eye, Settings } from "lucide-react";
import ThemeToggle from "@/components/ui/themeToggle";

const DroneOps = () => {
  const activeDrones = [
    {
      id: "DR-001",
      name: "Rescue Alpha",
      status: "Em Voo",
      battery: 78,
      location: "Zona Sul - SP",
      altitude: "120m",
      mission: "Busca e Resgate",
      pilot: "João Silva"
    },
    {
      id: "DR-002",
      name: "Survey Beta",
      status: "Standby",
      battery: 95,
      location: "Base Central",
      altitude: "0m",
      mission: "Avaliação de Danos",
      pilot: "Maria Santos"
    },
    {
      id: "DR-003",
      name: "Monitor Gamma",
      status: "Em Voo",
      battery: 45,
      location: "Rio Tietê",
      altitude: "85m",
      mission: "Monitoramento",
      pilot: "Carlos Lima"
    }
  ];

  const missions = [
    {
      id: 1,
      name: "Busca Pessoas Desaparecidas",
      area: "Serra do Mar",
      priority: "Alta",
      status: "Em Andamento",
      progress: 65
    },
    {
      id: 2,
      name: "Avaliação Danos Enchente",
      area: "Vale do Ribeira",
      priority: "Média",
      status: "Planejada",
      progress: 0
    },
    {
      id: 3,
      name: "Monitoramento Barragem",
      area: "Região Metropolitana",
      priority: "Alta",
      status: "Concluída",
      progress: 100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em Voo": return "bg-blue-500";
      case "Standby": return "bg-green-500";
      case "Manutenção": return "bg-orange-500";
      case "Offline": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Alta": return "bg-red-500";
      case "Média": return "bg-orange-500";
      case "Baixa": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getBatteryColor = (battery: number) => {
    if (battery > 50) return "text-green-600";
    if (battery > 20) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <header className="bg-white border-b dark:bg-gray-900 dark:border-gray-800">
        <div className="flex items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Operações com Drones
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Busca, resgate e avaliação de danos
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>


      <main className="container mx-auto p-6">
        <Tabs defaultValue="telemetry" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="telemetry">Telemetria</TabsTrigger>
            <TabsTrigger value="missions">Missões</TabsTrigger>
            <TabsTrigger value="gallery">Galeria</TabsTrigger>
            <TabsTrigger value="routes">Rotas</TabsTrigger>
          </TabsList>

          <TabsContent value="telemetry" className="space-y-6">
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Drones Ativos</h3>
              {activeDrones.map((drone) => (
                <Card key={drone.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Camera className="h-8 w-8 text-blue-600" />
                        <div>
                          <h4 className="font-semibold">{drone.name}</h4>
                          <p className="text-sm text-gray-600">ID: {drone.id}</p>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(drone.status)} text-white`}>
                        {drone.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Bateria</p>
                        <p className={`font-bold text-lg ${getBatteryColor(drone.battery)}`}>
                          <Battery className="inline h-4 w-4 mr-1" />
                          {drone.battery}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Localização</p>
                        <p className="font-semibold">{drone.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Altitude</p>
                        <p className="font-semibold">{drone.altitude}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Piloto</p>
                        <p className="font-semibold">{drone.pilot}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        Missão: {drone.mission}
                      </span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Visualizar
                        </Button>
                        <Button size="sm">
                          <Radio className="h-4 w-4 mr-2" />
                          Controlar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Radio className="h-5 w-5 text-blue-600" />
                  Telemetria em Tempo Real
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-300">
                  <div className="text-center">
                    <Camera className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-blue-700">Feed de Vídeo ao Vivo</p>
                    <p className="text-sm text-blue-600">Drone Rescue Alpha - Câmera 4K</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="missions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Missões de Resgate</h3>
              <Button>
                <MapPin className="h-4 w-4 mr-2" />
                Nova Missão
              </Button>
            </div>

            <div className="grid gap-4">
              {missions.map((mission) => (
                <Card key={mission.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold">{mission.name}</h4>
                        <p className="text-sm text-gray-600">Área: {mission.area}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`${getPriorityColor(mission.priority)} text-white`}>
                          {mission.priority}
                        </Badge>
                        <Badge variant="outline">{mission.status}</Badge>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progresso</span>
                        <span>{mission.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${mission.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Detalhes
                      </Button>
                      <Button size="sm" variant="outline">
                        <MapPin className="h-4 w-4 mr-2" />
                        Ver Rota
                      </Button>
                      {mission.status === "Planejada" && (
                        <Button size="sm">Iniciar</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Galeria de Avaliação de Danos</h3>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Upload Imagens
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-3">
                      <Camera className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Área Afetada {i}</h4>
                      <p className="text-sm text-gray-600">Capturada hoje, 14:30</p>
                      <div className="flex gap-2">
                        <Badge variant="outline">4K</Badge>
                        <Badge variant="outline">GPS</Badge>
                        <Badge variant="outline">Anotada</Badge>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          Ver
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Baixar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="routes" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Rotas e Waypoints</h3>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Importar
                </Button>
                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Planejador de Rotas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-300">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-blue-700">Mapa de Planejamento</p>
                    <p className="text-sm text-blue-600">Arraste para criar waypoints</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rotas Salvas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Busca Serra do Mar - 15 waypoints",
                    "Monitoramento Rio Tietê - 8 waypoints",
                    "Avaliação Zona Sul - 12 waypoints",
                    "Rota Emergência Centro - 6 waypoints"
                  ].map((route, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <span>{route}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-gray-600" />
                    Configurações do Drone
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Altitude Máxima</span>
                    <span className="font-semibold">120m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Velocidade</span>
                    <span className="font-semibold">15 m/s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Modo de Voo</span>
                    <span className="font-semibold">GPS</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>RTH Bateria</span>
                    <span className="font-semibold">25%</span>
                  </div>
                  <Button className="w-full">Aplicar Configurações</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DroneOps;
