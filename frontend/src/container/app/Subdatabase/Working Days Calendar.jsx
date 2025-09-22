import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const WorkingDaysCalendar = () => {
  // State pour stocker les jours ouvrés sélectionnés
  const [workingDays, setWorkingDays] = useState([]);

  // Fonction pour gérer la sélection des jours
  const handleWorkingDaysChange = (date) => {
    // Si la date n'est pas déjà dans le tableau, on l'ajoute
    if (date && !workingDays.some(d => d.getTime() === date.getTime())) {
      setWorkingDays([...workingDays, date]);
    }
  };

  return (
    <div className="working-days-calendar">
      <h2>Calendrier des jours ouvrés</h2>
      <p>Sélectionnez les jours ouvrés pour ce projet.</p>

      {/* Calendrier avec seulement les jours de la semaine (du lundi au vendredi) sélectionnables */}
      <DatePicker
        selected={null}
        onChange={handleWorkingDaysChange}
        inline
        highlightDates={workingDays}
        shouldCloseOnSelect={false}
        filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}  // Empêche la sélection du samedi (6) et du dimanche (0)
      />
      
      <div className="selected-days">
        <p>Jours ouvrés sélectionnés:</p>
        {workingDays.length > 0 ? (
          <ul>
            {workingDays.map((day, index) => (
              <li key={index}>{day.toLocaleDateString()}</li>
            ))}
          </ul>
        ) : (
          <p>Aucun jour sélectionné</p>
        )}
      </div>
    </div>
  );
};

export default WorkingDaysCalendar;
