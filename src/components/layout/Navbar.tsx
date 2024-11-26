import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

export const Navbar = () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col gap-4">
                                <Link href="/search" className="text-sm font-medium">
                                    Search product
                                </Link>
                                <Link href="/blog" className="text-sm font-medium">
                                    Blog
                                </Link>
                                <Link href="/about-us" className="text-sm font-medium">
                                    About us
                                </Link>
                                <Link href="/contact-us" className="text-sm font-medium">
                                    Contact us
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="flex">
                    <Button variant="ghost" className="text-xl">
                        Breath of travel
                    </Button>
                </div>

                <div className="hidden md:flex flex-1 flex-col justify-center items-center gap-4">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/search" legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                        Explore
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/blog" legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                        Blog
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Know Us</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[200px] p-2">
                                        <Link href="/about-us" className="block p-2 hover:bg-accent rounded-md">
                                            About us
                                        </Link>
                                        <Link href="/contact-us" className="block p-2 hover:bg-accent rounded-md">
                                            Contact us
                                        </Link>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="ml-auto">
                    <ThemeSwitcher />
                </div>
            </div>
        </div>
    );
};
