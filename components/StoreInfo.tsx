'use client';

import Link from 'next/link';

export function StoreInfo() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-sm flex flex-col gap-6 items-center justify-start px-6 py-24 relative w-full h-full">
      {/* Left border accent */}
      <div aria-hidden="true" className="absolute border-r-2 border-solid border-cyan-400 inset-0 pointer-events-none" />

      {/* Main heading */}
      <div className="flex flex-col gap-4 items-center text-center">
        <h1 className="font-['Inter',sans-serif] font-bold text-4xl text-white leading-[2.5rem] uppercase tracking-tight">
          Hola,<br />
          Here comes our new merch.
          <br />
          Enjoy!
        </h1>
      </div>

      {/* Social Links */}
      <div className="flex gap-5 items-center justify-center">
        <a
          href="https://deviantart.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2f2f2f] flex items-center justify-center p-0.5 rounded-lg size-[60px] border-2 border-white hover:bg-white transition-colors group"
          aria-label="Visit DeviantArt"
        >
          <svg className="size-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0H9.68L8.92 0.98L5.59 6H0V12H3.15L0 18.75V24H5.32L6.08 23.02L9.41 18H15V12H11.85L15 5.25V0Z"
              className="fill-white group-hover:fill-[#0f0f0f] transition-colors"
            />
          </svg>
        </a>

        <a
          href="https://etsy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2f2f2f] flex items-center justify-center rounded-lg size-[60px] border-2 border-white hover:bg-white transition-colors group"
          aria-label="Shop on Etsy"
        >
          <span className="font-['Inter',sans-serif] font-bold text-2xl text-white group-hover:text-[#0f0f0f] transition-colors">
            E
          </span>
        </a>
      </div>

      {/* Descriptive text */}
      <div className="flex flex-col gap-4 items-center text-center max-w-md">
        <p className="font-['Inter',sans-serif] font-medium text-base text-white leading-6 uppercase tracking-tight">
          Illustrations that make sense.
          <br />
          What about digital art?
          <br />
          Let&apos;s make every product yours for real.
        </p>
      </div>
    </div>
  );
}
