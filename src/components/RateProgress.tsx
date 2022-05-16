import React, { useEffect, useRef, useState } from "react";

interface props {
  size: number;
  progress: number;
  strokeWidth: number;
  // circleOneStroke: string
  circleTwoStroke: string;
}

const RateProgress: React.FC<props> = ({
  size,
  progress,
  circleTwoStroke,
  strokeWidth,
}) => {
  const center: number = size / 2;
  const radius: number = size / 2 - strokeWidth / 2;
  const circumference: number = 2 * Math.PI * radius;
  const [offSet, setOffSet] = useState<number>(0);
  const circleRef = useRef(null);

  useEffect(() => {
    const progressOffset = ((10 - progress) / 10) * circumference;
    setOffSet(progressOffset);
  }, [circumference, progress, setOffSet, offSet]);

  return (
    <div className="">
      <svg width={size} height={size} className="circular__progress-bar">
        <circle
          ref={circleRef}
          className="circle rounded-full fill-transparent"
          stroke={progress * 10 >= 65 ? circleTwoStroke : "#21d07a"}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offSet}
        ></circle>

        <text
          x={center}
          y={center}
          textAnchor="middle"
          alignmentBaseline="middle"
          className="percentage fill-white text-sm"
          fill=""
        >
          {progress * 10}
        </text>
      </svg>
    </div>
  );
};

export default RateProgress;
