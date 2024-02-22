import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


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
    <div>
      <Header text={'Cerrar Sesion'} />
      <img
        src={animal.imageUrl}
        alt={animal.title} />
      <h3>{animal.title}</h3>
      <p>{animal.price}</p>
      <p>{animal.contact}</p>
      <p>{animal.location}</p>
      <p>{animal.category}</p>
      <p>{animal.description}</p>
      <Footer />
    </div>
  )
}
