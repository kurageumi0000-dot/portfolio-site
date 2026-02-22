import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
    metadataBase: new URL("https://portfolio-site-alpha-gilt.vercel.app/"),
    title: {
        default: "海音くらげ | Portfolio",
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
        <html lang="ja" className={`${inter.variable} ${notoJp.variable}`}>
            <body className="antialiased text-foreground bg-background">
                <div className="flex flex-col min-h-screen">
                    <Header />

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
