type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  width: number;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TestimonialCard({ quote, author, role, width }: TestimonialCardProps) {
  const initials = getInitials(author);

  return (
    <div style={{ width }} className="shrink-0 self-stretch">
      <div className="group relative rounded-[24px] p-[1px] h-full bg-gradient-to-br from-[#7c3aed]/50 via-[#4c1d95]/10 to-[#38bdf8]/50 shadow-[0_0_24px_rgba(124,58,237,0.25)]">
        <div className="bg-tertiary rounded-[24px] px-7 py-8 min-h-[320px] h-full border border-white/5 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-18px_rgba(56,189,248,0.35)] group-hover:scale-[1.01] flex flex-col">
          <div className="text-[46px] leading-none text-white/80">“</div>
          <p className="mt-3 text-secondary text-[16px] leading-[28px]">
            {quote}
          </p>

          <div className="mt-auto pt-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-[15px]">{author}</p>
              <p className="text-secondary text-[13px]">{role}</p>
            </div>

            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#38bdf8] p-[1px]">
              <div className="w-full h-full rounded-full bg-black-100 flex items-center justify-center text-white text-[14px] font-semibold">
                {initials}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
