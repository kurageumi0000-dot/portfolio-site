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
        { title: "料金と納期", content: commission.price_info, id: "price" },
        { title: "制作の流れ", content: commission.workflow, id: "workflow" },
        { title: "注意事項・利用規約", content: commission.notes, id: "terms" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#eafcff] via-white to-white text-zinc-800 selection:bg-accent-blue/20 selection:text-accent-blue overflow-hidden relative">

            {/* Background Decorations (Floating Bubbles) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[5%] right-[10%] w-56 h-56 bg-accent-blue/5 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute bottom-[10%] left-[5%] w-64 h-64 bg-accent-blue/8 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: '1.5s' }} />
                {/* Small floating bubbles */}
                <div className="absolute top-[20%] left-[15%] w-2.5 h-2.5 bg-accent-blue/20 rounded-full animate-float-fast" />
                <div className="absolute top-[50%] right-[15%] w-4 h-4 bg-accent-blue/10 rounded-full animate-float-medium" style={{ animationDelay: '2.5s' }} />
                <div className="absolute top-[35%] right-[30%] w-2 h-2 bg-accent-blue/25 rounded-full animate-float-fast" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">

                {/* Header Section */}
                <section className="max-w-3xl mb-16 lg:mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-[10px] font-bold uppercase tracking-widest mb-5 border border-accent-blue/20">
                        <Info size={12} />
                        <span>制作のご案内</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-5 leading-[1.2] text-zinc-900 text-balance break-keep">
                        ご依頼について<span className="text-accent-blue">.</span>
                    </h1>
                    <p className="text-base md:text-lg text-zinc-500 leading-relaxed font-medium max-w-xl">
                        イラスト制作のご依頼について。清潔感と信頼を大切に、
                        クライアント様のご要望に合わせた最適なプランをご提案いたします。
                    </p>
                </section>

                {/* Dynamic Sections from microCMS */}
                <div className="space-y-14 lg:space-y-20">
                    {sections.map((section, index) => (
                        <section
                            key={section.id}
                            className="relative animate-fade-in-up"
                            style={{ animationDelay: `${0.1 + index * 0.15}s` }}
                        >
                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                                {/* Section Title Sidebar */}
                                <div className="lg:w-1/4">
                                    <div className="sticky top-28">
                                        <span className="text-[10px] font-bold text-accent-blue uppercase tracking-widest block mb-3">
                                            Section {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h2 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight leading-snug border-l-[3px] border-accent-blue pl-4">
                                            {section.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="lg:w-3/4 overflow-hidden">
                                    <div className="bg-white/90 backdrop-blur-md p-5 md:p-7 lg:p-10 rounded-2xl md:rounded-3xl border border-zinc-200/60 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-blue/5 transition-all duration-300">
                                        <div
                                            className="prose prose-zinc prose-sm md:prose-base max-w-none 
                      prose-headings:text-zinc-900 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-base md:prose-headings:text-lg
                      prose-p:text-zinc-600 prose-p:leading-7 prose-p:text-sm md:prose-p:text-base
                      prose-li:text-zinc-700 prose-li:text-sm md:prose-li:text-base
                      prose-strong:text-zinc-900 prose-strong:font-bold
                      prose-a:text-accent-blue prose-a:no-underline hover:prose-a:underline
                      prose-hr:border-zinc-100
                      prose-ul:list-disc prose-ol:list-decimal
                      prose-img:rounded-xl"
                                            dangerouslySetInnerHTML={{ __html: section.content || "" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* Wave Separator */}
                <div className="w-full h-16 lg:h-24 -mb-16 mt-14 relative z-10 text-white fill-current opacity-40">
                    <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
                        <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,106.7C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                    </svg>
                </div>

                {/* CTA Section */}
                <section className="mt-14 md:mt-20 p-6 md:p-10 lg:p-16 rounded-2xl md:rounded-[2.5rem] bg-deep-sea text-white text-center flex flex-col items-center overflow-hidden relative group animate-fade-in-up-delay-3">
                    {/* Subtle decoration */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-accent-blue/20 rounded-full blur-3xl -mr-24 -mt-24 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-blue/10 rounded-full blur-3xl -ml-24 -mb-24 transition-transform duration-700 group-hover:scale-110" />

                    <h2 className="text-xl md:text-3xl font-black tracking-tight mb-5 leading-snug relative z-10 text-balance">
                        制作の相談をはじめる
                    </h2>
                    <p className="text-zinc-400 mb-8 max-w-md text-sm font-medium relative z-10 leading-relaxed">
                        具体的なイメージが決まっていなくても大丈夫です。
                        まずはご予算や用途など、お気軽にお聞かせください。
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-accent-blue text-white font-bold rounded-full transition-all duration-300 hover:bg-accent-blue/80 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-accent-blue/30 active:scale-95"
                    >
                        <span className="text-sm">お問い合わせフォームへ進む</span>
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <p className="mt-6 text-zinc-500 text-[10px] font-bold tracking-widest uppercase">
                        通常、2〜3営業日以内にご返信いたします。
                    </p>
                </section>

            </div>
        </div>
    );
}