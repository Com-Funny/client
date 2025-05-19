interface ProgressBarProps {
  index: number;
  active: number;
  progress: number;
  onClick: (index: number) => void;
}

export default function ProgressBar({
  index,
  active,
  progress,
  onClick,
}: ProgressBarProps) {
  return (
    <div
      className="w-20 h-full py-4 cursor-pointer"
      onClick={() => onClick(index)}
    >
      <div className="relative w-full h-1.5 rounded-full bg-gray-200 opacity-80 shadow-default">
        <div
          className="absolute left-0 h-full rounded-full bg-gray-600 opacity-80"
          style={{
            width:
              index < active
                ? "100%"
                : index === active
                ? `${progress}%`
                : "0%",
          }}
        />
      </div>
    </div>
  );
}
