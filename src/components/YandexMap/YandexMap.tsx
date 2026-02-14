"use client";

import { useRef } from "react";
import { YMaps, Map, Placemark, Clusterer } from "@pbe/react-yandex-maps";
import { locations } from "@/lib/constants/locations";
import MarkerBalloon from "./MarkerBalloon";
import styles from "./YandexMap.module.scss";
import { createRoot } from "react-dom/client";
import { createBalloonLayout } from "./BalloonLayout";
/*import { customMapStyle } from "@/lib/constants/customMapStyle";*/
import { customMapStyle } from "./customMapStyle";

/*Можно сделать цвет черно-белым: fill="#555"*/

export default function YandexMap() {
  const mapRef = useRef<any>(null);

  return (
    <div className={styles.mapContainer}>
      <YMaps query={{ lang: "ru_RU", apikey: "2d0c3cb4-0ba8-4d09-b079-e3681bd433d1" }}>
        <Map
          instanceRef={mapRef}
          defaultState={{ center: [56.0, 37.0], zoom: 5 }}
          width="100%"
          height="100%"
          modules={["control.ZoomControl", "control.FullscreenControl", "geoObject.addon.balloon"]}
        >
          <Clusterer
            options={{
              preset: "islands#invertedBlueClusterIcons",
              groupByCoordinates: false,
            }}
          >
            {locations.map((loc) => (
              <Placemark
                key={loc.id}
                geometry={loc.coords}
                properties={{ balloonContent: "" }}
                options={{
                  balloonPanelMaxMapArea: 0,
                  iconLayout: "default#image",
                  iconImageHref: "/images/marker.svg",
                  iconImageSize: [30, 30],
                  iconImageOffset: [-15, -30],
                }}
                events={{
                  click: (e: any) => {
                    const placemark = e.get("target");
                    placemark.balloon.open();

                    const container = placemark.balloon.getData()?.geoObject?.balloon?._contentNode;
                    if (!container) return;

                    createRoot(container).render(<MarkerBalloon loc={loc} />);
                  },
                }}
              />
            ))}
          </Clusterer>
        </Map>
      </YMaps>
    </div>
  );
}
