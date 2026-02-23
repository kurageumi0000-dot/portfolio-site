"use client";

import Image from "next/image";
import Watermark from "./Watermark";

type Props = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export default function ProtectedImage({ src, alt, width, height }: Props) {
    return (
        <div
            className="relative w-fit h-fit overflow-hidden rounded-3xl bg-white/40 backdrop-blur-sm border border-slate-200/50 shadow-2xl shadow-indigo-100/20 group flex items-center justify-center select-none"
            onContextMenu={(e) => e.preventDefault()}
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-auto h-auto max-h-[75vh] max-w-full object-contain transition-all duration-700 group-hover:scale-[1.01] pointer-events-none select-none"
                style={{ userDrag: 'none' } as any}
                priority
            />
            <Watermark />
        </div>
    );
}
