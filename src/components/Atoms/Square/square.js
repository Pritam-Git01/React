
import styles from './square.module.css'

function Square({value, onButtonClick}) {
  
  return (
    <div className={styles.container}>
        <button onClick={onButtonClick } className={styles.btn}>{value}</button>
    </div>
  )
}

export default Square;