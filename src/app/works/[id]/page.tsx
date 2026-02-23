import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkDetail, getWorks } from "@/libs/microcms";

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
        <article className="pb-32">
            {/* Hero Header */}
            <section className="bg-gray-50/50 border-b border-border mb-16 lg:mb-24">
                <div className="container mx-auto px-6 py-16 lg:py-24 max-w-6xl">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-muted hover:text-foreground transition-all gap-2 group mb-12"
                    >
                        <span className="translate-x-0 transition-transform group-hover:-translate-x-1">←</span>
                        作品一覧へ戻る
                    </Link>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-gray-900 leading-[1.1] mb-8">
                            {work.title}
                        </h1>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-border/60">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-2">使用ツール</p>
                                <p className="text-sm font-medium text-gray-900">{work.tools || "---"}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-2">制作期間</p>
                                <p className="text-sm font-medium text-gray-900">{work.duration || "---"}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-2">クライアント</p>
                                <p className="text-sm font-medium text-gray-900">{work.client || "---"}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-2">制作年</p>
                                <p className="text-sm font-medium text-gray-900">
                                    {work.publishedAt ? new Date(work.publishedAt).getFullYear() : "---"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Main Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-2xl shadow-black/5 mb-16 lg:mb-24 group">
                    <Image
                        src={work.main_image.url}
                        alt={work.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                        sizes="100vw"
                    />
                </div>

                {/* Description */}
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-slate lg:prose-lg max-w-none prose-headings:tracking-tighter prose-headings:font-bold prose-p:leading-relaxed prose-p:text-gray-700">
                        <div dangerouslySetInnerHTML={{ __html: work.description || "" }} />
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="container mx-auto px-6 mt-32 max-w-6xl border-t border-border pt-16 flex justify-center">
                <Link
                    href="/"
                    className="px-10 py-4 rounded-full border border-deep-sea text-sm font-bold tracking-widest hover:bg-deep-sea hover:text-white transition-all duration-300"
                >
                    すべての作品を見る
                </Link>
            </div>
        </article>
    );
}
