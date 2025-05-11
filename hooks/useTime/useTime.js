import { useEffect, useState } from "react";

export function useTime(timeZone) {
  const options = { hour12: true, hour: "numeric", minute: "numeric" }; // Edit options according to your needs

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-GB", { timeZone, ...options })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (now.getSeconds() === 0) {
        setCurrentTime(
          now.toLocaleTimeString("en-GB", { timeZone, ...options })
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeZone]);

  return currentTime;
}
