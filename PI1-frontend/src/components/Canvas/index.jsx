import { forwardRef } from "react";

export const Canvas = forwardRef((props, ref) => {
  const width = window.innerWidth - 0.1 * window.innerWidth;
  const height = "512px";

  return (
    <canvas
      ref={ref}
      {...props}
      width={width}
      height={height}
      style={{ border: "1px solid" }}
    ></canvas>
  );
});
