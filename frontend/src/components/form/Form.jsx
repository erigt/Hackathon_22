
import React, { useState } from 'react';
import './form.modules.css';
import Btn from "../Button/Btn";


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



    return (
        <form onSubmit={handleSubmit}>
            <div className='widthForm'>
                <label>Titulo:</label>
                <input type="text" name="titulo" value={formulario.titulo} onChange={handleChange} placeholder='Título' />
            </div>
            <div className='widthForm'>
                <label>Categoria:</label>
                <select name="categoria" value={formulario.categoria} onChange={handleChange}>
                    <option value="">Seleccionar categoría</option>
                    <option className='bckgOptions' value="Servicios">Servicios</option>
                    <option className='bckgOptions' value="Productos">Productos</option>
                </select>
            </div>
            <div className='widthForm'>
                <label>Localizacion:</label>
                <input type="text" name="localizacion" value={formulario.localizacion} onChange={handleChange} placeholder='Código Postal'/>
            </div>
            <div className='widthForm'>
                <label>Precio:</label>
                <input type="text" name="precio" value={formulario.precio} onChange={handleChange} placeholder='Precio'/>
            </div>
            <div className='widthForm'>
                <label>Imagen:</label>
                <input type="text" name="imagen" value={formulario.imagen} onChange={handleChange} placeholder='Url'/>
            </div>
            <div className='widthForm'>
                <label>Contacto:</label>
                <input type="text" name="contacto" value={formulario.contacto} onChange={handleChange} placeholder='número de teléfono'/>
            </div>
            <div className='widthForm'>
                <label>Descripcion:</label>
                <textarea name="descripcion" value={formulario.descripcion} onChange={handleChange} rows={6} placeholder='Descripción'></textarea>
            </div>
<br /><br />

            <div className='flexBotton'>
                <Btn color="tertiary" text="Añadir" />
                <Btn color="secondary" text="Atrás"/>

            </div>
        </form>

        
    );
}

export default Form;




