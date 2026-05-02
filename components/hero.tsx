export default function Hero() {
  return (
    <div className="relative w-full h-[900px] flex items-start justify-center overflow-hidden">
      {/* Background image */}
      <img
        alt=""
        src="/images/hero-background.jpg"
        className="absolute inset-0 w-full h-full object-contain scale-250 opacity-80 pointer-events-none"
      />

      {/* Spacer */}
      <div className="flex-1 min-w-0 self-stretch" />

      {/* Right panel */}
      <div className="absolute h-[700px] left-[520px] top-0 w-[300px]">
        {/* White panel with taglines */}
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.9)] overflow-hidden">
          <div className="absolute inset-0 border-r-[3px] border-white" />

          {/* Rotated "Merch" text — transparent (shows through) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[37px] w-[349px] h-[871px] flex items-center justify-center">
            <div className="rotate-90 flex-none">
              <div className="w-[871px] h-[349px] flex flex-col justify-center items-center">
                <p
                  className="text-[120px] font-bold uppercase leading-none text-transparent"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Merch
                </p>
              </div>
            </div>
          </div>

          {/* Taglines */}
          <div className="absolute flex flex-col justify-center h-[165px] left-0 right-20 top-[652px] pr-4">
            <p
              className="text-[12px] text-black text-right tracking-[-0.24px] leading-[25px]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              ILLUSTRATIONS THAT MAKE SENSE.<br />
              FIND NEW DIGITAL ART<br />
              LET&apos;S MAKE EVERY PRODUCT YOURS FOR REAL.
            </p>
          </div>
        </div>

        {/* Rotated gradient "Merch" text overlay */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center w-[349px] h-[871px]"
        >
          <div className="rotate-90 flex-none">
            <div
              className="w-[871px] h-[349px] flex flex-col justify-center items-center bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #4f4f4f, #cbcbcb)',
              }}
            >
              <p
                className="text-[120px] font-bold uppercase leading-none"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Merch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
