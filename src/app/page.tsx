import Image from "next/image";
import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import { getWorks, getNewsList } from "@/libs/microcms";
import { News } from "@/types/news";

export default async function Home() {
    const works = await getWorks("original");
    const newsItems = await getNewsList(3);

    return (
        <div className="pb-0">
            {/* 1. Hero Section: Full Screen & Dreamy */}
            <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/main-visual.png"
                        alt="Main Visual"
                        fill
                        className="object-cover object-center scale-105 animate-float-medium"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/80" />
                </div>

                {/* Catchphrase */}
                <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight text-slate-900 mb-6 drop-shadow-sm">
                        一瞬の「可愛い」を、<br className="md:hidden" />永遠の「宝物」に<span className="text-accent-blue">。</span>
                    </h2>
                    <p className="text-lg md:text-2xl text-slate-700 font-bold tracking-widest uppercase opacity-80">
                        Illustrator & Concept Artist
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-900">Scroll</span>
                    <div className="w-[1px] h-12 bg-slate-900" />
                </div>
            </div>

            {/* 2. News Section: Refined List */}
            <section className="py-24 lg:py-32 bg-white/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b-2 border-slate-900/5 pb-8">
                        <div>
                            <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 mb-3">News</h3>
                            <p className="text-xs font-black tracking-[0.2em] uppercase text-slate-400">Latest Updates</p>
                        </div>
                        <Link href="/news" className="group flex items-center gap-3 text-sm font-black text-slate-900 hover:text-accent-blue transition-colors">
                            VIEW ALL
                            <span className="w-8 h-[2px] bg-slate-900 group-hover:bg-accent-blue transition-all group-hover:w-12" />
                        </Link>
                    </div>

                    <div className="space-y-1">
                        {newsItems.length > 0 ? (
                            newsItems.map((news: News) => (
                                <Link key={news.id} href={`/news/${news.id}`} className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 transition-all hover:translate-x-2">
                                    <div className="flex items-center gap-6 shrink-0">
                                        <time className="text-sm font-black text-slate-300 tabular-nums">
                                            {new Date(news.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                                        </time>
                                        <span className={`px-4 py-1 text-[10px] font-black tracking-widest uppercase rounded-full border ${news.category === 'Important' ? 'bg-rose-50 text-rose-500 border-rose-100' :
                                            news.category === 'Update' ? 'bg-blue-50 text-blue-500 border-blue-100' :
                                                news.category === 'Event' ? 'bg-amber-50 text-amber-500 border-amber-100' :
                                                    'bg-slate-50 text-slate-500 border-slate-100'
                                            }`}>
                                            {news.category}
                                        </span>
                                    </div>
                                    <h4 className="flex-grow text-lg md:text-xl font-bold text-slate-800 group-hover:text-accent-blue transition-colors">
                                        {news.title}
                                    </h4>
                                    <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-accent-blue font-black">→</span>
                                </Link>
                            ))
                        ) : (
                            <p className="text-slate-400 py-10 font-medium italic">No news to display.</p>
                        )}
                    </div>
                </div>
            </section>

            {/* 3. Selected Works Section */}
            <section className="py-24 lg:py-40">
                <div className="container mx-auto px-6 mb-16 lg:mb-24 text-center md:text-left">
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 mb-4 italic">Selected Works</h3>
                    <p className="text-sm font-black tracking-[0.2em] uppercase text-slate-400">実績（Original）</p>
                </div>

                <div className="container mx-auto px-4 sm:px-6">
                    {works.length > 0 ? (
                        <>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
                                {works.slice(0, 6).map((work) => (
                                    <WorkCard key={work.id} work={work} />
                                ))}
                            </div>

                            {works.length > 6 && (
                                <div className="mt-20 text-center">
                                    <Link
                                        href="/works"
                                        className="group inline-flex items-center gap-4 px-10 py-5 bg-white border-2 border-slate-900/5 rounded-full text-slate-900 font-black text-sm tracking-widest hover:border-accent-blue hover:text-accent-blue transition-all duration-300"
                                    >
                                        すべての実績を見る
                                        <span className="w-8 h-[2px] bg-slate-400 group-hover:bg-accent-blue transition-all group-hover:w-16" />
                                    </Link>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-32 border border-dashed rounded-[3rem] border-slate-200">
                            <p className="text-slate-400 text-lg font-medium">作品が見つかりませんでした。</p>
                        </div>
                    )}
                </div>
            </section>

            {/* 4. Footer CTA Section */}
            <section className="py-32 lg:py-48 bg-slate-900 text-white overflow-hidden relative">
                {/* Visual Background Elements */}
                <div className="absolute top-0 right-0 w-[50%] h-full bg-accent-blue/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[80%] bg-indigo-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-tight">
                        あなたの想いを、<br />カタチにするお手伝いを。
                    </h3>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                        制作のご依頼や、企画に関するご相談など、どんなことでもお気軽にお問い合わせください。<br className="hidden md:block" />
                        ポートフォリオだけでは伝わらない可能性を、共に探求しましょう。
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-12 py-6 bg-accent-blue text-white font-black rounded-full text-lg transition-all duration-300 hover:bg-accent-blue/80 hover:scale-105 hover:shadow-2xl hover:shadow-accent-blue/30 active:scale-95"
                        >
                            ご依頼・ご相談はこちら
                        </Link>
                        <Link
                            href="/about"
                            className="w-full sm:w-auto px-12 py-6 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black rounded-full text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
                        >
                            私について詳しく
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
