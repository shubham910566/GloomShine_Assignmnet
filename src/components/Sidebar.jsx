import React from "react";
import {
  FaTachometerAlt,
  FaUserTie,
  FaCalendarAlt,
  FaBell,
  FaCog,
  FaCreditCard,
  FaCar,
  FaSignOutAlt,
} from "react-icons/fa";
import { AiOutlineTransaction } from 'react-icons/ai';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { LuLayoutDashboard } from 'react-icons/lu';

const items = [
  ["Dashboard", "dashboard", <LuLayoutDashboard />],
  ["Drivers", "drivers", <FaCar />],
  ["Bookings", "bookings", <FaCalendarAlt />],
  ["Notifications", "notifications", <FaBell />],
  ["Settings", "settings", <FaCog />],
  ["Payment Details", "payment", <FaCreditCard />],
  ["Transactions", "transactions", <AiOutlineTransaction />],
  ["Car Report", "report", <HiOutlineDocumentReport />],
];

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Sidebar">
      {/* Brand */}
      <div className="brand" aria-label="Brand">
        <div className="brand-badge">V</div>
        <div className="hide-sm">
          <div style={{ fontSize: 16, opacity: 0.7, lineHeight: 1 }}>
            CAR RENT
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav" aria-label="Main navigation">
        {items.map(([label, key, icon], idx) => (
          <React.Fragment key={key}>
            {/* Divider before Car Report */}
            {label === "Payment Details" && (
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #e5e7eb",
                  margin: "10px 0",
                }}
              />
            )}

            <a
              href={`#${key}`}
              className={idx === 0 ? "active" : ""}
              role="link"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "6px",
                color: "white",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "blue")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <span aria-hidden>{icon}</span>
              <span className="hide-sm">{label}</span>
            </a>
          </React.Fragment>
        ))}
      </nav>

      {/* Bottom Logout */}
      <div className="bottom">
        <button
          className="btn link"
          aria-label="Logout"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "white",
          }}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </aside>
  );
}
