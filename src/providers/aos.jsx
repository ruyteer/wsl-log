"use client";

import Aos from "aos";
import { useEffect } from "react";

export function AOSProvider() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <></>;
}
