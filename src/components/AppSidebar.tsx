
import { 
  Home, 
  AlertTriangle, 
  Bell, 
  MapPin, 
  Camera, 
  Zap, 
  Users, 
  MessageCircle, 
  Shield,
  BarChart3
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "Alerts",
    url: "/alerts",
    icon: Bell,
  },
  {
    title: "Evacuation",
    url: "/evacuation",
    icon: MapPin,
  },
  {
    title: "Drone Ops",
    url: "/drones",
    icon: Camera,
  },
  {
    title: "Resources",
    url: "/resources",
    icon: Zap,
  },
  {
    title: "Community",
    url: "/community",
    icon: Users,
  },
  {
    title: "Support",
    url: "/support",
    icon: MessageCircle,
  },
  {
    title: "Admin",
    url: "/admin",
    icon: Shield,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-8 w-8 text-blue-600" />
          <div>
            <h2 className="font-bold text-lg text-blue-900">DisasterRescueBR</h2>
            <p className="text-xs text-gray-600">Sistema de Emergência</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Sistema Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
