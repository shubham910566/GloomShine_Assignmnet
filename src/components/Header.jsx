import React from 'react'

export default function Header() {
  const now = new Date()
  const formatted = now.toLocaleString(undefined, { 
    weekday: 'short', 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  })

  return (
    <div className="row items-center" role="region" aria-label="Header">
      <div style={{ fontWeight: 600 }}>
        Todays Statistics{" "}
        <div style={{ color: '#6b7280', fontWeight: 400 }}>
          {formatted}
        </div>
      </div>
    </div>
  )
}
