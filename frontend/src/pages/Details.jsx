import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from './details.module.css'
import Btn from "../components/Button/Btn";


export default function Details() {
  const [animal, setAnimal] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const animalDetail = async () => {
      const response = await axios.get(`http://localhost:8080/announcement/${id}`);
      setAnimal(response.data);
    }
    animalDetail();
  }, [id]);
  return (
    <>
      <Header text={'Cerrar Sesion'} />
      <main className={styles.detailsContainer}>
        <article>
          <img
            src={animal.imageUrl}
            alt={animal.title} />
          <h3>{animal.title}</h3>
          <div>
            <p>{animal.price}€</p>
            <p>{animal.contact}</p>
            <p>{animal.location}</p>
          </div>
          <p>{animal.description}</p>
        </article>
        <Btn color='tertiary' text='Contacta'/>
      </main>
    <Footer />
    </>
  )
}
