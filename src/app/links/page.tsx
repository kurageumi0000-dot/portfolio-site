import Link from "next/link";
import Image from "next/image";
import { getLinks } from "@/libs/microcms";
import { Twitter, Mail, Globe, ExternalLink, ArrowLeft, Instagram } from "lucide-react";

export default async function LinksPage() {
    const links = await getLinks();

    // Mapping for common social icons
    const getSocialIcon = (title: string, url: string) => {
        const lowerTitle = title.toLowerCase();
        const lowerUrl = url.toLowerCase();
        if (lowerTitle.includes("x") || lowerUrl.includes("x.com") || lowerUrl.includes("twitter.com")) {
            return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
        }
        if (lowerTitle.includes("instagram") || lowerUrl.includes("instagram.com")) return <Instagram size={20} />;
        if (lowerTitle.includes("mail") || lowerUrl.includes("mailto:")) return <Mail size={20} />;
        if (lowerTitle.includes("portfolio") || lowerTitle.includes("公式サイト")) return <Globe size={20} />;
        return <ExternalLink size={20} />;
    };

    return (
        <div className="min-h-screen text-slate-800 selection:bg-accent-blue/10 selection:text-accent-blue font-sans">
            <div className="container mx-auto px-6 py-16 max-w-xl flex flex-col min-h-screen items-center">

                {/* Profile Section */}
                <div className="flex flex-col items-center mb-12 text-center pt-8 animate-fade-in-up">
                    <div className="relative w-28 h-28 mb-6 rounded-full overflow-hidden shadow-2xl shadow-indigo-100 bg-white border-4 border-white shrink-0 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center">
                            <span className="text-xl font-black tracking-tighter text-slate-300 select-none group-hover:scale-110 transition-transform duration-500">
                                Icon
                            </span>
                        </div>
                    </div>
                    <h1 className="text-3xl font-black tracking-tight mb-3 text-slate-900">海音くらげ</h1>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium italic">
                        デジタルイラストレーション / コンセプトアート
                    </p>
                </div>

                {/* Links Section - Mobile First Large Buttons */}
                <div className="w-full space-y-4 mb-20 flex-grow animate-fade-in-up-delay-1">
                    {links.length > 0 ? (
                        links.map((link) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-between w-full py-5 px-8 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200/50 transition-all duration-500 hover:bg-white hover:border-accent-blue/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,194,255,0.15)] active:scale-[0.98]"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-accent-blue/10 group-hover:text-accent-blue transition-colors duration-300">
                                        {getSocialIcon(link.title, link.url)}
                                    </div>
                                    <span className="font-bold text-lg tracking-tight text-slate-700 group-hover:text-slate-900 transition-colors">{link.title}</span>
                                </div>
                                <div className="text-slate-300 group-hover:text-accent-blue transition-all duration-500 translate-x-1 group-hover:translate-x-0">
                                    <ArrowLeft size={18} className="rotate-180" />
                                </div>
                            </a>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white/40 backdrop-blur-sm rounded-3xl border-2 border-dashed border-slate-200">
                            <p className="text-slate-400 font-medium">リンクが見つかりませんでした。</p>
                        </div>
                    )}
                </div>

                {/* Home Button */}
                <div className="pb-12 animate-fade-in-up-delay-2">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-8 py-3 rounded-full bg-slate-100 text-xs font-black tracking-[0.2em] text-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-lg transition-all duration-300 uppercase"
                    >
                        <ArrowLeft size={14} />
                        <span>作品集へ戻る</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
