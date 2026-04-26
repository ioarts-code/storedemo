'use client';

export function HeroLeftColumn() {
  return (
    <div className="w-1/2 bg-black flex flex-col items-start justify-center px-16 py-20">
      <h1 className="text-4xl font-bold text-white mb-8 leading-tight max-w-md">
        ILLUSTRATIONS THAT<br />
        MAKE SENSE.<br />
        WHAT ABOUT DIGITAL<br />
        ART? LET'S MAKE<br />
        EVERY PRODUCT
      </h1>

      <p className="text-xs text-gray-400 mb-12 max-w-xs leading-relaxed">
        Some products on this site are copyrighted ⓒ and not for sale.
      </p>

      <div className="flex gap-4 mt-8">
        <button className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-colors">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 3l7 10-7 10h3l6-8.5L17 23h3L13 12l7-9h-3l-5.5 7.5L9 3H5z" />
          </svg>
        </button>
        <button className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center text-white font-bold text-lg hover:bg-white hover:text-black transition-colors">
          E
        </button>
      </div>
    </div>
  );
}
