export type Location = {
  id: string;
  city: string;
  coords: [number, number];
  image: string;
  phone: string;
  address: string;
  description: string;
};

export const locations: Location[] = [
  {
    id: "moscow",
    city: "Москва",
    coords: [55.751244, 37.618423],
    image: "/images/Kupeli/slider-left/ls3.jpg",
    phone: "+7 (495) 000-00-00",
    address: "Москва, Красная площадь",
    description: "Центральный офис в Москве",
  },
  {
    id: "spb",
    city: "Санкт-Петербург",
    coords: [59.93863, 30.31413],
    image: "/images/Kupeli/slider-left/ls4.jpg",
    phone: "+7 (812) 000-00-00",
    address: "Невский проспект",
    description: "Филиал в Санкт-Петербурге",
  },
  {
    id: "sergiev",
    city: "Сергиев Посад",
    coords: [56.315, 38.135],
    image: "/images/Kupeli/slider-left/ls5.jpg",
    phone: "+7 (496) 000-00-00",
    address: "ул. Центральная",
    description: "Производственная база",
  },
  {
    id: "vladimir",
    city: "Владимир",
    coords: [56.129, 40.406],
    image: "/images/Kupeli/slider-left/ls2.jpg",
    phone: "+7 (492) 000-00-00",
    address: "ул. Большая Московская",
    description: "Региональный офис",
  },
];
