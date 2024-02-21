import Btn from "../Button/Btn";
import styles from './card.module.css'


export default function Card() {
  return (
    <section className={styles.cardContainer} >
        <img src="/dog.webp" alt="" />
        <h3>¡Paseo tu perro!</h3>
        <h4>10€/hora</h4>
        <p className={styles.description}>¿Necesitas un poco de ayuda para asegurarte de que tu mejor amigo peludo obtenga la dosis adecuada de ejercicio y diversión? ¡No busques más! Soy un amante de los perros con años de experiencia en el cuidado y la atención de mascotas. </p>
        <Btn color='tertiary' text='Ver Más'></Btn>
    </section>
  )
}
