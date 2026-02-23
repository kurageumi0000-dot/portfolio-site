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
        <div className="min-h-screen bg-zinc-50/50 text-zinc-800 selection:bg-cyan-100 selection:text-cyan-900">
            <div className="container mx-auto px-6 py-20 lg:py-32">

                {/* Header Section */}
                <section className="max-w-4xl mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-widest mb-6">
                        <Info size={14} />
                        <span>Guide & Pricing</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.2] md:leading-[1.1] text-zinc-900 text-balance break-keep">
                        Commission<span className="text-cyan-500">.</span>
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
                                        <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest block mb-4">
                                            Section {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h2 className="text-3xl font-black text-zinc-900 tracking-tight leading-tight border-l-4 border-cyan-500 pl-6">
                                            {section.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="lg:w-3/4">
                                    <div className="bg-white p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow">
                                        <div
                                            className="prose prose-zinc prose-lg max-w-none 
                      prose-headings:text-zinc-900 prose-headings:font-black prose-headings:tracking-tight
                      prose-p:text-zinc-600 prose-p:leading-relaxed
                      prose-li:text-zinc-700 prose-strong:text-zinc-900 prose-strong:font-bold
                      prose-a:text-cyan-600 prose-a:no-underline hover:prose-a:underline
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

                {/* CTA Section */}
                <section className="mt-20 md:mt-32 p-8 md:p-12 lg:p-20 rounded-2xl md:rounded-[3rem] bg-zinc-900 text-white text-center flex flex-col items-center overflow-hidden relative">
                    {/* Subtle decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-8 leading-tight relative z-10 text-balance">
                        制作の相談をはじめる
                    </h2>
                    <p className="text-zinc-400 mb-12 max-w-lg font-medium relative z-10">
                        具体的なイメージが決まっていなくても大丈夫です。
                        まずはご予算や用途など、お気軽にお聞かせください。
                    </p>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-cyan-500 text-white font-black rounded-full transition-all hover:bg-cyan-400 hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/20"
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