function InnerPageHero({ title }) {
  return (
    <section className="sticky top-30 z-30 py-4">
  <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
    <div className="relative inline-flex items-center justify-center">
      <div
        className="
          absolute inset-0
          scale-110 rounded-full
        "
      />

      {/* Glass Title */}
      <h4
        className="
          relative overflow-hidden
          rounded-full
          text-white
          px-7 py-3
          bg-[radial-gradient(circle_at_12%_20%,rgba(0,194,184,0.24),transparent_26%),radial-gradient(circle_at_88%_70%,rgba(71,215,255,0.18),transparent_28%),linear-gradient(135deg,#061a35,#09294f_55%,#061a35)]
        "
      >
       
        {/* Gradient shimmer layer */}
        <span
          className="
            pointer-events-none absolute inset-0
            bg-linear-to-r
            from-teal-300/25 via-cyan-400/25 to-teal-500/25
            bg-size-[200%_200%]
            animate-gradient
          "
        />

        {/* Title Text */}
        <span className="relative z-10 font-bold tracking-wide">
          {title}
        </span>
      </h4>
    </div>
  </div>
</section>
  );
}

export default InnerPageHero;
