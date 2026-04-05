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
import {details, cards, questions} from "@/lib/constants/kupeli_main";
import {feedbacks} from "@/lib/constants/kupeli_main";
import {straight} from "@/lib/constants/kupeli_main";
import Accordion from "@/widgets/Accordion/Accordion";



export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
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
      <Section
        id="models"
        title={<SectionTitle highlight="Выберите купель" text="для вашего идеального отдыха"/>}
        variant={"brown"}
      >
        <SliderModels/>
      </Section>
      <Section
        /* title={<SectionTitle highlight="Good Line для бизнеса" text="гостиниц, бань и SPA-комплексов"/>}*/
        title={<SectionTitle highlight="3 шага" text="к своему месту силы"/>}
      >
        {/*<CardsRow cards={buisness}/>*/}
        <CardsRow cards={straight}/>
      </Section>
      <Section
        variant={"gray"}
        title={<SectionTitle highlight="Когда всё продумано" text="для спокойного отдыха"/>}
      >
        <SliderTwoTitles/> {/*// TODO переделать этот кусок или убрать секцию вторую или заголовок*/}
      </Section>
      <Section
        title={<SectionTitle highlight="Комфорт" text="каждого купания"/>}
      >
        <CardsSlider cards={cards}/>
      </Section>
      <ImageTextChess/>

      {/*Секция-слайдер не стандарт*/}



     {/* <Section
        title={<SectionTitle highlight="Широкие возможности" text="оснащения купелей"/>}
      >
        <CardsSlider cards={cards}/>
      </Section>*/}



      <Section
        title={<SectionTitle highlight="Нам доверяют" text=" "/>}
      >
        <Reviews reviews={feedbacks}/>
      </Section>
      <Cta/>
      <Section
        id="faq"
        title={<SectionTitle highlight="Часто задаваемые вопросы" text="о купели Good Line"/>}
      >
        <Accordion items={questions}/>
      </Section>
      <Section
        title={<SectionTitle highlight="Реализованные" text="проекты"/>}
      >
        <YandexMap/>
      </Section>

    </main>
  );
}
