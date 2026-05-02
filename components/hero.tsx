import imgHeroBackground from "figma:asset/bdcadec31d60e1723dde87b492341a48ec82a883.png";

function P() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[170px] text-[transparent] uppercase w-full">
        <p className="leading-[normal]">Merch</p>
      </div>
    </div>
  );
}

function DivBgClipText() {
  return (
    <div className="content-stretch flex flex-col h-[349px] items-start justify-center relative shrink-0 w-[871px]" data-name="div.bg-clip-text">
      <P />
    </div>
  );
}

function DivFlexNone() {
  return (
    <div className="content-stretch flex flex-col items-start relative" data-name="div.flex-none">
      <DivBgClipText />
    </div>
  );
}

function DivAbsolute() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[871px] items-center justify-center left-1/2 top-[37px] w-[349px]" data-name="div.absolute">
      <div className="flex h-[871px] items-center justify-center relative shrink-0 w-[349px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <DivFlexNone />
        </div>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="h-[75px] relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pr-[7px] relative size-full">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] lowercase not-italic right-[-0.24px] text-[14px] text-black text-right top-[44.48px] tracking-[-0.24px] whitespace-nowrap">
            <p className="leading-[25px] mb-0">ILLUSTRATIONS THAT MAKE SENSE.</p>
            <p className="leading-[25px] mb-0">FIND NEW DIGITAL ART</p>
            <p className="leading-[25px]">{`LET'S MAKE EVERY PRODUCT YOURS FOR REAL.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivAbsolute1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[165px] items-start justify-center left-[-6.67%] right-[26.67%] top-[652px]" data-name="div.absolute">
      <P1 />
    </div>
  );
}

function DivRelative2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] h-[900px] left-0 overflow-clip right-0 top-0" data-name="div.relative">
      <div className="absolute border-r-3 border-solid border-white inset-0" data-name="div.absolute" />
      <DivAbsolute />
      <DivAbsolute1 />
    </div>
  );
}

function DivWFull() {
  return (
    <div className="absolute h-[900px] left-0 top-0 w-[400px]" data-name="div.w-full">
      <DivRelative2 />
      <div className="-translate-y-1/2 absolute flex h-[871px] items-center justify-center left-[42.43px] top-[491.52px] w-[349px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#4f4f4f] h-[349px] justify-center leading-[0] not-italic relative text-[170px] text-[transparent] to-[#cbcbcb] uppercase w-[871px]">
            <p className="leading-[normal]">Merch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivRelative1() {
  return (
    <div className="absolute h-[900px] left-[520.43px] top-[0.02px] w-[400px]" data-name="div.relative">
      <DivWFull />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center px-[16px] py-[32px] relative size-full" data-name="div.relative">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-80 pointer-events-none size-full" src={imgHeroBackground} />
      <div className="flex-[1_0_0] min-w-px self-stretch" data-name="div.hidden" />
      <DivRelative1 />
    </div>
  );
}
