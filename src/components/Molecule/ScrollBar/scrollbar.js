import styles from './scrollbar.module.css';
import Card from '../../Atoms/Card/card';
import { profile} from '../../../const';



export default function ScrollBar(){

    return (
        <div className={styles.wraper}>
          <div className={styles.card}><Card  UserProfile={profile[0]} /></div>
          <div className={styles.card}><Card  UserProfile={profile[1]} /></div>
          <div className={styles.card}><Card  UserProfile={profile[2]} /></div>
          <div className={styles.card}><Card  UserProfile={profile[3]} /></div>
          <div className={styles.card}><Card  UserProfile={profile[4]} /></div>
          <div className={styles.card}><Card  UserProfile={profile[5]} /></div>
          <div className={styles.card}><Card  UserProfile={profile[6]} /></div>
          <div className={styles.card}><Card  UserProfile={profile[7]} /></div>  
        </div>
    )
}