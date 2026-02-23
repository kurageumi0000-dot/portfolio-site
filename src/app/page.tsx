import Image from "next/image";
import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import { getWorks, getNewsList } from "@/libs/microcms";
import { News } from "@/types/news";

export default async function Home() {
    const works = await getWorks("original");
    const newsItems = await getNewsList(3);

    return (
        <div className="pb-24 lg:pb-32">
            {/* Hero Section with Pale Gradient Background */}
            <div className="bg-gradient-to-br from-indigo-50/50 via-white to-cyan-50/50 py-20 lg:py-32 mb-12 md:mb-16 lg:mb-24 border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <section className="max-w-4xl flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                        {/* Profile Image */}
                        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl shadow-accent-blue/20 bg-white border-4 border-white shrink-0 animate-fade-in-up">
                            <Image
                                src="/icon.jpg"
                                alt="海音くらげ"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="animate-fade-in-up-delay-1 text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-snug text-slate-900 text-balance break-words w-full max-w-full">
                                イラスト・作品集
                            </h2>
                            <p className="mt-8 text-base lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                                デジタルイラストレーションとコンセプトアートを中心とした制作実績です。
                                ストーリーを感じさせる色彩と光の表現を強みとしています。
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            {/* News Section */}
            {newsItems.length > 0 && (
                <div className="container mx-auto px-6 mb-20 lg:mb-32">
                    <div className="bg-white/40 backdrop-blur-xl border border-slate-200/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-indigo-100/20">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                            <div>
                                <h3 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-2">News</h3>
                                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">最新のお知らせ</p>
                            </div>
                            <Link href="/news" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-accent-blue transition-colors">
                                もっと見る
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>

                        <div className="divide-y divide-slate-100/50">
                            {newsItems.map((news: News) => (
                                <Link key={news.id} href={`/news/${news.id}`} className="group block py-6 first:pt-0 last:pb-0">
                                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                                        <div className="flex items-center gap-4 shrink-0">
                                            <time className="text-sm font-bold text-slate-400 tabular-nums">
                                                {new Date(news.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                                            </time>
                                            <span className={`px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-full border ${news.category === 'Important' ? 'bg-rose-50 text-rose-500 border-rose-100' :
                                                news.category === 'Update' ? 'bg-blue-50 text-blue-500 border-blue-100' :
                                                    news.category === 'Event' ? 'bg-amber-50 text-amber-500 border-amber-100' :
                                                        'bg-slate-50 text-slate-500 border-slate-100'
                                                }`}>
                                                {news.category}
                                            </span>
                                        </div>
                                        <h4 className="text-base md:text-lg font-bold text-slate-800 group-hover:text-accent-blue transition-colors line-clamp-1">
                                            {news.title}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Gallery Section - Updated to 2 columns on mobile */}
            <div className="container mx-auto px-4 sm:px-6">
                {works.length > 0 ? (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                        {works.map((work) => (
                            <WorkCard key={work.id} work={work} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 border border-dashed rounded-3xl border-border">
                        <p className="text-muted text-lg animate-pulse font-medium">
                            作品が見つかりませんでした。
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
