function InnerPageHero({ subtitle, title }) {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[linear-gradient(180deg,#f8fffe_0%,#eef8ff_100%)]
        py-15
      "
    >
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-size-[54px_54px]" />
      {/* Left Glow */}
      <div
        className="
    absolute -top-24 -left-24
    h-72 w-72
    rounded-full
    bg-teal-300/20
    blur-3xl
  "
      />

      {/* Right Glow */}
      <div
        className="
    absolute -bottom-24 -right-24
    h-80 w-80
    rounded-full
    bg-cyan-300/20
    blur-3xl
  "
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <div
          className="
              mb-5 inline-flex items-center
              rounded-full
              border border-teal-500/10
              bg-white/80
              px-5 py-2
              text-sm font-bold
              tracking-[1px]
              text-teal-600
              shadow-lg shadow-teal-500/5
              backdrop-blur-xl
            "
        >
          {subtitle}
        </div>

        <h1 className="bg-linear-to-r from-teal-300 via-cyan-600 to-teal-500 bg-size-[200%_200%] bg-clip-text text-transparent animate-gradient">
          {title}
        </h1>
      </div>
    </section>
  );
}

export default InnerPageHero;
