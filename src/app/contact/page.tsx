import { ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pb-24 lg:pb-32">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-indigo-50/50 via-white to-cyan-50/50 py-20 lg:py-32 mb-16 lg:mb-24 border-b border-slate-100">
                <div className="container mx-auto px-6 text-center md:text-left">
                    <section className="max-w-3xl">
                        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900">
                            お問い合わせ
                        </h2>
                        <p className="mt-8 text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                            制作のご依頼やご相談など、お気軽にお問い合わせください。
                            通常2〜3営業日以内に返信いたします。
                        </p>
                    </section>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 animate-fade-in-up">
                    {/* Card 1: General Inquiries */}
                    <div className="group relative bg-white/60 backdrop-blur-xl p-10 lg:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-indigo-100/20 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100/40 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 text-slate-400 transition-colors group-hover:bg-slate-200 group-hover:text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight">お問い合わせ・ご相談</h3>
                        <p className="text-slate-600 mb-10 leading-relaxed font-medium flex-grow">
                            制作に関するご質問や、ちょっとしたご相談などはこちらからお気軽にご連絡ください。通常2〜3営業日以内に返信いたします。
                        </p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSezEchOZQ7i3Z9Qls86EYN7qK7JIFV6DTkUP6CfAmmNZwajKA/viewform?usp=publish-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-slate-100 text-slate-600 font-black rounded-full transition-all duration-300 hover:bg-slate-200 active:scale-95 text-base"
                        >
                            <span>お問い合わせフォームを開く</span>
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                    {/* Card 2: Project Requests (Highlighted) */}
                    <div className="group relative overflow-hidden bg-white/80 backdrop-blur-xl p-10 lg:p-12 rounded-[2.5rem] border-2 border-accent-blue/30 shadow-2xl shadow-accent-blue/10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-accent-blue/20 hover:-translate-y-1">
                        {/* Highlight Tag */}
                        <div className="absolute top-0 right-0 bg-accent-blue text-white text-[10px] font-bold tracking-widest px-6 py-2 rounded-bl-2xl uppercase">
                            Recommend
                        </div>

                        <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center mb-8 text-accent-blue transition-colors group-hover:bg-accent-blue group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight">ご依頼・お見積り</h3>
                        <p className="text-slate-600 mb-10 leading-relaxed font-medium flex-grow">
                            具体的な制作のご依頼、納期や費用のお見積りに関するご相談はこちら。ヒアリング事項に沿って入力いただけます。
                        </p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSer3SEkZ3TTnALqnqcY2cj7MaaEugaH2uAwzShN01tbcK9jow/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-accent-blue text-white font-black rounded-full transition-all duration-300 hover:bg-accent-blue/80 hover:shadow-xl hover:shadow-accent-blue/20 active:scale-95 text-base"
                        >
                            <span>ご依頼・お見積りフォームを開く</span>
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
