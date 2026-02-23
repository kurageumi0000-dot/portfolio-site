export default function Watermark() {
  return (
    <div 
      className="absolute inset-0 z-10 pointer-events-none select-none opacity-40 mix-blend-multiply"
      style={{ 
        backgroundImage: 'url(/watermark.png)', 
        backgroundSize: '200px', /* ここがパターンの「1マスの大きさ」です */
        backgroundPosition: 'top left',
        backgroundRepeat: 'repeat' /* ここが「繰り返し敷き詰める」の呪文です */
      }}
    />
  );
}