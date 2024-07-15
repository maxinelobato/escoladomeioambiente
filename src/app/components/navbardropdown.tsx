'use client'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/components/ui/collapsible'
import React, { JSX, SVGProps } from 'react'
import { EmaLogo } from './emalogo'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function NavbarDropdown() {
  const currentPath = usePathname()
  return (
    <>
      <header className="fixed z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start">
        <nav className="relative z-50 mx-2 mt-6 w-full max-w-screen-xl rounded-2xl bg-white px-4 py-3 shadow-sm shadow-black/30 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800 md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto">
          <div className="container flex h-16 items-center justify-end px-4 md:px-6">
            <div className="container flex px-0">
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <EmaLogo />
              </Link>
            </div>
            <nav className="hidden lg:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      key="home"
                      href="/"
                      className={
                        currentPath === '/'
                          ? 'text-sm font-semibold text-green-500'
                          : 'font-semibold text-black'
                      }
                      aria-label="home"
                    >
                      Início
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-semibold text-black hover:text-green-500">
                      Cursos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-48 grid-cols-1 gap-4 p-4">
                        <ListItem
                          key="home"
                          href="/"
                          className={
                            currentPath === '/'
                              ? 'text-sm font-semibold'
                              : 'font-semibold text-black'
                          }
                        >
                          Curso 1
                        </ListItem>
                        <ListItem
                          key="home"
                          href="/"
                          className={
                            currentPath === '/'
                              ? 'text-sm font-semibold'
                              : 'font-semibold text-black'
                          }
                        >
                          Curso 2
                        </ListItem>
                        <ListItem
                          key="home"
                          href="/"
                          className={
                            currentPath === '/'
                              ? 'text-sm font-semibold'
                              : 'font-semibold text-black'
                          }
                        >
                          Curso 3
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/blog"
                      className={
                        currentPath === '/blog'
                          ? 'text-sm font-semibold text-green-500'
                          : 'font-semibold text-black'
                      }
                      aria-label="blog"
                    >
                      Blog
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <div className="gap-4 p-4">
                      <NavigationMenuLink
                        key="ebooks"
                        href="/ebooks"
                        className={
                          currentPath === '/ebooks'
                            ? 'h-auto w-full text-sm font-semibold text-green-500 transition-colors'
                            : 'font-semibold text-black'
                        }
                        aria-label="ebooks"
                      >
                        EBooks
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <div className="gap-4 p-0">
                      <NavigationMenuLink
                        key="contact"
                        href="/contact"
                        className={
                          currentPath === '/contact'
                            ? 'h-auto w-full text-sm font-semibold text-green-500 transition-colors'
                            : 'font-semibold text-black'
                        }
                        aria-label="contact"
                      >
                        Contato
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-xs">
                  <div className="flex flex-col gap-4 p-4">
                    <Link href="/" className="flex items-center gap-2">
                      <EmaLogo />
                    </Link>
                    <nav className="mt-4 grid gap-2">
                      <Link
                        href="/"
                        className="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors"
                      >
                        Início
                      </Link>
                      <Collapsible className="grid gap-2 bg-white/40">
                        <CollapsibleTrigger className="flex items-center justify-between bg-white/40 px-3 py-2 text-sm font-medium transition-colors hover:bg-white/40 [&[data-state=open]>svg]:rotate-90">
                          Cursos
                          <ChevronRightIcon className="h-5 w-5 transition-transform" />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="-mx-6 grid gap-2 p-6">
                            <Link
                              href="/"
                              className="group flex h-auto w-full items-center justify-start gap-2 rounded-md bg-white/40 p-3 text-sm font-medium transition-colors hover:bg-white/40 hover:text-black focus:bg-white/40 focus:text-black focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/40 data-[state=open]:bg-white/40"
                            >
                              <BoxIcon className="h-5 w-5" />
                              <span>Curso 1</span>
                            </Link>
                            <Link
                              href="/"
                              className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group flex h-auto w-full items-center justify-start gap-2 rounded-md p-3 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            >
                              <BoxIcon className="h-5 w-5" />
                              <span>Curso 2</span>
                            </Link>
                            <Link
                              href="/"
                              className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group flex h-auto w-full items-center justify-start gap-2 rounded-md p-3 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            >
                              <BoxIcon className="h-5 w-5" />
                              <span>Curso 3</span>
                            </Link>
                            <Link
                              href="/"
                              className="bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group flex h-auto w-full items-center justify-start gap-2 rounded-md p-3 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            >
                              <BoxIcon className="h-5 w-5" />
                              <span>Curso 4</span>
                            </Link>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                      <Link
                        href="/blog"
                        className="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors"
                      >
                        Blog
                      </Link>
                      <Link
                        href="/ebooks"
                        className="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors"
                      >
                        E-Books
                      </Link>
                      <Link
                        href="/contact"
                        className="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors"
                      >
                        Contato
                      </Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>
      <div className="mx-auto max-w-screen-xl px-4 pb-10 pt-12 sm:px-6 md:pt-0 lg:px-8"></div>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

function BoxIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
