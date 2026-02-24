import Image from "next/image";

interface BookCardProps {
  title: string;
  hook: string;
  coverImage: string;
  buyLink: string;
  buyLabel?: string;
}

export default function BookCard({
  title,
  hook,
  coverImage,
  buyLink,
  buyLabel = "Get the Book",
}: BookCardProps) {
  return (
    <div className="group flex flex-col items-center text-center">
      <a
        href={buyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-4"
      >
        <div className="relative w-[160px] h-[240px] md:w-[180px] md:h-[270px] overflow-hidden shadow-lg shadow-black/40 transition-transform duration-300 group-hover:-translate-y-2">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            sizes="180px"
          />
        </div>
      </a>
      <h3 className="font-playfair text-base md:text-lg text-cream font-medium mb-2 max-w-[200px]">
        {title}
      </h3>
      <p className="text-warm-gray text-sm mb-3 max-w-[220px] leading-relaxed">
        {hook}
      </p>
      <a
        href={buyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold text-xs font-semibold tracking-[0.1em] uppercase hover:text-gold-light transition-colors"
      >
        {buyLabel} →
      </a>
    </div>
  );
}
