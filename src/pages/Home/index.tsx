import foodMenu from 'data/foodMenu.json'
import styles from './Home.module.scss'

export default function Home() {
  let recommendedDishes = [...foodMenu]
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3)

  return (
    <section>
      <h3 className={styles.title}>Recomendações da cozinha</h3>
      <div className={styles.recommendedDishes}>
        {recommendedDishes.map(item => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo}></img>
            </div>
            <button className={styles.recommended__button}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
