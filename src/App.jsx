import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import KpiCard from './components/KpiCard'
import Availability from './components/Availability'
import LiveStatus from './components/LiveStatus'
import { HireCancelChart, EarningsLineChart } from './components/Charts'
import { kpis } from './mock'

export default function App(){
  return (
    <div className="app">
      <Sidebar/>
      <main className="main" role="main">
        <div className="grid">
          <Header/>
          <KpiCard title="Income" value={kpis.income.value} delta={kpis.income.delta} lastDay={kpis.income.lastDay} lastWeek={kpis.income.lastWeek}/>
          <KpiCard title="Expenses" value={kpis.expenses.value} delta={kpis.expenses.delta} lastDay={kpis.expenses.lastDay} lastWeek={kpis.expenses.lastWeek}/>
          <div className="panel">
            <h3>Hire vs Cancel</h3>
            <HireCancelChart/>
          </div>
        </div>

        <div className="grid">
          <Availability/>
          <LiveStatus/>
          <div className="panel">
            <div className="row">
              <h3 className="grow">Earning Summary</h3>
              <div className="legend muted s">Mar 2022 – Oct 2022 ▾</div>
            </div>
            <EarningsLineChart/>
          </div>
        </div>
      </main>
    </div>
  )
}
