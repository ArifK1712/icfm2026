function Marquee() {
  const text =
    'Important Dates: Abstract Submission closes on 30 July 2026 • Early Bird Registration ends on 11 August 2026.'

  return (
    <section className="overflow-hidden text-white">
      <div className="flex w-max animate-marquee">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="
              flex shrink-0 items-center
              whitespace-nowrap py-4
              text-xl md:text-5xl font-black uppercase text-teal-400
            "
          >
            <span>{text}</span>
            <span className="mx-6 opacity-70">•</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Marquee