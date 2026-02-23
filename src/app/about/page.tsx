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
            icon: <Box className="w-5 h-5" />
        },
        {
            title: "Environment",
            content: about.environment,
            icon: <Zap className="w-5 h-5" />
        }
    ];

    return (
        <div className="min-h-screen text-slate-800 selection:bg-accent-blue/10 selection:text-accent-blue overflow-hidden relative">

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-24 z-10 bg-gradient-to-br from-indigo-50/30 via-white to-cyan-50/30">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 animate-fade-in-up">
                        {/* Profile Image Section */}
                        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl shadow-indigo-100 bg-white border-4 border-white shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center">
                                <span className="text-xl font-black tracking-tighter text-slate-200 select-none">
                                    Icon
                                </span>
                            </div>
                        </div>

                        <div className="max-w-3xl text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-[10px] font-bold uppercase tracking-widest mb-6 border border-accent-blue/20">
                                <Sparkles size={12} />
                                <span>プロフィール</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-snug text-slate-900 text-balance break-words w-full max-w-full whitespace-pre-wrap">
                                {about.title}<span className="text-accent-blue">.</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wave Separator Top */}
            <div className="w-full h-16 lg:h-24 -mt-1 relative z-10 text-zinc-50 fill-current">
                <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
                </svg>
            </div>

            {/* Achievement Section */}
            <section className="py-16 lg:py-20 bg-zinc-50/80 backdrop-blur-sm border-y border-zinc-100 relative z-10">
                <div className="container mx-auto px-6 text-center animate-fade-in-up-delay-1">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm border border-zinc-100 mb-6 text-accent-blue">
                        <Award className="w-6 h-6" />
                    </div>
                    <p className="text-zinc-400 font-bold tracking-widest uppercase text-xs mb-3">累計実績</p>
                    <div className="flex flex-col items-center">
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-accent-blue drop-shadow-sm">
                                {about.achievements_count}
                            </span>
                            <span className="text-lg md:text-2xl lg:text-3xl font-bold text-accent-blue/60">件</span>
                        </div>
                        <div className="w-12 md:w-20 h-0.5 md:h-1 bg-accent-blue rounded-full mt-5 md:mt-6 shadow-lg shadow-accent-blue/20" />
                    </div>
                </div>
            </section>

            {/* Wave Separator Bottom */}
            <div className="w-full h-16 lg:h-24 text-zinc-50 fill-current rotate-180 -mt-1 relative z-10">
                <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
                </svg>
            </div>

            {/* Main Content Section */}
            <section className="py-16 lg:py-24 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto animate-fade-in-up-delay-2">
                        <div
                            className="prose prose-zinc prose-sm md:prose-base max-w-none 
              prose-headings:text-zinc-900 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-base md:prose-headings:text-lg
              prose-p:text-zinc-600 prose-p:leading-7 prose-p:text-sm md:prose-p:text-base
              prose-strong:text-zinc-900 prose-strong:font-bold
              prose-li:text-zinc-700 prose-li:text-sm md:prose-li:text-base
              prose-hr:border-zinc-100"
                            dangerouslySetInnerHTML={{ __html: about.content }}
                        />
                    </div>
                </div>
            </section>

            {/* Service & Environment Sections */}
            <section className="pb-20 lg:pb-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
                        {secondarySections.map((section, index) => (
                            <div
                                key={section.title}
                                className="bg-white/80 backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-zinc-100 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-blue/5 transition-all duration-300 animate-fade-in-up"
                                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-xl bg-accent-blue/10 text-accent-blue">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-zinc-900 tracking-tight">{section.title}</h3>
                                </div>
                                <div
                                    className="prose prose-zinc prose-sm max-w-none 
                  prose-p:text-zinc-500 prose-p:leading-7 prose-p:text-sm
                  prose-li:text-zinc-600 prose-li:text-sm
                  prose-strong:text-zinc-900"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 pb-16 md:pb-24 lg:pb-32 relative z-10">
                <div className="bg-gradient-to-br from-indigo-50/80 via-white to-cyan-50/80 rounded-2xl md:rounded-[2.5rem] p-8 md:p-12 lg:p-20 text-center overflow-hidden relative group animate-fade-in-up-delay-3 border border-slate-100 shadow-xl shadow-indigo-100/20">
                    {/* Subtle decoration */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl -mr-36 -mt-36 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-blue/5 rounded-full blur-3xl -ml-36 -mb-36 transition-transform duration-700 group-hover:scale-110" />

                    <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-6 md:mb-10 relative z-10 leading-snug text-balance">
                        制作のご依頼については<br className="hidden md:block" />こちらをご確認ください。
                    </h2>

                    <Link
                        href="/commission"
                        className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-accent-blue text-white font-bold rounded-full transition-all duration-300 hover:bg-accent-blue/80 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-accent-blue/30 active:scale-95 relative z-10"
                    >
                        <span className="text-sm md:text-base">ご依頼の詳細はこちら</span>
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>

        </div>
    );
}
