export default function ContactPage() {
    return (
        <div className="pb-24 lg:pb-32">
            {/* Hero Section */}
            <div className="bg-gray-950 text-white py-20 lg:py-32 mb-16 lg:mb-24">
                <div className="container mx-auto px-6">
                    <section className="max-w-3xl">
                        <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-white">
                            お問い合わせ
                        </h2>
                        <p className="mt-8 text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl">
                            制作のご依頼やご相談など、お気軽にお問い合わせください。
                            通常2〜3営業日以内に返信いたします。
                        </p>
                    </section>
                </div>
            </div>

            {/* Form Section */}
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="relative w-full overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/5 min-h-[600px]">
                    {/* Responsive iframe container */}
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSer3SEkZ3TTnALqnqcY2cj7MaaEugaH2uAwzShN01tbcK9jow/viewform?embedded=true"
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                    >
                        読み込んでいます…
                    </iframe>
                </div>
            </div>
        </div>
    );
}
