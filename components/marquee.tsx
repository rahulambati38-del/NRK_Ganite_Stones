const words = [
  'Natural Stone',
  'Granite',
  'Architecture',
  'Craft',
  'Durability',
  'Design',
]

export function Marquee() {
  // Duplicate the sequence so the -50% translate loops seamlessly.
  const sequence = [...words, ...words]

  return (
    <section
      aria-hidden="true"
      className="overflow-hidden border-y border-ivory/10 bg-obsidian py-8 md:py-10"
    >
      <div className="flex w-max animate-marquee">
        {sequence.map((word, i) => (
          <div key={i} className="flex items-center">
            <span className="whitespace-nowrap px-8 font-serif text-2xl text-ivory/80 md:text-4xl">
              {word}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
          </div>
        ))}
      </div>
    </section>
  )
}
