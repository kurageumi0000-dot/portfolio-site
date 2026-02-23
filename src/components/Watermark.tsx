import React from 'react';

// 管理者が文字列を簡単に変更できるよう定数を定義
const WATERMARK_TEXT = "© 海音くらげ";

export default function Watermark() {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden opacity-20">
            <div
                className="absolute inset-[-100%] flex flex-wrap items-center justify-center gap-x-20 gap-y-32 -rotate-12"
            >
                {/* 画面全体を覆うように透かし文字を反復生成 */}
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="flex gap-x-12">
                        {[...Array(6)].map((_, j) => (
                            <span
                                key={`${i}-${j}`}
                                className="text-white text-sm md:text-base font-black tracking-widest whitespace-nowrap"
                                style={{ textShadow: '0 0 4px rgba(0,0,0,0.2)' }}
                            >
                                {WATERMARK_TEXT}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
