import Image from "next/image";
import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import { getWorks } from "@/libs/microcms";

type Props = {
    searchParams: Promise<{ page?: string }>;
};

export default async function FanartPage({ searchParams }: Props) {
    const { page } = await searchParams;
    const currentPage = parseInt(page || "1", 10);
    const limit = 12;
    const offset = (currentPage - 1) * limit;

    const worksData = await getWorks("fanart", limit, offset);
    const works = worksData.contents;
    const totalCount = worksData.totalCount;
    const totalPages = Math.ceil(totalCount / limit);

    return (
        <div className="pb-24 lg:pb-32">
            {/* Disclaimer Banner */}
            <div className="bg-slate-50 border-b border-slate-100 py-3">
                <div className="container mx-auto px-6">
                    <p className="text-[10px] md:text-xs text-slate-500 font-medium text-center md:text-left">
                        ※本ページに掲載されている作品は、ガイドラインに準じたファン活動の一環として制作したものです。権利元とは一切関係ありません。
                    </p>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-indigo-50/50 via-white to-cyan-50/50 py-20 lg:py-32 mb-12 md:mb-16 lg:mb-24 border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <section className="max-w-4xl flex flex-col md:flex-row items-center gap-10 lg:gap-16">
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
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-snug text-slate-900 text-balance break-words w-full max-w-full">
                                創作・FA
                            </h1>
                            <p className="mt-8 text-base lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium mb-8">
                                愛を込めて制作した二次創作作品および、個人の創作イラスト集です。ガイドラインを遵守し表現することを目指しています。
                            </p>
                            <Link
                                href="/works"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold border border-indigo-100 hover:bg-indigo-100 transition-colors"
                            >
                                実績一覧を見る
                                <span>→</span>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="container mx-auto px-4 sm:px-6">
                {works.length > 0 ? (
                    <>
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
                            {works.map((work) => (
                                <WorkCard key={work.id} work={work} />
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-20 flex justify-center items-center gap-4">
                                {currentPage > 1 && (
                                    <Link
                                        href={`/fanart?page=${currentPage - 1}`}
                                        className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-bold hover:border-slate-400 transition-colors"
                                    >
                                        PREV
                                    </Link>
                                )}
                                <span className="text-sm font-black text-slate-400 tracking-widest">
                                    {currentPage} / {totalPages}
                                </span>
                                {currentPage < totalPages && (
                                    <Link
                                        href={`/fanart?page=${currentPage + 1}`}
                                        className="px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-slate-700 transition-colors"
                                    >
                                        NEXT
                                    </Link>
                                )}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 border border-dashed rounded-3xl border-slate-200">
                        <p className="text-slate-400 font-medium">
                            作品がまだ登録されていません。
                        </p>
                    </div>
                )}

                <div className="mt-24 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
                        <span>←</span>
                        トップページへ戻る
                    </Link>
                </div>
            </div>
        </div>
    );
}
