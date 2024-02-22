import React from 'react'
import VideoIntro from "../components/video/VideoIntro";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "./video.css"

export default function AddForm() {
    return (
        <>
            <section className='videoContainer'>
            <Header text1={'Cerrar Sesion'} text2={'Home'} />
                <h2>¡Aventura Mascoticos!</h2>
                <VideoIntro />
            <Footer />
            </section>
        </>
    )
}
