"use client";
import React, { useState, useEffect, useRef } from "react";

const counterData = [
  { number: 2000, text: "Services provide monthly" },
  { number: 300, text: "Truck plus semitrailers" },
  { number: 15000, text: "Satisfied customers" },
  { number: 450, text: "Air transportations" }
]

const Counter = () => {
  const [counts, setCounts] = useState(counterData.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startCounting()
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 } // Start animation when 10% of the component is visible
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [hasAnimated])

  const startCounting = () => {
    const duration = 5000 // 5 seconds for the animation (increased from 2 seconds)
    const interval = 50 // update every 50ms

    const timers = counterData.map((item, index) => {
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts]
          if (newCounts[index] < item.number) {
            newCounts[index] = Math.min(
              newCounts[index] + Math.ceil(item.number / (duration / interval) / 2), // Halved the increment
              item.number
            )
          }
          return newCounts
        })
      }, interval)
    })

    setTimeout(() => {
      timers.forEach(timer => clearInterval(timer))
    }, duration)
  }

  return (
    <div ref={counterRef} className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {counterData.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 text-center mb-8">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                +{counts[index].toLocaleString()}
              </div>
              <div className="text-lg">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Counter