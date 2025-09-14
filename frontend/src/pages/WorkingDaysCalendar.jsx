// pages/WorkingDaysCalendar.jsx
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Exemple : les jours fériés ou non ouvrés peuvent venir d'une API
const initialWorkingDays = [
  // YYYY-MM-DD
  "2025-09-05",
  "2025-09-08",
  "2025-09-10",
];

const WorkingDaysCalendar = () => {
  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    // Ici on peut fetch depuis l'API si nécessaire
    setSelectedDates(initialWorkingDays.map(d => new Date(d)));
  }, []);

  const toggleDate = (date) => {
    const exists = selectedDates.some(d => d.toDateString() === date.toDateString());
    if (exists) {
      setSelectedDates(selectedDates.filter(d => d.toDateString() !== date.toDateString()));
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  const isWorkingDay = (date) => {
    return selectedDates.some(d => d.toDateString() === date.toDateString());
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: "1rem" }}>🗓 Working Days Calendar</h2>
      <Calendar
        onClickDay={toggleDate}
        tileClassName={({ date }) =>
          isWorkingDay(date)
            ? "working-day"
            : date.getDay() === 0 || date.getDay() === 6
            ? "weekend"
            : ""
        }
      />
      <style>{`
        .working-day {
          background: #10b981 !important;
          color: #fff !important;
          border-radius: 50% !important;
        }
        .weekend {
          color: #e74c3c !important;
        }
      `}</style>
      <div style={{ marginTop: "1rem" }}>
        <strong>Selected Working Days:</strong>
        <ul>
          {selectedDates.map((d, i) => (
            <li key={i}>{d.toDateString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkingDaysCalendar;
