
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, MessageSquare, Smartphone, Send, Settings } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Alerts = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const activeAlerts = [
    {
      id: 1,
      type: "Enchente",
      location: "Rio Tietê, São Paulo",
      severity: "Alto",
      time: "15:30",
      description: "Nível da água acima do normal. Evacuação preventiva recomendada.",
      affected: 1250
    },
    {
      id: 2,
      type: "Deslizamento",
      location: "Serra do Mar, Santos",
      severity: "Crítico",
      time: "14:45",
      description: "Solo saturado detectado. Risco iminente de deslizamento.",
      affected: 450
    }
  ];

  const notificationHistory = [
    { id: 1, type: "SMS", recipient: "+55 11 9****-1234", time: "15:32", status: "Enviado" },
    { id: 2, type: "WhatsApp", recipient: "+55 21 9****-5678", time: "15:30", status: "Entregue" },
    { id: 3, type: "Push", recipient: "App Mobile", time: "15:28", status: "Visualizado" },
  ];

  const handleSendAlert = () => {
    if (!phoneNumber || !message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Alerta Enviado",
      description: `Mensagem enviada para ${phoneNumber}`,
    });

    setPhoneNumber("");
    setMessage("");
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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="flex items-center gap-4 p-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Central de Alertas</h1>
            <p className="text-sm text-gray-600">
              Sistema de notificações SMS, WhatsApp e Push
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="active">Alertas Ativos</TabsTrigger>
            <TabsTrigger value="send">Enviar Alerta</TabsTrigger>
            <TabsTrigger value="history">Histórico</TabsTrigger>
            <TabsTrigger value="config">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            <div className="grid gap-4">
              {activeAlerts.map((alert) => (
                <Card key={alert.id} className="border-l-4 border-l-red-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-red-600" />
                        {alert.type} - {alert.location}
                      </CardTitle>
                      <Badge className={`${getSeverityColor(alert.severity)} text-white`}>
                        {alert.severity}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Alert variant="destructive">
                      <AlertDescription>
                        <p className="font-semibold mb-2">{alert.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span>Pessoas Afetadas: {alert.affected.toLocaleString()}</span>
                          <span>Horário: {alert.time}</span>
                        </div>
                      </AlertDescription>
                    </Alert>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Enviar Alerta Geral
                      </Button>
                      <Button size="sm" variant="outline">
                        Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="send" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    Enviar SMS/WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Número de Telefone</label>
                    <Input
                      placeholder="+55 11 99999-9999"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Mensagem</label>
                    <textarea
                      className="w-full p-3 border rounded-lg min-h-32"
                      placeholder="Digite sua mensagem de alerta..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <Button onClick={handleSendAlert} className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Alerta
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-green-600" />
                    Templates Predefinidos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "🚨 ALERTA ENCHENTE: Evacue a área imediatamente. Busque local seguro em terreno elevado.",
                    "⚠️ RISCO DESLIZAMENTO: Afaste-se de encostas. Procure abrigo em local seguro.",
                    "🔥 INCÊNDIO FLORESTAL: Mantenha-se longe da área. Siga rotas de evacuação.",
                    "💧 QUALIDADE DA ÁGUA: Água imprópria para consumo. Use apenas água tratada."
                  ].map((template, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full text-left justify-start h-auto p-3"
                      onClick={() => setMessage(template)}
                    >
                      {template}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Notificações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notificationHistory.map((notification) => (
                    <div key={notification.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{notification.type}</Badge>
                        <span className="font-medium">{notification.recipient}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-600">{notification.time}</span>
                        <Badge className={
                          notification.status === "Visualizado" ? "bg-green-500" :
                          notification.status === "Entregue" ? "bg-blue-500" : "bg-orange-500"
                        }>
                          {notification.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="config" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-gray-600" />
                    Configurações de API
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Twilio Account SID</label>
                    <Input placeholder="ACxxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Twilio Auth Token</label>
                    <Input type="password" placeholder="••••••••••••••••" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">WhatsApp Business API</label>
                    <Input placeholder="wa_xxxxxxxxxx" />
                  </div>
                  <Button className="w-full">Salvar Configurações</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Configurações de Notificação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>SMS Automático</span>
                    <Button variant="outline" size="sm">Ativado</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>WhatsApp Business</span>
                    <Button variant="outline" size="sm">Ativado</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Push Notifications</span>
                    <Button variant="outline" size="sm">Ativado</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Bluetooth Mesh (Offline)</span>
                    <Button variant="outline" size="sm">Desativado</Button>
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

export default Alerts;
