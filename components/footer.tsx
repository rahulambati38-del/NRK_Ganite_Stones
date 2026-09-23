import { business, nav } from '@/lib/content'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-graphite text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-serif text-4xl tracking-[0.15em] md:text-5xl">
              NRK <span className="text-bronze">STONES</span>
            </p>
            <p className="mt-6 max-w-xs leading-relaxed text-ivory/60">
              {business.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-5 text-[11px] uppercase tracking-[0.25em] text-warmstone">
              Explore
            </p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-ivory/70 transition-colors hover:text-bronze"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.25em] text-warmstone">
              Location
            </p>
            <address className="not-italic leading-relaxed text-ivory/70">
              {business.city}, {business.region}, {business.country}
            </address>
            <p className="mt-4 text-sm text-ivory/50">{business.plusCode}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/50 sm:flex-row sm:items-center">
          <p>© 2026 {business.name}. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em] text-warmstone">
            Designed for stone. Built for architecture.
          </p>
        </div>
      </div>
    </footer>
  )
}
