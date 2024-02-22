import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddForm from '../pages/AddForm';
import Form from '../components/form/Form';
import { BrowserRouter } from 'react-router-dom';

test('Render the header and the possibility to add the ad', async () => {

    render(
        <BrowserRouter>
            <AddForm />
        </BrowserRouter>
    );


    const header = screen.getByRole('heading', { name: /¡Añade tu anuncio!/i });


    expect(header).toBeInTheDocument();

});
