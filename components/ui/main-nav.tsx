
import Link from "next/link";

export default function MainNav() {
    return (
        <div className="flex items-baseline md:gap-10 mx-20">
            <Link 
                href={"/"}
                className=" hidden md:flex ">
                <span className="font-bold hidden sm:inline-block">Empower</span>
            </Link>
            
            <nav className=" md:flex gap-6 hidden">
                <Link 
                    href={"/"}
                    className="text-lg sm:text-sm font-medium hover:text-foreground/50"
                > 
                Profile
                </Link>
                <Link 
                    href={"/"}
                    className="text-lg sm:text-sm font-medium hover:text-foreground/50"
                > 
                Price
                </Link>
                <Link 
                    href={"/"}
                    className="text-lg sm:text-sm font-medium hover:text-foreground/50"
                > 
                Docs
                </Link>
            </nav>
        </div>
    )
}