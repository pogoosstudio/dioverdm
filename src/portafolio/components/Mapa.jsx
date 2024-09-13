/**ESTILOS */
import clases from "../styles/Mapa.module.css"

export const Mapa = () => {

    return (
        <div className={`${clases.contacto__map}`}>
            <iframe 
                className={`${clases.contacto__iframe}`}
                frameBorder={0} 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d125691.18323305208!2d-64.6636344!3d10.1114046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d723eff71306f%3A0x22feb43cef889e75!2sBarcelona%2C%20Anzo%C3%A1tegui!5e0!3m2!1ses!2sve!4v1726233569641!5m2!1ses!2sve"
            >
            </iframe>
        </div>
    )
};
