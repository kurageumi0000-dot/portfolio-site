import Link from "next/link";
import { getHybridFeed, FeedItem } from "@/libs/microcms";

export default async function NewsListPage() {
    // ニュースと実績の両方を含むフィードを取得（多めに100件）
    const feedItems = await getHybridFeed(100);

    return (
        <div className="pb-24 lg:pb-32">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-indigo-50/50 via-white to-cyan-50/50 py-20 lg:py-32 mb-12 md:mb-16 lg:mb-24 border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 italic">
                        News<span className="text-accent-blue">.</span>
                    </h1>
                    <p className="text-lg text-slate-600 font-medium max-w-2xl">
                        最新のお知らせや活動状況、アップデート情報をお届けします。
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    {feedItems.length > 0 ? (
                        <div className="bg-white/40 backdrop-blur-xl border border-slate-200/50 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-100/20 animate-fade-in-up">
                            <div className="divide-y divide-slate-100/50">
                                {feedItems.map((item: FeedItem) => (
                                    <Link
                                        key={item.id}
                                        href={item.type === "work" ? `/works/${item.id}` : `/news/${item.id}`}
                                        className="group block p-8 md:p-10 hover:bg-white/50 transition-all duration-300"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                                            <div className="flex items-center gap-4 shrink-0">
                                                <time className="text-sm md:text-base font-bold text-slate-400 tabular-nums">
                                                    {new Date(item.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                                                </time>
                                                <span className={`px-4 py-1.5 text-xs font-black tracking-widest uppercase rounded-full border ${item.category === 'New Work' ? 'bg-accent-blue/5 text-accent-blue border-accent-blue/10' :
                                                        item.category === 'Important' ? 'bg-rose-50 text-rose-500 border-rose-100' :
                                                            item.category === 'Update' ? 'bg-blue-50 text-blue-500 border-blue-100' :
                                                                item.category === 'Event' ? 'bg-amber-50 text-amber-500 border-amber-100' :
                                                                    'bg-slate-50 text-slate-500 border-slate-100'
                                                    }`}>
                                                    {item.category}
                                                </span>
                                            </div>
                                            <h2 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-accent-blue transition-colors">
                                                {item.title}
                                            </h2>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white/40 backdrop-blur-xl border border-dashed border-slate-200 rounded-[2.5rem]">
                            <p className="text-slate-400 font-medium">お知らせはまだありません。</p>
                        </div>
                    )}

                    <div className="mt-16 text-center">
                        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
                            <span>←</span>
                            トップページへ戻る
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
