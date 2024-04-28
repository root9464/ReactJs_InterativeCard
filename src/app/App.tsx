
import { LayoutGroup } from 'framer-motion';
import { useState } from 'react';
import { Card } from '../components/Card/Card';
import { Frames } from '../components/Frames/Frames';
import { data, frames } from './consts';

import style from './main.module.sass';
export const App = () => {
  const [cardNumber, setCardNumber] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean[]>(data.map((_, i) => i === 0));

  const toggleCardNumber = (i: number) => {
    setIsOpen(isOpen.map((_, index) => index === i));
    setCardNumber(i + 1);
  };

  return (
    <>
      <h1>Решайте задачи, опираясь на данные о рынке труда</h1>
      {cardNumber}
      <div className={style.main}>
        
        <div className={style.cards}>
          <LayoutGroup> 
            {
              data.map((el, i) => <Card {...el} key={i} isOpen={isOpen[i]} onClick={() => toggleCardNumber(i)} />)
            }
          </LayoutGroup>
        </div>

        <div className={style.images}>
          <Frames id={cardNumber} background={frames} />
        </div>

      </div>

    </>
  )
}