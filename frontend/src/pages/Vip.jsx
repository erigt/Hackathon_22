import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MapGeo from "../components/geolocation/MapGeo";
import "./vip.modules.css";

export default function Vip() {
    return (
        <>
        <Header text1={'Cerrar Sesion'} text2={'Home'} />
            <section className='vipContainer'>
                <h2>Dónde está mi mascota ?</h2>
                <MapGeo />
            </section>
         <Footer />
         </>
    )
}