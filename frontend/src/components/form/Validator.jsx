const Validator = (formData) => {
    const errors = {};

    if (!formData.titulo.trim()) {
        errors.titulo = 'El título es requerido';
    }

    if (!formData.categoria.trim()) {
        errors.categoria = 'La categoría es requerida';
    }

    if (!formData.localizacion.trim()) {
        errors.localizacion = 'La localización es requerida';
    }

    if (!formData.precio.trim()) {
        errors.precio = 'El precio es requerido';
    } else if (isNaN(Number(formData.precio))) {
        errors.precio = 'El precio debe ser un número';
    }

    if (!formData.imagen.trim()) {
        errors.imagen = 'La URL de la imagen es requerida';
    } else if (!/^https?:\/\/\S+$/i.test(formData.imagen)) {
        errors.imagen = 'La URL de la imagen no es válida';
    }

    if (!formData.contacto.trim()) {
        errors.contacto = 'El número de contacto es requerido';
    }

    if (!formData.descripcion.trim()) {
        errors.descripcion = 'La descripción es requerida';
    }

    return errors;
};

export default Validator;
