import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';

test('Home page retrieves data and displays ads', async () => {
    const mockAxios = new axiosMockAdapter(axios);
    mockAxios.onGet('http://localhost:8080/announcement').reply(200, [
        { id: 1, title: 'Anuncio de prueba 1' }, // Datos simulados
        { id: 2, title: 'Anuncio de prueba 2' }
    ]);

    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
    const anuncios = await screen.findAllByRole('heading', { level: 3 }); // Busca elementos <h3> que son títulos de anuncios
    expect(anuncios).toHaveLength(2);
    expect(anuncios[0]).toHaveTextContent('Anuncio de prueba 1');
    expect(anuncios[1]).toHaveTextContent('Anuncio de prueba 2');
});
