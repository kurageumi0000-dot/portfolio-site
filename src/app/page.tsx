import WorkCard from "@/components/WorkCard";
import { getWorks } from "@/libs/microcms";

export default async function Home() {
    const works = await getWorks();

    return (
        <div className="pb-24 lg:pb-32">
            {/* Hero Section with Pale Gradient Background */}
            <div className="bg-gradient-to-br from-indigo-50/50 via-white to-cyan-50/50 py-20 lg:py-32 mb-12 md:mb-16 lg:mb-24 border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <section className="max-w-4xl flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                        {/* Profile Image */}
                        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl shadow-accent-blue/20 bg-white border-4 border-white shrink-0 animate-fade-in-up">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent" />
                            {/* Placeholder for now, but following the instruction to use round image枠 */}
                            <div className="w-full h-full flex items-center justify-center text-accent-blue/30 font-black text-2xl uppercase tracking-tighter">
                                Icon
                            </div>
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
