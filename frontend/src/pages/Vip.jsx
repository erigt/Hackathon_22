import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MapGeo from "../components/geolocation/MapGeo";
import "./vip.modules.css";

export default function Vip() {
    return (
        <>
                <section className='vipContainer'>
            <Header text1={'Cerrar Sesion'} text2={'Home'} />
                    <h2>Dónde está mi mascota ?</h2>
                    <MapGeo />
            <Footer />
                </section>
        </>
    )
}