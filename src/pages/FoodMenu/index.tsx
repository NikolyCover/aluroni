import styles from './FoodMenu.module.scss'
import Searcher from './Searcher'
import { useState } from 'react'
import Filters from './Filters'
import Orderer from './Orderer'
import Items from './Items'

export default function FoodMenu() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<number | null>(null)
  const [orderer, setOrderer] = useState('')

  return (
    <section className={styles.foodMenu}>
      <h3 className={styles.foodMenu__title}>Cardápio</h3>
      <Searcher search={search} setSearch={setSearch} />
      <div className={styles.foodMenu__filters}>
        <Filters filter={filter} setFilter={setFilter}/>
        <Orderer orderer={orderer} setOrderer={setOrderer} />
      </div>
      <Items search={search} filter={filter} orderer={orderer}/>
    </section>
  )
}