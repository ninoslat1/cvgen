import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useStore } from '@nanostores/react'
import { cvTitle } from '@/stores/cv'
import { useRef } from "react"

export default function AppSidebar() {
  const $cvTitle = useStore(cvTitle)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault() // biar nggak bikin newline
      inputRef.current?.blur()
    }
  }
  
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbItem>
                  <textarea
                    ref={inputRef}
                    value={$cvTitle}
                    onChange={(e) => cvTitle.set(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="resize-none bg-transparent py-1 px-2 border-none focus:border-blue-500 focus:border-2 rounded-sm"
                    rows={1}
                  />
                </BreadcrumbItem>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="bg-muted/50 mx-auto h-24 w-full max-w-3xl rounded-xl" />
          <div className="bg-muted/50 mx-auto h-[100vh] w-full max-w-3xl rounded-xl" />
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  )
}
