import foodMenu from './items.json'
import Item from './Item'
import styles from './Items.module.scss'
import { useEffect, useState } from 'react'

interface Props {
  search: string,
  filter: number | null,
  orderer: string
}

export default function Items(props: Props) {
  const [list, setList] = useState(foodMenu)
  const {search, filter, orderer} = props

  function verifySearch(title: string) {
    const regex = new RegExp(search, 'i')
    return regex.test(title)
  }

  function verifyFilter(id: number) {
    if(filter !== null) return filter === id
    return true
  }

  function order(newList: typeof foodMenu) {
    switch(orderer) {
    case 'portion':
      return newList.sort((a, b) => a.size > b.size ? 1 : -1)

    case 'qtdPeople':
      return newList.sort((a, b) => a.serving > b.serving ? 1 : -1)

    case 'price':
      return newList.sort((a, b) => a.price > b.price ? 1 : -1)
      
    default:
      return newList
    }
  }

  useEffect(() => {
    const newList = foodMenu.filter(item => verifySearch(item.title) && verifyFilter(item.category.id))
    setList(order(newList))
  }, [search, filter, orderer])

  return (
    <div className={styles.items}>
      {list.map(item => (
        <Item
          key={item.id}
          {...item}
        />
      ))}  
    </div>
  )
}