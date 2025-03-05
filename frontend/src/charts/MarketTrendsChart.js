import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function MarketTrendsChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Market Trends',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
    });
  }, []);

  return <canvas ref={chartRef}></canvas>;
}

export default MarketTrendsChart;