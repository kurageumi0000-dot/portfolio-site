import Link from "next/link";
import { ArrowRight, Sparkles, Award, Box, Zap } from "lucide-react";
import { getAbout } from "@/libs/microcms";

export default async function AboutPage() {
    const about = await getAbout();

    if (!about) {
        return (
            <div className="min-h-screen bg-white text-zinc-900 flex items-center justify-center">
                <p className="text-zinc-400 animate-pulse font-medium">読み込み中...</p>
            </div>
        );
    }

    const secondarySections = [
        {
            title: "Service",
            content: about.service,
            icon: <Box className="w-6 h-6 text-cyan-500" />
        },
        {
            title: "Environment",
            content: about.environment,
            icon: <Zap className="w-6 h-6 text-cyan-500" />
        }
    ];

    return (
        <div className="min-h-screen bg-white text-zinc-800 selection:bg-cyan-100 selection:text-cyan-900">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.03] pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#06b6d4_0%,transparent_70%)]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-widest mb-8">
                            <Sparkles size={14} />
                            <span>About Me</span>
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-12 leading-[0.9] text-zinc-900">
                            {about.title}<span className="text-cyan-500">.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Achievement Section */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-100">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white shadow-sm border border-zinc-100 mb-8">
                        <Award className="w-8 h-8 text-cyan-500" />
                    </div>
                    <p className="text-zinc-500 font-bold tracking-widest uppercase text-sm mb-4">Total Achievements</p>
                    <div className="flex flex-col items-center">
                        <span className="text-8xl lg:text-9xl font-black tracking-tighter text-zinc-900 flex items-baseline">
                            {about.achievements_count}
                            <span className="text-3xl lg:text-4xl text-cyan-500 ml-2">件</span>
                        </span>
                        <div className="w-24 h-1.5 bg-cyan-500 rounded-full mt-8" />
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div
                            className="prose prose-zinc prose-lg lg:prose-xl max-w-none 
              prose-headings:text-zinc-900 prose-headings:font-black prose-headings:tracking-tight
              prose-p:text-zinc-600 prose-p:leading-relaxed
              prose-strong:text-zinc-900 prose-strong:font-bold
              prose-li:text-zinc-700
              prose-hr:border-zinc-100"
                            dangerouslySetInnerHTML={{ __html: about.content }}
                        />
                    </div>
                </div>
            </section>

            {/* Service & Environment Sections */}
            <section className="pb-32 lg:pb-48">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {secondarySections.map((section) => (
                            <div key={section.title} className="bg-white p-10 lg:p-14 rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-cyan-50">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-zinc-900 tracking-tight">{section.title}</h3>
                                </div>
                                <div
                                    className="prose prose-zinc prose-base max-w-none 
                  prose-p:text-zinc-500 prose-p:leading-relaxed
                  prose-li:text-zinc-600
                  prose-strong:text-zinc-900"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 pb-32 lg:pb-48">
                <div className="bg-zinc-900 rounded-[3rem] p-12 lg:p-24 text-center overflow-hidden relative group">
                    {/* Subtle decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -mr-48 -mt-48 transition-transform group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -ml-48 -mb-48 transition-transform group-hover:scale-110" />

                    <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter mb-12 relative z-10 leading-tight">
                        制作のご依頼については<br className="hidden md:block" />こちらをご確認ください。
                    </h2>

                    <Link
                        href="/commission"
                        className="group relative inline-flex items-center gap-4 px-12 py-6 bg-cyan-500 text-white font-black rounded-full transition-all hover:bg-cyan-400 hover:scale-105 active:scale-95 shadow-2xl shadow-cyan-500/20 relative z-10"
                    >
                        <span className="text-lg">ご依頼の詳細はこちら</span>
                        <ArrowRight size={24} className="transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>
            </section>

        </div>
    );
}
