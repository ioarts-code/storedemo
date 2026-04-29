export function StoreInfo() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] flex flex-col gap-5 items-center px-6 py-[190px] relative h-full w-full">
      {/* Right white border */}
      <div aria-hidden="true" className="absolute border-r-[3px] border-solid border-white inset-0 pointer-events-none" />

      {/* Heading */}
      <div className="flex flex-col items-start relative shrink-0 w-[332px] h-[168px]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col font-bold h-[108px] justify-center text-[36px] text-center text-white uppercase tracking-[-0.24px] w-[320px] leading-[36px]">
          <p className="leading-[36px] mb-0">Hola,</p>
          <p className="leading-[36px] mb-0">Here comes our new merch.</p>
          <p className="leading-[36px]">Enjoy!</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-5 items-center justify-center relative shrink-0 w-full">
        {/* DeviantArt */}
        <a
          className="bg-[#2f2f2f] flex items-center justify-center p-[2px] relative rounded-[6px] shrink-0 size-[75px]"
          href="https://www.deviantart.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit DeviantArt"
        >
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
          <svg className="size-6" fill="none" viewBox="0 0 15 24">
            <path
              d="M15 0H9.68L8.92 0.98L5.59 6H0V12H3.15L0 18.75V24H5.32L6.08 23.02L9.41 18H15V12H11.85L15 5.25V0Z"
              fill="white"
            />
          </svg>
        </a>

        {/* Etsy */}
        <a
          className="bg-[#2f2f2f] flex items-center justify-center p-[2px] relative rounded-[6px] shrink-0 size-[75px]"
          href="https://www.etsy.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shop on Etsy"
        >
          <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
          <span className="font-bold text-[24px] text-white leading-none">E</span>
        </a>
      </div>

      {/* Tagline */}
      <div className="flex flex-col font-medium h-[165px] justify-center relative shrink-0 text-[20px] text-center text-white uppercase tracking-[-0.24px] w-[450px]">
        <p className="leading-[30px]">
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
