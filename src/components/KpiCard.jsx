import React from 'react'

export default function KpiCard({ title, value, delta, lastDay, lastWeek }){
  const negative = delta < 0
  return (
    <div className="panel kpi" role="region" aria-label={title}>
      <div className="row">
        <h3 className="grow">{title}</h3>
        <span className={"delta " + (negative? 'down':'up')}>
          {negative ? '▼' : '▲'} {Math.abs(delta)}%
        </span>
      </div>
      <div className="value">${value.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2})}</div>
      <div className="s muted">Compared to ${lastDay.toLocaleString()} yesterday</div>
      <div className="row s muted">
        <span className="grow">Last week Income</span>
        <strong>${lastWeek.toLocaleString()}</strong>
      </div>
    </div>
  )
}
