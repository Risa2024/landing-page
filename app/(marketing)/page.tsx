import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
//import { classicNameResolver } from "typescript";

export default function IndexPage() {
    return (
    <>
    <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container mx-auto text-center flex flex-col items-center gap-4 max-w-[64rem]">
                     
             <svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" d="M13.614 2.31a.75.75 0 0 1 .456.69v6.998H18a.75.75 0 0 1 .653 1.12l-.492.87a35.748 35.748 0 0 1-7.05 8.842l-.796.725A.75.75 0 0 1 9.06 21v-6.939H5a.75.75 0 0 1-.653-1.119a35.801 35.801 0 0 1 6.675-8.773l1.778-1.71a.75.75 0 0 1 .814-.149Zm-7.33 10.251H9.81a.75.75 0 0 1 .75.75v5.983a34.247 34.247 0 0 0 6.153-7.796H13.32a.75.75 0 0 1-.75-.75V4.762l-.508.488a34.3 34.3 0 0 0-5.777 7.311Z" clipRule="evenodd"/>
            </svg>
            
            <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Empower
            </h1>
            <p className="text-muted-foreground mb-4 sm:text-xl leading-normal max-w-[42rem]" >
            This page is built with the Next.js App Router. Next.js is a framework that extends
             the capabilities of React.
            </p>
        </div >

        <div className="container mx-auto text-center space-x-4 ">
            <Link 
            href={"/login"} 
            className={cn(buttonVariants({ size: "lg" }))}
            >
            Get Started
            </Link>
            <Link 
            href={siteConfig.links.github} 
            className={cn(buttonVariants({ size: "lg", variant:"outline" }))}
            target="_blank"
            rel="noreferrer"
            >
            GitHub
            </Link>
        </div>
    </section>
    <section id="features" 
    className="container py-8 mx-auto md:py-12 lg:py-24 bg-slate-50 space-y-6">
                <div className="text-center space-y-6 max-w-[58rem] mx-auto">
                    <h2 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-5xl">
                    Web Front-End Services
                    </h2>
                    <p className="text-muted-foreground sm:text-lg sm:leading-7">
                    By utilizing technologies like Server-Side Rendering (SSR) and Static Site 
                    Generation (SSG), we can enhance website performance and improve search engine
                    optimization (SEO).
                        </p>
                </div>
                    
                
        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256" className="mb-4 ml-[-75px]">
    <g fill="none">
        <rect width="256" height="256" fill="#242938" rx="60"/>
        <path fill="#00D8FF" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656c0-10.303-8.352-18.656-18.656-18.656c-10.303 0-18.656 8.353-18.656 18.656c0 10.303 8.353 18.656 18.656 18.656Z"/>
        <path stroke="#00D8FF" strokeWidth="8.911" d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812h.004Z" clipRule="evenodd"/>
        <path stroke="#00D8FF" strokeWidth="8.911" d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723h.004Z" clipRule="evenodd"/>
        <path stroke="#00D8FF" strokeWidth="8.911" d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clipRule="evenodd"/>
    </g>
</svg>
                                <div className="space-y-2">
                                    <h3>React</h3>
                                    <p className="text-sm text-muted-foreground">
                                        It’s fast/efficient/supports mobile 
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 512 512" className="mb-4 ml-[-75px]">
    <path fill="currentColor" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"/>
</svg>
                                <div className="space-y-2">
                                    <h3>Next.js</h3>
                                    <p className="text-sm text-muted-foreground">
                                        It’s fast/efficient/supports mobile 
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256" className="mb-4 ml-[-75px]">
    <g fill="none">
        <rect width="256" height="256" fill="#242938" rx="60"/>
        <path fill="#41B883" d="M182 50h36l-90 155.25L38 50h68.85L128 86l20.7-36H182Z"/>
        <path fill="#41B883" d="m38 50l90 155.25L218 50h-36l-54 93.15L73.55 50H38Z"/>
        <path fill="#fff" d="M73.55 50L128 143.6L182 50h-33.3L128 86l-21.15-36h-33.3Z"/>
    </g>
</svg>
                                <div className="space-y-2">
                                    <h3>Vue</h3>
                                    <p className="text-sm text-muted-foreground">
                                        It’s fast/efficient/supports mobile 
                                    </p>
                                </div>
                        </div>
                        
                    </div>
                    <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256" className="mb-4 ml-[-75px]">
    <g fill="none">
        <rect width="256" height="256" fill="#242938" rx="60"/>
        <path fill="#E23237" d="M34.25 61.125L127.325 28l95.525 32.612L207.412 183.7L127.325 228l-78.787-43.725L34.25 61.125Z"/>
        <path fill="#B52E31" d="M222.85 60.612L127.325 28v200l80.087-44.3L222.85 60.613Z"/>
        <path fill="#fff" d="m127.469 51.375l-58 129l21.644-.438l11.687-29.149h51.875l12.7 29.375l20.637.437l-60.543-129.225Zm.143 41.412l19.625 40.982H110.5l17.169-40.982h-.057Z"/>
    </g>
</svg>
                                <div className="space-y-2">
                                    <h3>Angular</h3>
                                    <p className="text-sm text-muted-foreground">
                                        It’s fast/efficient/supports mobile 
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256" className="mb-4 ml-[-75px]" >
    <g fill="none">
        <rect width="256" height="256" fill="#242938" rx="60"/>
        <path fill="#00DC82" d="M138.787 189.333h68.772c2.184.001 4.33-.569 6.222-1.652a12.374 12.374 0 0 0 4.554-4.515a12.236 12.236 0 0 0-.006-12.332l-46.185-79.286a12.388 12.388 0 0 0-4.553-4.514a12.53 12.53 0 0 0-12.442 0a12.388 12.388 0 0 0-4.553 4.514l-11.809 20.287l-23.09-39.67a12.386 12.386 0 0 0-4.555-4.513a12.536 12.536 0 0 0-12.444 0a12.391 12.391 0 0 0-4.555 4.513L36.67 170.834a12.245 12.245 0 0 0-1.67 6.165c0 2.165.573 4.292 1.665 6.167a12.374 12.374 0 0 0 4.554 4.515a12.513 12.513 0 0 0 6.222 1.652h43.17c17.104 0 29.718-7.446 38.397-21.973l21.072-36.169l11.287-19.356l33.873 58.142h-45.16l-11.293 19.356Zm-48.88-19.376l-30.127-.007l45.16-77.518l22.533 38.759l-15.087 25.906c-5.764 9.426-12.312 12.86-22.48 12.86Z"/>
    </g>
</svg>
                                <div className="space-y-2">
                                    <h3>Nuxt.js</h3>
                                    <p className="text-sm text-muted-foreground">
                                        It’s fast/efficient/supports mobile 
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-background border p-2 rounded-lg">
                    <div className="flex flex-col justify-between p-6 h-[180px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256" className="mb-4 ml-[-75px]" >
    <g fill="none">
        <rect width="256" height="256" fill="#242938" rx="60"/>
        <path fill="#81CD39" d="M119.878 31.116c4.919-2.815 11.325-2.828 16.239 0c24.722 13.97 49.452 27.917 74.17 41.895c4.65 2.619 7.759 7.793 7.712 13.15v84.045c.035 5.579-3.382 10.877-8.287 13.436c-24.641 13.893-49.27 27.802-73.907 41.695c-5.019 2.87-11.554 2.649-16.418-.457c-7.387-4.282-14.787-8.544-22.175-12.822c-1.51-.9-3.212-1.616-4.278-3.08c.943-1.27 2.628-1.428 3.997-1.983c3.083-.981 5.916-2.555 8.748-4.082c.717-.49 1.591-.302 2.278.136c6.317 3.622 12.579 7.35 18.917 10.937c1.352.781 2.721-.256 3.877-.9c24.18-13.667 48.39-27.281 72.567-40.952c.896-.431 1.391-1.382 1.318-2.363c.017-27.725.004-55.454.009-83.18c.102-1.112-.542-2.136-1.549-2.592c-24.555-13.829-49.099-27.678-73.65-41.51a2.557 2.557 0 0 0-2.892-.005c-24.552 13.837-49.09 27.7-73.642 41.527c-1.003.457-1.676 1.464-1.557 2.58c.005 27.726 0 55.455 0 83.184a2.352 2.352 0 0 0 1.336 2.334c6.551 3.715 13.111 7.404 19.667 11.107c3.694 1.987 8.228 3.169 12.297 1.646c3.591-1.288 6.108-4.953 6.04-8.765c.034-27.563-.017-55.13.025-82.69c-.09-1.223 1.071-2.234 2.261-2.118c3.148-.022 6.3-.043 9.448.008c1.314-.03 2.218 1.288 2.056 2.52c-.013 27.738.034 55.476-.021 83.213c.008 7.393-3.029 15.437-9.867 19.054c-8.423 4.363-18.835 3.438-27.157-.746c-7.204-3.596-14.08-7.84-21.156-11.692c-4.918-2.545-8.318-7.864-8.283-13.439V86.161c-.052-5.468 3.181-10.736 7.975-13.317c24.637-13.903 49.27-27.818 73.902-41.728Z"/>
        <path fill="#81CD39" d="M141.372 89.335c10.745-.692 22.248-.41 31.917 4.884c7.487 4.056 11.637 12.57 11.769 20.887c-.209 1.121-1.382 1.74-2.453 1.663c-3.117-.004-6.236.043-9.353-.021c-1.323.051-2.091-1.168-2.257-2.337c-.896-3.98-3.067-7.921-6.812-9.841c-5.75-2.878-12.416-2.733-18.686-2.673c-4.577.242-9.499.639-13.377 3.33c-2.977 2.039-3.881 6.155-2.819 9.47c1.002 2.38 3.749 3.148 5.998 3.856c12.949 3.387 26.671 3.049 39.373 7.506c5.259 1.817 10.403 5.35 12.203 10.856c2.355 7.38 1.323 16.2-3.928 22.124c-4.258 4.875-10.459 7.529-16.644 8.97c-8.228 1.835-16.767 1.882-25.123 1.067c-7.857-.896-16.034-2.96-22.099-8.313c-5.187-4.504-7.72-11.522-7.469-18.294c.06-1.144 1.199-1.942 2.295-1.848c3.139-.025 6.279-.034 9.418.005c1.255-.09 2.184.994 2.249 2.176c.578 3.791 2.003 7.771 5.31 10.018c6.38 4.117 14.387 3.835 21.693 3.95c6.053-.268 12.848-.349 17.787-4.35c2.606-2.282 3.378-6.1 2.674-9.384c-.763-2.773-3.664-4.065-6.155-4.91c-12.783-4.043-26.659-2.576-39.318-7.149c-5.14-1.816-10.11-5.25-12.084-10.53c-2.755-7.473-1.493-16.717 4.308-22.44c5.656-5.695 13.82-7.888 21.583-8.672"/>
    </g>
</svg>
                                <div className="space-y-2">
                                    <h3>Node.js</h3>
                                    <p className="text-sm text-muted-foreground">
                                        It’s fast/efficient/supports mobile 
                                    </p>
                                
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="container mx-auto py-8 md:py-12 lg:py-24">
                <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
                <h2 className="font-bold text-3xl md:text-6xl">Contact Me</h2>
                <p className="text-muted-foreground sm:text-lg sm:leading-7">Feel free to contact me if you're interested.
                 </p>
                 <Link href={siteConfig.links.x}className="underline underline-offset-4"
                 target="_blank"
                 rel="noreferrer"
                 >Please contact us on X.
                 </Link>
                </div>
            </section>
    </>
    ); 
}
