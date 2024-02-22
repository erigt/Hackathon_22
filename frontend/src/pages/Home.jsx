import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from './home.module.css'
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
  const [animales, setAnimales] = useState([]);
  
  useEffect(() => {
    const data = async () => {
      const response = await axios.get("http://localhost:8080/announcement"
      );
      const info = await response.data;
      setAnimales(info);
      console.log(info)
    }

    data()
  }, [])
  return (
    <>
      <Header text1={'Iniciar Sesion'} text2={'Hazte Vip'} />
      <main className={styles.homeContainer}>
        <h1>¡Mas que una tienda, ¡una comunidad!</h1>
        <Search />
        <section className={styles.cardsContainer}>
          {animales.map((animal) => {
            return <Card key={animal.id} animal={animal} />;
          })}
        </section>
      </main>
      <Footer />
    </>
  )
}
