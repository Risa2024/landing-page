import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
    return (
    <>
    <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container mx-auto text-center flex flex-col items-center gap-4 max-w-[64rem]">
            <Link
             href={siteConfig.links.x} 
             className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
            >           
             Xをフォローする
            </Link>
            <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                Portfolio
            </h1>
            <p className="text-muted-foreground mb-4 sm:text-xl leading-normal max-w-[42rem]" >
                このページはNext.js
                AppRouterで作られたものです。Next.js は React の機能を拡張したフレームワークです。
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
            href={siteConfig.links.github} 
            className={cn(buttonVariants({ size: "lg", variant:"outline" }))}
            target="_blank"
            rel="noreferrer"
            >
            Git
            </Link>
        </div>
    </section>
    <section id="features" className="container py-8 mx-auto md:py-12 lg:py-24
    bg-slate-50">
                <div className="text-center space-y-6 ">
                    <h2 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-5xl">
                        サービスの特徴
                    </h2>
                    <p className="text-muted-foreground sm:text-lg sm:leading-7">
                        サーバーサイドレンダリング（SSR）と静的サイト生成（SSG）という技術を使って、
                        ウェブサイトの表示速度を高速化したり、検索エンジン対策（SEO）を強化したりできます。
                        </p>
                </div>
                <div className="bg-background">
                    <div >
                        <div>
                            <svg></svg>
                        </div>
                    </div>
                </div>
            </section>
    </>
    ); 
}
