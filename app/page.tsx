import Image from "next/image";
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem > 
            <Link href="/dashboard" legacyBehavior passHref>
              <NavigationMenuLink>
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
      </NavigationMenuList>
      </NavigationMenu>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-[32px] row-start-2  items-center sm:items-start">
            <Image
              className="light:invert"
              src="/cow.png"
              alt="Next.js logo"
              width={360}
              height={76}
              priority
            />
          </main>
      </div>
    </>
  );
}
