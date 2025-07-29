import {
  NavigationMenu, 
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Header({lang, locale}: {lang: string, locale: Record<string, string>}) {
  return (    
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <a href="/" className="dark:bg-transparent">{locale.Home}</a>
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#features" className="dark:bg-transparent motion-safe:animate-fade-slide-down">
                {locale.Features}
            </a>
        </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#how-it-works" className="dark:bg-transparent motion-safe:animate-fade-slide-down">{locale["How It Works"]}</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="#privacy" className="dark:bg-transparent motion-safe:animate-fade-slide-down">
                {locale.Privacy}
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
  </NavigationMenu>
  )
}

