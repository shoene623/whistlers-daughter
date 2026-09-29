import Image from "next/image"

type LaunchBookGraphicProps = {
  compact?: boolean
}

export function LaunchBookGraphic({ compact = false }: LaunchBookGraphicProps) {
  return (
    <div
      role="img"
      aria-label="The Whistler's Daughter book cover with colorful graffiti lettering reading: It's here! Order today! Buy your friends a copy!"
      className={`relative isolate grid grid-cols-[1fr_1.45fr_1fr] items-center overflow-hidden bg-[#122747] px-2 py-5 sm:px-5 md:px-8 ${compact ? "h-[240px] sm:h-[330px] md:h-[400px]" : "min-h-[320px] sm:min-h-[430px] md:min-h-[540px]"}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 24%, rgba(255,186,47,.26) 0 2%, transparent 2.2%), radial-gradient(circle at 93% 72%, rgba(255,104,103,.27) 0 2%, transparent 2.2%), radial-gradient(circle at 14% 83%, rgba(255,104,103,.15) 0 1%, transparent 1.2%), linear-gradient(135deg, #143457, #10213c 52%, #254c6d)",
      }}
    >
      <div className="relative z-10 flex justify-center">
        <span
          className="inline-block -rotate-12 text-center font-black uppercase italic leading-[.85] tracking-[-.06em] text-[#ffd447] drop-shadow-[3px_5px_0_#0b152e]"
          style={{ fontFamily: "Impact, 'Arial Black', sans-serif", fontSize: "clamp(1.2rem, 4.2vw, 3.8rem)", WebkitTextStroke: "1px #0b152e" }}
        >
          It&apos;s<br />here<span className="text-[#ff6b68]">!</span>
        </span>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[330px] -rotate-2 rounded-sm shadow-[10px_15px_25px_rgba(0,0,0,.45)]">
        <Image
          src="/book-cover.jpg"
          alt=""
          width={400}
          height={615}
          className="h-auto w-full"
          priority={!compact}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-5 text-center sm:gap-10">
        <span
          className="inline-block rotate-6 font-black uppercase italic leading-[.85] tracking-[-.06em] text-[#ff6b68] drop-shadow-[3px_5px_0_#0b152e]"
          style={{ fontFamily: "Impact, 'Arial Black', sans-serif", fontSize: "clamp(1.05rem, 3.25vw, 3rem)", WebkitTextStroke: "1px #0b152e" }}
        >
          Order<br />today!
        </span>
        <span
          className="inline-block -rotate-6 font-black uppercase italic leading-[.9] tracking-[-.04em] text-[#6ee6e6] drop-shadow-[3px_4px_0_#0b152e]"
          style={{ fontFamily: "Impact, 'Arial Black', sans-serif", fontSize: "clamp(.82rem, 2.4vw, 2.2rem)", WebkitTextStroke: ".5px #0b152e" }}
        >
          Buy your<br />friends<br />a copy!
        </span>
      </div>
    </div>
  )
}
