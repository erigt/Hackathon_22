import Rrss from "../RRSS/Rrss";
import styles from './footer.module.css'



export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
       <a href="">Contacto</a>
      <Rrss/>
    </footer>
  )
}
