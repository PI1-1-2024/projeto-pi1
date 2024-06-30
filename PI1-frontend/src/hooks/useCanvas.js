import { useRef } from "react";

export function useCanvas() {
  const canvasRef = useRef(null);
  //let p0 = { x: 200, y: 200 };
  //let p1 = { x: 200, y: 200 };

  const updatePosition = (velocity, direction) => {
    const chart = canvasRef.current;
    const p0 = chart.data.datasets[0].data.at(-1);

    let vx = velocity * Math.cos(direction);
    let vy = velocity * Math.sin(direction);
    let newPoint = {
      x: p0.x + vx * 1,
      y: p0.y + vy * 1,
    };
    chart.data.datasets[0].data.push(newPoint);
    chart.update("none");
  };

  const draw = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.stroke();
  };

  return { canvasRef, draw, updatePosition };
}
