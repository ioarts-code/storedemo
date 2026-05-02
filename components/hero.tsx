interface HeroProps {
  bgPositionX?: number; // Background horizontal position in percentage (0-100)
  containerPositionX?: number; // Merch container horizontal position in percentage (0-100)
}

export default function Hero({ bgPositionX = 50, containerPositionX = 75 }: HeroProps) {
  // Responsive positioning logic
  const getResponsivePosition = () => {
    if (typeof window === 'undefined') return containerPositionX;
    
    const width = window.innerWidth;
    
    // Mobile: center at 50%
    if (width < 768) {
      return 50;
    }
    // Tablet: move to 60%
    if (width < 1024) {
      return 60;
    }
    // Desktop: move to 70%
    if (width < 1280) {
      return 70;
    }
    // Wide: 75%
    return 75;
  };

  const responsivePosition = typeof window !== 'undefined' ? getResponsivePosition() : containerPositionX;

  return (
    <div className="relative h-[900px] flex items-start justify-center overflow-hidden w-screen md:w-[90vw] lg:w-[85vw] xl:w-[80vw] 2xl:w-[1280px] mx-auto">
      {/* Background image */}
      <img
        alt=""
        src="/images/hero-background.jpg"
        className="absolute inset-0 w-full h-full object-contain scale-250 opacity-80 pointer-events-none"
        style={{
          objectPosition: `${bgPositionX}% center`,
        }}
      />

      {/* Spacer */}
      <div className="flex-1 min-w-0 self-stretch" />

      {/* Right panel */}
      <div 
        className="absolute h-[900px] top-0 w-[300px]"
        style={{
          left: `${responsivePosition}%`,
          transform: 'translateX(-50%)',
        }}
      >
        {/* White panel with taglines */}
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.9)] overflow-hidden">
          <div className="absolute inset-0 border-r-[3px] border-l-[3px] border-white" />

          {/* Rotated "Merch" text — transparent (shows through) */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[349px] h-[871px] flex items-center justify-center">
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
          <div className="absolute flex flex-col justify-center h-[165px] left-0 right-0 top-[500px] pr-4">
            <p
              className="text-[14px] text-black text-right tracking-[-0.70px] leading-[20px]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              ILLUSTRATIONS THAT MAKE SENSE.<br />
              FIND NEW DIGITAL ART<br />
              LET&apos;S MAKE EVERY<br /> PRODUCT YOURS FOR REAL.
            </p>
          </div>
        </div>

        {/* Rotated gradient "Merch" text overlay */}
        <div
          className="absolute w-[871px] h-[349px] left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        >
          <p
            className="uppercase font-bold"
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '130px',
              lineHeight: '160px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(90deg, #1A1A1A 0%, #CBCBCB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              transform: 'rotate(90deg)',
              margin: 0,
            }}
          >
            Merch
          </p>
        </div>
      </div>
    </div>
  );
}
