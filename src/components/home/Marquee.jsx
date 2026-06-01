function Marquee() {
  const text =
    'Important Dates: Abstract Submission closes on 30 July 2026 • Early Bird Registration ends on 11 August 2026.'

  return (
    <section className="overflow-hidden bg-teal-500 text-white">
      <div className="flex w-max animate-marquee">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="
              flex shrink-0 items-center
              whitespace-nowrap py-4
              text-sm font-black uppercase
              tracking-[1px]
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