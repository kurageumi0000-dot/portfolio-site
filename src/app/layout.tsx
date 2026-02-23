import type { Metadata } from "next";
import { Inter, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const zenKaku = Zen_Kaku_Gothic_New({
    subsets: ["latin"],
    variable: "--font-zen-kaku",
    weight: ["400", "500", "700", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio-site-alpha-gilt.vercel.app/"),
    title: {
        default: "海音くらげ | ポートフォリオ",
        template: "%s | 海音くらげ",
    },
    description: "デジタルイラストレーションとコンセプトアートを中心とした制作実績。",
    openGraph: {
        title: "海音くらげ | Portfolio",
        description: "デジタルイラストレーションとコンセプトアートを中心とした制作実績。",
        url: "./",
        siteName: "海音くらげ | Portfolio",
        images: [
            {
                url: "/ogp.jpg",
                width: 1200,
                height: 630,
            },
        ],
        locale: "ja_JP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "海音くらげ | Portfolio",
        description: "デジタルイラストレーションとコンセプトアートを中心とした制作実績。",
        images: ["/ogp.jpg"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className={`${inter.variable} ${zenKaku.variable}`}>
            <body className="antialiased text-foreground bg-background">
                <div className="flex flex-col min-h-screen">
                    <Header />

                    <main className="flex-grow">
                        {children}
                    </main>

                    <footer className="py-16 mt-20 border-t border-slate-100 bg-white/50 backdrop-blur-sm">
                        <div className="container mx-auto px-6 flex flex-col items-center gap-8">
                            <span className="text-xl font-black tracking-tighter text-slate-900 italic">海音くらげ</span>
                            <div className="flex items-center gap-6">
                                <p className="text-sm text-slate-500 font-medium">
                                    &copy; {new Date().getFullYear()} 海音くらげ. All rights reserved.
                                </p>
                                <span className="w-1 h-1 rounded-full bg-slate-200 hidden sm:block" />
                                <Link href="/privacy" className="text-xs text-slate-400 hover:text-accent-blue transition-colors font-bold tracking-widest uppercase">
                                    Privacy Policy
                                </Link>
                            </div>
                            <div className="flex gap-8">
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                </a>
                                <a href="mailto:contact@example.com" className="text-slate-400 hover:text-slate-900 transition-colors">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
                <Analytics />
            </body>
        </html>
    );
}
