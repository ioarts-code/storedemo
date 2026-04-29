'use client';

export function Filter() {
  function P() {
    return (
      <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-name="p">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[-0.21px] uppercase w-full">
          <p className="leading-[16.8px]">All Products</p>
        </div>
      </div>
    );
  }

  function DivFlex() {
    return (
      <div className="content-stretch flex flex-col h-[60px] items-start justify-center pb-[21.61px] pt-[20.59px] relative shrink-0 w-full" data-name="div.flex">
        <P />
      </div>
    );
  }

  function PMb() {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.mb-0">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.21px] w-full">
          <p className="leading-[22px]">Products inventory</p>
        </div>
      </div>
    );
  }

  function P1() {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.21px] w-full">
          <p className="leading-[22px]">please choose</p>
        </div>
      </div>
    );
  }

  function DivFlex1() {
    return (
      <div className="content-stretch flex flex-col h-[60px] items-start justify-center relative shrink-0 w-full" data-name="div.flex">
        <PMb />
        <P1 />
      </div>
    );
  }

  function DivContentStretch1() {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[322px]" data-name="div.content-stretch">
        <DivFlex />
        <DivFlex1 />
      </div>
    );
  }

  function P2() {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-white tracking-[-0.21px] w-full">
          <p className="leading-[16.8px]">Filter</p>
        </div>
      </div>
    );
  }

  function DivAbsolute1() {
    return (
      <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[50px]" data-name="div.absolute">
        <P2 />
      </div>
    );
  }

  function DivAbsolute() {
    return (
      <div className="absolute content-stretch flex flex-col h-[32.8px] items-start left-0 pb-[8.02px] pl-[12px] pr-[198px] pt-[7.98px] right-0 rounded-[8px] top-0" data-name="div.absolute">
        <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
        <DivAbsolute1 />
      </div>
    );
  }

  function P3() {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.3px] text-white tracking-[-0.21px] w-full">
          <p className="leading-[16.8px]">Deviant Vectors</p>
        </div>
      </div>
    );
  }

  function DivAbsolute3() {
    return (
      <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[102px]" data-name="div.absolute">
        <P3 />
      </div>
    );
  }

  function DivAbsolute2() {
    return (
      <div className="absolute bg-[#303030] content-stretch flex flex-col h-[32.8px] items-start left-0 pb-[8.39px] pl-[12px] pr-[146px] pt-[7.61px] right-0 rounded-[8px] top-[40.8px]" data-name="div.absolute">
        <DivAbsolute3 />
      </div>
    );
  }

  function P4() {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.7px] text-white tracking-[-0.21px] w-full">
          <p className="leading-[16.8px]">Etsy Products</p>
        </div>
      </div>
    );
  }

  function DivAbsolute5() {
    return (
      <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[91.17px]" data-name="div.absolute">
        <P4 />
      </div>
    );
  }

  function DivAbsolute4() {
    return (
      <div className="absolute bg-[#303030] content-stretch flex flex-col h-[32.8px] items-start left-0 pb-[8.39px] pl-[12px] pr-[156.83px] pt-[7.61px] right-0 rounded-[8px] top-[81.58px]" data-name="div.absolute">
        <DivAbsolute5 />
      </div>
    );
  }

  function DivRelative() {
    return (
      <div className="h-[114.38px] relative shrink-0 w-[260px]" data-name="div.relative">
        <DivAbsolute />
        <DivAbsolute2 />
        <DivAbsolute4 />
      </div>
    );
  }

  function DivContentStretch2() {
    return (
      <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="div.content-stretch">
        <DivRelative />
      </div>
    );
  }

  function P5() {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.2px] text-white tracking-[-0.21px] w-full">
          <p className="leading-[16.8px]">Sort</p>
        </div>
      </div>
    );
  }

  function DivAbsolute8() {
    return (
      <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[48.02px]" data-name="div.absolute">
        <P5 />
      </div>
    );
  }

  function DivAbsolute7() {
    return (
      <div className="absolute content-stretch flex flex-col h-[32.8px] items-start left-0 pb-[8.41px] pl-[12px] pr-[199.98px] pt-[7.59px] right-0 rounded-[8px] top-0" data-name="div.absolute">
        <div aria-hidden="true" className="absolute border-3 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
        <DivAbsolute8 />
      </div>
    );
  }

  function P6() {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.2px] text-white tracking-[-0.21px] w-full">
          <p className="leading-[16.8px]">A - Z</p>
        </div>
      </div>
    );
  }

  function DivAbsolute10() {
    return (
      <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[30.25px]" data-name="div.absolute">
        <P6 />
      </div>
    );
  }

  function DivAbsolute9() {
    return (
      <div className="absolute bg-[#303030] content-stretch flex flex-col h-[32.8px] items-start left-0 pb-[8.41px] pl-[12px] pr-[217.75px] pt-[7.59px] right-0 rounded-[8px] top-[40.8px]" data-name="div.absolute">
        <DivAbsolute10 />
      </div>
    );
  }

  function P7() {
    return (
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13.2px] text-white tracking-[-0.21px] w-full">
          <p className="leading-[16.8px]">Z - A</p>
        </div>
      </div>
    );
  }

  function DivAbsolute12() {
    return (
      <div className="content-stretch flex flex-col h-[16.8px] items-start justify-center relative shrink-0 w-[30.25px]" data-name="div.absolute">
        <P7 />
      </div>
    );
  }

  function DivAbsolute11() {
    return (
      <div className="absolute bg-[#303030] content-stretch flex flex-col h-[32.8px] items-start left-0 pb-[8.41px] pl-[12px] pr-[217.75px] pt-[7.59px] right-0 rounded-[8px] top-[81.58px]" data-name="div.absolute">
        <DivAbsolute12 />
      </div>
    );
  }

  function DivAbsolute6() {
    return (
      <div className="h-[114.38px] relative shrink-0 w-full" data-name="div.absolute">
        <DivAbsolute7 />
        <DivAbsolute9 />
        <DivAbsolute11 />
      </div>
    );
  }

  function DivRelative1() {
    return (
      <div className="content-stretch flex flex-col h-[146.38px] items-start p-[16px] relative rounded-[8px] shrink-0 w-[292px]" data-name="div.relative">
        <DivAbsolute6 />
      </div>
    );
  }

  function P8() {
    return (
      <div className="content-stretch flex flex-col items-end pb-[0.8px] relative shrink-0 w-full" data-name="p">
        <div className="flex flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-right text-white tracking-[-0.21px] uppercase whitespace-nowrap">
          <p className="leading-[16.8px]">Delivery</p>
        </div>
      </div>
    );
  }

  function DivFlex2() {
    return (
      <div className="content-stretch flex flex-col h-[60px] items-start justify-center pb-[21.61px] pt-[20.59px] relative shrink-0 w-full" data-name="div.flex">
        <P8 />
      </div>
    );
  }

  function PMb1() {
    return (
      <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="p.mb-0">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-right text-white tracking-[-0.21px] whitespace-nowrap">
          <p className="leading-[23px]">Mo-fr</p>
        </div>
      </div>
    );
  }

  function P9() {
    return (
      <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="p">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-right text-white tracking-[-0.21px] whitespace-nowrap">
          <p className="leading-[23px]">0800-1700</p>
        </div>
      </div>
    );
  }

  function DivFlex3() {
    return (
      <div className="content-stretch flex flex-col h-[60px] items-start justify-center relative shrink-0 w-full" data-name="div.flex">
        <PMb1 />
        <P9 />
      </div>
    );
  }

  function DivContentStretch3() {
    return (
      <div className="content-stretch flex flex-col items-end relative shrink-0 w-[184px]" data-name="div.content-stretch">
        <DivFlex2 />
        <DivFlex3 />
      </div>
    );
  }

  function DivContentStretch() {
    return (
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="div.content-stretch">
        <DivContentStretch1 />
        <DivContentStretch2 />
        <DivRelative1 />
        <DivContentStretch3 />
      </div>
    );
  }

  function DivWFull1() {
    return (
      <div className="content-stretch flex flex-col items-start max-w-[1130px] relative self-stretch shrink-0 w-[1130px]" data-name="div.w-full">
        <DivContentStretch />
      </div>
    );
  }

  return (
    <div className="content-stretch flex items-start justify-center py-[60px] relative size-full" data-name="div.w-full">
      <DivWFull1 />
    </div>
  );
}
