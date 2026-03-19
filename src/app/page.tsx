import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';

export const metadata = {
  title: "Good Line",
  description: "Купели Good Line от компании Аква Холд"
};

import styles from "./page.module.css";
import SimpleSlider from "@/components/SimpleSliderTest/SimpleSlider";
import Hero from "@/components/Hero/Hero";
import {ImageTextChess} from "@/components/ui/ImageTextChess/ImageTextChess";
import SliderLeft from "@/components/ui/SliderLeft/SliderLeft";
import YandexMap from "@/components/YandexMap/YandexMapClient";
import SliderModels from "@/components/ui/SliderModels/SliderModels";
import SliderTwoTitles from "@/components/SliderTwoTitles/SliderTwoTitles";
import CardsSlider from "@/components/ui/CardsSlider/CardsSlider";
import CardsRow from "@/components/ui/CardsRow/CardsRow";
import Reviews from "@/components/Reviews/Reviews";
import { details } from "@/lib/constants/kupeli_main";
import { cards } from "@/lib/constants/kupeli_main";
import { reviews } from "@/lib/constants/kupeli_main";
import { buisness } from "@/lib/constants/kupeli_main";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <SectionTitle highlight="SPA-зона" text="в любое время года" isDark={false}/>
      <ImageTextChess />
      <SectionTitle highlight="Good Line - качество" text="в каждой детали" isDark={false} />
      <SliderLeft details={details}/>
      <SectionTitle highlight="Выберите купель" text="для вашего идеального отдыха" isDark={true} />
      <SliderModels/>
      <SectionTitle highlight="Широкие возможности" text="оснащения купелей" isDark={false} />
      <CardsSlider cards={cards}/>
      <SectionTitle highlight="Good Line для бизнеса" text="гостиниц, бань и SPA-комплексов" isDark={false} />
      <CardsRow cards={buisness} />
      <SliderTwoTitles />
      <SectionTitle highlight="Нам доверяют" text=" " isDark={false} />
<Reviews reviews={reviews}/>
      <SectionTitle highlight="Реализованные" text="проекты" isDark={false} />
      <YandexMap/>
      <SectionTitle highlight="Нам доверяют" text=" " isDark={false} />
      <SimpleSlider/>
    </main>
  );
}
