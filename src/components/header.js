import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        
    <header id="header" className="header fixed-top navbar-expand-md navbar-light fixed-top bg-light">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <div className="mb-2 mb-lg-0 text-right text-lg-start">
        <a href="index.html" className="logo d-flex align-items-center bg-center">
          <img src="/img/logo.png" alt=""/>
          <span>Consorcio.com</span>
        </a>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
                  
            <li><a className="nav-link scrollto active" href="/">INICIO</a></li>
            <li><a className="nav-link scrollto" href="/#about">Nosotros</a></li>
            <li><a className="nav-link scrollto" href="/#values">Valores</a></li>
            <li><a className="nav-link scrollto" href="/#pricing">Precios</a></li>          
            <li><a className="nav-link scrollto" href="/#team">Equipo</a></li>
            {/* <li><a className="nav-link scrollto" href="#footer">Contacto</a></li> */}
            <Link to="/Contact" className="nav-link scrollto">
                    Contacto
            </Link>            
            <Link to="/ticketRegistration" className="nav-link scrollto">
                    Tiquetes
            </Link>  
            <li className="dropdown"><a href="#hero"><span>Configuración</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li className="dropdown"><a href="#hero">Herramientas</a>
              <ul>
              <li>
                  <Link to="/consortium" className="nav-link scrollto">
                          Registro de Consorcios
                      </Link>                    
                  </li>                
                  <li>
                      <Link to="/tolls" className="nav-link scrollto">
                          Registro de Peajes
                      </Link>                    
                  </li>
                  <li>
                      <Link to="/users" className="nav-link scrollto">
                          Admin Usuarios - Internos
                    </Link>                    
                  </li>  
                  <li>
                      <Link to="/usersManagement" className="nav-link scrollto">
                          Admin Usuarios - Externos
                    </Link>                    
                  </li>                                    
                </ul>
              </li>
              <li className="dropdown"><a href="#hero"><span>Tarjetas RIDF</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li>
                      <Link to="/purchaseCard" className="nav-link scrollto">
                          Compra de Tarjeta - RIFD
                    </Link>                    
                  </li> 
                  <li>
                      <Link to="/CardSale" className="nav-link scrollto">
                          Venta de Tarjeta - RIFD
                    </Link>                    
                  </li> 
                  <li>
                      <Link to="/CardRecharge" className="nav-link scrollto">
                          Recarga de Tarjeta - RIFD
                    </Link>                    
                  </li> 
                  {/* <li><a href="#hero">Deep Drop Down 4</a></li>
                  <li><a href="#hero">Deep Drop Down 5</a></li> */}
                </ul>
              </li>
              {/* <li><a href="#hero">Drop Down 2</a></li>
              <li><a href="#hero">Drop Down 3</a></li>
              <li><a href="#hero">Drop Down 4</a></li> */}
            </ul>
          </li>                             
            {/* <li><a className="nav-link scrollto" href="/users">AdUser-Int</a></li> */}
            {/* <li><a className="nav-link scrollto" href="/usersManagement">AdUser-Ext</a></li> */}
            {/* <Link to="/usersManagement" className="nav-link scrollto">
                  AdUser-Ext
            </Link>               */}
            {/* <li><a className="nav-link scrollto" href="/purchaseCard">C-RFID</a></li>
            <li><a className="nav-link scrollto" href="/CardSale">V-RFID</a></li> 
            <li><a className="nav-link scrollto" href="/CardRecharge">R-RIFD</a></li>      */}
            <li><a class="getstarted scrollto" href="/register">REGISTRARSE</a></li> 
                    
          </ul>       
          <i className="bi bi-list mobile-nav-toggle"></i>
       
       </nav>

      </div>
    </header>    

  );
    
};
export default Header;