import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// ✅ Earnings Line Chart Data
const earningsData = {
  labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  datasets: [
    {
      label: "Last 6 months",
      data: [250000, 280000, 220000, 260000, 240000, 270000],
      borderColor: "rgb(59,130,246)", // blue
      backgroundColor: "rgba(59,130,246,0.2)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Same period last year",
      data: [200000, 230000, 210000, 220000, 210000, 240000],
      borderColor: "rgb(156,163,175)", // gray
      borderDash: [5, 5],
      fill: false,
      tension: 0.4,
    },
  ],
};

const earningsOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      align: "end",
      labels: {
        boxWidth: 12,
        usePointStyle: true,
      },
    },
  },
  scales: {
    y: {
      ticks: {
        callback: (val) => `$${val / 1000}k`,
      },
    },
  },
};

// ✅ Hire vs Cancel Doughnut Data
const hireCancelData = {
  labels: ["Total Hired", "Total Canceled", "Total Pending"],
  datasets: [
    {
      data: [54, 20, 26],
      backgroundColor: ["#3b82f6", "#22c55e", "#ef4444"], // blue, green, red
      hoverOffset: 6,
    },
  ],
};

const hireCancelOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        padding: 20,
        font: { size: 12 },
      },
    },
  },
};

// ✅ Line Chart Component
export function EarningsLineChart() {
  return (
    <div
      className="card"
      style={{ width: "100%", height: "300px", padding: "16px" }}
    >
      <h3 style={{ marginBottom: "12px" }}>Earning Summary</h3>
      <div style={{ width: "100%", height: "240px" }}>
        <Line data={earningsData} options={earningsOptions} />
      </div>
    </div>
  );
}

// ✅ Doughnut Chart Component
export function HireCancelChart() {
  return (
    <div
      className="card"
      style={{ width: "280px", height: "320px", padding: "16px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <h3>Hire vs Cancel</h3>
        <span
          style={{
            background: "#f3f4f6",
            fontSize: "12px",
            padding: "2px 6px",
            borderRadius: "6px",
          }}
        >
          Today
        </span>
      </div>
      <div style={{ width: "200px", height: "200px", margin: "0 auto" }}>
        <Doughnut data={hireCancelData} options={hireCancelOptions} />
      </div>
    </div>
  );
}
