"use client";

import dynamic from "next/dynamic";

// Динамический импорт YandexMap, ssr=false
export default dynamic(() => import("./YandexMap"), {
  ssr: false,
});
