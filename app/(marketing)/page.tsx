import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
    return (
    <>
    <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container mx-auto text-center flex flex-col items-center gap-4 max-w-[64rem]">
            <Link
             href={"/"} 
             className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
            >           
             Xをフォローする
            </Link>
            <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                Portfolio
            </h1>
            <p className="text-muted-foreground mb-4 sm:text-xl leading-normal max-w-[42rem]" >
                このページはNext.js
                AppRouterで作られたものです。
            </p>
        </div >

        <div className="container mx-auto text-center space-x-4 ">
            <Link 
            href={"/login"} 
            className={cn(buttonVariants({ size: "lg" }))}
            >
            はじめる
            </Link>
            <Link 
            href={"/login"} 
            className={cn(buttonVariants({ size: "lg", variant:"outline" }))}
            target="_blank"
            rel="noreferrer"
            >
            Git
            </Link>
        </div>
    </section>
    </>
    ); 
}