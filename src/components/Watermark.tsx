import React from 'react';
import Image from 'next/image';

export default function Watermark() {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden flex items-center justify-center">
            {/* 以前のテキストベースのコードはすべて削除し、用意された画像（/watermark.png）を表示 */}
            <div className="relative w-1/2 md:w-1/3 aspect-square opacity-30">
                <Image
                    src="/watermark.png"
                    alt="Watermark"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}
