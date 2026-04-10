import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';
import { asset } from "@/lib/asset";
import { PHONE_NUMBER, PHONE_NUMBER_CLEAN } from '@/lib/constants/contacts';


export const Footer= () => {
  return (
    <footer className={styles.footer} >
      <div className={styles.container}>

        {/* логотип и копирайт */}
        <div className={styles.logoSection}>
          {/*<Link href="/">*/}
            <Image
              src={asset("/images/logo.png")}
              alt="Akvahold Logo"
              width={180}
              height={40}
              style={{ objectFit: 'contain' }}
            />
         {/* </Link>*/}
          <p className={styles.copyright}>
            Любое использование либо копирование материалов или подборки материалов сайта,
            элементов дизайна и оформления допускается лишь с разрешения правообладателя
            и только со ссылкой на источник:<br />
            <a href={'https://akvahold.ru/'}>www.akvahold.ru</a><br />
            © 2008-2026 Все права защищены.
          </p>
        </div>

        {/* КОНТАКТЫ */}
        <div className={styles.contactsSection} id="contacts">
          <h4 className={styles.title} >Контакты</h4>
          <div className={styles.infoList}>
            <p>г. Москва, ул.Шарикоподшипниковская, д.4, корп.1А (2 мин от м.Дубровка)</p>
            <p>Почта: <a href="mailto:info@akvahold.ru">info@akvahold.ru</a></p>
            <p>Телефон: <a href={`tel:${PHONE_NUMBER_CLEAN}`}>{PHONE_NUMBER}</a></p>
            {/*<p>Телефон: <a href="tel:+74954776215">+7 (495) 477-62-15</a></p>*/}
            <div className={styles.schedule}>
              <p>График работы:</p>
              <p>с 9.00 до 18.00 (пн-пт)</p>
            </div>
          </div>
        </div>

        {/* СОЦСЕТИ */}
        <div className={styles.socialSection}>
          <h4 className={styles.title}>Наши соцсети</h4>
          <div className={styles.socialList}>

            <a href="https://t.me/myakvahold" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
              <Image src={asset("/images/tg.png")}  alt="телеграм канал" width={24} height={24} />
              <span>myakvahold</span>
            </a>

            <a href="https://www.youtube.com/channel/UCNxcW9wbmJMFCpzkFJlOP2A" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
              <Image  src={asset("/images/yt.png")} alt="Ютуб канал" width={24} height={24} />
              <span>АКВАХОЛД</span>
            </a>

            <a href="https://zen.yandex.ru/id/5faa92e25f35b66359cd1b08" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
              <Image  src={asset("/images/dzen.png")}  alt="Дзен канал" width={24} height={24} />
              <span>АКВАХОЛД</span>
            </a>
            <a href="https://vk.com/akvahold " target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
              <Image src={asset("/images/vk.png")} alt="Вконтакте страница" width={24} height={24} />
              <span>АКВАХОЛД</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

