"use client";
"use client";

import { createRoot } from "react-dom/client";
import MarkerBalloon from "./MarkerBalloon";

// Функция для создания кастомного layout для React-попапа
export const createBalloonLayout = (loc: any, ymaps: any) => {
  // используем ymaps.templateLayoutFactory.createClass
  return ymaps.templateLayoutFactory.createClass(
    "<div></div>", // пустой контейнер
    {
      build() {
        // вызываем стандартный build
        //@ts-ignore
        super.build();
        const container = this.getParentElement();
        if (!container) return;
        createRoot(container).render(<MarkerBalloon loc={loc} />);
      },
      clear() {
        //@ts-ignore
        super.clear();
      },
    }
  );
};
