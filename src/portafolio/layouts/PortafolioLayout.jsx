//IMPORTACIONES DE DEPENDENCIASnpm install framer-motion
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import PropTypes from 'prop-types';
//iMPORTACIONES LOCALES
import { MenuNavegacion, MenuResponsive } from "../components";
import { handleArchivoPdf } from "../helpers";
//ESTILOS
import clases from "../styles/PortafolioLayout.module.css";
import { useState } from "react";

export const PortafolioLayout = ( {children} ) => {

    const [ showMenu, setShowMenu ] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
        console.log(showMenu)
    };

    return (
        <div className={`${clases.layout}`}>
            <aside className={`${clases.layout__aside} ${ showMenu ? clases.layout__asideVisible : clases.layout__asideOculto}`}>
                <section className={`${clases.aside__userInfo}`}>

                    {/**Información del usuario */}
                    <div className={`${clases.userInfo__general}`}>
                        <div className={`${clases.userInfo__containerImagen}`}>
                            <img 
                                src="/assets/img/foto_perfil.jpg"
                                className={`${clases.userInfo__image}`}
                                alt="Foto de perfil del Usuario"
                            />
                        </div>
                        <h2 className={`${clases.userInfo__name}`}>Diover Rivero</h2>
                        <h4 className={`${clases.userInfo__job}`}>Desarrollador Web Front-End</h4>
                    </div>

                    {/**Menu de navegación */}
                    <MenuNavegacion
                        handleShowMenu={ handleShowMenu }
                    />

                    {/**Links a redes sociales */}
                    <div className={`${clases.userInfo__userLinks}`}>
                        <ul className={`${clases.userLinks__social}`}>
                            <li className={`${clases.social__option}`}>
                                <a 
                                    href={`https://www.Instagram.com/dioverdm`}
                                    target="_blank"
                                    className={`${clases.social__link}`}    
                                >
                                    <FontAwesomeIcon className={`${clases.social__icon}`} icon={faInstagram}/>
                                </a>
                            </li>
                            <li className={`${clases.social__option}`}>
                                <a 
                                    href={`https://www.Linkedin.com/in/dioverdm`}
                                    target="_blank"
                                    className={`${clases.social__link}`}    
                                >
                                    <FontAwesomeIcon className={`${clases.social__icon}`} icon={faLinkedin}/>
                                </a>
                            </li>
                            <li className={`${clases.social__option}`}>
                                <a 
                                    href={`https://www.Github.com/dioverdm`}
                                    target="_blank"
                                    className={`${clases.social__link}`}    
                                >
                                    <FontAwesomeIcon className={`${clases.social__link}`} icon={faGithub}/>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/**Boton descargar CV */}
                    <div 
                        onClick={() => handleArchivoPdf("/assets/pdfs/CVNicolasHernandez.pdf")} 
                        className={`${clases.userInfo__buttons}`}
                    >
                        <a className={`${clases.userInfo__btn}`}>Descargar CV</a>
                    </div>

                    {/**Footer */}
                    <footer className={`${clases.userInfo__footer}`}>
                        &copy; 2024 Diover Rivero WEB
                    </footer>

                </section>
            </aside>


            {/**MENU RESPONSIVE */}
            <MenuResponsive 
                showMenu={ showMenu }
                handleShowMenu={ handleShowMenu }
            />

            <main className={`${clases.layout__content}`}>
                {children}
            </main>
        </div>
    );
};

PortafolioLayout.propTypes = {
    children: PropTypes.node.isRequired
}
