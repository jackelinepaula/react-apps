import { useCallback, useState } from 'react';
import styles from './Card.module.css'

function Card(props){
    const [isExpanded, setIsExpanded] = useState(false)
    const toogleIsExpanded = useCallback(() => {
        setIsExpanded((isExpanded) => !isExpanded)
    }, [])

    return(
        <>
        <button onClick={toogleIsExpanded}>Collapse</button>
        <div style={{height: isExpanded ? '140px' : '30px'}} className={styles.card_content}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
        </>
    )
}

export default Card;