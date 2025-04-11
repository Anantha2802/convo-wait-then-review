
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Calculator, LayoutDashboard, Target, BrainCircuit, Activity, User, Settings, HelpCircle } from "lucide-react";

// Menu items for clarity
const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "#",
    active: true,
  },
  {
    title: "Financial Calculator",
    icon: Calculator,
    url: "#calculator",
  },
  {
    title: "Goals Tracker",
    icon: Target,
    url: "#goals",
  },
  {
    title: "AI Insights",
    icon: BrainCircuit,
    url: "#insights",
  },
  {
    title: "Market Trends",
    icon: Activity,
    url: "#trends",
  },
];

const accountItems = [
  {
    title: "Profile",
    icon: User,
    url: "#profile",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "#settings",
  },
  {
    title: "Help & Support",
    icon: HelpCircle,
    url: "#help",
  },
];

export const FinancialSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h2 className="text-xl font-bold">FinPlan Pro</h2>
          <p className="text-xs text-muted-foreground">Financial Planning Made Easy</p>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild active={item.active}>
                    <a href={item.url} className="flex items-center">
                      <item.icon className="mr-2 h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center">
                      <item.icon className="mr-2 h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
