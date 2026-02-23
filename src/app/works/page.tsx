import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import { getWorks } from "@/libs/microcms";

export default async function WorksListPage() {
    const works = await getWorks("original");

    return (
        <div className="pb-24 lg:pb-32">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-indigo-50/50 via-white to-cyan-50/50 py-20 lg:py-32 mb-12 md:mb-16 lg:mb-24 border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 italic">
                        実績
                    </h1>
                    <p className="text-lg text-slate-600 font-medium max-w-2xl">
                        これまでご依頼いただき制作してきたプロジェクトの実績一覧です。ご依頼の際の参考にしてください。
                    </p>
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
