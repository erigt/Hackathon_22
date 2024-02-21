import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import styles from './home.module.css'


export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <Search/>
      <section className={styles.cardsContainer}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
      
    </main>
  )
}
