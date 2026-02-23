"use client";

export default function Watermark() {
  return (
    <div
      className="absolute inset-0 z-20 select-none opacity-[0.03]"
      style={{
        backgroundImage: 'url(/watermark.png)',
        backgroundSize: '250px',
        backgroundRepeat: 'repeat'
      }}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
}