import { SidebarTrigger } from "@/components/ui/sidebar";
import ThemeToggle from "@/components/ui/themeToggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, MessageSquare, Smartphone, Send, Settings, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";



const Alerts = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState<any>(null);

  // Estado para controlar a animação da modal
  const [showModalContent, setShowModalContent] = useState(false);

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

  // Cores para severidade
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Crítico": return "bg-red-500";
      case "Alto": return "bg-orange-500";
      case "Médio": return "bg-yellow-500";
      case "Baixo": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getBorderColor = (severity: string) => {
    switch (severity) {
      case "Crítico": return "border-red-600";
      case "Alto": return "border-orange-500";
      case "Médio": return "border-yellow-500";
      case "Baixo": return "border-green-500";
      default: return "border-gray-400";
    }
  };

  const getTextColor = (severity: string) => {
    switch (severity) {
      case "Crítico": return "text-red-600";
      case "Alto": return "text-orange-600";
      case "Médio": return "text-yellow-600";
      case "Baixo": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  const getShadowColor = (severity: string) => {
    switch (severity) {
      case "Crítico": return "rgba(220,38,38,0.6)";   // vermelho
      case "Alto": return "rgba(249,115,22,0.6)";     // laranja
      case "Médio": return "rgba(202,138,4,0.6)";     // amarelo
      case "Baixo": return "rgba(22,163,74,0.6)";     // verde
      default: return "rgba(107,114,128,0.6)";        // cinza
    }
  };

  const openModal = (alert: any) => {
    setSelectedAlert(alert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // inicia animação de fechamento
    setShowModalContent(false);
    // após 300ms, fecha realmente a modal e limpa o alert
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedAlert(null);
    }, 300);
  };

  // Ao abrir modal, ativa animação de entrada
  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => setShowModalContent(true), 10);
    }
  }, [isModalOpen]);

  // Função para enviar alerta via toast
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <header className="bg-white border-b dark:bg-gray-900 dark:border-gray-800">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Central de Alertas</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sistema de notificações SMS, WhatsApp e Push
              </p>
            </div>
          </div>
          <ThemeToggle />
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

          {/* Aba Alertas Ativos */}
          <TabsContent value="active" className="space-y-4">
            <div className="grid gap-4">
              {activeAlerts.map((alert) => (
                <Card key={alert.id} className={`border-l-4 ${getBorderColor(alert.severity)}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Bell className={`h-5 w-5 ${getTextColor(alert.severity)}`} />
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
                      <Button size="sm" className={`bg-red-600 hover:bg-red-700`}>
                        Enviar Alerta Geral
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => openModal(alert)}>
                        Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Aba Enviar Alerta */}
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
                    "🌪️ TEMPORAL FORTE: Proteja-se em local seguro. Evite sair até novo aviso.",
                  ].map((template, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="text-left"
                      onClick={() => setMessage(template)}
                    >
                      {template}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Aba Histórico */}
          <TabsContent value="history">
            <div className="space-y-4">
              {notificationHistory.length === 0 && (
                <p className="text-center text-gray-500">Nenhuma notificação enviada ainda.</p>
              )}
              {notificationHistory.map((item) => (
                <Card key={item.id} className="border-l-4 border-blue-500">
                  <CardContent className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{item.type}</p>
                      <p className="text-sm text-gray-600">{item.recipient}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{item.time}</p>
                      <Badge className="bg-green-500 text-white">{item.status}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Aba Configurações */}
          <TabsContent value="config" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-gray-600" />
                  Configurações do Sistema
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Aqui você pode configurar parâmetros do sistema, como números de emergência, horários de alerta, etc.</p>
                {/* Exemplo de configuração */}
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block mb-1 font-medium">Número de Emergência</label>
                    <Input placeholder="+55 11 190" />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Horário para envio de alertas automáticos</label>
                    <Input type="time" />
                  </div>
                  <Button>Salvar Configurações</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Modal de detalhes do alerta */}
      {isModalOpen && selectedAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={`
        bg-white dark:bg-gray-900 w-full max-w-md h-[80vh] overflow-y-auto rounded-lg shadow-lg border-2
        ${getBorderColor(selectedAlert.severity)} relative p-6
        transform transition-all duration-300 ease-in-out
        ${showModalContent ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
            style={{ boxShadow: `0 0 15px 5px ${getShadowColor(selectedAlert.severity)}` }}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={closeModal}
              aria-label="Fechar modal"
            >
              <X />
            </button>
            <h2 className={`text-2xl font-bold mb-4 ${getTextColor(selectedAlert.severity)}`}>
              {selectedAlert.type} - {selectedAlert.location}
            </h2>
            <p className="mb-2">{selectedAlert.description}</p>
            <p><strong>Severidade:</strong> {selectedAlert.severity}</p>
            <p><strong>Horário:</strong> {selectedAlert.time}</p>
            <p><strong>Pessoas Afetadas:</strong> {selectedAlert.affected.toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alerts;
