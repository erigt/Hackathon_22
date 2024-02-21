import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from './home.module.css'


export default function Home() {
  return (
    <>
    <Header text={'Iniciar Sesion'} />
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
    <Footer/>
    </>
  )
}
