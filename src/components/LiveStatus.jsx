import React from 'react'
import { cars } from '../mock'

function StatusBadge({status}){
  const map = {
    'Completed': ['success', 'Completed'],
    'Pending': ['warning', 'Pending'],
    'In route': ['danger', 'In route']
  }
  const [tone,label] = map[status] || ['warning', status]
  return <span className="badge"><span className={'dot '+tone}></span>{label}</span>
}

export default function LiveStatus(){
  return (
    <div className="panel" role="region" aria-label="Live Car Status">
      <div className="row">
        <h3 className="grow">Live Car Status</h3>
        <div className="filters s muted">Filter ▾</div>
      </div>

      <table className="table" role="table" aria-label="Live car status">
        <thead>
          <tr>
            <th>No.</th><th>Car no.</th><th>Driver</th><th>Status</th><th>Earning</th><th></th>
          </tr>
        </thead>
        <tbody>
          {cars.map((c,idx)=> (
            <tr key={c.id} className="rowcard" role="row">
              <td>{String(idx+1).padStart(2,'0')}</td>
              <td>{c.carNo}</td>
              <td>{c.driver}</td>
              <td><StatusBadge status={c.status}/></td>
              <td>${c.earning.toFixed(2)}</td>
              <td><button className="btn secondary">Details</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
