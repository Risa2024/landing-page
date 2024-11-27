
import Link from "next/link";

export default function MainNav() {
    return (
        <div className="flex items-baseline md:gap-10 mx-20">
            <Link 
                href={"/"}
                className=" hidden md:flex ">
                <span className="font-bold hidden sm:inline-block">Portfolio</span>
            </Link>
            
            <nav className=" md:flex gap-6 hidden">
                <Link 
                    href={"/"}
                    className="text-lg sm:text-sm font-medium hover:text-foreground/50"
                > 
                プロフィール
                </Link>
                <Link 
                    href={"/"}
                    className="text-lg sm:text-sm font-medium hover:text-foreground/50"
                > 
                価格
                </Link>
            </nav>
        </div>
    )
}