
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageCircle, MapPin, Trophy, Star, Send } from "lucide-react";
import { useState } from "react";

const Community = () => {
  const [message, setMessage] = useState("");

  const volunteers = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Coordenadora de Resgate",
      location: "São Paulo, SP",
      points: 1250,
      level: "Experiente",
      status: "Online"
    },
    {
      id: 2,
      name: "Carlos Santos",
      role: "Especialista em Drones",
      location: "Rio de Janeiro, RJ",
      points: 890,
      level: "Avançado",
      status: "Em Campo"
    },
    {
      id: 3,
      name: "Maria Oliveira",
      role: "Enfermeira Voluntária",
      location: "Belo Horizonte, MG",
      points: 2100,
      level: "Expert",
      status: "Disponível"
    }
  ];

  const trainings = [
    {
      id: 1,
      title: "Primeiros Socorros Básicos",
      duration: "2 horas",
      difficulty: "Iniciante",
      points: 100,
      completed: 89,
      type: "Prático"
    },
    {
      id: 2,
      title: "Operação de Drones de Resgate",
      duration: "4 horas",
      difficulty: "Avançado", 
      points: 250,
      completed: 34,
      type: "Técnico"
    },
    {
      id: 3,
      title: "Coordenação de Evacuação",
      duration: "3 horas",
      difficulty: "Intermediário",
      points: 180,
      completed: 67,
      type: "Liderança"
    }
  ];

  const hazards = [
    {
      id: 1,
      type: "Buraco na Pista",
      location: "Av. Paulista, 1200",
      reportedBy: "João M.",
      time: "há 30 min",
      severity: "Médio",
      verified: false
    },
    {
      id: 2,
      type: "Árvore Caída",
      location: "Rua das Flores, 456",
      reportedBy: "Maria S.",
      time: "há 1 hora",
      severity: "Alto",
      verified: true
    },
    {
      id: 3,
      type: "Alagamento",
      location: "Baixada Santista",
      reportedBy: "Carlos R.",
      time: "há 2 horas", 
      severity: "Crítico",
      verified: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Online": return "bg-green-500";
      case "Em Campo": return "bg-blue-500";
      case "Disponível": return "bg-yellow-500";
      case "Offline": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Crítico": return "bg-red-500";
      case "Alto": return "bg-orange-500";
      case "Médio": return "bg-yellow-500";
      case "Baixo": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante": return "bg-green-500";
      case "Intermediário": return "bg-yellow-500";
      case "Avançado": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="flex items-center gap-4 p-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Coordenação Comunitária</h1>
            <p className="text-sm text-gray-600">
              Voluntários, treinamentos e comunicação em tempo real
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <Tabs defaultValue="volunteers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="volunteers">Voluntários</TabsTrigger>
            <TabsTrigger value="training">Treinamentos</TabsTrigger>
            <TabsTrigger value="chat">Chat Comunidade</TabsTrigger>
            <TabsTrigger value="map">Mapa Colaborativo</TabsTrigger>
          </TabsList>

          <TabsContent value="volunteers" className="space-y-6">
            {/* Statistics */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">247</p>
                      <p className="text-sm text-gray-600">Voluntários Ativos</p>
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
                      <p className="text-2xl font-bold">89</p>
                      <p className="text-sm text-gray-600">Online Agora</p>
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
                      <p className="text-2xl font-bold">34</p>
                      <p className="text-sm text-gray-600">Em Campo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Trophy className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">156</p>
                      <p className="text-sm text-gray-600">Certificações</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Volunteers List */}
            <div className="grid gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Voluntários Destacados</h3>
                <Button>
                  <Users className="h-4 w-4 mr-2" />
                  Convidar Voluntário
                </Button>
              </div>

              {volunteers.map((volunteer) => (
                <Card key={volunteer.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{volunteer.name}</h4>
                          <p className="text-sm text-gray-600">{volunteer.role}</p>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(volunteer.status)} text-white`}>
                        {volunteer.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Localização</p>
                        <p className="font-semibold">{volunteer.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Pontos</p>
                        <p className="font-semibold text-yellow-600">{volunteer.points}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Nível</p>
                        <Badge variant="outline">{volunteer.level}</Badge>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Avaliação</p>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Conversar
                      </Button>
                      <Button size="sm" variant="outline">
                        <MapPin className="h-4 w-4 mr-2" />
                        Localizar
                      </Button>
                      {volunteer.status === "Disponível" && (
                        <Button size="sm">Convocar para Missão</Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="training" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Módulos de Treinamento Gamificados</h3>
              <Button>
                <Trophy className="h-4 w-4 mr-2" />
                Meus Certificados
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {trainings.map((training) => (
                <Card key={training.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">{training.title}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`${getDifficultyColor(training.difficulty)} text-white`}>
                          {training.difficulty}
                        </Badge>
                        <Badge variant="outline">{training.type}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">Duração: {training.duration}</p>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progresso da Comunidade</span>
                        <span>{training.completed}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${training.completed}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">Recompensa</span>
                      <span className="font-bold text-yellow-600">{training.points} pontos</span>
                    </div>

                    <Button className="w-full">
                      <Trophy className="h-4 w-4 mr-2" />
                      Iniciar Treinamento
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-blue-600" />
                      Chat da Comunidade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto">
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm">Ana Silva</p>
                            <p className="text-sm">Equipe Alpha em posição na Zona Sul. Tudo tranquilo por aqui.</p>
                            <p className="text-xs text-gray-500">há 5 min</p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <Users className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm">Carlos Santos</p>
                            <p className="text-sm">Drone Beta retornando à base. Missão de reconhecimento concluída com sucesso.</p>
                            <p className="text-xs text-gray-500">há 8 min</p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <Users className="h-4 w-4 text-orange-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm">Maria Oliveira</p>
                            <p className="text-sm">Centro médico móvel instalado no Abrigo Central. Atendimento funcionando.</p>
                            <p className="text-xs text-gray-500">há 12 min</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Input
                        placeholder="Digite sua mensagem..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1"
                      />
                      <Button>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Canais Disponíveis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {[
                      { name: "# geral", users: 89, active: true },
                      { name: "# emergencias", users: 34, active: false },
                      { name: "# coordenacao", users: 12, active: false },
                      { name: "# treinamentos", users: 67, active: false }
                    ].map((channel, index) => (
                      <div key={index} className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        channel.active ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                      }`}>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{channel.name}</span>
                          <span className="text-sm text-gray-600">{channel.users}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="map" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Mapa Colaborativo da Comunidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-300">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-blue-700">Mapa Interativo</p>
                    <p className="text-sm text-blue-600">Clique para adicionar marcadores de riscos ou recursos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Riscos Reportados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {hazards.map((hazard) => (
                    <div key={hazard.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-semibold">{hazard.type}</p>
                        <p className="text-sm text-gray-600">{hazard.location}</p>
                        <p className="text-xs text-gray-500">
                          Reportado por {hazard.reportedBy} {hazard.time}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`${getSeverityColor(hazard.severity)} text-white`}>
                          {hazard.severity}
                        </Badge>
                        {hazard.verified && (
                          <Badge className="bg-green-500 text-white">Verificado</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reportar Novo Risco</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Tipo de Risco</label>
                    <select className="w-full p-2 border rounded-lg">
                      <option>Selecione o tipo</option>
                      <option>Alagamento</option>
                      <option>Deslizamento</option>
                      <option>Árvore Caída</option>
                      <option>Buraco na Pista</option>
                      <option>Estrutura Danificada</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Localização</label>
                    <Input placeholder="Endereço ou descrição do local" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Descrição</label>
                    <textarea 
                      className="w-full p-2 border rounded-lg min-h-20"
                      placeholder="Descreva o risco observado..."
                    />
                  </div>
                  <Button className="w-full">
                    <MapPin className="h-4 w-4 mr-2" />
                    Reportar Risco
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Community;
