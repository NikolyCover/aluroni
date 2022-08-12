import classNames from 'classnames'
import React, { useCallback } from 'react'
import filters from './filters.json'
import styles from './Filters.module.scss'

type IOption = typeof filters[0] //pega o tipo do primeiro elemento de filters

interface Props {
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({filter, setFilter}: Props) {
    const selectFilter = useCallback((option: IOption) => {
        setFilter(currentFilter => currentFilter === option.id ? null : option.id)
    }, [])


    return <div className={styles.filters}>
        {filters.map((option) => (
            <button className={classNames({
                [styles.filters__filter]: true, 
                [styles['filters__filter--active']]: filter === option.id
            })} key={option.id} onClick={() => selectFilter(option)}>
                {option.label}
            </button>
        ))}
    </div>
}