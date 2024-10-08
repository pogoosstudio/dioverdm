//IMPORTACIONES DE DEPENDENCIAS
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
//ESTILOS
import clases from "../styles/CardWeb.module.css";

export const CardWeb = ( {id, categoria, nombre, link, descripcion} ) => {


    return (
        <motion.figure 
            className={`${clases.galeria__card}`}
            initial={{ translateY: 10, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
        >

            <div className={`${clases.galeria__galeriaImagen}`}>
                <a href={`${ link }`} className={`${clases.galeria__link}`} target="_blank">
                    <img src={`/assets/img/${id}.webp`} className={`${clases.galeria__imagen}`} alt={ id }/>
                
                    <article className={`${clases.card__descripcion}`}>
                        <span className={`${clases.galeria__categoria}`}>{ categoria[0] }</span>
                        <p className={`${clases.galeria__descripcion}`}>{ descripcion }</p>
                    </article>
                </a>
            </div>

            <figcaption className={`${clases.galeria__title}`}>{ nombre }</figcaption>

        </motion.figure>
    )
};

CardWeb.propTypes = {
    id: PropTypes.string.isRequired,
    categoria: PropTypes.array.isRequired,
    nombre: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
};
