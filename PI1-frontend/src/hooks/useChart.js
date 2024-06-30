import { useRef } from "react";

export function useChart() {
  const chartRef = useRef(null);

  const updateChart = (label, datasets) => {
    const chart = chartRef.current;
    const data = chart.data;
    data.labels.push(label);
    data.datasets[0].data.push(datasets);
    chart.update();
  };

  return { chartRef, updateChart };
}
