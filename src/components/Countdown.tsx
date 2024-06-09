import { useTimer } from "react-timer-hook";

const Cell = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center gap-4">
    <div className="flex gap-4">
      <div className="w-16 rounded-lg bg-slate-800 bg-gradient-to-t from-transparent to-slate-900 px-4 py-5 text-center opacity-90 md:w-28 md:px-5 md:py-8">
        <p className="text-3xl md:text-6xl">{value}</p>
      </div>
    </div>
    <p className="font-trap text-xs">{label}</p>
  </div>
);

const Countdown = () => {
  const expiryTimestamp = new Date(2024, 5, 24, 8);
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
  });

  return (
    <div className="flex gap-1 font-mono">
      <Cell value={days} label="DAYS" />
      <Cell value={hours} label="HOURS" />
      <Cell value={minutes} label="MINUTES" />
      <Cell value={seconds} label="SECONDS" />
    </div>
  );
};

export default Countdown;