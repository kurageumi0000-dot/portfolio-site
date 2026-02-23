import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkDetail, getWorks } from "@/libs/microcms";
import ProtectedImage from "@/components/ProtectedImage";
import { Metadata } from "next";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    try {
        const { id } = await params;
        const work = await getWorkDetail(id);
        if (!work) return { title: "Work Not Found" };

        return {
            title: `${work.title || "作品"} | 海音くらげ Portfolio`,
            description: (work.description || "").replace(/<[^>]*>?/gm, '').slice(0, 160) || "海音くらげのポートフォリオ作品詳細ページです。",
        };
    } catch (error) {
        return { title: "海音くらげ Portfolio" };
    }
}

export async function generateStaticParams() {
    try {
        const works = await getWorks(undefined, 100); // Fetch more for static generation
        return works.contents.map((work) => ({
            id: work.id,
        }));
    } catch (error) {
        return [];
    }
}

export default async function WorkPage({ params }: Props) {
    const { id } = await params;
    const work = await getWorkDetail(id);

    if (!work) notFound();

    // どのカテゴリに属するかを判定
    const isFanart = work.kind && (
        Array.isArray(work.kind)
            ? work.kind.includes("fanart")
            : work.kind === "fanart"
    );

    const backLink = isFanart ? "/fanart" : "/works";
    const backLabel = isFanart ? "創作・FA一覧へ戻る" : "実績一覧へ戻る";

    // 日付の表示用フォーマット
    const displayDate = (() => {
        const dateStr = work.date || work.publishedAt;
        if (!dateStr) return "----.--";
        try {
            const d = new Date(dateStr);
            if (isNaN(d.getTime())) return "----.--";
            return d.toISOString().slice(0, 7).replace(/-/g, '.');
        } catch {
            return "----.--";
        }
    })();

    return (
        <article className="pb-32 pt-8 lg:pt-16">
            <div className="container mx-auto px-6 max-w-7xl">
                <Link href={backLink} className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-slate-900 transition-all gap-2 mb-8 lg:mb-12 group">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    {backLabel}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="lg:sticky lg:top-24 flex justify-center w-full">
                        {work.main_image?.url ? (
                            <ProtectedImage
                                src={work.main_image.url}
                                alt={work.title || "作品画像"}
                                width={work.main_image.width || 1200}
                                height={work.main_image.height || 800}
                            />
                        ) : (
                            <div className="w-full aspect-[4/3] bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400">
                                No Image
                            </div>
                        )}
                    </div>

                    <div className="space-y-12">
                        <header className="space-y-6">
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                                {work.title || "無題"}
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
                                        {displayDate}
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
