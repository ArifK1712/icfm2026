import { Award } from 'lucide-react'

function CmeBadge() {
  return (
    <div
      className="fixed bottom-3 left-3 z-40">
      <div
        className="
          group relative overflow-hidden
          rounded-full
          bg-white/18
          p-2
          backdrop-blur-3xl
          bg-[linear-gradient(125deg,rgba(6,26,53,0.98),rgba(9,41,79,0.94))]
          transition-all duration-300
          hover:-translate-y-1
        "
      >
        {/* Soft background glow */}
        <div
          className="
            absolute inset-0
            bg-linear-to-r
            from-teal-300/25 via-cyan-400/20 to-teal-500/25
          "
        />
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.45)_45%,transparent_75%)]
            bg-size-[220%_100%]
            animate-glassShine
          "
        />

        <div className="relative z-10 flex items-center gap-2">
          <div
            className="
              flex h-11 w-11 shrink-0 items-center justify-center
              rounded-full
              bg-linear-to-br from-teal-400 to-cyan-500
              text-white
            "
          >
            <Award size={22} strokeWidth={2.2} />
          </div>
          <div className="flex flex-col items-start">
            <div className="text-xs text-white uppercase">Accredited</div>
            <h5 className="text-base font-black text-white">
              22 CME Hours
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CmeBadge