interface GridInfoCardProps {
  name: string;
  slug: string;
}

export function GridInfoCard({ name, slug }: GridInfoCardProps) {
  return (
    <div className="absolute bottom-4 left-3 right-3 sm:left-4 sm:right-4">
      <div className="bg-[#d9d9d9] py-3 px-3 sm:px-4 relative rounded-[6px] flex items-center justify-between gap-2 border-2 border-transparent">
        <p className="font-bold text-[12px] sm:text-[13px] text-black tracking-[0.5px] leading-[18px] flex-1 min-w-0 line-clamp-2">
          {name}
        </p>

        <a
          href={`/products/${slug}`}
          className="bg-[#e8e8e8] h-10 sm:h-11 rounded-[6px] w-[80px] sm:w-[96px] border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shrink-0"
        >
          <span className="font-bold text-[13px] sm:text-[15px] tracking-[-0.2px] uppercase">
            Shop
          </span>
        </a>
      </div>
    </div>
  );
}
