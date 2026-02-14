import localFont from 'next/font/local';

export const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/Montserrat/montserrat-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat/montserrat-600.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-montserrat',
});

export const pacifico = localFont({
  src: [
    {
      path: '../../public/fonts/Pacifico-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-pacifico',
});
