import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsDetail } from "@/libs/microcms";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function NewsDetailPage({ params }: Props) {
    const { id } = await params;
    const news = await getNewsDetail(id);

    if (!news) {
        notFound();
    }

    return (
        <article className="pb-32 pt-8 lg:pt-16">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Back to List Link */}
                <Link
                    href="/news"
                    className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-slate-900 transition-all gap-2 group mb-8 lg:mb-12"
                >
                    <span className="translate-x-0 transition-transform group-hover:-translate-x-1">←</span>
                    お知らせ一覧へ戻る
                </Link>

                <div className="bg-white/60 backdrop-blur-2xl rounded-[3rem] border border-white/40 shadow-2xl shadow-indigo-100/30 overflow-hidden animate-fade-in-up">
                    {/* Hero Header */}
                    <div className="bg-gradient-to-br from-indigo-50/30 via-white/10 to-transparent p-10 md:p-16 border-b border-white/20">
                        <div className="flex items-center gap-4 mb-8">
                            <time className="text-base font-bold text-slate-400 tabular-nums">
                                {new Date(news.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                            </time>
                            <span className={`px-4 py-1.5 text-xs font-black tracking-widest uppercase rounded-full border ${news.category === 'Important' ? 'bg-rose-50/80 text-rose-500 border-rose-100' :
                                    news.category === 'Update' ? 'bg-blue-50/80 text-blue-500 border-blue-100' :
                                        news.category === 'Event' ? 'bg-amber-50/80 text-amber-500 border-amber-100' :
                                            'bg-slate-50/80 text-slate-500 border-slate-100'
                                }`}>
                                {news.category}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight">
                            {news.title}
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="p-10 md:p-16">
                        <div
                            className="prose prose-lg prose-slate max-w-none 
                            prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
                            prose-strong:text-slate-900 prose-strong:font-black
                            prose-a:text-accent-blue prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                            prose-img:rounded-3xl prose-img:shadow-2xl
                            "
                            dangerouslySetInnerHTML={{ __html: news.content }}
                        />

                        {/* Bottom Navigation */}
                        <div className="mt-20 pt-12 border-t border-slate-100 flex justify-center">
                            <Link
                                href="/news"
                                className="px-10 py-5 rounded-full bg-slate-100 text-slate-600 text-sm font-black tracking-widest hover:bg-accent-blue hover:text-white transition-all duration-300 shadow-sm"
                            >
                                お知らせ一覧に戻る
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
