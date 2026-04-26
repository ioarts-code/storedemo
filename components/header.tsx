export default function Header() {
  return (
    <header className="bg-[#d9d9d9] h-[64px] w-full sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto h-full relative">
        <div className="absolute h-[48px] left-[44px] overflow-clip top-[8px]">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#0f0f0f] text-[38.4px] whitespace-nowrap">
            IOARTS
          </p>
        </div>
        <nav className="absolute backdrop-blur-[6px] bg-white font-['Inter:Bold',sans-serif] font-bold h-[32px] leading-[0] right-[28px] rounded-[4px] top-[16px] tracking-[-0.24px] uppercase px-[12px] flex items-center gap-[16px] bg-[#959595]">
          <a href="/" className="text-[15.6px] leading-[19.2px] hover:opacity-80 transition-opacity text-[#000000]">
            Home
          </a>
          <a href="/products" className="text-black text-[16px] leading-[19.2px] hover:opacity-80 transition-opacity text-[#000000]">
            Shop All
          </a>
          <a href="#" className="text-black text-[15.6px] leading-[19.2px] hover:opacity-80 transition-opacity text-[#000000]">
            Dev
          </a>
        </nav>
      </div>
    </header>
  );
}
