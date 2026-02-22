import WorkCard from "@/components/WorkCard";
import { getWorks } from "@/libs/microcms";

export default async function Home() {
    const works = await getWorks();

    return (
        <div className="pb-24 lg:pb-32">
            {/* Hero Section with High Contrast Dark Background */}
            <div className="bg-gray-950 text-white py-20 lg:py-32 mb-12 md:mb-16 lg:mb-24">
                <div className="container mx-auto px-6">
                    <section className="max-w-3xl">
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-white">
                            Illustrations & <br className="hidden sm:block" /> Creative Works.
                        </h2>
                        <p className="mt-8 text-base lg:text-xl text-gray-400 leading-relaxed max-w-2xl font-medium">
                            デジタルイラストレーションとコンセプトアートを中心とした制作実績です。
                            ストーリーを感じさせる色彩と光の表現を強みとしています。
                        </p>
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
