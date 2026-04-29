export function StoreInfo() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] flex flex-col gap-8 items-center justify-center px-8 relative h-full w-full">
      {/* Right white border */}
      <div aria-hidden="true" className="absolute border-r-[3px] border-solid border-white inset-0 pointer-events-none" />

      {/* Heading */}
      <div className="flex flex-col items-center">
        <div className="flex flex-col font-bold text-[18px] text-center text-white uppercase tracking-[-0.24px] leading-[24px]">
          <p className="mb-0">Hola,</p>
          <p className="mb-0">Here comes our new merch.</p>
          <p className="mb-0">Enjoy!</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 items-center justify-center">
        {/* DeviantArt */}
        <a
          className="bg-[#2f2f2f] flex items-center justify-center relative rounded-[6px] shrink-0 size-[48px]"
          href="https://www.deviantart.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit DeviantArt"
        >
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
          <svg className="size-[18px]" fill="none" viewBox="0 0 15 24">
            <path
              d="M15 0H9.68L8.92 0.98L5.59 6H0V12H3.15L0 18.75V24H5.32L6.08 23.02L9.41 18H15V12H11.85L15 5.25V0Z"
              fill="white"
            />
          </svg>
        </a>

        {/* Etsy */}
        <a
          className="bg-[#2f2f2f] flex items-center justify-center relative rounded-[6px] shrink-0 size-[48px]"
          href="https://www.etsy.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shop on Etsy"
        >
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
          <span className="font-bold text-[18px] text-white leading-none">E</span>
        </a>
      </div>

      {/* Tagline */}
      <div className="flex flex-col font-medium text-center text-white uppercase tracking-[-0.24px]">
        <p className="text-[11px] leading-[18px]">
          ILLUSTRATIONS THAT MAKE SENSE.
          <br />
          WHAT ABOUT DIGITAL ART?
          <br />
          {"LET'S MAKE EVERY PRODUCT YOURS FOR REAL."}
        </p>
      </div>
    </div>
  );
}
