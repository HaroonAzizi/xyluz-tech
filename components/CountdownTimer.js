import React from "react";

export default function CountdownTimer({ countdown }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {Object.entries(countdown).map(([unit, value]) => (
        <div key={unit} className="card">
          <div className="text-3xl sm:text-5xl font-bold gradient-text">
            {value}
          </div>
          <div className="text-muted capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
}
