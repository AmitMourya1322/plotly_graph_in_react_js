import React from "react";

import Plot from "react-plotly.js";

const App = () => {
  const data = [
    {
      x: [1, 2, 3, 4, 5],
      y: [2, 3, 1, 4, 2],
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "red" }
    }
  ];
  return (
    <div>
      <Plot
        data={data}
        layout={{
          width: 600,
          height: 400,
          title: "Simple Graph",
          xaxis: { title: "X Axis" },
          yaxis: { title: "Y Axis" }
        }}
      />
    </div>
  );
};

export default App;
