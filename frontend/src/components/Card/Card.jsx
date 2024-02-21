import Btn from "../Button/Btn";
import styles from './card.module.css'


export default function Card({animal}) {
  return (
    <section className={styles.cardContainer} >
        <img src={animal.imageUrl} alt={animal.title} />
        <h3>{animal.title}</h3>
        <h4>{animal.price}</h4>
        <p className={styles.description}>{animal.description} </p>
        <Btn color='tertiary' text='Ver Más'></Btn>
    </section>
  )
}
