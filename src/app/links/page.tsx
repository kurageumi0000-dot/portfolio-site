import Link from "next/link";
import Image from "next/image";
import { getSNSLinks } from "@/libs/microcms";

export default async function LinksPage() {
    const links = await getSNSLinks();

    return (
        <div className="min-h-screen bg-gray-950 text-white selection:bg-white selection:text-gray-900">
            <div className="container mx-auto px-6 py-20 max-w-xl flex flex-col items-center">

                {/* Profile Section */}
                <div className="flex flex-col items-center mb-12 text-center">
                    <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-white/20 p-1 bg-gradient-to-tr from-gray-800 to-gray-900 shadow-xl">
                        <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-800">
                            {/* Fallback pattern if no image is available */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                                <span className="text-3xl font-bold tracking-tighter text-white/20 text-center px-4 leading-[0.8]">
                                    PORT FOLIO
                                </span>
                            </div>
                            {/* If you have a specific icon or friend icon, replace this placeholder */}
                            {/* <Image 
                src="/path-to-icon.jpg" 
                alt="Profile Icon" 
                fill 
                className="object-cover"
              /> */}
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight mb-2">Illustrator Name</h1>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        デジタルイラストレーター。幻想的な色彩と光の表現を得意としています。
                    </p>
                </div>

                {/* Links Section */}
                <div className="w-full space-y-4 mb-16">
                    {links.length > 0 ? (
                        links.map((link) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-center w-full py-4 px-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-lg active:scale-95"
                            >
                                {link.icon && (
                                    <div className="absolute left-6 h-6 w-6">
                                        <Image src={link.icon.url} alt="" fill className="object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                )}
                                <span className="font-semibold text-base">{link.title}</span>
                                <span className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                    →
                                </span>
                            </a>
                        ))
                    ) : (
                        <div className="text-center py-8 bg-white/5 rounded-2xl border border-dashed border-white/10">
                            <p className="text-gray-500 text-sm">リンクを読み込んでいます...</p>
                        </div>
                    )}
                </div>

                {/* Home Button */}
                <div className="mt-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-white/50 hover:text-white transition-colors uppercase"
                    >
                        ← Back to Portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
}
