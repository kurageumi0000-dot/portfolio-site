import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkDetail, getWorks } from "@/libs/microcms";
import Watermark from "@/components/Watermark";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
    const works = await getWorks();
    return works.map((work) => ({
        id: work.id,
    }));
}

export default async function WorkPage({ params }: Props) {
    const { id } = await params;
    const work = await getWorkDetail(id);

    if (!work) {
        notFound();
    }

    return (
        <article className="pb-32 pt-8 lg:pt-16">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Back button */}
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-slate-900 transition-all gap-2 group mb-8 lg:mb-12"
                >
                    <span className="translate-x-0 transition-transform group-hover:-translate-x-1">←</span>
                    作品一覧へ戻る
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Column: Image (Sticky on Desktop) */}
                    <div className="lg:sticky lg:top-24 space-y-6 flex justify-center w-full">
                        <div className="relative w-fit h-fit overflow-hidden rounded-3xl bg-white/40 backdrop-blur-sm border border-slate-200/50 shadow-2xl shadow-indigo-100/20 group flex items-center justify-center">
                            <Image
                                src={work.main_image.url}
                                alt={work.title}
                                width={work.main_image.width}
                                height={work.main_image.height}
                                className="w-auto h-auto max-h-[75vh] max-w-full object-contain transition-all duration-700 group-hover:scale-[1.01]"
                                priority
                            />
                            <Watermark />
                        </div>
                    </div>

                    {/* Right Column: Info & Description */}
                    <div className="space-y-12">
                        {/* Title Section */}
                        <header className="space-y-6">
                            <h1 className="text-3xl md:text-5xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight text-balance break-words">
                                {work.title}
                            </h1>

                            {/* Metadata Grid */}
                            <div className="grid grid-cols-2 gap-6 py-8 border-y border-slate-100">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">使用ツール</p>
                                    <p className="text-sm font-bold text-slate-700">{work.tools || "---"}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">制作期間</p>
                                    <p className="text-sm font-bold text-slate-700">{work.duration || "---"}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">クライアント</p>
                                    <p className="text-sm font-bold text-slate-700">{work.client || "---"}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">制作年</p>
                                    <p className="text-sm font-bold text-slate-700">
                                        {work.publishedAt ? new Date(work.publishedAt).getFullYear() : "---"}
                                    </p>
                                </div>
                            </div>
                        </header>

                        {/* Description Section */}
                        <div className="prose prose-slate prose-sm md:prose-base max-w-none 
                            prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight
                            prose-p:text-slate-600 prose-p:leading-relaxed
                            prose-strong:text-slate-900 prose-strong:font-bold
                            prose-li:text-slate-600
                            prose-hr:border-slate-100">
                            <div dangerouslySetInnerHTML={{ __html: work.description || "" }} />
                        </div>

                        {/* Bottom Navigation (Inside Right Column for Desktop Flow) */}
                        <div className="pt-12 border-t border-slate-100 flex justify-start">
                            <Link
                                href="/"
                                className="px-8 py-4 rounded-full bg-slate-100 text-slate-600 text-sm font-bold tracking-widest hover:bg-accent-blue hover:text-white transition-all duration-300 shadow-sm"
                            >
                                すべての作品を見る
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
