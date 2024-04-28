import frame1 from '../assets/img/frame1.png';
import frame2 from '../assets/img/frame2.png';
import frame3 from '../assets/img/frame3.png';
import frame4 from '../assets/img/frame4.png';
import icon0 from '../assets/img/icon0.svg';
import icon1 from '../assets/img/icon1.svg';
import icon2 from '../assets/img/icon2.svg';
import icon3 from '../assets/img/icon3.svg';
import { CardProps } from "../components/Card/type";

export const data: CardProps[] = [
    {
      title: 'Для поиска сотрудников',
      text: 'Следите за тенденциями рынка, чтобы вовремя корректировать стратегию подбора персонала. Оценивайте средние зарплаты в разных регионах и профобластях. Находите регионы-доноры, откуда можно привлекать сотрудников.',
    },
    {
      title: 'Для поиска работы',
      text: 'Изучайте уровень конкуренции в интересующих вас профобластях и регионах с помощью показателя hr.индекс, а также средний уровень зарплат и динамику вакансий.',
    },
    {
      title: 'Для запуска новых продуктов',
      text: 'Изучайте ситуацию на рынке труда, чтобы понимать возможности аудитории в разных городах и регионах. Оценивайте востребованность профессий, если вы планируете запуск новых образовательных продуктов.',
    },
    {
      title: 'Для статей и отчётов о ситуации на рынке',
      text: 'Собирайте нужные для ваших аналитических материалов данные самостоятельно и онлайн. Статистика поможет составить достоверную картину о ситуации в разных регионах и профессиональных сферах.'
    }
];

export const frames = [frame1, frame2, frame3, frame4];

export const icons = [icon0, icon1, icon2, icon3];