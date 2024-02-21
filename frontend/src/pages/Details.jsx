
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from './details.module.css'

export default function Details() {
  return (
    <>
      <Header text="Iniciar Sesion"/>
        <main>
          <article className={styles.detailsContainer}>
            <img src="/dog.webp" alt="" />
            <h3>¡Paseo a tu perro!</h3>
            <h4>10€/hora</h4>
            <h4>name@mail.com</h4>
            <h4>Servicios</h4>
            <p>¿Necesitas un poco de ayuda para asegurarte de que tu mejor amigo peludo obtenga la dosis adecuada de ejercicio y diversión? ¡No busques más! Soy un amante de los perros con años de experiencia en el cuidado y la atención de mascotas.</p>
          </article>
        </main>
      <Footer/>
    </>
  )
}
