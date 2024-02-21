import React from 'react'
import Form from "../components/form/Form";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function AddForm() {
  return (
    <>
    <main>
    <Header text={'Cerrar Sesion'} />
    <h2>¡Añade tu anuncio!</h2>
      <Form />
      <Footer />

    </main>
    </>
  )
}
