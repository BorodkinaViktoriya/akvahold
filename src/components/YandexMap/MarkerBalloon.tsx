import { Location } from "@/lib/constants/locations";
import styles from "./MarkerBalloon.module.scss";

type MarkerBalloonProps = { loc: Location };

export default function MarkerBalloon({ loc }: MarkerBalloonProps) {
  return (
    <div className={styles.balloon}>
      <img src={loc.image} alt={loc.city} />
      <h3>{loc.city}</h3>
      <p>{loc.description}</p>
      <p><b>{loc.address}</b></p>
      <p>{loc.phone}</p>
    </div>
  );
}
