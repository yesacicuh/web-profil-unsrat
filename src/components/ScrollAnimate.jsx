import { useState, useRef, useEffect } from 'react'

export default function ScrollAnimate({ children, delay = 'delay-0' }) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${delay} ${
        isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {children}
    </div>
  )
}