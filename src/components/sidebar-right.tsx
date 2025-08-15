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
import { activeSection } from "@/stores/cv"
import { useStore } from "@nanostores/react"
import Detail from "./react/detail-info"
import { Separator } from "./ui/separator"


export function SidebarRight({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const section = useStore(activeSection)
  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh border-l lg:flex w-1/5"
      {...props}
    >
      <SidebarHeader>
        
        
      </SidebarHeader>
      <SidebarContent className="px-4">
        <p className='font-bold font-bound text-lg'>Personal Info</p>
        <Separator/>
        {section === "Personal Info" && <Detail/>}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
