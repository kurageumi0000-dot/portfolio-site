import Link from "next/link";
import Image from "next/image";
import WorkCard from "@/components/WorkCard";
import { getWorks } from "@/libs/microcms";

export default async function WorksListPage() {
    const works = await getWorks("original");

    return (
        <div className="pb-24 lg:pb-32">
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
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 italic">
                                実績
                            </h1>
                            <p className="text-lg text-slate-600 font-medium max-w-2xl">
                                これまで制作してきたオリジナルイラストレーションと、ご依頼いただいたプロジェクトの実績一覧です。
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6">
                {works.length > 0 ? (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 animate-fade-in-up">
                        {works.map((work) => (
                            <WorkCard key={work.id} work={work} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 border border-dashed rounded-[3rem] border-slate-200">
                        <p className="text-slate-400 text-lg font-medium">作品が見つかりませんでした。</p>
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
