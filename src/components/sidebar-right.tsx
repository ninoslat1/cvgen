import * as React from "react"
import { Blocks, Calendar, Home, Inbox, MessageCircleQuestion, Plus, Search, Settings2, Sparkles, Trash2 } from "lucide-react"

import { CVSection } from "@/components/cv-section"
import { DatePicker } from "@/components/date-picker"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { NavFavorites } from "./nav-favorites"
import { NavWorkspaces } from "./nav-workspaces"
import { NavSecondary } from "./nav-secondary"


export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh border-l lg:flex"
      {...props}
    >
      <SidebarHeader>
        
        
      </SidebarHeader>
      <SidebarContent>
        
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
