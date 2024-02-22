const Validator = (formData) => {
    const errors = {};

    if (!formData.title.trim()) {
        errors.title = 'El título es requerido';
    }

    if (!formData.category.trim()) {
        errors.category = 'La categoría es requerida';
    }

    if (!formData.location.trim()) {
        errors.location = 'La localización es requerida';
    }

    if (!formData.price.trim()) {
        errors.price = 'El precio es requerido';
    } else if (isNaN(Number(formData.price))) {
        errors.price = 'El precio debe ser un número';
    }

    if (!formData.imageUrl.trim()) {
        errors.imageUrl = 'La URL de la imagen es requerida';
    } else if (!/^https?:\/\/\S+$/i.test(formData.imageUrl)) {
        errors.imageUrl = 'La URL de la imagen no es válida';
    }

    if (!formData.contact.trim()) {
        errors.contact = 'El número de contacto es requerido';
    }

    if (!formData.description.trim()) {
        errors.description = 'La descripción es requerida';
    }

    return errors;
};

export default Validator;
