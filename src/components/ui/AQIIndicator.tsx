import React from "react";

export function AQIIndicator({ aqi }: { aqi: number }) {
  let color = "";
  let category = "";

  if (aqi <= 50) {
    color = "green";
    category = "Good";
  } else if (aqi <= 100) {
    color = "yellow";
    category = "Moderate";
  } else if (aqi <= 150) {
    color = "orange";
    category = "Unhealthy for Sensitive Groups";
  } else if (aqi <= 200) {
    color = "red";
    category = "Unhealthy";
  } else if (aqi <= 300) {
    color = "purple";
    category = "Very Unhealthy";
  } else {
    color = "maroon";
    category = "Hazardous";
  }

  return (
    <div
      style={{
        backgroundColor: color,
        padding: "10px",
        borderRadius: "5px",
        color: "white",
      }}
    >
      {aqi} - <p>{category}</p>
    </div>
  );
}
