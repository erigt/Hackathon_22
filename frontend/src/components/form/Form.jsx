import React, { useState } from 'react';
import './form.modules.css';
import Btn from "../Button/Btn";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        title: '',
        category: '',
        location: '',
        price: '',
        imageUrl: '',
        contact: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:8080/announcement", formulario);
        alert('¡Tu anuncio se ha guardado correctamente!');
        navigate("/");
    };



    return (
        <form onSubmit={handleSubmit} method='POST'>
            <div className='widthForm'>
                <label>Titulo:</label>
                <input type="text" name="title" value={formulario.title} onChange={handleChange} placeholder='Título' />
            </div>
            <div className='widthForm'>
                <label>Categoria:</label>
                <select name="category" value={formulario.category} onChange={handleChange}>
                    <option value="">Seleccionar categoría</option>
                    <option className='bckgOptions' value="SERVICIO">Servicios</option>
                    <option className='bckgOptions' value="PRODUCTO">Productos</option>
                </select>
            </div>
            <div className='widthForm'>
                <label>Localizacion:</label>
                <input type="text" name="location" value={formulario.location} onChange={handleChange} placeholder='Provincia' />
            </div>
            <div className='widthForm'>
                <label>Precio:</label>
                <input type="text" name="price" value={formulario.price} onChange={handleChange} placeholder='Precio' />
            </div>
            <div className='widthForm'>
                <label>Imagen:</label>
                <input type="text" name="imageUrl" value={formulario.imageUrl} onChange={handleChange} placeholder='Url' />
            </div>
            <div className='widthForm'>
                <label>Contacto:</label>
                <input type="text" name="contact" value={formulario.contact} onChange={handleChange} placeholder='Email' />
            </div>
            <div className='widthForm'>
                <label>Descripcion:</label>
                <textarea name="description" value={formulario.description} onChange={handleChange} rows={6} placeholder='Descripción'></textarea>
            </div>
            <br /><br />

            <div className='flexBotton'>
                {/* <Btn type="submit" color="tertiary" text="Añadir" /> */}
                <button type="submit">Guardar</button>
                <NavLink to="/"> <Btn color="secondary" text="Atrás" /> </NavLink>

            </div>
        </form>


    );
}

export default Form;




