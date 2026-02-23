import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkDetail, getWorks } from "@/libs/microcms";
import ProtectedImage from "@/components/ProtectedImage";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
    const works = await getWorks();
    return works.map((work) => ({
        id: work.id,
    }));
}

// ... (上部のインポートやgenerateStaticParamsは維持)

export default async function WorkPage({ params }: Props) {
    const { id } = await params;
    const work = await getWorkDetail(id);

    if (!work) notFound();

    const isFanart = work.kind?.includes("fanart");
    const backLink = isFanart ? "/fanart" : "/";
    const backLabel = isFanart ? "ファンアート一覧へ戻る" : "作品一覧へ戻る";

    return (
        <article className="pb-32 pt-8 lg:pt-16">
            <div className="container mx-auto px-6 max-w-7xl">
                <Link href={backLink} className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-slate-900 transition-all gap-2 mb-8 lg:mb-12 group">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    {backLabel}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="lg:sticky lg:top-24 flex justify-center w-full">
                        <ProtectedImage src={work.main_image.url} alt={work.title} width={work.main_image.width} height={work.main_image.height} />
                    </div>

                    <div className="space-y-12">
                        <header className="space-y-6">
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                                {work.title}
                            </h1>

                            {/* Metadata Grid */}
                            <div className="flex flex-wrap gap-x-12 gap-y-6 py-8 border-y border-slate-100">
                                <div className="min-w-[120px]">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Client</p>
                                    <p className="text-sm font-bold text-slate-700">{work.client || "Personal Work"}</p>
                                </div>
                                <div className="w-px h-8 bg-slate-100 self-center hidden sm:block" />
                                <div className="min-w-[120px]">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Date</p>
                                    <p className="text-sm font-bold text-slate-700">
                                        {(work.date || work.publishedAt)
                                            ? new Date(work.date || work.publishedAt).toISOString().slice(0, 7).replace(/-/g, '.')
                                            : new Date().toISOString().slice(0, 7).replace(/-/g, '.')}
                                    </p>
                                </div>
                            </div>
                        </header>

                        <div className="prose prose-slate prose-sm md:prose-base max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: work.description || "" }} />
                        </div>

                        <div className="pt-12 border-t border-slate-100">
                            <Link href={backLink} className="px-8 py-4 rounded-full bg-slate-100 text-slate-600 text-sm font-bold tracking-widest hover:bg-accent-blue hover:text-white transition-all duration-300 shadow-sm">
                                {backLabel}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}