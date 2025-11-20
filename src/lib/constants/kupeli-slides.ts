// src/lib/constants/slider.ts
export type Slide = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
};

export const slides: Slide[] = [
    {
        id: 1,
        title: "Горячая вода:",
        subtitle: "здоровье и отдых",
        description:
            "Купание в горячей воде улучшает кровообращение, снимает мышечное напряжение и помогает восстановиться после работы, тренировки или в холодную погоду.",
        image: "images/slider-test/slide-1.jpg",
    },
    {
        id: 2,
        title: "RGB-подсветка",
        subtitle: "и хромотерапия",
        description:
            "Мягкая RGB-подсветка и смена цветов создают атмосферу вечернего спа и превращают купание в красивый вечерний ритуал.",
        image: "images/slider-test/slide-2.jpg",
    },
    {
        id: 3,
        title: "Гейзер:",
        subtitle: "лёгкость для тела",
        description:
            "Пузырьки от гейзера мягко массируют тело, улучшают микроциркуляцию и помогают снять усталость в пояснице и ногах.",
        image: "images/slider-test/slide-3.jpg",
    },
    {
        id: 4,
        title: "Гидромассаж",
        subtitle: "как в спа",
        description:
            "Направленные струи воды глубоко прорабатывают мышцы, снимают зажимы и помогают снизить уровень стресса.",
        image: "images/slider-test/slide-4.jpg",
    },
    {
        id: 5,
        title: "Широкий борт",
        subtitle: "для комфорта",
        description:
            "Широкий борт купели удобно использовать для напитков, закусок и аксессуаров, на нём можно присесть после купания.",
        image: "images/slider-test/slide-5.jpg",
    },
];
