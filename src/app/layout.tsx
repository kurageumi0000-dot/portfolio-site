import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const notoJp = Noto_Sans_JP({
    subsets: ["latin"],
    variable: "--font-noto-jp",
    weight: ["400", "500", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "PORTFOLIO | Illustrator",
    description: "Illustrator's professional portfolio site",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className={`${inter.variable} ${notoJp.variable}`}>
            <body className="antialiased text-foreground bg-background">
                <div className="flex flex-col min-h-screen">
                    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-white/10 text-white">
                        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                            <a href="/" className="group flex items-center gap-2">
                                <span className="text-2xl font-bold tracking-tighter transition-all group-hover:tracking-normal">
                                    PORTFOLIO
                                </span>
                            </a>
                            <nav>
                                <ul className="flex items-center gap-8 text-sm font-medium">
                                    <li>
                                        <a href="/" className="relative py-2 hover:text-gray-300 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full">
                                            WORKS
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about" className="relative py-2 hover:text-gray-300 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full">
                                            ABOUT
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="relative py-2 hover:text-gray-300 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full">
                                            CONTACT
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/links" className="relative py-2 hover:text-gray-300 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full">
                                            LINKS
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>

                    <main className="flex-grow">
                        {children}
                    </main>

                    <footer className="py-16 mt-20 border-t border-border bg-gray-50">
                        <div className="container mx-auto px-6 flex flex-col items-center gap-6">
                            <span className="text-xl font-bold tracking-tighter text-gray-900">PORTFOLIO</span>
                            <p className="text-sm text-muted">
                                &copy; {new Date().getFullYear()} Illustrator Portfolio. All rights reserved.
                            </p>
                            <div className="flex gap-6 mt-2">
                                <span className="w-5 h-5 bg-muted/20 rounded-full" />
                                <span className="w-5 h-5 bg-muted/20 rounded-full" />
                                <span className="w-5 h-5 bg-muted/20 rounded-full" />
                            </div>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
