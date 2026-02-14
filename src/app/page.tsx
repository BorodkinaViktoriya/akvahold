import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';

export const metadata = {
  title: "Good Line",
  description: "Купели Good Line от компании Аква Холд"
};

import styles from "./page.module.css";
import SimpleSlider from "@/components/slider1/slider";
import Hero from "@/components/Hero/Hero";
import {ImageTextChess} from "@/components/ui/ImageTextChess/ImageTextChess";
import SliderLeft from "@/components/ui/SliderLeft/SliderLeft";
import YandexMap from "@/components/YandexMap/YandexMapClient";
import SliderModels from "@/components/ui/SliderModels/SliderModels";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <SectionTitle highlight="SPA-зона" text="в любое время года" isDark={false}/>
      <ImageTextChess />
      <SectionTitle highlight="Good Line - качество" text="в каждой детали" isDark={false} />
      <SliderLeft/>
      <SectionTitle highlight="Выберите купель" text="для вашего идеального отдыха" isDark={true} />
      <SliderModels/>
      <SectionTitle highlight="Широкие возможности" text="оснащения купелей" isDark={false} />
      <YandexMap/>
      <SectionTitle highlight="Good Line для бизнеса" text="гостиниц, бань и SPA-комплексов" isDark={false} />
      <SimpleSlider/>
      <SectionTitle highlight="Реализованные" text="проекты" isDark={false} />
      <YandexMap/>
    </main>
  );
}
