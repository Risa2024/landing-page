import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MainNav from "@/components/ui/main-nav";
//import { ModeToggle } from "@/components/ui/Mode.Toggle";


export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <div>
        <header className="container z-40 bg-background">
            <div className="h-20 py-6 flex items-center justify-between">
                <MainNav/>
                <nav className="flex items-center space-x-4">
                    <Link href={"/login"} 
                    className={cn(
                        buttonVariants({ variant: "secondary", size:"sm" }),
                "px-4 "
                )}
                >
                contact
                </Link>

                    <Link href={"/login"} 
                    className={cn(
                        buttonVariants({ variant: "secondary", size:"sm" }),
                "px-4 "
                )}
                >
                Login
                </Link>
                
                </nav>
                
            </div>
        </header>  
        <main>{children}</main> 
    </div>
    );
}


