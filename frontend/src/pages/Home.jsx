import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import styles from './home.module.css'


export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <h1>¡Mas que una tienda, ¡una comunidad!</h1>
      <Search/>
      <section className={styles.cardsContainer}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
      
    </main>
  )
}
