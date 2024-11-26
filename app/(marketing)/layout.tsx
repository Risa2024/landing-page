import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MainNav from "@/components/ui/main-nav";


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
                <nav>
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