import Link from "next/link";
import Image from "next/image";
import { getLinks } from "@/libs/microcms";

export default async function LinksPage() {
    const links = await getLinks();

    return (
        <div className="min-h-screen bg-gray-950 text-white selection:bg-white selection:text-gray-900 font-sans">
            <div className="container mx-auto px-6 py-16 max-w-xl flex flex-col min-h-screen items-center">

                {/* Profile Section */}
                <div className="flex flex-col items-center mb-12 text-center pt-8">
                    <div className="relative w-28 h-28 mb-6 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl ring-1 ring-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center">
                            <span className="text-4xl font-black tracking-tighter text-white/10 select-none">
                                ICON
                            </span>
                        </div>
                        {/* 
            プロフィール画像を設定する場合（例: /public/profile.jpg がある場合）
            <Image 
              src="/profile.jpg" 
              alt="Profile" 
              fill 
              className="object-cover"
              priority
            /> 
            */}
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight mb-3">海音くらげ</h1>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
                        デジタルイラストレーション / コンセプトアート
                    </p>
                </div>

                {/* Links Section - Mobile First Large Buttons */}
                <div className="w-full space-y-4 mb-20 flex-grow">
                    {links.length > 0 ? (
                        links.map((link) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-center w-full py-5 px-8 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] active:scale-[0.98]"
                            >
                                <div className="flex items-center gap-4">
                                    {link.icon && (
                                        <div className="relative h-6 w-6 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                                            <Image
                                                src={link.icon.url}
                                                alt=""
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    )}
                                    <span className="font-bold text-lg tracking-wide">{link.title}</span>
                                </div>
                                {/* Subtle right arrow indication */}
                                <div className="absolute right-8 opacity-0 group-hover:opacity-40 transition-all duration-500 translate-x-4 group-hover:translate-x-0 hidden sm:block">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </a>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white/5 rounded-3xl border-2 border-dashed border-white/5">
                            <p className="text-gray-600 font-medium">リンクが見つかりませんでした。</p>
                        </div>
                    )}
                </div>

                {/* Home Button */}
                <div className="pb-12">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-black tracking-[0.2em] text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 uppercase"
                    >
                        <span>←</span>
                        <span>作品集へ戻る</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
