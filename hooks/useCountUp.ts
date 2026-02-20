"use client"

import { useEffect, useRef, useState } from "react"

export function useCountUp(target: number, duration = 2000) {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true)
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [hasStarted])

    useEffect(() => {
        if (!hasStarted) return

        let startTime: number | null = null
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)

            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            if (progress < 1) {
                setCount(Math.floor(eased * target))
                animationFrame = requestAnimationFrame(animate)
            } else {
                setCount(target)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [hasStarted, target, duration])

    return { count, ref }
}
