
import Link from "next/link";
export default function MainNav() {
    return (
        <div className="flex items-baseline md:gap-10">
            <Link 
                href={"/"}
                className=" hidden md:flex ">Portfolio</Link>
            
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
                お問い合わせ
                </Link>
            </nav>
        </div>
    )
}