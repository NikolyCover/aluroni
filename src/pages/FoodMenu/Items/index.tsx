import foodMenu from "./items.json"
import Item from "./Item"
import styles from './Items.module.scss'

export default function Items() {
    return (
        <div className={styles.items}>
          {foodMenu.map(item => (
              <Item
                key={item.id}
                {...item}
              />
          ))}  
        </div>
    )
}