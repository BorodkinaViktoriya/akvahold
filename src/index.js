import './styles/styles.scss'
import './styles/style.css'
import image from './images/111.jpg'


const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);
