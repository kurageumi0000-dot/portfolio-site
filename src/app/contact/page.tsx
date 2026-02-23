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

            <div className="container mx-auto px-6 max-w-4xl text-center">
                <div className="bg-white/80 backdrop-blur-md p-10 md:p-16 lg:p-24 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-indigo-100/30 animate-fade-in-up">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 tracking-tight">専用フォームからご連絡ください</h3>
                    <p className="text-slate-600 mb-12 leading-relaxed max-w-lg mx-auto font-medium">
                        お問い合わせはGoogleフォームにて承っております。<br />
                        以下のボタンをクリックして、詳細をご記入のうえ送信してください。
                    </p>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfclFq32jB0uXlUvK7e7K0v08z9c2_90j7h_k_6_l_m_n_o_p/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-accent-blue text-white font-black rounded-full transition-all duration-300 hover:bg-accent-blue/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-blue/40 active:scale-95 text-lg"
                    >
                        <span>お問い合わせフォームを開く</span>
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>
    );
}
