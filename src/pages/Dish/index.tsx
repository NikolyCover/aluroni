import styles from './Dish.module.scss'

import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

import FoodMenu from 'data/foodMenu.json'

export default function Dish() {
  const { state } = useLocation()
  const { dish } = state as { dish: typeof FoodMenu[0]}

  return (
    <>
      <button className={styles.back}>
        {'< Voltar'}  
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>
          {dish.title}
        </h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>
            {dish.description}
          </p>
          <p className={styles.tags}>
            <div className={classNames({
              [styles.tags__type]: true,
              [styles[`tags__type__${dish.category.label.toLocaleLowerCase()}`]]: true
            })}>
              {dish.category.label}
            </div>
            <div className={styles.tags__portion}>
              {dish.size}g
            </div>
            <div className={styles.tags__qtdPeople}>
              Serve{dish.serving} pessoa{dish.serving === 1 ? '' : 's'}
            </div>
            <div className={styles.tags__value}>
              R${dish.price.toFixed(2)}
            </div>
          </p>
        </div>
      </section>
    </>
  )
}