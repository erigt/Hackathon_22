import React, { useState, useEffect } from 'react';
import './form.modules.css';
import axios from "axios";
import Btn from "../Button/Btn";
import Validator from './Validator';

const Form = () => {
    const [formulario, setFormulario] = useState({
        titulo: '',
        categoria: '',
        localizacion: '',
        precio: '',
        imagen: '',
        contacto: '',
        descripcion: ''
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

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormulario({
            titulo: '',
            categoria: '',
            localizacion: '',
            precio: '',
            imagen: '',
            contacto: '',
            descripcion: ''
        });
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
        <form onSubmit={handleSubmit}>
            <div className='widthForm'>
                <label>Titulo:</label>
                <input type="text" name="titulo" value={formulario.titulo} onChange={handleChange} placeholder='Título' />
                {errors.titulo && <div className="errorMessage">{errors.titulo}</div>}
            </div>
            <div className='widthForm'>
                <label>Categoria:</label>
                <select name="categoria" value={formulario.categoria} onChange={handleChange}>
                    <option value="">Seleccionar categoría</option>
                    <option className='bckgOptions' value="Servicios">Servicios</option>
                    <option className='bckgOptions' value="Productos">Productos</option>
                </select>
                {errors.categoria && <div className="errorMessage">{errors.categoria}</div>}
            </div>
            <div className='widthForm'>
                <label>Localizacion:</label>
                <input type="text" name="localizacion" value={formulario.localizacion} onChange={handleChange} placeholder='Código Postal' />
                {errors.localizacion && <div className="errorMessage">{errors.localizacion}</div>}
            </div>
            <div className='widthForm'>
                <label>Precio:</label>
                <input type="text" name="precio" value={formulario.precio} onChange={handleChange} placeholder='Precio' />
                {errors.precio && <div className="errorMessage">{errors.precio}</div>}
            </div>
            <div className='widthForm'>
                <label>Imagen:</label>
                <input type="text" name="imagen" value={formulario.imagen} onChange={handleChange} placeholder='Url' />
                {errors.imagen && <div className="errorMessage">{errors.imagen}</div>}
            </div>
            <div className='widthForm'>
                <label>Contacto:</label>
                <input type="text" name="contacto" value={formulario.contacto} onChange={handleChange} placeholder='número de teléfono' />
                {errors.contacto && <div className="errorMessage">{errors.contacto}</div>}
            </div>
            <div className='widthForm'>
                <label>Descripcion:</label>
                <textarea name="descripcion" value={formulario.descripcion} onChange={handleChange} rows={6} placeholder='Descripción'></textarea>
                {errors.descripcion && <div className="errorMessage">{errors.descripcion}</div>}
            </div>
            <br /><br />

            <div className='flexBotton'>
                <Btn color="tertiary" text="Añadir" />
                <Btn color="secondary" text="Atrás" />
            </div>


            {success && <div className="successMessage">{success}</div>}
        </form>
    );
}

export default Form;
