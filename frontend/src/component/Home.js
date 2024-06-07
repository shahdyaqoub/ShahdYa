import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import "../style/Home.css";

const CircularChart = () => {
  const data = [
    { name: "Empty spots", value: 40, color: "#28a745", label: "Empty Spaces" },
    {
      name: "Filled spots",
      value: 30,
      color: "#ffc107",
      label: "Filled Spaces",
    },
    { name: "Overdue", value: 30, color: "#dc3545", label: "Overdue Payments" },
  ];

  const legendStyle = {
    textAlign: "center",
    marginTop: "10px",
  };

  return (
    <div className="chart-container">
      <PieChart width={250} height={400}>
        <Pie className="coulerd" data={data}>
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={entry.color}
              stroke="#fff"
              dataKey="value"
              label={entry.label}
              className={`custom-class-${index}`}
            >
              <text x={200} y={200} dy={8} textAnchor="middle" fill="#000">
                {entry.name}
              </text>
            </Cell>
          ))}
        </Pie>
        <Legend className="legend-container" style={legendStyle} />
      </PieChart>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="header-content">
                <div className="overlay">
                  <div className="header-content-item">
                    <img
                      src="http://127.0.0.1:5001/video_feed"
                      alt="Live Feed"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div className="pie-chart-container mt-2 rectangle shadow p-3 mb-5 bg-body-tertiary rounded">
                  <CircularChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
