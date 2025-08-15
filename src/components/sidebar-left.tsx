"use client"

import * as React from "react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { CVSection } from "./cv-section"
import { data } from "@/stores/sidebar"

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (

    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader className="border-sidebar-border h-16 border-b">
        <p className="text-center font-bold text-xl tracking-wider font-bound">Resume</p>
      </SidebarHeader>
      <SidebarContent>
        <CVSection section={data} />
      </SidebarContent>
      <SidebarFooter>
        {/* <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu> */}
      </SidebarFooter>
    </Sidebar>
  )
}
