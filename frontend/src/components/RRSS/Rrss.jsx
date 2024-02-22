import tiktok from '/tiktok.svg'
import facebook from '/face.svg'
import instagram from '/ig.svg'
import styles from './rrss.module.css'



export default function Rrss() {
  return (
    <ul className={styles.rrssContainer}>
        <li><img src={tiktok} alt="" /></li>
        <li><img src={facebook} alt="" /></li>
        <li><img src={instagram} alt="" /></li>
    </ul>
  )
}
