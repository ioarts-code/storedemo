export default function Hero() {
  return (
    <div className="relative w-full h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        alt=""
        src="/images/hero-background.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
      />

      {/* Center container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        {/* Merch text with gradient */}
        <div
          className="text-[120px] font-bold uppercase leading-none bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(to right, #4f4f4f, #cbcbcb)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Merch
        </div>

        {/* Taglines */}
        <p
          className="text-[12px] text-black text-center tracking-[-0.24px] leading-[25px] max-w-xs"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          ILLUSTRATIONS THAT MAKE SENSE.<br />
          FIND NEW DIGITAL ART<br />
          LET&apos;S MAKE EVERY PRODUCT YOURS FOR REAL.
        </p>
      </div>
    </div>
  );
}
