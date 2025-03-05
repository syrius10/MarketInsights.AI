import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function GeospatialAnalysisChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bubble',
      data: {
        datasets: [
          {
            label: 'Geospatial Data',
            data: [
              { x: -10, y: 0, r: 5 },
              { x: 0, y: 10, r: 10 },
              { x: 10, y: 5, r: 20 },
            ],
            backgroundColor: 'rgba(75, 192, 192, 1)',
          },
        ],
      },
    });
  }, []);

  return <canvas ref={chartRef}></canvas>;
}

export default GeospatialAnalysisChart;