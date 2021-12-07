import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        
      <footer id="footer" className="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h4>Nuestras Noticias</h4>
              {/* <p>Mantente informado </p> */}
                <Link to="/news/#values" className="nav-link scrollto">
                      Mantente informado
                </Link> 
            </div>
            <div className="col-lg-6">
              {/* <form action="" method="post">
                <input type="email" name="email"><input type="submit" value="Subscribe">
              </form> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <img src="/img/logo.png" alt=""/>
                <span>Consorcio.com</span>
              </a>
              <p>Lideres en diseño e implementación de aplicaciones web para administración de peajes</p><br></br><br></br>
              <div className="social-links mt-3">
                
                <a class="getstarted scrollto logo d-flex align-items-center" href="/">REGRESAR</a><br></br>
                
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
             <div className="col-lg-2 col-6 footer-links">
              <h4>Enlaces</h4>
              <ul>
                <li><i className="bi bi-chevron-right"></i><a href="#hero">Regreso</a></li>
                <li><i className="bi bi-chevron-right"></i><a href="#about">Nosotros</a></li>
                <li><i className="bi bi-chevron-right"></i><a href="#values">Valores</a></li>     
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Utiles </h4>
              <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#services">Servicios</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#pricing">Precios</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#team">Equipo</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Contacto</h4>
              {/* <p>
                A108 Adam Street <br>
                New York, NY 535022<br>
                United States <br><br>
                <strong>Phone:</strong> +1 5589 55488 55<br>
                <strong>Email:</strong> info@example.com<br>
              </p> */}
              <ul>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Calle 123 # 456D - 789</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Avenida 535022</a></li>
                <li><i className="bi bi-chevron-right"></i> <a href="#">Barranquilla, Colombia</a></li>                
              </ul>            
            </div>
          </div>
        </div>
      </div>
  
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Consorcio.com</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Link Repositorio <a href="https://github.com/brayandiazc/plataforma-sistema-peajes"> --Equipo 10-- </a>
        </div>
      </div>
    </footer>  

  

  );
    
};
export default Footer;