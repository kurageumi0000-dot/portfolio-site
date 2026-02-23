import Image from "next/image";
import WorkCard from "@/components/WorkCard";
import { getWorks } from "@/libs/microcms";

export default async function FanartPage() {
    const works = await getWorks("fanart");

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
                            <p className="mt-8 text-base lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                                好きな作品やキャラクターへの愛を込めて制作した二次創作作品および、個人の創作イラスト集です。ガイドラインを遵守し、敬意を持って表現することを目指しています。
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="container mx-auto px-4 sm:px-6">
                {works.length > 0 ? (
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                        {works.map((work) => (
                            <WorkCard key={work.id} work={work} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 border border-dashed rounded-3xl border-slate-200">
                        <p className="text-slate-400 font-medium">
                            作品がまだ登録されていません。
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
