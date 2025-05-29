import { SidebarTrigger } from "@/components/ui/sidebar";
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
  const [selectedAlert, setSelectedAlert] = useState(null);

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
                      <Button size="sm" variant="outline" onClick={() => openModal(alert)}>
                        Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Modal */}
      {isModalOpen && selectedAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={`
              bg-white w-full max-w-md h-[80vh] overflow-y-auto rounded-lg shadow-lg border-8
              ${getBorderColor(selectedAlert.severity)} relative p-6
              transform transition-all duration-300 ease-in-out
              ${showModalContent ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
            style={{ boxShadow: `0 0 15px 5px ${getShadowColor(selectedAlert.severity)}` }}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
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
