import { useEffect, useState } from "react";
import "./index.css";

export function ProgressBarComponent({ progress }: { progress: number }) {
  const [animatedProgress, setAnimatedProgress] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 300);
  }, [progress]);

  return (
    <div className="progressBar">
      <div
        className="progress"
        style={{
          //   width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          color: progress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {progress}%
      </div>
    </div>
  );
}

export default function ProgressBar() {
  const bars = [0, 5, 10, 20, 30];
  return (
    <div>
      <h1>Progress Bar</h1>
      {bars.map((bar) => (
        <ProgressBarComponent key={bar} progress={bar} />
      ))}
    </div>
  );
}
