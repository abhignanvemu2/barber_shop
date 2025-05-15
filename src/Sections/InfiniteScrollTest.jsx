import React from "react"
import "@/styles/marquee.css" // We'll define animation styles here

export default function InfiniteScrollText({ text }) {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-primary py-4">
      <div className="inline-block animate-marquee-reverse text-primary font-semibold text-xl">
        {Array(3).fill(text).map((item, idx) => (
          <span key={idx} className="mx-8 inline-block">{item}</span>
        ))}
      </div>
    </div>
  )
}
