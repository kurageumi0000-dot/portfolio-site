import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { getCommission } from "@/libs/microcms";

export default async function CommissionPage() {
    const commission = await getCommission();

    if (!commission) {
        return (
            <div className="min-h-screen bg-white text-zinc-900 flex items-center justify-center">
                <p className="text-zinc-400 animate-pulse font-medium">読み込み中...</p>
            </div>
        );
    }

    const sections = [
        { title: "Price & Delivery", content: commission.price_info, id: "price" },
        { title: "Workflow", content: commission.workflow, id: "workflow" },
        { title: "Terms & Conditions", content: commission.notes, id: "terms" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#eafcff] via-white to-white text-zinc-800 selection:bg-accent-blue/20 selection:text-accent-blue overflow-hidden relative">

            {/* Background Decorations (Bubbles) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[5%] right-[10%] w-72 h-72 bg-accent-blue/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl" />
                {/* Small bubbles */}
                <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-accent-blue/20 rounded-full" />
                <div className="absolute top-[50%] right-[15%] w-5 h-5 bg-accent-blue/10 rounded-full" />
            </div>

            <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10">

                {/* Header Section */}
                <section className="max-w-4xl mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6 border border-accent-blue/20">
                        <Info size={14} />
                        <span>Guide & Pricing</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.2] md:leading-[1.1] text-zinc-900 text-balance break-keep">
                        Commission<span className="text-accent-blue">.</span>
                    </h1>
                    <p className="text-xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
                        イラスト制作のご依頼について。清潔感と信頼を大切に、
                        クライアント様のご要望に合わせた最適なプランをご提案いたします。
                    </p>
                </section>

                {/* Dynamic Sections from microCMS */}
                <div className="space-y-20 lg:space-y-32">
                    {sections.map((section, index) => (
                        <section key={section.id} className="relative">
                            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                                {/* Section Title Sidebar (Desktop) */}
                                <div className="lg:w-1/4">
                                    <div className="sticky top-32">
                                        <span className="text-xs font-bold text-accent-blue uppercase tracking-widest block mb-4">
                                            Section {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h2 className="text-3xl font-black text-zinc-900 tracking-tight leading-tight border-l-4 border-accent-blue pl-6">
                                            {section.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="lg:w-3/4 overflow-hidden">
                                    <div className="bg-white/90 backdrop-blur-md p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl border border-zinc-200/60 shadow-sm hover:shadow-xl hover:shadow-accent-blue/5 transition-all transition-duration-500">
                                        <div
                                            className="prose prose-zinc prose-lg max-w-none 
                      prose-headings:text-zinc-900 prose-headings:font-black prose-headings:tracking-tight
                      prose-p:text-zinc-600 prose-p:leading-relaxed
                      prose-li:text-zinc-700 prose-strong:text-zinc-900 prose-strong:font-bold
                      prose-a:text-accent-blue prose-a:no-underline hover:prose-a:underline
                      prose-hr:border-zinc-100
                      prose-ul:list-disc prose-ol:list-decimal
                      prose-img:rounded-2xl"
                                            dangerouslySetInnerHTML={{ __html: section.content || "" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* Wave Separator */}
                <div className="w-full h-24 lg:h-32 -mb-24 mt-20 relative z-10 text-white fill-current opacity-50">
                    <svg viewBox="0 0 1440 120" className="w-full h-full">
                        <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,106.7C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                    </svg>
                </div>

                {/* CTA Section */}
                <section className="mt-20 md:mt-32 p-8 md:p-12 lg:p-20 rounded-2xl md:rounded-[3rem] bg-zinc-900 text-white text-center flex flex-col items-center overflow-hidden relative">
                    {/* Subtle decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/20 rounded-full blur-3xl -mr-32 -mt-32 transition-transform hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl -ml-32 -mb-32" />

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-8 leading-tight relative z-10 text-balance">
                        制作の相談をはじめる
                    </h2>
                    <p className="text-zinc-400 mb-12 max-w-lg font-medium relative z-10">
                        具体的なイメージが決まっていなくても大丈夫です。
                        まずはご予算や用途など、お気軽にお聞かせください。
                    </p>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-accent-blue text-white font-black rounded-full transition-all hover:bg-accent-blue/80 hover:scale-105 active:scale-95 shadow-xl shadow-accent-blue/20"
                    >
                        <span>お問い合わせフォームへ進む</span>
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <p className="mt-8 text-zinc-500 text-xs font-bold tracking-widest uppercase">
                        Usually responds within 48 hours.
                    </p>
                </section>

            </div>
        </div>
    );
}