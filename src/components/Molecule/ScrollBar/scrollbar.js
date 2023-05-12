import styles from './scrollbar.module.css';
import Card from '../../Atoms/Card/card';
import { profile} from '../../../const';



export default function ScrollBar(){

    return (
        <div className={styles.wraper}>
          {profile.map((user) => <div className={styles.card}><Card  UserProfile={user} /></div>)}
        </div>
    )
}