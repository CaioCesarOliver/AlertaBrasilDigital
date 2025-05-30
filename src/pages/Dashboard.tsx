import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ui/themeToggle";
import { AlertTriangle, MapPin, Thermometer, Droplets, Wind, Zap, Users, Eye } from "lucide-react";

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import useLocalStorage from "@/hooks/useLocalStorage";
import useGeolocation from "@/hooks/useGeolocation";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

// Ícones customizados por severidade
const getCustomIcon = (severity: string) => {
  const color =
    severity === "Crítico" ? "red" :
      severity === "Alto" ? "orange" :
        severity === "Baixo" ? "green" : "blue";

  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userPosition, setUserPosition] = useLocalStorage("USER_MARKER", {
    latitude: -23.5505,
    longitude: -46.6333, // São Paulo
  });
  const location = useGeolocation();

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      setUserPosition({
        latitude: location.latitude,
        longitude: location.longitude,
      });
    }
  }, [location]);

  const alerts = [
    {
      type: "warning",
      title: "Risco de Enchente - Rio Tietê",
      location: "São Paulo, SP",
      time: "15:30",
      severity: "Alto",
      latitude: -23.5505,
      longitude: -46.6333,
    },
    {
      type: "info",
      title: "Monitoramento Normal - Serra do Mar",
      location: "Santos, SP",
      time: "14:45",
      severity: "Baixo",
      latitude: -23.9608,
      longitude: -46.3336,
    },
    {
      type: "critical",
      title: "Deslizamento Detectado",
      location: "Petrópolis, RJ",
      time: "13:20",
      severity: "Crítico",
      latitude: -22.5202,
      longitude: -43.1926,
    },
  ];

  const sensorData = [
    { name: "Temperatura", value: "28°C", icon: Thermometer, status: "normal" },
    { name: "Umidade", value: "75%", icon: Droplets, status: "warning" },
    { name: "Vento", value: "15 km/h", icon: Wind, status: "normal" },
    { name: "Energia Solar", value: "85%", icon: Zap, status: "good" },
  ];

  const getAlertVariant = (type: string) => {
    switch (type) {
      case "critical": return "destructive";
      case "warning": return "default";
      default: return "default";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Crítico": return "bg-red-500";
      case "Alto": return "bg-orange-500";
      case "Baixo": return "bg-green-500";
      default: return "default";
    }
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
          <ThemeToggle/>
        </div>
      </header>


      <main className="container mx-auto p-6">
        {/* MAPA */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              Mapa de Monitoramento em Tempo Real
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 w-full rounded-md overflow-hidden z-0 border-2 border-dashed border-blue-300">
              <MapContainer
                center={[userPosition.latitude, userPosition.longitude]}
                zoom={8}
                scrollWheelZoom={true}
                className="h-full w-full [&_.leaflet-bottom.leaflet-right]:hidden"
              >
                <TileLayer
                  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={[userPosition.latitude, userPosition.longitude]}>
                  <Popup>Você está aqui</Popup>
                </Marker>
                {alerts.map((alert, i) => (
                  <Marker
                    key={i}
                    position={[alert.latitude, alert.longitude]}
                    icon={getCustomIcon(alert.severity)}
                  >
                    <Popup>
                      <strong>{alert.title}</strong>
                      <br />
                      {alert.location} — {alert.severity}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            <div className="text-center">
              <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <p className="text-lg font-semibold text-blue-700">Mapa Interativo do Brasil</p>
              <p className="text-sm text-blue-600">Sensores IoT • Dados INMET • Previsões IA</p>
              <Button className="mt-4" variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Visualizar Mapa Completo
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Alerts Panel */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  Alertas Ativos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {alerts.map((alert, index) => (
                  <Alert key={index} variant={getAlertVariant(alert.type)}>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{alert.title}</p>
                          <p className="text-sm text-gray-600">{alert.location} • {alert.time}</p>
                        </div>
                        <Badge className={`${getSeverityColor(alert.severity)} text-white`}>
                          {alert.severity}
                        </Badge>
                      </div>
                    </AlertDescription>
                  </Alert>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sensor Data */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Dados dos Sensores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sensorData.map((sensor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <sensor.icon className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">{sensor.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{sensor.value}</p>
                      <div className={`w-2 h-2 rounded-full ${sensor.status === 'good' ? 'bg-green-500' :
                        sensor.status === 'warning' ? 'bg-orange-500' : 'bg-gray-500'
                        }`}></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-4 mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1,247</p>
                  <p className="text-sm text-gray-600">Pessoas Protegidas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">23</p>
                  <p className="text-sm text-gray-600">Estações Ativas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-gray-600">Alertas Hoje</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">89</p>
                  <p className="text-sm text-gray-600">Municípios</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
