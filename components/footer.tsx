function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM7.5 7C8.32843 7 9 7.67157 9 8.5C9 9.32843 8.32843 10 7.5 10C6.67157 10 6 9.32843 6 8.5C6 7.67157 6.67157 7 7.5 7ZM16.5 7C17.3284 7 18 7.67157 18 8.5C18 9.32843 17.3284 10 16.5 10C15.6716 10 15 9.32843 15 8.5C15 7.67157 15.6716 7 16.5 7ZM8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13V17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17V13Z" fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VisitDeviantArt() {
  return (
    <a
      className="content-stretch flex items-center justify-center p-[3px] relative rounded-[6px] shrink-0 size-[48px]"
      href="https://oats-iso-27040139.figma.site/"
      target="_blank"
      rel="noreferrer"
      data-name="Visit DeviantArt"
    >
      <div
        aria-hidden="true"
        className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
      />
      <Frame />
    </a>
  );
}

function SpanFontBold() {
  return (
    <div className="relative shrink-0" data-name="span.font-bold">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-left text-white whitespace-nowrap">
          <p className="leading-[36px]">E</p>
        </div>
      </div>
    </div>
  );
}

function ShopOnEtsy() {
  return (
    <a
      className="content-stretch flex items-center justify-center p-[3px] relative rounded-[6px] shrink-0 size-[48px]"
      href="https://oats-iso-27040139.figma.site/"
      target="_blank"
      rel="noreferrer"
      data-name="Shop on Etsy"
    >
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <SpanFontBold />
    </a>
  );
}

function DivAbsolute() {
  return (
    <div className="absolute content-stretch cursor-pointer flex gap-[8px] items-start right-[44px] top-[31px]" data-name="div.absolute">
      <VisitDeviantArt />
      <ShopOnEtsy />
    </div>
  );
}

function A() {
  return (
    <a
      href="mailto:contact@ioarts.com"
      className="flex items-center shrink-0 hover:opacity-75 transition-opacity font-['Inter:Regular',sans-serif] font-normal text-[14.6px] text-white tracking-[-0.24px] leading-[19.2px]"
      data-name="a"
    >
      Contact
    </a>
  );
}

function A1() {
  return (
    <a
      href="/terms"
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 hover:opacity-75 transition-opacity"
      data-name="a"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15.1px] text-white tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[19.2px]">Terms of Sale</p>
      </div>
    </a>
  );
}

function A2() {
  return (
    <a
      href="/privacy"
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 hover:opacity-75 transition-opacity"
      data-name="a"
    >
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[19.2px]">Privacy Policy</p>
      </div>
    </a>
  );
}

function DivAbsolute1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[20px] items-start left-[44px] top-[464px]" data-name="div.absolute">
      <A />
      <A1 />
      <A2 />
    </div>
  );
}

function DivAbsolute2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[43.19px] top-[472px]" data-name="div.absolute">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14.8px] text-white tracking-[-0.24px] whitespace-nowrap">
        <p className="leading-[19.2px]">2026© — All rights reserved</p>
      </div>
    </div>
  );
}

function FooterWFull() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[532px] min-h-[532px] relative rounded-[12px] shrink-0 w-full" data-name="footer.w-full">
      <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="-translate-y-1/2 absolute bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-black h-[349px] justify-center leading-[0] left-[44px] not-italic text-[288px] text-[transparent] to-[#5c5c5c] top-[218.5px] w-[1079.975px]">
        <p className="leading-[normal]">IOARTS</p>
      </div>
      <DivAbsolute />
      <DivAbsolute1 />
      <DivAbsolute2 />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex flex-col items-start p-[24px] relative size-full" data-name="div">
      <FooterWFull />
    </div>
  );
}
