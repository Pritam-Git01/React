import styles from './card.module.css'

export default function Card({UserProfile}){
    const {
        picture,
        name,
        position,
        Exp
    } = UserProfile


    return (
       <div className={styles.wraper}>
        <img src={picture} alt='profile of person'/>
        <h6 className={styles.name}>{name}</h6>
        <p className={styles.position}>{position}</p>
        <p className={styles.exp}>{Exp}</p>
       </div>

    )
}