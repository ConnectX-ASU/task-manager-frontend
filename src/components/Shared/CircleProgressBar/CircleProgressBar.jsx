import styles from "./CircleProgressBar.module.css";

export default function CircleProgressBar({
  percentage,
  circleWidth,
  strokeWidth,
  className,
  center,
  label,
}) {
  const radius = (circleWidth - strokeWidth * 2) / 2;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div
        className={`${styles.circle__cont} w-fit relative ${
          className ? className : ""
        } flex items-center justify-center gap-3`}
      >
        <svg
          width={circleWidth}
          height={circleWidth}
          viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        >
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth={`${strokeWidth}px`}
            r={radius}
            className="fill-none stroke-[#737373]"
          />
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth={`${strokeWidth}px`}
            r={radius}
            className="fill-none stroke-[var(--lightblue)]"
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
            transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          />
        </svg>
        <div
          className={`${center ? "absolute left-1/2 translate-x-[-50%]" : ""}`}
        >
          {percentage}%
        </div>
      </div>
      {label ? <div>{label}</div> : ""}
    </div>
  );
}
