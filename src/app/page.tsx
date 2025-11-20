import Image from "next/image";
import styles from "./page.module.css";
import SimpleSlider from "../components/slider1/slider.tsx";

export default function Home() {
  return (

      <main className={styles.main}>
        <SimpleSlider />

      </main>
  );
}
