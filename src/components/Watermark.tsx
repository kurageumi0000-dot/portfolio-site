export default function Watermark() {
  return (
    <div 
      /* pointer-events-noneを外すことで、このレイヤーがマウス操作をブロックする */
      /* z-20 で画像(z-10)より上に配置 */
      className="absolute inset-0 z-20 select-none opacity-40 mix-blend-multiply"
      onContextMenu={(e) => e.preventDefault()} // 右クリック・長押し禁止
      style={{ 
        backgroundImage: 'url(/watermark.png)', 
        backgroundSize: '200px',
        backgroundRepeat: 'repeat'
      }}
    >
      {/* 念押しとして透明なカバーをさらに被せる */}
      <div className="absolute inset-0 w-full h-full bg-transparent" />
    </div>
  );
}