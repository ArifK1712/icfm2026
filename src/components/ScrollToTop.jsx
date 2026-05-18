import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })

    // Helpful because your project uses GSAP ScrollTrigger
    ScrollTrigger.refresh()
  }, [pathname])

  return null
}

export default ScrollToTop