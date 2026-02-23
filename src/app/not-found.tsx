import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center">
            {/* Visual Element: Deep Sea/Jellyfish inspired */}
            <div className="relative mb-12 animate-float">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-b from-indigo-500/20 to-cyan-400/10 backdrop-blur-3xl border border-white/20 relative items-center justify-center flex">
                    <span className="text-6xl md:text-8xl font-black text-slate-900/5 select-none">404</span>
                </div>
                {/* Decorative bubbles/floaties */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-indigo-200/30 blur-xl animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-12 h-12 rounded-full bg-cyan-200/20 blur-xl animate-pulse delay-1000" />
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                お探しのページは深海に沈んだようです。
            </h1>

            <p className="text-slate-500 max-w-md mx-auto mb-12 leading-relaxed font-medium">
                URLが間違っているか、ページが別の場所へ移動した可能性があります。<br />
                静かな海の表面へ戻りましょう。
            </p>

            <Link
                href="/"
                className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-full font-black text-sm tracking-widest hover:bg-accent-blue transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-accent-blue/20 active:scale-95"
            >
                トップページへ戻る
                <span className="text-lg">→</span>
            </Link>
        </div>
    );
}
