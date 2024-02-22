import React from 'react'
import VideoIntro from "../components/video/VideoIntro";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "./video.css"

export default function AddForm() {
    return (
        <>
            <section className='videoContainer'>
            <Header text1={'Iniciar Sesion'} text2={'Hazte Vip ˗ˏˋ ★ ˎˊ˗ '} />
                <h2>¡Aventura Mascoticos!</h2>
                <VideoIntro />
            <Footer />
            </section>
        </>
    )
}
