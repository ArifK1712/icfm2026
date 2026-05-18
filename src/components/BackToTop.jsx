import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

function BackToTop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full
        border border-white/30
        bg-linear-to-r from-teal-500 to-cyan-500
        text-white
        shadow-[0_18px_45px_rgba(20,184,166,0.35)]
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_24px_60px_rgba(20,184,166,0.45)]
        ${
          showButton
            ? 'visible translate-y-0 opacity-100'
            : 'invisible translate-y-5 opacity-0'
        }
      `}
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  )
}

export default BackToTop