// components/AppSidebar.tsx

"use client";

import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Settings } from "lucide-react";

interface AppSidebarProps {
  position?: "left" | "right";
}

export function AppSidebar({ position = "left" }: AppSidebarProps) {
  return (
    <SidebarProvider>
      <Sidebar className={`w-64 ${position === "left" ? "border-r" : "border-l"}`}>
        <SidebarTrigger />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>{`Menu ${position === "left" ? "Kiri" : "Kanan"}`}</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <a href="#" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  {position === "left" ? "Beranda" : "Info"}
                </a>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <a href="#" className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  {position === "left" ? "Pengaturan" : "Akun"}
                </a>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
