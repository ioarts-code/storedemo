export function StoreInfo() {
  return (
    <div className="relative w-full max-w-[420px] min-h-[520px] rounded-[10px] border border-white/10 bg-[rgba(255,255,255,0.2)] backdrop-blur-sm px-[24px] py-[120px] flex flex-col gap-[20px] items-center justify-between overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 border-r-[3px] border-solid border-white/20 pointer-events-none rounded-[10px]" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-[332px]">
        <p className="mb-0 text-[20px] md:text-[24px] font-bold uppercase tracking-[-0.24px] leading-[28px] text-white">
          Hola,
        </p>
        <p className="mb-0 text-[20px] md:text-[24px] font-bold uppercase tracking-[-0.24px] leading-[28px] text-white">
          Here comes our new merch.
        </p>
        <p className="mb-0 text-[20px] md:text-[24px] font-bold uppercase tracking-[-0.24px] leading-[28px] text-white">
          Enjoy!
        </p>
      </div>

      <div className="relative z-10 flex w-full justify-center gap-[20px]">
        <a
          className="relative flex items-center justify-center w-[50px] h-[50px] rounded-[6px] p-[2px]"
          href="https://www.deviantart.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit DeviantArt"
        >
          <div aria-hidden="true" className="absolute inset-0 rounded-[6px] border-2 border-white pointer-events-none" />
          <svg className="relative w-[18px] h-[18px]" fill="none" viewBox="0 0 15 24">
            <path
              d="M15 0H9.68L8.92 0.98L5.59 6H0V12H3.15L0 18.75V24H5.32L6.08 23.02L9.41 18H15V12H11.85L15 5.25V0Z"
              fill="white"
            />
          </svg>
        </a>

        <a
          className="relative flex items-center justify-center w-[50px] h-[50px] rounded-[6px] p-[2px]"
          href="https://www.etsy.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shop on Etsy"
        >
          <div aria-hidden="true" className="absolute inset-0 rounded-[6px] border-2 border-white pointer-events-none" />
          <span className="relative text-[20px] font-bold text-white leading-none">E</span>
        </a>
      </div>

      <div className="relative z-10 w-full max-w-[450px] text-center text-[14px] md:text-[16px] leading-[18px] lowercase tracking-[-0.24px] text-white">
        <p>
          ILLUSTRATIONS THAT MAKE SENSE.
          <br />
          WHAT ABOUT DIGITAL ART?
          <br />
          {`LET'S MAKE EVERY PRODUCT YOURS FOR REAL.`}
        </p>
      </div>
    </div>
  );
}
