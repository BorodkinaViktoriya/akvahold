import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';

export const metadata = {
  title: "Good Line",
  description: "Купели Good Line от компании Аква Холд"
};

import styles from "./page.module.css";
import Section from "@/components/ui/Section/Section";
import Hero from "@/widgets/Hero/Hero";
import {ImageTextChess} from "@/widgets/ImageTextChess/ImageTextChess";
import SliderLeft from "@/widgets/SliderLeft/SliderLeft";
import YandexMap from "@/components/YandexMap/YandexMapClient";
import SliderModels from "@/widgets/SliderModels/SliderModels";
import SliderTwoTitles from "@/widgets/SliderTwoTitles/SliderTwoTitles";
import CardsSlider from "@/widgets/CardsSlider/CardsSlider";
import CardsRow from "@/widgets/CardsRow/CardsRow";
import Reviews from "@/widgets/Reviews/Reviews";
import Cta from "@/widgets/CTA/Cta";
import {details} from "@/lib/constants/kupeli_main";
import {cards} from "@/lib/constants/kupeli_main";
import {feedbacks} from "@/lib/constants/kupeli_main";
import {buisness} from "@/lib/constants/kupeli_main";



export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Section
        title={<SectionTitle highlight="Выберите купель" text="для вашего идеального отдыха"/>}
        variant={"brown"}
      >
        <SliderModels/>
      </Section>
      <Section
        title={<SectionTitle highlight="Когда дом" text="становится местом силы"/>}
        /*title={<SectionTitle highlight="SPA-зона" text="в любое время года"/>}*/
      >
        <ImageTextChess/>
      </Section>
      <Section
        title={<SectionTitle highlight="Good Line - качество" text="в каждой детали"/>}
      >
        <SliderLeft details={details}/>
      </Section>
      {/*Секция-слайдер не стандарт*/}
      <SliderTwoTitles/>
     {/* <Section
        title={<SectionTitle highlight="Широкие возможности" text="оснащения купелей"/>}
      >
        <CardsSlider cards={cards}/>
      </Section>*/}
      <Section
        title={<SectionTitle highlight="Комфорт," text=" к которому хочется возвращаться"/>}
      >
        <CardsSlider cards={cards}/>
      </Section>
      <Section
        title={<SectionTitle highlight="Good Line для бизнеса" text="гостиниц, бань и SPA-комплексов"/>}
      >
        <CardsRow cards={buisness}/>
      </Section>

      <Section
        title={<SectionTitle highlight="Нам доверяют" text=" "/>}
      >
        <Reviews reviews={feedbacks}/>
      </Section>
      <Cta/>
      <Section
        title={<SectionTitle highlight="Часто задаваемые вопросы" text="о купели Good Line"/>}
      >
        {/*<YandexMap/>*/}
      </Section>
      <Section
        title={<SectionTitle highlight="Реализованные" text="проекты"/>}
      >
        <YandexMap/>
      </Section>

    </main>
  );
}
