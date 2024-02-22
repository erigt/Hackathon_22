import Btn from "../Button/Btn";
import styles from './card.module.css'
import { NavLink } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Card({ animal }) {
  return (
    <section className={styles.cardContainer} >
      <img src={animal.imageUrl} alt={animal.title} />
      <h3>{animal.title}</h3>
      <h4>{animal.price}€</h4>
      <p className={styles.description}>{animal.description} </p>
      <div className={styles.cardFav}>
        <FavoriteIcon/>
        <NavLink to={`/details/${animal.id}`}><Btn color='tertiary' text='Ver Más'></Btn></NavLink>
      </div>
    </section>
  )
}
