interface HeroProps {
  bgPositionX?: number; // Background horizontal position in percentage (0-100)
  containerPositionX?: number; // Merch container horizontal position in percentage (0-100)
}

// Gradient colors - easy to change
const GRADIENT_COLOR_TOP = '#000000'; // Black
const GRADIENT_COLOR_BOTTOM = '#888888'; // Grey
const FADE_COLOR = '#000000'; // Black for fade overlay

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
    // Desktop 1024px and above: use the prop value
    return containerPositionX;
  };

  const responsivePosition = typeof window !== 'undefined' ? getResponsivePosition() : containerPositionX;

  return (
    <div className="relative h-[900px] flex items-start justify-center w-screen">
      {/* Background image */}
      <img
        alt=""
        src="/images/hero-background.jpg"
        className="absolute inset-0 w-full h-full object-contain scale-250 opacity-80 pointer-events-none"
        style={{
          objectPosition: `${bgPositionX}% center`,
        }}
      />

      {/* Fade gradient overlay - extends beyond hero */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, ${FADE_COLOR} 100%)`, height: '200vh', top: 0, left: 0, right: 0 }} />

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
        {/* Merch Banner */}
        <div className="bg-[rgba(255,255,255,0.9)] relative size-full">
          <div className="absolute border-solid border-white inset-0" />
          
          {/* Rotated Merch Text */}
          <div className="-translate-x-1/2 absolute content-stretch flex h-[871px] items-center justify-center left-1/2 top-[37px] w-[349px]">
            <div className="flex h-[871px] items-center justify-center relative shrink-0 w-[349px]">
              <div className="flex-none rotate-90">
                <div className="content-stretch flex flex-col items-start relative">
                  <div className="content-stretch flex flex-col h-[349px] items-start justify-center relative shrink-0 w-[871px]">
                    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0 w-full">
                      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[170px] text-[transparent] uppercase w-full">
                        <p className="leading-[normal]">Merch</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Taglines */}
          <div className="absolute content-stretch flex flex-col h-[165px] items-start justify-center left-[23.5%] right-[24.75%] top-[650px]">
            <div className="h-[75px] relative shrink-0 w-full">
              <div className="flex flex-col items-end size-full">
                <div className="content-stretch flex flex-col items-end pr-[7px] relative size-full">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] lowercase not-italic right-[-0.24px] text-[#727272] text-[14px] text-right top-[43.98px] tracking-[-0.24px] whitespace-nowrap">
                    <p className="leading-[25px] mb-0 whitespace-pre">ILLUSTRATIONS THAT MAKE SENSE.</p>
                    <p className="leading-[25px] mb-0 whitespace-pre">FIND NEW DIGITAL ART</p>
                    <p className="leading-[25px] mb-0 whitespace-pre">{`LET'S MAKE EVERY `}</p>
                    <p className="leading-[25px] whitespace-pre">PRODUCT YOURS FOR REAL.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Artist Name */}
          <div className="absolute left-[23.5%] right-[24.75%] top-[800px]">
            <p className="text-right text-[18px] text-black" style={{ fontFamily: '"Mr Dafoe", cursive' }}>
              Anders Altmann
            </p>
          </div>

          {/* Gradient Merch Overlay */}
          <div className="-translate-x-1/2 absolute flex h-[871px] items-center justify-center left-1/2 top-[37px] w-[349px]">
            <div className="flex h-[871px] items-center justify-center relative shrink-0 w-[349px]">
              <div className="flex-none rotate-90">
                <div className="content-stretch flex flex-col items-start relative">
                  <div className="content-stretch flex flex-col h-[349px] items-start justify-center relative shrink-0 w-[871px]">
                    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0 w-full">
                      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[170px] uppercase w-full" style={{ background: `linear-gradient(90deg, ${GRADIENT_COLOR_TOP} 0%, ${GRADIENT_COLOR_BOTTOM} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        <p className="leading-[normal]">Merch</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
