import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from './details.module.css'
import Btn from "../components/Button/Btn";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export default function Details() {
  const [animal, setAnimal] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    const animalDetail = async () => {
      const response = await axios.get(`http://localhost:8080/announcement/${id}`);
      setAnimal(response.data);
    }
    animalDetail();
  }, [id]);

  const deleteCard = async (id) => {
    const conf = window.confirm('¿Quieres realmente borrar este anuncio?')
    if (conf) {
      await axios.delete(`http://localhost:8080/announcement/${id}`)
      alert('Este anuncio ha sido borrado correctamente')
      navigate('/')
    }
  }
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
            <p>Precio: {animal.price}€</p>
            <p>Contacto: {animal.contact}</p>
            <p>Ubicacion: {animal.location}</p>
          </div>
          <p>Descripción: {animal.description}</p>
        </article>
        <Btn color='tertiary' text='Contacta' />
        <DeleteOutlineIcon onClick={() => deleteCard(animal.id)} />
      </main>
      <Footer />
    </>
  )
}
