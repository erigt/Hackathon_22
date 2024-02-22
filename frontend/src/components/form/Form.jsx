import React, { useState, useEffect } from 'react';
import './form.modules.css';
import axios from "axios";
import Btn from "../Button/Btn";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Validator from './Validator';

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

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

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

    useEffect(() => {
        const formErrors = Validator(formulario);

        if (Object.keys(formErrors).length === 0) {
            console.log('Formulario enviado con exito...');
            setSuccess('Formulario enviado con éxito');
            setErrors({});
        } else {
            setErrors(formErrors);
            setSuccess('');
        }
    }, [formulario]);

    return (
        <form onSubmit={handleSubmit} method='POST'>
            <div className='widthForm'>
                <label>Titulo:</label>
                <input type="text" name="title" value={formulario.title} onChange={handleChange} placeholder='Título' />
                {errors.title && <div className="errorMessage">{errors.title}</div>}
            </div>
            <div className='widthForm'>
                <label>Categoria:</label>
                <select name="category" value={formulario.category} onChange={handleChange}>
                    <option value="">Seleccionar categoría</option>
                    <option className='bckgOptions' value="SERVICIO">Servicios</option>
                    <option className='bckgOptions' value="PRODUCTO">Productos</option>
                </select>
                {errors.category && <div className="errorMessage">{errors.category}</div>}
            </div>
            <div className='widthForm'>
                <label>Localizacion:</label>
                <input type="text" name="location" value={formulario.location} onChange={handleChange} placeholder='Provincia' />
                {errors.location && <div className="errorMessage">{errors.location}</div>}
            </div>
            <div className='widthForm'>
                <label>Precio:</label>
                <input type="text" name="price" value={formulario.price} onChange={handleChange} placeholder='Precio' />
                {errors.price && <div className="errorMessage">{errors.price}</div>}
            </div>
            <div className='widthForm'>
                <label>Imagen:</label>
                <input type="text" name="imageUrl" value={formulario.imageUrl} onChange={handleChange} placeholder='Url' />
                {errors.imageUrl && <div className="errorMessage">{errors.imageUrl}</div>}
            </div>
            <div className='widthForm'>
                <label>Contacto:</label>
                <input type="text" name="contact" value={formulario.contact} onChange={handleChange} placeholder='número de teléfono' />
                {errors.contact && <div className="errorMessage">{errors.contact}</div>}
            </div>
            <div className='widthForm'>
                <label>Descripcion:</label>
                <textarea name="description" value={formulario.description} onChange={handleChange} rows={6} placeholder='Descripción'></textarea>
                {errors.description && <div className="errorMessage">{errors.description}</div>}
            </div>
            <br /><br />

            <div className='flexBotton'>
                <button type="submit">Añadir</button>
                <NavLink to="/"> <Btn color="secondary" text="Atrás" /> </NavLink>
            </div>
        </form>
    );
}

export default Form;
