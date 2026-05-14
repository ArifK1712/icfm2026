function Marquee() {
  const items = [
    'Register Now',
    'Scientific Program',
    'Submit Abstract',
    'Workshops',
    'Sponsorship',
    'Riyadh 2026',
  ]

  return (
    <section className="overflow-hidden bg-teal-500 text-white">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="
              whitespace-nowrap
              px-8 py-4
              text-sm font-black uppercase
              tracking-[1px]
            "
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Marquee