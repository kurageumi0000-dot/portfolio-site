import Link from "next/link";
import Image from "next/image";
import { Work } from "@/types/work";

type Props = {
    work: Work;
};

export default function WorkCard({ work }: Props) {
    // Safe access to tools
    const toolName = work.tools ? work.tools.split(",")[0] : "Artwork";

    return (
        <Link href={`/works/${work.id}`} className="group block overflow-hidden">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-200 shadow-sm transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-2xl group-hover:shadow-black/5">
                <Image
                    src={work.main_image.url}
                    alt={work.title}
                    fill
                    className="object-cover transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:brightness-[1.05]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/10" />
            </div>
            <div className="mt-5 space-y-1 px-1">
                <h3 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-gray-600">
                    {work.title}
                </h3>
                <p className="text-xs font-medium uppercase tracking-widest text-muted/60">
                    {toolName}
                </p>
            </div>
        </Link>
    );
}
