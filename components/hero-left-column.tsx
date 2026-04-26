'use client';

export function HeroLeftColumn() {
  return (
    <aside className="w-[624px] bg-[#0f0f0f] px-[24px] py-[190px] h-[1282px]">
      <h1 className="font-['Inter:Bold',sans-serif] font-bold text-[#f5f5f5] tracking-[-0.24px] uppercase leading-[36px] mb-[48px] text-[36px]">
        ILLUSTRATIONS THAT MAKE SENSE.<br />
        WHAT ABOUT DIGITAL ART?<br />
        LET&apos;S MAKE EVERY PRODUCT YOURS FOR REAL.
      </h1>

      <p className="font-['Inter:Regular',sans-serif] font-normal text-[14.8px] tracking-[-0.24px] leading-[19.2px] text-[#6f8298]">
        Some products on this site are copyrighted ⓒ<br />
        and not for sale.
      </p>

      <div className="flex gap-[8px] mt-[16px]">
        <a
          href="#"
          className="bg-transparent rounded-[6px] size-[48px] border-2 border-white flex items-center justify-center hover:bg-white transition-colors group"
          aria-label="Visit DeviantArt"
        >
          <svg className="size-[24px]" fill="none" viewBox="0 0 15 24">
            <path
              d="M15 0H9.68L8.92 0.98L5.59 6H0V12H3.15L0 18.75V24H5.32L6.08 23.02L9.41 18H15V12H11.85L15 5.25V0Z"
              className="fill-white group-hover:fill-[#0f0f0f] transition-colors"
            />
          </svg>
        </a>
        <a
          href="#"
          className="bg-transparent rounded-[6px] size-[48px] border-2 border-white flex items-center justify-center hover:bg-white transition-colors group"
          aria-label="Shop on Etsy"
        >
          <span className="font-['Inter:Bold',sans-serif] font-bold text-[24px] text-white group-hover:text-[#0f0f0f] transition-colors">
            E
          </span>
        </a>
      </div>
    </aside>
  );
}
