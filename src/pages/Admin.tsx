
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, MapPin, Package, Settings, Eye, AlertTriangle } from "lucide-react";

const Admin = () => {
  const shelters = [
    {
      id: "AB-001",
      name: "Abrigo Central São Paulo",
      location: "São Paulo, SP",
      capacity: 500,
      occupied: 120,
      status: "Operacional",
      manager: "João Silva",
      lastUpdate: "há 10 min"
    },
    {
      id: "AB-002",
      name: "Centro Comunitário Norte",
      location: "Guarulhos, SP", 
      capacity: 300,
      occupied: 280,
      status: "Quase Lotado",
      manager: "Maria Santos",
      lastUpdate: "há 5 min"
    },
    {
      id: "AB-003",
      name: "Escola Municipal Sul",
      location: "São Bernardo, SP",
      capacity: 800,
      occupied: 45,
      status: "Disponível",
      manager: "Carlos Lima",
      lastUpdate: "há 15 min"
    }
  ];

  const teams = [
    {
      id: "EQ-001",
      name: "Equipe Alpha",
      members: 12,
      status: "Em Campo",
      mission: "Busca e Resgate",
      location: "Serra do Mar",
      leader: "Ana Costa"
    },
    {
      id: "EQ-002",
      name: "Equipe Beta",
      members: 8,
      status: "Standby",
      mission: "Avaliação de Danos",
      location: "Base Central",
      leader: "Roberto Silva"
    },
    {
      id: "EQ-003",
      name: "Equipe Gamma", 
      members: 15,
      status: "Em Trânsito",
      mission: "Evacuação",
      location: "Zona Oeste",
      leader: "Lucia Ferreira"
    }
  ];

  const supplies = [
    { category: "Medicamentos", total: 450, available: 320, reserved: 130, unit: "unidades" },
    { category: "Alimentos", total: 2500, available: 1800, reserved: 700, unit: "kg" },
    { category: "Água Potável", total: 5000, available: 3200, reserved: 1800, unit: "L" },
    { category: "Cobertores", total: 800, available: 650, reserved: 150, unit: "unidades" },
    { category: "Kits Primeiros Socorros", total: 120, available: 85, reserved: 35, unit: "kits" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Operacional":
      case "Disponível": 
      case "Standby": return "bg-green-500";
      case "Quase Lotado":
      case "Em Trânsito": return "bg-orange-500";
      case "Lotado":
      case "Em Campo": return "bg-blue-500";
      case "Manutenção": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getOccupancyPercentage = (occupied: number, capacity: number) => {
    return Math.round((occupied / capacity) * 100);
  };

  const getAvailabilityPercentage = (available: number, total: number) => {
    return Math.round((available / total) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="flex items-center gap-4 p-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Portal da Defesa Civil</h1>
            <p className="text-sm text-gray-600">
              Gestão de recursos, abrigos e coordenação de equipes
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="shelters">Abrigos</TabsTrigger>
            <TabsTrigger value="teams">Equipes</TabsTrigger>
            <TabsTrigger value="supplies">Suprimentos</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-gray-600">Abrigos Ativos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">445</p>
                      <p className="text-sm text-gray-600">Pessoas Abrigadas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Users className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">35</p>
                      <p className="text-sm text-gray-600">Agentes em Campo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Package className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">87%</p>
                      <p className="text-sm text-gray-600">Suprimentos OK</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Operations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  Operações em Andamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Operação Serra do Mar</h4>
                      <p className="text-sm text-gray-600">Busca e resgate após deslizamento • 12 agentes</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-red-500 text-white">Crítica</Badge>
                      <Button size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Monitorar
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Evacuação Zona Oeste</h4>
                      <p className="text-sm text-gray-600">Evacuação preventiva • 15 agentes</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-orange-500 text-white">Alta</Badge>
                      <Button size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Monitorar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shelters" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Gestão de Abrigos</h3>
              <Button>
                <Shield className="h-4 w-4 mr-2" />
                Novo Abrigo
              </Button>
            </div>

            <div className="grid gap-4">
              {shelters.map((shelter) => (
                <Card key={shelter.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Shield className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{shelter.name}</h4>
                          <p className="text-sm text-gray-600">{shelter.location}</p>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(shelter.status)} text-white`}>
                        {shelter.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Ocupação</p>
                        <div className="flex items-center gap-2">
                          <Progress value={getOccupancyPercentage(shelter.occupied, shelter.capacity)} className="flex-1" />
                          <span className="text-sm font-semibold">
                            {shelter.occupied}/{shelter.capacity}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Responsável</p>
                        <p className="font-semibold">{shelter.manager}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">ID</p>
                        <p className="font-semibold">{shelter.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Atualização</p>
                        <p className="font-semibold">{shelter.lastUpdate}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Detalhes
                      </Button>
                      <Button size="sm" variant="outline">
                        <MapPin className="h-4 w-4 mr-2" />
                        Localizar
                      </Button>
                      <Button size="sm" variant="outline">
                        <Users className="h-4 w-4 mr-2" />
                        Gerenciar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="teams" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Coordenação de Equipes</h3>
              <Button>
                <Users className="h-4 w-4 mr-2" />
                Nova Equipe
              </Button>
            </div>

            <div className="grid gap-4">
              {teams.map((team) => (
                <Card key={team.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Users className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{team.name}</h4>
                          <p className="text-sm text-gray-600">Líder: {team.leader}</p>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(team.status)} text-white`}>
                        {team.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Membros</p>
                        <p className="font-semibold text-lg">{team.members}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Missão</p>
                        <p className="font-semibold">{team.mission}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Localização</p>
                        <p className="font-semibold">{team.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">ID</p>
                        <p className="font-semibold">{team.id}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MapPin className="h-4 w-4 mr-2" />
                        Rastrear
                      </Button>
                      <Button size="sm" variant="outline">
                        <Users className="h-4 w-4 mr-2" />
                        Comunicar
                      </Button>
                      {team.status === "Standby" && (
                        <Button size="sm">Despachar</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="supplies" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Gestão de Suprimentos</h3>
              <Button>
                <Package className="h-4 w-4 mr-2" />
                Novo Suprimento
              </Button>
            </div>

            <div className="grid gap-4">
              {supplies.map((supply, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <Package className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{supply.category}</h4>
                          <p className="text-sm text-gray-600">
                            {supply.available} de {supply.total} {supply.unit} disponíveis
                          </p>
                        </div>
                      </div>
                      <Badge className={`${
                        getAvailabilityPercentage(supply.available, supply.total) > 50 
                          ? "bg-green-500" 
                          : getAvailabilityPercentage(supply.available, supply.total) > 20
                            ? "bg-orange-500"
                            : "bg-red-500"
                      } text-white`}>
                        {getAvailabilityPercentage(supply.available, supply.total)}% disponível
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Disponibilidade</span>
                        <span>{supply.available}/{supply.total} {supply.unit}</span>
                      </div>
                      <Progress value={getAvailabilityPercentage(supply.available, supply.total)} />
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Total</p>
                        <p className="font-semibold">{supply.total} {supply.unit}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Disponível</p>
                        <p className="font-semibold text-green-600">{supply.available} {supply.unit}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Reservado</p>
                        <p className="font-semibold text-orange-600">{supply.reserved} {supply.unit}</p>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Detalhes
                      </Button>
                      <Button size="sm" variant="outline">
                        <Package className="h-4 w-4 mr-2" />
                        Requisitar
                      </Button>
                      {getAvailabilityPercentage(supply.available, supply.total) < 30 && (
                        <Button size="sm" className="bg-red-600">Reabastecer</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-gray-600" />
                    Configurações do Sistema
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Centro de Comando</label>
                    <Input placeholder="Endereço do centro de comando" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Código da Região</label>
                    <Input placeholder="SP-001" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Responsável Principal</label>
                    <Input placeholder="Nome do responsável" />
                  </div>
                  <Button className="w-full">Salvar Configurações</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Integrações de API</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>CEMADEN</span>
                    <Badge className="bg-green-500 text-white">Conectado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>INMET</span>
                    <Badge className="bg-green-500 text-white">Conectado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>IBGE</span>
                    <Badge className="bg-green-500 text-white">Conectado</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Defesa Civil Nacional</span>
                    <Badge className="bg-orange-500 text-white">Pendente</Badge>
                  </div>
                  <Button className="w-full" variant="outline">Configurar APIs</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
