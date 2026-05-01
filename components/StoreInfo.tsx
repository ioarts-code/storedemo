export function StoreInfo() {
  return (
    <div className="relative mobile:w-[400px] tablet:w-[400px] desktop-lg:w-auto mobile:mx-auto tablet:mx-auto desktop-lg:mx-0 desktop-lg:max-w-[420px] min-h-[900px] border-solid border-white/10 bg-[rgba(255,255,255,0.2)] px-[24px] py-[100px] flex flex-col gap-[30px] items-center justify-center overflow-hidden">
      {/* moved StoreInfo card up slightly by reducing vertical padding from 200px to 160px */}
      <div aria-hidden="true" className="absolute border-r-3 border-solid border-white inset-0 pointer-events-none" />

      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[871px] items-center justify-center left-1/2 top-[472.5px] w-[349px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-black h-[349px] justify-center leading-[0] not-italic relative text-[170px] text-[transparent] to-[#adadad] uppercase w-[871px]">
            <p className="leading-[normal]">Merch</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[165px] justify-center leading-[0] left-1/3 lowercase not-italic text-[14px] text-right text- white top-[734.5px] tracking-[-0.24px] w-[320px]">
        <p className="leading-[25px]">
          ILLUSTRATIONS THAT MAKE SENSE.
          <br aria-hidden="true" />
          FIND NEW DIGITAL ART
          <br aria-hidden="true" />
          {`LET'S MAKE EVERY PRODUCT YOURS FOR REAL.`}
        </p>
      </div>
    </div>
  );
}
