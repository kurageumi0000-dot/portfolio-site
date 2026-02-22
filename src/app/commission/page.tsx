import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCommission } from "@/libs/microcms";

export default async function CommissionPage() {
    const commission = await getCommission();

    if (!commission) {
        return (
            <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
                <p className="text-muted animate-pulse">読み込み中...</p>
            </div>
        );
    }

    const sections = [
        { title: "Price & Delivery", content: commission.price_info },
        { title: "Workflow", content: commission.workflow },
        { title: "Terms & Conditions", content: commission.notes },
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white selection:bg-white selection:text-gray-900">
            <div className="container mx-auto px-6 py-20 lg:py-32">

                {/* Hero Section */}
                <section className="max-w-3xl mb-24">
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">Commission.</h1>
                    <p className="text-xl text-gray-400 leading-relaxed font-medium">
                        イラスト制作のご依頼について。最新の料金目安や制作フローをご確認いただけます。
                    </p>
                </section>

                {/* Dynamic Sections from microCMS */}
                {sections.map((section, index) => (
                    <section key={index} className="mb-32">
                        <div className="flex items-center gap-3 mb-10">
                            <span className="w-px h-8 bg-white/20" />
                            <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
                        </div>

                        <div className="p-8 lg:p-12 rounded-[2rem] bg-zinc-900/40 border border-white/5 shadow-2xl">
                            <div
                                className="prose prose-invert prose-zinc max-w-none 
                prose-headings:tracking-tight prose-headings:font-bold
                prose-p:text-gray-400 prose-p:leading-relaxed
                prose-li:text-gray-300 prose-strong:text-white
                prose-hr:border-white/10"
                                dangerouslySetInnerHTML={{ __html: section.content }}
                            />
                        </div>
                    </section>
                ))}

                {/* CTA Section */}
                <section className="flex flex-col items-center text-center py-20 border-t border-white/5">
                    <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter mb-8 leading-tight">
                        Ready to start a project?
                    </h2>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-950 font-black rounded-full transition-all hover:scale-105 active:scale-95"
                    >
                        <span>お問い合わせフォームへ進む</span>
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <p className="mt-8 text-gray-500 text-sm font-medium tracking-widest uppercase">
                        Usually responds within 48 hours.
                    </p>
                </section>

            </div>
        </div>
    );
}
