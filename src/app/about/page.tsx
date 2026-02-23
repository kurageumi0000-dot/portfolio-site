import Link from "next/link";
import { ArrowRight, Sparkles, Award, Box, Zap, Cloud } from "lucide-react";
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
        <div className="min-h-screen bg-gradient-to-b from-[#e0f7ff] via-white to-white text-zinc-800 selection:bg-accent-blue/20 selection:text-accent-blue overflow-hidden relative">

            {/* Background Decorations (Bubbles) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-[20%] left-[15%] w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />

                {/* Floating Bubbles */}
                <div className="absolute top-[15%] right-[20%] w-4 h-4 bg-accent-blue/20 rounded-full blur-[1px]" />
                <div className="absolute top-[25%] left-[10%] w-2 h-2 bg-accent-blue/30 rounded-full blur-[0.5px]" />
                <div className="absolute top-[60%] right-[5%] w-6 h-6 bg-accent-blue/10 rounded-full blur-[2px]" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 z-10">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-bold uppercase tracking-widest mb-8 border border-accent-blue/20">
                            <Sparkles size={14} />
                            <span>About Me</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-12 leading-[1.1] md:leading-[0.9] text-zinc-900 text-balance break-keep">
                            {about.title}<span className="text-accent-blue">.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Wave Separator Top */}
            <div className="w-full h-24 lg:h-32 -mt-1 relative z-10 text-zinc-50 fill-current">
                <svg viewBox="0 0 1440 120" className="w-full h-full preserve-3d">
                    <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
                </svg>
            </div>

            {/* Achievement Section */}
            <section className="py-24 bg-zinc-50/80 backdrop-blur-sm border-y border-zinc-100 relative z-10">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white shadow-sm border border-zinc-100 mb-8 text-accent-blue">
                        <Award className="w-8 h-8" />
                    </div>
                    <p className="text-zinc-500 font-bold tracking-widest uppercase text-sm mb-4">Total Achievements</p>
                    <div className="flex flex-col items-center">
                        <div className="flex items-baseline justify-center gap-1 text-zinc-900">
                            <span className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-accent-blue drop-shadow-sm">
                                {about.achievements_count}
                            </span>
                            <span className="text-xl md:text-3xl lg:text-4xl font-bold text-accent-blue/60">件</span>
                        </div>
                        <div className="w-16 md:w-24 h-1 md:h-1.5 bg-accent-blue rounded-full mt-6 md:mt-8 shadow-lg shadow-accent-blue/20" />
                    </div>
                </div>
            </section>

            {/* Wave Separator Bottom */}
            <div className="w-full h-24 lg:h-32 text-zinc-50 fill-current rotate-180 -mt-1 relative z-10">
                <svg viewBox="0 0 1440 120" className="w-full h-full preserve-3d">
                    <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
                </svg>
            </div>

            {/* Main Content Section */}
            <section className="py-24 lg:py-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div
                            className="prose prose-zinc prose-lg lg:prose-xl max-w-none 
              prose-headings:text-zinc-900 prose-headings:font-black prose-headings:tracking-tight
              prose-headers:border-l-4 prose-headers:border-accent-blue prose-headers:pl-6
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
            <section className="pb-32 lg:pb-48 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
                        {secondarySections.map((section) => (
                            <div key={section.title} className="bg-white/80 backdrop-blur-md p-8 md:p-10 lg:p-14 rounded-2xl md:rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-accent-blue/5 transition-all transition-duration-500">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 rounded-2xl bg-accent-blue/10 text-accent-blue">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-zinc-900 tracking-tight border-b-2 border-accent-blue/20 pb-1">{section.title}</h3>
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
            <section className="container mx-auto px-6 pb-20 md:pb-32 lg:pb-48 relative z-10">
                <div className="bg-zinc-900 rounded-2xl md:rounded-[3rem] p-8 md:p-12 lg:p-24 text-center overflow-hidden relative group">
                    {/* Subtle decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl -mr-48 -mt-48 transition-transform group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl -ml-48 -mb-48 transition-transform group-hover:scale-110" />

                    <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-white tracking-tighter mb-8 md:mb-12 relative z-10 leading-tight text-balance">
                        制作のご依頼については<br className="hidden md:block" />こちらをご確認ください。
                    </h2>

                    <Link
                        href="/commission"
                        className="group relative inline-flex items-center gap-4 px-12 py-6 bg-accent-blue text-white font-black rounded-full transition-all hover:bg-accent-blue/80 hover:scale-105 active:scale-95 shadow-2xl shadow-accent-blue/20 relative z-10"
                    >
                        <span className="text-lg">ご依頼の詳細はこちら</span>
                        <ArrowRight size={24} className="transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>
            </section>

        </div>
    );
}
