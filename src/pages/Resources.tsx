import ThemeToggle from "@/components/ui/themeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Droplets, Battery, MapPin, Thermometer, Settings } from "lucide-react";

const Resources = () => {
  const solarStations = [
    {
      id: "ES-001",
      name: "Estação Solar Centro",
      location: "São Paulo, SP",
      batteryLevel: 85,
      powerOutput: "2.4 kW",
      status: "Operacional",
      lastUpdate: "há 5 min"
    },
    {
      id: "ES-002",
      name: "Estação Solar Norte",
      location: "Guarulhos, SP",
      batteryLevel: 92,
      powerOutput: "3.1 kW",
      status: "Operacional",
      lastUpdate: "há 2 min"
    },
    {
      id: "ES-003",
      name: "Estação Solar Oeste",
      location: "Osasco, SP",
      batteryLevel: 23,
      powerOutput: "0.8 kW",
      status: "Bateria Baixa",
      lastUpdate: "há 1 min"
    }
  ];

  const waterSystems = [
    {
      id: "WS-001",
      name: "Sistema Purificação A",
      type: "Filtro Portátil",
      capacity: "1000L/dia",
      status: "Ativo",
      location: "Abrigo Central",
      maintenance: "Em dia"
    },
    {
      id: "WS-002",
      name: "Coleta Água da Chuva B",
      type: "Captação",
      capacity: "500L/dia",
      status: "Ativo",
      location: "Escola Municipal",
      maintenance: "Pendente"
    },
    {
      id: "WS-003",
      name: "Sistema Purificação C",
      type: "UV + Filtro",
      capacity: "2000L/dia",
      status: "Manutenção",
      location: "Centro Comunitário",
      maintenance: "Em andamento"
    }
  ];

  const getBatteryColor = (level: number) => {
    if (level > 50) return "text-green-600";
    if (level > 20) return "text-orange-600";
    return "text-red-600";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Operacional":
      case "Ativo": return "bg-green-500";
      case "Bateria Baixa":
      case "Pendente": return "bg-orange-500";
      case "Manutenção":
      case "Offline": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <header className="bg-white border-b dark:bg-gray-900 dark:border-gray-800">
        <div className="flex items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Recursos Energéticos</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Monitoramento de energia solar e sistemas de água
              </p>
            </div>
          </div>
          <ThemeToggle/>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <Tabs defaultValue="energy" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="energy">Energia Solar</TabsTrigger>
            <TabsTrigger value="water">Sistemas de Água</TabsTrigger>
            <TabsTrigger value="inventory">Inventário</TabsTrigger>
            <TabsTrigger value="maintenance">Manutenção</TabsTrigger>
          </TabsList>

          <TabsContent value="energy" className="space-y-6">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Zap className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">6.3 kW</p>
                      <p className="text-sm text-gray-600">Potência Total</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Battery className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">67%</p>
                      <p className="text-sm text-gray-600">Bateria Média</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-gray-600">Estações Ativas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Thermometer className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">28°C</p>
                      <p className="text-sm text-gray-600">Temp. Média</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Solar Stations */}
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Estações Solares</h3>
              {solarStations.map((station) => (
                <Card key={station.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-100 rounded-lg">
                          <Zap className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{station.name}</h4>
                          <p className="text-sm text-gray-600">{station.location}</p>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(station.status)} text-white`}>
                        {station.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Nível da Bateria</p>
                        <div className="flex items-center gap-2">
                          <Progress value={station.batteryLevel} className="flex-1" />
                          <span className={`font-bold text-sm ${getBatteryColor(station.batteryLevel)}`}>
                            {station.batteryLevel}%
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Potência Atual</p>
                        <p className="font-bold text-lg text-green-600">{station.powerOutput}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">ID da Estação</p>
                        <p className="font-semibold">{station.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Última Atualização</p>
                        <p className="font-semibold">{station.lastUpdate}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MapPin className="h-4 w-4 mr-2" />
                        Localizar
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="h-4 w-4 mr-2" />
                        Configurar
                      </Button>
                      {station.batteryLevel < 25 && (
                        <Button size="sm" className="bg-red-600">
                          Alerta Bateria
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="water" className="space-y-6">
            {/* Water Systems Summary */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Droplets className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">3,500L</p>
                      <p className="text-sm text-gray-600">Capacidade Total/dia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Droplets className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">2</p>
                      <p className="text-sm text-gray-600">Sistemas Ativos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Settings className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">1</p>
                      <p className="text-sm text-gray-600">Em Manutenção</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Water Systems List */}
            <div className="grid gap-4">
              <h3 className="text-lg font-semibold">Sistemas de Purificação de Água</h3>
              {waterSystems.map((system) => (
                <Card key={system.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Droplets className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{system.name}</h4>
                          <p className="text-sm text-gray-600">{system.location}</p>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(system.status)} text-white`}>
                        {system.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Tipo</p>
                        <p className="font-semibold">{system.type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Capacidade</p>
                        <p className="font-semibold text-blue-600">{system.capacity}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">ID do Sistema</p>
                        <p className="font-semibold">{system.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Manutenção</p>
                        <p className={`font-semibold ${system.maintenance === "Em dia" ? "text-green-600" :
                            system.maintenance === "Pendente" ? "text-orange-600" : "text-red-600"
                          }`}>
                          {system.maintenance}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MapPin className="h-4 w-4 mr-2" />
                        Localizar
                      </Button>
                      <Button size="sm" variant="outline">
                        <Settings className="h-4 w-4 mr-2" />
                        Configurar
                      </Button>
                      {system.maintenance === "Pendente" && (
                        <Button size="sm" className="bg-orange-600">
                          Agendar Manutenção
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inventory" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Equipamentos de Energia</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { item: "Painéis Solares", quantity: 12, status: "Disponível" },
                    { item: "Baterias Lítio", quantity: 8, status: "Disponível" },
                    { item: "Inversores", quantity: 4, status: "Em Uso" },
                    { item: "Cabos e Conectores", quantity: 50, status: "Disponível" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <span className="font-medium">{item.item}</span>
                        <p className="text-sm text-gray-600">Quantidade: {item.quantity}</p>
                      </div>
                      <Badge variant="outline">{item.status}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Equipamentos de Água</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { item: "Filtros UV", quantity: 6, status: "Disponível" },
                    { item: "Filtros de Carvão", quantity: 15, status: "Baixo Estoque" },
                    { item: "Bombas d'Água", quantity: 3, status: "Em Uso" },
                    { item: "Tanques Portáteis", quantity: 8, status: "Disponível" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <span className="font-medium">{item.item}</span>
                        <p className="text-sm text-gray-600">Quantidade: {item.quantity}</p>
                      </div>
                      <Badge variant="outline" className={
                        item.status === "Baixo Estoque" ? "border-orange-500 text-orange-600" : ""
                      }>
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Cronograma de Manutenção</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      system: "Estação Solar Centro",
                      type: "Preventiva",
                      date: "2024-06-15",
                      status: "Agendada",
                      priority: "Média"
                    },
                    {
                      system: "Sistema Purificação B",
                      type: "Corretiva",
                      date: "2024-06-10",
                      status: "Em Andamento",
                      priority: "Alta"
                    },
                    {
                      system: "Estação Solar Oeste",
                      type: "Emergencial",
                      date: "2024-06-08",
                      status: "Concluída",
                      priority: "Crítica"
                    }
                  ].map((maintenance, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{maintenance.system}</h4>
                        <p className="text-sm text-gray-600">
                          {maintenance.type} - {maintenance.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={
                          maintenance.priority === "Crítica" ? "bg-red-500" :
                            maintenance.priority === "Alta" ? "bg-orange-500" :
                              maintenance.priority === "Média" ? "bg-yellow-500" : "bg-green-500"
                        }>
                          {maintenance.priority}
                        </Badge>
                        <Badge variant="outline">{maintenance.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Resources;
