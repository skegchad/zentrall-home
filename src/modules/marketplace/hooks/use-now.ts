"use client";

import { useEffect, useState } from "react";

/** Fecha actual, actualizada cada minuto. Es null en el primer render (servidor/hidratación). */
export function useNow() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  return now;
}