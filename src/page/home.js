import React from "react";
//import Header from "../components/header";

const Home = () =>{
    return (
    <>
        
   <section id="hero" className="hero d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">Ofrecemos soluciones modernas para la movilidad del pais.</h1>
          <h2 data-aos="fade-up" data-aos-delay="400">Diseñamos plataformas para la administración de peajes...</h2>
          <div data-aos="fade-up" data-aos-delay="600">

          <a href="/register" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                <span>REGISTRARSE</span></a>

            <div className="text-center text-lg-start">
              
              <a href="/register1" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                <span>LOGIN</span>

                <i className="bi bi-arrow-right"></i>
              
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">

          <img src={'img/hero-img.png'} className="img-fluid" alt="112233"/>

        </div>
      </div>
    </div>

  </section>

  <main id="main">
  <header class="section-header">
        <h2>NOSOTROS</h2>
        <p> Comprometidos por un futuro</p>
  </header> 
    <section id="about" className="about">

      <div className="container" data-aos="fade-up">
        <div className="row gx-0">

          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>Quienes Somos</h3>
              <h2>Somos un grupo de estudiantes dedicados, disciplinados con ganas de aprender, para diseñar aplicaciones web para facilitar las tareas cotidianas...</h2>
              <p>
              Buscando oportunidades para crear un mundo mejor.
                Crea, Innova, Juega, Sueña...
              </p>
              <div className="text-center text-lg-start">
                <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Leer Más</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src="/img/about.jpg" className="img-fluid" alt=""/>
          </div>
        </div>
      </div>
    </section>   
    <section id="values" className="values">

      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Nuestros valores   </h2>
          <p>! Sin dificultades ¡</p>
        </header>

        <div className="row">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="box">
              <img src="/img/values-1.png" className="img-fluid" alt=""/>
              <h3>Sinceridad</h3>
              <p>Como virtud, la sinceridad se traduce en vivir y relacionarse sin intenciones ocultas a través de nuestros actos o palabras. Se trata de uno de los valores morales por antonomasia, pues ser sincero con uno mismo nos lleva siempre a ser sincero con los demás...</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
            <div className="box">
              <img src="/img/values-2.png" className="img-fluid" alt=""/>
              <h3>Empatía</h3>
              <p>Asi mismo, la empatía está muy relacionada con la sinceridad. Quien busca la bondad, la felicidad o la sinceridad con uno mismo, entiende que cualquier ser humano también vive en búsqueda constante de lo mismo. Por ello, la empatía, que nos ayuda a ponernos en la situación de nuestros semejantes...</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
            <div className="box">
              <img src="/img/values-3.png" className="img-fluid" alt=""/>
              <h3>Gratitud.</h3>
              <p>Podíamos haber elegido otros valores, como la amistad, pero en Ayuda en Acción sabemos que la gratitud es, casi siempre, la mayor recompensa para el que da y el gran gesto del que recibe. Es tan simple y tan compleja en sí misma como agradecer a las personas que nos han ayudado o apoyado...</p>
            </div>
          </div>
        </div>
      </div>
    </section>   
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Precio</h2>
          <p>Vea Nuestras Ofertas</p>
        </header>

        <div className="row gy-4" data-aos="fade-left">

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="box">
              <h3 style={{color: '#07d5c0'}}>Plan 1</h3>
              <div className="price"><sup>$</sup>0<span> /Col</span></div>
              <img src="/img/pricing-free.png" className="img-fluid" alt=""/>
              <ul>
                <li>Primera vez</li>
                <li>Recarga $ 0.00</li>
                <li className="na">Tarjeta RFID</li>
                <li className="na">Servicio Grua</li>
                <li className="na">Servicio Telefónico</li>
              </ul>
              <a href="#" className="btn-buy">Comprar</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="box">
              <span className="featured">Featured</span>
              <h3 style={{color: '#65c600'}}>Plan 2</h3>
              <div className="price"><sup>$</sup>25.000<span> / Col</span></div>
              <img src="/img/pricing-starter.png" className="img-fluid" alt=""/>
              <ul>
                <li>Aida dere</li>
                <li>Recarga $ 20.000</li>
                <li>Tarjeta RFID</li>
                <li>Servicio Grua</li>
                <li className="na">Servicio Telefónico</li>
              </ul>
              <a href="#" className="btn-buy">Comprar</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="box">
              <h3 style={{color: '#ff901c'}}>plan 3</h3>
              <div className="price"><sup>$</sup>40.000<span> / Col</span></div>
              <img src="/img/pricing-business.png" className="img-fluid" alt=""/>
              <ul>
                <li>Servicio Medico Basico</li>
                <li>Recarga $ 20.000</li>
                <li>Tarjeta RFID</li>
                <li>Servicio Grua</li>
                <li>Servicio Telefónico</li>
              </ul>
              <a href="#" className="btn-buy">Comprar</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="box">
              <h3 style={{color: '#ff0071'}}>Plan 10</h3>
              <div className="price"><sup>$</sup>100.000<span> / Col</span></div>
              <img src="/img/pricing-ultimate.png" className="img-fluid" alt=""/>
              <ul>
                <li>Recarga $ 90.000</li>
                <li>Tarjeta RFID</li>
                <li>Seguro Medico especializado</li>
                <li>Servicio Grua</li>
                <li>Descuento SOAT</li>
              </ul>
              <a href="#" className="btn-buy">Comprar</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
        <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Equipo</h2>
          <p>Nuestros Trabajadores</p>
        </header>
        <div className="row gy-5">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="member">
              <div className="member-img">
                <img src="/img/team/team-1.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Executive Officer</span>
                <p>Llegar juntos es el principio. ...
                El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos. ...
                Ninguno de nosotros es tan bueno como todos nosotros juntos. ...
                La fuerza del equipo viene de cada miembro. ...
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="member">
              <div className="member-img">
                <img src="/img/team/team-2.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>No debemos enfrentarnos solos a esta aventura, pues los héroes de todas las épocas 
                lo han hecho antes que nosotros. 
                El laberinto ya se conoce de principio a fin, solo debemos seguir el camino del héroe.”</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="member">
              <div className="member-img">
                <img src="/img/team/team-3.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>El hombre razonable se adapta al mundo; el irrazonable persiste en intentar adaptar el mundo a él.
                  Por consiguiente, todo progreso depende del hombre irrazonable.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
            <div className="member">
              <div className="member-img">
                <img src="/img/team/team-4.jpg" className="img-fluid" alt=""/>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>A menudo las personas están trabajando duro en la cosa equivocada.
                Trabajar en la cosa correcta probablemente es más importante que trabajar duro.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    
  </main> 

     <a href="#hero" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
       
        <script src="../assets/vendor/purecounter/purecounter.js"></script>
        <script src="../assets/vendor/aos/aos.js"></script>
        <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="../assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="../assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="../assets/vendor/php-email-form/validate.js"></script>       
        <script src="../assets/js/main.js"></script>    
    
    </>
    );
};
export default Home;