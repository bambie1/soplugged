import { useEffect, useState } from "react";

const Countdown = () => {
  const [isCountdownOver, setIsCountdownOver] = useState(false);
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();

  const countDownDate = new Date("Feb 18, 2023 18:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      // If the count down is finished, write some text
      if (distance < 0) {
        setIsCountdownOver(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isCountdownOver)
    return (
      <div className="absolute -top-12 left-0 w-full px-4">
        <div className="mx-auto mt-3 grid h-20 max-w-md items-center rounded-lg border bg-white px-4 py-2">
          <p className="text-center text-lg font-light uppercase lg:text-xl">
            And... we're live!!
          </p>
        </div>
      </div>
    );

  return (
    <div className="absolute -top-20 left-0 w-full">
      <div className="mx-auto mt-3 grid max-w-md grid-cols-4 items-center px-2">
        <div className="flex aspect-[3/4] flex-col items-center justify-center gap-1 rounded-lg border border-primary bg-white p-2">
          <p className="text-3xl font-bold lg:text-5xl">{days}</p>
          <p className="text-sm font-light lg:text-base">Days</p>
        </div>
        <div className="ml-auto flex aspect-[3/4] w-[85%] flex-col items-center justify-center rounded-lg border border-primary bg-white p-2">
          <p className="text-2xl lg:text-3xl">{hours}</p>
          <p className="text-xs font-light lg:text-sm">Hours</p>
        </div>
        <div className="ml-auto flex aspect-[3/4] w-[85%] flex-col items-center justify-center rounded-lg border border-primary bg-white p-2">
          <p className="text-2xl lg:text-3xl">{minutes}</p>
          <p className="text-xs font-light lg:text-sm">Minutes</p>
        </div>
        <div className="ml-auto flex aspect-[3/4] w-[85%] flex-col items-center justify-center rounded-lg border border-primary bg-white p-2">
          <p className="text-2xl lg:text-3xl">{seconds}</p>
          <p className="text-xs font-light lg:text-sm">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
