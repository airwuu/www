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
import {AnimatedSvg, FadeInText} from "@/components/ui/logo-anim"

export default function Home() {
  return (
    <div className="overflow-hidden h-screen">
    <div className="fixed inset-0 -z-100  bg-gradient-to-tr from-slate-600 via-slate-800 to-slate-950" />
    <div className="flex flex-row-reverse mr-5 pt-2 ">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="border-2 rounded-2xl px-1"> 
            <Link href="/dashboard" legacyBehavior passHref >
              <NavigationMenuLink className="text-xl">
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="border-2 rounded-2xl px-2"> 
            <Link href="/login" legacyBehavior passHref>
              <NavigationMenuLink className="text-xl">
               Login
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
      </NavigationMenuList>
      </NavigationMenu>
    </div>
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-[32px] pt-50 items-center sm:items-start">
            {/* <Image
              className="light:invert"
              src="/logo.svg"
              alt="logo"
              width={360}
              height={76}
              priority
            /> */}
            <AnimatedSvg width={300} height={300} className="text-blue-500" />
            <FadeInText/>
          </main>
      </div>
    </div>
  );
}
