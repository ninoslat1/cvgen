import * as React from "react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { activeSection } from "@/stores/cv";

export function CVSection({
  section,
}: {
  section: { label: string; icon: React.ElementType }[]
}) {
  
  return (
    <>
      {section.map((item, index) => (
        <React.Fragment key={item.label}>
          <SidebarGroup
            className={`py-0 hover:bg-transparent ${index === 0 ? 'pt-2' : ''}`}
          >
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    className="text-sm font-medium hover:text-sidebar-accent-foreground transition-colors hover:bg-transparent gap-2 hover:cursor-pointer"
                    onClick={() => activeSection.set(item.label)}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {index < section.length - 1 && (
            <SidebarSeparator className="mx-0" />
          )}
        </React.Fragment>
      ))}
    </>
  )
}

