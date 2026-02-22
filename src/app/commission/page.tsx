import Link from "next/link";
import { CheckCircle2, Clock, DollarSign, ArrowRight, MessageSquare, Layout, Paintbrush, PackageCheck } from "lucide-react";

export default function CommissionPage() {
    const plans = [
        {
            title: "SNSアイコン・ヘッダー",
            price: "10,000円〜",
            delivery: "約1週間〜",
            icon: <Layout className="w-8 h-8 text-white/40" />,
            description: "Twitter(X)やYouTube等で使用するアイコンやヘッダー画像を制作します。",
        },
        {
            title: "キャラクター立ち絵",
            price: "30,000円〜",
            delivery: "約2〜3週間〜",
            icon: <Paintbrush className="w-8 h-8 text-white/40" />,
            description: "TRPGやゲーム制作、VTuber活動に。透過PNG形式での納品が可能です。",
        },
        {
            title: "一枚絵・キービジュアル",
            price: "60,000円〜",
            delivery: "約1ヶ月〜",
            icon: <PackageCheck className="w-8 h-8 text-white/40" />,
            description: "背景込みのイラスト。楽曲MVや同人誌、ポスター、商用案件向けに最適です。",
        },
    ];

    const workflow = [
        { step: "01", title: "お見積り", desc: "ご依頼内容のヒアリングと料金の確定", icon: <MessageSquare size={20} /> },
        { step: "02", title: "ラフ作成", desc: "構成の確認（リテイク2回まで無料）", icon: <Layout size={20} /> },
        { step: "03", title: "清書", desc: "詳細な描き込みと彩色", icon: <Paintbrush size={20} /> },
        { step: "04", title: "納品", desc: "完成データの送付", icon: <CheckCircle2 size={20} /> },
    ];

    const terms = [
        "著作権の譲渡は原則行っておりません。",
        "商用利用の場合は別途追加料金が発生します。",
        "ラフ決定後の大幅な仕様変更は追加料金を頂戴します。",
        "自作発言、二次配布、公序良俗に反する利用は禁止です。",
        "制作したイラストは実績としてSNS等に公開する場合がございます。",
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white selection:bg-white selection:text-gray-900">
            <div className="container mx-auto px-6 py-20 lg:py-32">

                {/* Hero Section */}
                <section className="max-w-3xl mb-24">
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">Commission.</h1>
                    <p className="text-xl text-gray-400 leading-relaxed font-medium">
                        イラスト制作のご依頼について。用途やご予算に合わせて柔軟に対応いたします。
                        まずはフォームよりお気軽にご相談ください。
                    </p>
                </section>

                {/* 1. Price & Delivery */}
                <section className="mb-32">
                    <div className="flex items-center gap-3 mb-10">
                        <span className="w-px h-8 bg-white/20" />
                        <h2 className="text-2xl font-bold tracking-tight">Price & Delivery</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan, index) => (
                            <div key={index} className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-white/5 transition-all duration-300 hover:bg-zinc-900 hover:border-white/10 overflow-hidden">
                                <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                    {plan.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                                        <DollarSign size={16} />
                                        <span>{plan.price}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                                        <Clock size={16} />
                                        <span>{plan.delivery}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {plan.description}
                                </p>
                                {/* Visual Accent */}
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
                                    <span className="text-6xl font-black italic select-none">PLAN</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. Workflow */}
                <section className="mb-32">
                    <div className="flex items-center gap-3 mb-12">
                        <span className="w-px h-8 bg-white/20" />
                        <h2 className="text-2xl font-bold tracking-tight">Workflow</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {workflow.map((item, index) => (
                            <div key={index} className="relative">
                                <div className="flex flex-col items-start">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                                            {item.icon}
                                        </div>
                                        <span className="text-4xl font-black text-white/10 tracking-tighter">{item.step}</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                                {index < workflow.length - 1 && (
                                    <div className="hidden md:block absolute top-6 -right-4 text-white/10">
                                        <ArrowRight size={20} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Terms & Conditions */}
                <section className="mb-32">
                    <div className="flex items-center gap-3 mb-10">
                        <span className="w-px h-8 bg-white/20" />
                        <h2 className="text-2xl font-bold tracking-tight">Terms & Conditions</h2>
                    </div>
                    <div className="p-10 rounded-[2rem] bg-zinc-900/50 border border-white/5">
                        <ul className="space-y-6">
                            {terms.map((term, index) => (
                                <li key={index} className="flex gap-4 items-start group">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
                                    <p className="text-gray-300 font-medium leading-relaxed">{term}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* 4. CTA Button */}
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
