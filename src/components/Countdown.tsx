import { useTimer } from "react-timer-hook";

const Cell = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center gap-4">
    <div className="flex gap-4">
      <div className="rounded-lg bg-slate-800 bg-gradient-to-t from-transparent to-slate-900 py-5 text-center opacity-90 ~sm:~w-16/28 ~sm:~px-4/5">
        <p className="~sm:~text-3xl/6xl">{value}</p>
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
