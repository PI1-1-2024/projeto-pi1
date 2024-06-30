import { forwardRef, useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";

export const Chart = forwardRef(({ title, labels = [0], datasets }, ref) => {
  const options = {
    reponsive: true,
    title: {
      display: true,
      text: title,
    },
  };

  const data = {
    labels,
    datasets: {
      label: "Dataset 1",
      data: [0, 10],
    },
  };

  return <Line ref={ref} options={options} data={data} />;
});
