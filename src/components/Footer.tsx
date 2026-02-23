import Link from "next/link";
import { getLinks } from "@/libs/microcms";
import { Instagram, Mail, Globe, ExternalLink, ShoppingCart, PenTool } from "lucide-react";

export default async function Footer() {
    const links = await getLinks();

    const getIcon = (type?: string) => {
        switch (type?.toLowerCase()) {
            case "x":
            case "twitter":
                return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
            case "instagram":
                return <Instagram size={20} />;
            case "pixiv":
                return <PenTool size={20} />;
            case "skeb":
                return <ShoppingCart size={20} />;
            case "mail":
                return <Mail size={20} />;
            case "globe":
            case "website":
                return <Globe size={20} />;
            default:
                return <ExternalLink size={20} />;
        }
    };

    return (
        <footer className="py-16 mt-20 border-t border-slate-100 bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 flex flex-col items-center gap-8">
                <Link href="/" className="text-xl font-black tracking-tighter text-slate-900 italic hover:text-accent-blue transition-colors">
                    海音くらげ
                </Link>

                <div className="flex items-center gap-6">
                    <p className="text-sm text-slate-500 font-medium">
                        &copy; {new Date().getFullYear()} 海音くらげ. All rights reserved.
                    </p>
                    <span className="w-1 h-1 rounded-full bg-slate-200 hidden sm:block" />
                    <Link href="/privacy" className="text-xs text-slate-400 hover:text-accent-blue transition-colors font-bold tracking-widest uppercase">
                        Privacy Policy
                    </Link>
                </div>

                {links.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-slate-900 transition-all hover:scale-110"
                                title={link.title}
                            >
                                {getIcon(link.iconType)}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </footer>
    );
}
