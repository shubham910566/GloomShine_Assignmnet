import React, { useState } from "react";
import { format } from "date-fns";
import { FaBell, FaSearch } from "react-icons/fa";

export default function Availability() {
  const [car, setCar] = useState("");
  const [date, setDate] = useState(() => format(new Date(), "yyyy-MM-dd"));
  const [time, setTime] = useState("10:00");

  function check() {
    alert(`Checking availability for car ${car || "any"} at ${date} ${time}`);
  }

  return (
    <>
      {/* 🔔 Notification + Search Row (no .panel) */}
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: "16px",
          gap: "16px",
        }}
      >
        {/* Notification Bell with red dot */}
        <div style={{ position: "relative" }}>
          <FaBell size={20} />
          <span
            style={{
              position: "absolute",
              top: "-4px",
              right: "-4px",
              width: "8px",
              height: "8px",
              background: "red",
              borderRadius: "50%",
            }}
          />
        </div>

        {/* Search Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "6px 10px",
            minWidth: "240px",
          }}
        >
          <input
            type="text"
            placeholder="Search here"
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              flex: 1,
              fontSize: "14px",
            }}
          />
          <FaSearch color="#6b7280" />
        </div>
      </div>

      {/* 🚘 Car Availability Panel */}
      <div className="panel" role="region" aria-label="Car Availability">
        <h3 className="grow">Car Availability</h3>
        <div
          className="availability"
          style={{
            marginTop: 10,
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <div className="field">
            <select
              aria-label="Car number"
              value={car}
              onChange={(e) => setCar(e.target.value)}
              className="ring"
            >
              <option value="">Car number</option>
              <option>6465</option>
              <option>5665</option>
              <option>1755</option>
            </select>
          </div>

          <div className="field">
            <input
              className="ring"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="field">
            <input
              className="ring"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div>
            <button onClick={check} className="btn ring">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
