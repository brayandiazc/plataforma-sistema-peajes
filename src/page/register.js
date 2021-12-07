import React from "react";
import { useForm } from "react-hook-form";
import Documentnumber_d from "../components/documentNumber";


import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  first_name: yup.string().required().min(3),
  last_name: yup.string().required().min(3),
  password: yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
  confirmPassword: yup.string().test(
        "passwords-match",
        "Passwords must match",
        function (value) {
          return this.parent.password === value;
        }
  ),  
  numberDoc: yup.number()
  .typeError('you must specify a number')
  //.min(6, 'Min value 0.')
  // .max(10, 'Max value 10.')
  ,
  
  email: yup.string().email('Invalid email format').required('Required'),
  address: yup.string().required().min(3),
  address2: yup.string().min(3),
  
  phone: yup.string()
  .required("This field is Required")
  .matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Phone number is not valid"
  ),
  trifd: yup.number()
  .typeError('you must specify a number')
  // .min(0, 'Min value 0.')
  // .max(30, 'Max value 30.')
  ,  

  zip: yup.number()
  .typeError('you must specify a number')
  // .min(0, 'Min value 0.')
  // .max(30, 'Max value 30.')
  , 

}).required();


const Register = () => {

  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { register, handleSubmit, watch, formState: { errors } } = useForm(  {
    resolver: yupResolver(schema)
  });

  
  const onSubmit = data => {
    console.log(data);
    alert(data.first_name + " " +data.last_name );
  }

    return(
    
      <>
        
        {/* <main>    
          <div classNameName="container">  
          <br/><br/><br/><br/>
              <div classNameName="row g-5">
                <br/><br/><br/><br/>
                <div className="col-md-5 col-lg-4 order-md-last">
                    
                        <form>
                            <h3>Registro - Creación de Cuenta</h3>

                            <h6>Por favor ingresar los datos de Registo</h6>

                            <div classNameName="form-group">
                                <label>First name</label>
                                <input type="text" classNameName="form-control" placeholder="First name" />
                            </div>

                            <div classNameName="form-group">
                                <label>Last name</label>
                                <input type="text" classNameName="form-control" placeholder="Last name" />
                            </div>

                            <div classNameName="form-group">
                                <label>Email address</label>
                                <input type="email" classNameName="form-control" placeholder="Enter email" />
                            </div>

                            <div classNameName="form-group">
                                <label>Password</label>
                                <input type="password" classNameName="form-control" placeholder="Enter password" />
                            </div>
                            <hr classNameName="my-4"/>
                            <button type="submit" classNameName="btn btn-primary btn-block">Sign Up</button>
                            <p classNameName="forgot-password text-right">
                                Already registered <a href="#">sign in?</a>
                            </p>
                        </form> 
                </div>       
              </div>   
          </div>       
        </main>  */}
<div className="container">
  <main>
    <br/><br/>
    <div className="py-5 text-center ">
      {/* <img className="d-block mx-auto mb-4" src="/img/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
      <h2>Registro - Crea tu cuenta</h2>
      <p className="lead">Favor ingrese los datos de registro.</p>
    
      <a class="getstarted scrollto" href="/register1">LOGIN</a><br></br>
      <a class="getstarted scrollto" href="/">SALIR</a><br></br>

        <i className="bi bi-arrow-right"></i>

      </div>

    <div className="row g-1 justify-content-center shadow p-5 bg-light border m-2">
      
      <div className="col-md-5 col-lg-4 order-md-last">
        {/* <h4 className="d-flex justify-content-between align-items-center mb-4">
            <span className="badge bg-primary rounded-pill justify-content-between">Sistema de Peajes</span>
        </h4> */}<br/><br/><br/>
        <img className="d-block mx-auto mb-5 img-fluid" src="/img/hero-img.png" alt="" />  <br/><br/>
        <img className="d-block mx-auto mb-5 img-fluid" src="/img/pricing-business.png" alt="" /> <br/><br/>
        <img className="d-block mx-auto mb-5 img-fluid" src="/img/pricing-free.png" alt="" /> <br/><br/>  <br/>     
          
        
        {/* <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Product name</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$12</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Second product</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$8</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Third item</h6>
              <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-light">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">−$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>

        <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code"/>
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </form> */}
        
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Datos Personales</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-3">
            <div className="col-sm-6">
              {/* <label for="firstName" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="firstName" placeholder="" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div> */}
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input className="form-control" type="text" required {...register("first_name")} />
                <p className="text-danger">{errors.first_name?.message}</p>
              </div>              
            </div>

            <div className="col-sm-6">
              {/* <label for="lastName" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="lastName" placeholder="" required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div> */}
              <div className="form-group">
                <label className="form-label">Apellido</label>
                <input className="form-control" type="text" required {...register("last_name")} />
                <p className="text-danger">{errors.last_name?.message}</p>
              </div>              
            </div>

            <div className="col-12">
              <label for="username" className="form-label">Nombre de usuario</label>
              {/* <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Nombre de usuario" required/>
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div> */}
                <div className="form-group">
                  <input type="text" className="form-control" id="username" placeholder="Nombre de usuario" required {...register("user_name")}/>
                  <p className="text-danger">{errors.user_name?.message}</p>
                </div>                
            </div>

            <div className="col-sm-6">
              {/* <label for="firstName" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="firstName" placeholder="" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div> */}
              <div className="form-group">
                <label className="form-label">Contraseña</label>
                <input className="form-control" type="password" required {...register("password")} />
                <p className="text-danger">{errors.password?.message}</p>
              </div>              
            </div>

            <div className="col-sm-6">
              {/* <label for="lastName" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="lastName" placeholder="" required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div> */}
              <div className="form-group">
                <label className="form-label">Confirmar Contraseña</label>
                <input className="form-control" type="password" required {...register("confirmPassword")} />
                <p className="text-danger">{errors.confirmPassword?.message}</p>
              </div>              
            </div>

            <div className="col-sm-6">
              {/* <label for="type_doc" className="form-label">Tipo de Documento</label>
              <select className="form-select" id="type_doc" required>
                <option value="">Choose...</option>
                <option value="C">CEDULA</option>
                <option value="E">CEDULA EXTRANJERIA</option>
                <option value="D">DIPLOMATICO</option>
                <option value="X">DOC.IDENT. DE EXTRANJEROS</option>
                <option value="F">IDENT. FISCAL PARA EXT.</option>
                <option value="A">NIT</option>
                <option value="CA">NIT PERSONAS NATURALES</option>
                <option value="N">NUIP</option>
                <option value="P">PASAPORTE</option>
                <option value="R">REGISTRO CIVIL</option>
                <option value="T">TARJ.IDENTIDAD</option>
                <option value="TC">CERTIFICADO NACIDO VIVO</option>
                <option value="TP">PASAPORTE ONU</option>

              </select>
              <div className="invalid-feedback">
                Please select a valid type document.
              </div> */}
              <div className="form-group">
              <label  className="form-label" for="type_doc" >Tipo de Documento</label>
              {/* <select className="form-select" id="type_doc" required {...register("typeDoc")}>
                <option value="">Choose...</option>
                <option value="C">CEDULA</option>
                <option value="E">CEDULA EXTRANJERIA</option>
                <option value="D">DIPLOMATICO</option>
                <option value="X">DOC.IDENT. DE EXTRANJEROS</option>
                <option value="F">IDENT. FISCAL PARA EXT.</option>
                <option value="A">NIT</option>
                <option value="CA">NIT PERSONAS NATURALES</option>
                <option value="N">NUIP</option>
                <option value="P">PASAPORTE</option>
                <option value="R">REGISTRO CIVIL</option>
                <option value="T">TARJ.IDENTIDAD</option>
                <option value="TC">CERTIFICADO NACIDO VIVO</option>
                <option value="TP">PASAPORTE ONU</option>
              </select>
                <p className="text-danger">{errors.typeDoc?.message}</p> */}
              </div> 
              <Documentnumber_d/>{/* <Lla al componente que esta leyendo un Json/>  */}
            </div>

            <div className="col-sm-6">
              {/* <label for="ndoc" className="form-label">N.Documento</label>
              <input type="text" className="form-control" id="ndoc" placeholder="" required/>
              <div className="invalid-feedback">
                Valid last Number ID is required.
              </div> */}
              <div className="form-group">
                <label className="form-label">N.Documento</label>
                <input className="form-control" type="text" required {...register("numberDoc")} />
                <p className="text-danger">{errors.numberDoc?.message}</p>
              </div>                
            </div>

            <div className="col-12">
              {/* <label for="email" className="form-label">Correo <span className="text-muted">(...)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div> */}
              
              <div className="form-group">
                <label className="form-label">Correo <span className="text-muted">(...)</span></label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" required {...register("email")} />
                <p className="text-danger">{errors.email?.message}</p>
              </div>              
            </div>

            <div className="col-12">
              {/* <label for="address" className="form-label">Dirección</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div> */}
              <div className="form-group">
                <label className="form-label">Dirección</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required {...register("address")} />
                <p className="text-danger">{errors.address?.message}</p>
              </div>                
            </div>

            <div className="col-12">
              {/* <label for="address2" className="form-label">Dirección 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/> */}
              <div className="form-group">
                <label className="form-label">Dirección 2<span className="text-muted">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="1234 Main St" {...register("address2")} />
                <p className="text-danger">{errors.address2?.message}</p>
              </div>               
            </div>

            <div className="col-sm-6">
              {/* <label for="celular" className="form-label">Celular</label>
              <input type="text" className="form-control" id="celular" placeholder="" required/>
              <div className="invalid-feedback">
                Valid Cellphone number is required.
              </div> */}
              <div className="form-group">
                <label className="form-label">Celular</label>
                <input type="text" className="form-control" id="celular" placeholder="" {...register("phone")} />
                <p className="text-danger">{errors.phone?.message}</p>
              </div>                
            </div>

            <div className="col-sm-6">
              {/* <label for="trifd" className="form-label">No. Tarjeta RIFD</label>
              <input type="text" className="form-control" id="trifd" placeholder="" required/>
              <div className="invalid-feedback">
                Valid Card RIFD is required.
              </div> */}
              <div className="form-group">
                <label className="form-label">No. Tarjeta RIFD</label>
                <input type="text" className="form-control" id="trifd" placeholder="" {...register("trifd")} />
                <p className="text-danger">{errors.trifd?.message}</p>
              </div>               
            </div>

            <div className="col-md-5">
              {/* <label for="country" className="form-label">Country</label>
              <select className="form-select" id="country" required>
                <option value="">Choose...</option>
                <option value="">-</option>
                <option value="AF">Afganistán</option>
              <option value="AL">Albania</option>
              <option value="DE">Alemania</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antártida</option>
              <option value="AG">Antigua y Barbuda</option>
              <option value="AN">Antillas Holandesas</option>
              <option value="SA">Arabia Saudí</option>
              <option value="DZ">Argelia</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaiyán</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrein</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BE">Bélgica</option>
              <option value="BZ">Belice</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermudas</option>
              <option value="BY">Bielorrusia</option>
              <option value="MM">Birmania</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia y Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BR">Brasil</option>
              <option value="BN">Brunei</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="BT">Bután</option>
              <option value="CV">Cabo Verde</option>
              <option value="KH">Camboya</option>
              <option value="CM">Camerún</option>
              <option value="CA">Canadá</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CY">Chipre</option>
              <option value="VA">Ciudad del Vaticano (Santa Sede)</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comores</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, República Democrática del</option>
              <option value="KR">Corea</option>
              <option value="KP">Corea del Norte</option>
              <option value="CI">Costa de Marfíl</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croacia (Hrvatska)</option>
              <option value="CU">Cuba</option>
              <option value="DK">Dinamarca</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egipto</option>
              <option value="SV">El Salvador</option>
              <option value="AE">Emiratos Árabes Unidos</option>
              <option value="ER">Eritrea</option>
              <option value="SI">Eslovenia</option>
              <option value="ES" selected>España</option>
              <option value="US">Estados Unidos</option>
              <option value="EE">Estonia</option>
              <option value="ET">Etiopía</option>
              <option value="FJ">Fiji</option>
              <option value="PH">Filipinas</option>
              <option value="FI">Finlandia</option>
              <option value="FR">Francia</option>
              <option value="GA">Gabón</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GD">Granada</option>
              <option value="GR">Grecia</option>
              <option value="GL">Groenlandia</option>
              <option value="GP">Guadalupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GY">Guayana</option>
              <option value="GF">Guayana Francesa</option>
              <option value="GN">Guinea</option>
              <option value="GQ">Guinea Ecuatorial</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="HT">Haití</option>
              <option value="HN">Honduras</option>
              <option value="HU">Hungría</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IQ">Irak</option>
              <option value="IR">Irán</option>
              <option value="IE">Irlanda</option>
              <option value="BV">Isla Bouvet</option>
              <option value="CX">Isla de Christmas</option>
              <option value="IS">Islandia</option>
              <option value="KY">Islas Caimán</option>
              <option value="CK">Islas Cook</option>
              <option value="CC">Islas de Cocos o Keeling</option>
              <option value="FO">Islas Faroe</option>
              <option value="HM">Islas Heard y McDonald</option>
              <option value="FK">Islas Malvinas</option>
              <option value="MP">Islas Marianas del Norte</option>
              <option value="MH">Islas Marshall</option>
              <option value="UM">Islas menores de Estados Unidos</option>
              <option value="PW">Islas Palau</option>
              <option value="SB">Islas Salomón</option>
              <option value="SJ">Islas Svalbard y Jan Mayen</option>
              <option value="TK">Islas Tokelau</option>
              <option value="TC">Islas Turks y Caicos</option>
              <option value="VI">Islas Vírgenes (EEUU)</option>
              <option value="VG">Islas Vírgenes (Reino Unido)</option>
              <option value="WF">Islas Wallis y Futuna</option>
              <option value="IL">Israel</option>
              <option value="IT">Italia</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japón</option>
              <option value="JO">Jordania</option>
              <option value="KZ">Kazajistán</option>
              <option value="KE">Kenia</option>
              <option value="KG">Kirguizistán</option>
              <option value="KI">Kiribati</option>
              <option value="KW">Kuwait</option>
              <option value="LA">Laos</option>
              <option value="LS">Lesotho</option>
              <option value="LV">Letonia</option>
              <option value="LB">Líbano</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libia</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lituania</option>
              <option value="LU">Luxemburgo</option>
              <option value="MK">Macedonia, Ex-República Yugoslava de</option>
              <option value="MG">Madagascar</option>
              <option value="MY">Malasia</option>
              <option value="MW">Malawi</option>
              <option value="MV">Maldivas</option>
              <option value="ML">Malí</option>
              <option value="MT">Malta</option>
              <option value="MA">Marruecos</option>
              <option value="MQ">Martinica</option>
              <option value="MU">Mauricio</option>
              <option value="MR">Mauritania</option>
              <option value="YT">Mayotte</option>
              <option value="MX">México</option>
              <option value="FM">Micronesia</option>
              <option value="MD">Moldavia</option>
              <option value="MC">Mónaco</option>
              <option value="MN">Mongolia</option>
              <option value="MS">Montserrat</option>
              <option value="MZ">Mozambique</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Níger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk</option>
              <option value="NO">Noruega</option>
              <option value="NC">Nueva Caledonia</option>
              <option value="NZ">Nueva Zelanda</option>
              <option value="OM">Omán</option>
              <option value="NL">Países Bajos</option>
              <option value="PA">Panamá</option>
              <option value="PG">Papúa Nueva Guinea</option>
              <option value="PK">Paquistán</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Perú</option>
              <option value="PN">Pitcairn</option>
              <option value="PF">Polinesia Francesa</option>
              <option value="PL">Polonia</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="UK">Reino Unido</option>
              <option value="CF">República Centroafricana</option>
              <option value="CZ">República Checa</option>
              <option value="ZA">República de Sudáfrica</option>
              <option value="DO">República Dominicana</option>
              <option value="SK">República Eslovaca</option>
              <option value="RE">Reunión</option>
              <option value="RW">Ruanda</option>
              <option value="RO">Rumania</option>
              <option value="RU">Rusia</option>
              <option value="EH">Sahara Occidental</option>
              <option value="KN">Saint Kitts y Nevis</option>
              <option value="WS">Samoa</option>
              <option value="AS">Samoa Americana</option>
              <option value="SM">San Marino</option>
              <option value="VC">San Vicente y Granadinas</option>
              <option value="SH">Santa Helena</option>
              <option value="LC">Santa Lucía</option>
              <option value="ST">Santo Tomé y Príncipe</option>
              <option value="SN">Senegal</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leona</option>
              <option value="SG">Singapur</option>
              <option value="SY">Siria</option>
              <option value="SO">Somalia</option>
              <option value="LK">Sri Lanka</option>
              <option value="PM">St Pierre y Miquelon</option>
              <option value="SZ">Suazilandia</option>
              <option value="SD">Sudán</option>
              <option value="SE">Suecia</option>
              <option value="CH">Suiza</option>
              <option value="SR">Surinam</option>
              <option value="TH">Tailandia</option>
              <option value="TW">Taiwán</option>
              <option value="TZ">Tanzania</option>
              <option value="TJ">Tayikistán</option>
              <option value="TF">Territorios franceses del Sur</option>
              <option value="TP">Timor Oriental</option>
              <option value="TG">Togo</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad y Tobago</option>
              <option value="TN">Túnez</option>
              <option value="TM">Turkmenistán</option>
              <option value="TR">Turquía</option>
              <option value="TV">Tuvalu</option>
              <option value="UA">Ucrania</option>
              <option value="UG">Uganda</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistán</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Vietnam</option>
              <option value="YE">Yemen</option>
              <option value="YU">Yugoslavia</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabue</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div> */}
              <div className="form-group">
              <label  className="form-label" for="country" >Paises</label>
              <select className="form-select" id="country" required {...register("country")}>
              <option value="">Choose...</option>
                <option value="">-</option>
                <option value="AF">Afganistán</option>
              <option value="AL">Albania</option>
              <option value="DE">Alemania</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antártida</option>
              <option value="AG">Antigua y Barbuda</option>
              <option value="AN">Antillas Holandesas</option>
              <option value="SA">Arabia Saudí</option>
              <option value="DZ">Argelia</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaiyán</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrein</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BE">Bélgica</option>
              <option value="BZ">Belice</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermudas</option>
              <option value="BY">Bielorrusia</option>
              <option value="MM">Birmania</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia y Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BR">Brasil</option>
              <option value="BN">Brunei</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="BT">Bután</option>
              <option value="CV">Cabo Verde</option>
              <option value="KH">Camboya</option>
              <option value="CM">Camerún</option>
              <option value="CA">Canadá</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CY">Chipre</option>
              <option value="VA">Ciudad del Vaticano (Santa Sede)</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comores</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, República Democrática del</option>
              <option value="KR">Corea</option>
              <option value="KP">Corea del Norte</option>
              <option value="CI">Costa de Marfíl</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croacia (Hrvatska)</option>
              <option value="CU">Cuba</option>
              <option value="DK">Dinamarca</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egipto</option>
              <option value="SV">El Salvador</option>
              <option value="AE">Emiratos Árabes Unidos</option>
              <option value="ER">Eritrea</option>
              <option value="SI">Eslovenia</option>
              <option value="ES" selected>España</option>
              <option value="US">Estados Unidos</option>
              <option value="EE">Estonia</option>
              <option value="ET">Etiopía</option>
              <option value="FJ">Fiji</option>
              <option value="PH">Filipinas</option>
              <option value="FI">Finlandia</option>
              <option value="FR">Francia</option>
              <option value="GA">Gabón</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GD">Granada</option>
              <option value="GR">Grecia</option>
              <option value="GL">Groenlandia</option>
              <option value="GP">Guadalupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GY">Guayana</option>
              <option value="GF">Guayana Francesa</option>
              <option value="GN">Guinea</option>
              <option value="GQ">Guinea Ecuatorial</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="HT">Haití</option>
              <option value="HN">Honduras</option>
              <option value="HU">Hungría</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IQ">Irak</option>
              <option value="IR">Irán</option>
              <option value="IE">Irlanda</option>
              <option value="BV">Isla Bouvet</option>
              <option value="CX">Isla de Christmas</option>
              <option value="IS">Islandia</option>
              <option value="KY">Islas Caimán</option>
              <option value="CK">Islas Cook</option>
              <option value="CC">Islas de Cocos o Keeling</option>
              <option value="FO">Islas Faroe</option>
              <option value="HM">Islas Heard y McDonald</option>
              <option value="FK">Islas Malvinas</option>
              <option value="MP">Islas Marianas del Norte</option>
              <option value="MH">Islas Marshall</option>
              <option value="UM">Islas menores de Estados Unidos</option>
              <option value="PW">Islas Palau</option>
              <option value="SB">Islas Salomón</option>
              <option value="SJ">Islas Svalbard y Jan Mayen</option>
              <option value="TK">Islas Tokelau</option>
              <option value="TC">Islas Turks y Caicos</option>
              <option value="VI">Islas Vírgenes (EEUU)</option>
              <option value="VG">Islas Vírgenes (Reino Unido)</option>
              <option value="WF">Islas Wallis y Futuna</option>
              <option value="IL">Israel</option>
              <option value="IT">Italia</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japón</option>
              <option value="JO">Jordania</option>
              <option value="KZ">Kazajistán</option>
              <option value="KE">Kenia</option>
              <option value="KG">Kirguizistán</option>
              <option value="KI">Kiribati</option>
              <option value="KW">Kuwait</option>
              <option value="LA">Laos</option>
              <option value="LS">Lesotho</option>
              <option value="LV">Letonia</option>
              <option value="LB">Líbano</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libia</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lituania</option>
              <option value="LU">Luxemburgo</option>
              <option value="MK">Macedonia, Ex-República Yugoslava de</option>
              <option value="MG">Madagascar</option>
              <option value="MY">Malasia</option>
              <option value="MW">Malawi</option>
              <option value="MV">Maldivas</option>
              <option value="ML">Malí</option>
              <option value="MT">Malta</option>
              <option value="MA">Marruecos</option>
              <option value="MQ">Martinica</option>
              <option value="MU">Mauricio</option>
              <option value="MR">Mauritania</option>
              <option value="YT">Mayotte</option>
              <option value="MX">México</option>
              <option value="FM">Micronesia</option>
              <option value="MD">Moldavia</option>
              <option value="MC">Mónaco</option>
              <option value="MN">Mongolia</option>
              <option value="MS">Montserrat</option>
              <option value="MZ">Mozambique</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Níger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk</option>
              <option value="NO">Noruega</option>
              <option value="NC">Nueva Caledonia</option>
              <option value="NZ">Nueva Zelanda</option>
              <option value="OM">Omán</option>
              <option value="NL">Países Bajos</option>
              <option value="PA">Panamá</option>
              <option value="PG">Papúa Nueva Guinea</option>
              <option value="PK">Paquistán</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Perú</option>
              <option value="PN">Pitcairn</option>
              <option value="PF">Polinesia Francesa</option>
              <option value="PL">Polonia</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="UK">Reino Unido</option>
              <option value="CF">República Centroafricana</option>
              <option value="CZ">República Checa</option>
              <option value="ZA">República de Sudáfrica</option>
              <option value="DO">República Dominicana</option>
              <option value="SK">República Eslovaca</option>
              <option value="RE">Reunión</option>
              <option value="RW">Ruanda</option>
              <option value="RO">Rumania</option>
              <option value="RU">Rusia</option>
              <option value="EH">Sahara Occidental</option>
              <option value="KN">Saint Kitts y Nevis</option>
              <option value="WS">Samoa</option>
              <option value="AS">Samoa Americana</option>
              <option value="SM">San Marino</option>
              <option value="VC">San Vicente y Granadinas</option>
              <option value="SH">Santa Helena</option>
              <option value="LC">Santa Lucía</option>
              <option value="ST">Santo Tomé y Príncipe</option>
              <option value="SN">Senegal</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leona</option>
              <option value="SG">Singapur</option>
              <option value="SY">Siria</option>
              <option value="SO">Somalia</option>
              <option value="LK">Sri Lanka</option>
              <option value="PM">St Pierre y Miquelon</option>
              <option value="SZ">Suazilandia</option>
              <option value="SD">Sudán</option>
              <option value="SE">Suecia</option>
              <option value="CH">Suiza</option>
              <option value="SR">Surinam</option>
              <option value="TH">Tailandia</option>
              <option value="TW">Taiwán</option>
              <option value="TZ">Tanzania</option>
              <option value="TJ">Tayikistán</option>
              <option value="TF">Territorios franceses del Sur</option>
              <option value="TP">Timor Oriental</option>
              <option value="TG">Togo</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad y Tobago</option>
              <option value="TN">Túnez</option>
              <option value="TM">Turkmenistán</option>
              <option value="TR">Turquía</option>
              <option value="TV">Tuvalu</option>
              <option value="UA">Ucrania</option>
              <option value="UG">Uganda</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistán</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Vietnam</option>
              <option value="YE">Yemen</option>
              <option value="YU">Yugoslavia</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabue</option>
              </select>
                <p className="text-danger">{errors.country?.message}</p>
              </div>                  
            </div>

            <div className="col-md-4">
              {/* <label for="state" className="form-label">State</label>
              <select className="form-select" id="state" required>
                <option value="">Choose...</option>
                <option value="">-</option>
                <option value="Arauca">Arauca</option>
                <option value="Armenia">Armenia</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Bucaramanga">Bucaramanga</option>
                <option value="Cali">Cali</option>
                <option value="Cartagena">Cartagena</option>
                <option value="Cúcuta">Cúcuta</option>
                <option value="Florencia">Florencia</option>
                <option value="Ibagué">Ibagué</option>
                <option value="Leticia">Leticia</option>
                <option value="Manizales">Manizales</option>
                <option value="Medellín">Medellín</option>
                <option value="Mitú">Mitú</option>
                <option value="Mocoa">Mocoa</option>
                <option value="Montería">Montería</option>
                <option value="Neiva">Neiva</option>
                <option value="Pasto">Pasto</option>
                <option value="Pereira">Pereira</option>
                <option value="Popayán">Popayán</option>
                <option value="Puerto Carreño">Puerto Carreño</option>
                <option value="Puerto Inírida">Puerto Inírida</option>
                <option value="Quibdó">Quibdó</option>
                <option value="Riohacha">Riohacha</option>
                <option value="San Andrés">San Andrés</option>
                <option value="San José del Guaviare">San José del Guaviare</option>
                <option value="Santa Marta">Santa Marta</option>
                <option value="Sincelejo">Sincelejo</option>
                <option value="Tunja">Tunja</option>
                <option value="Valledupar">Valledupar</option>
                <option value="Villavicencio">Villavicencio</option>
                <option value="Yopal">Yopal</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div> */}
              <div className="form-group">
              <label  className="form-label" for="stateCountry" >Estado</label>
              <select className="form-select" id="state" required {...register("stateCountry")}>
              <option value="">Choose...</option>
                <option value="">-</option>
                <option value="Arauca">Arauca</option>
                <option value="Armenia">Armenia</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Bucaramanga">Bucaramanga</option>
                <option value="Cali">Cali</option>
                <option value="Cartagena">Cartagena</option>
                <option value="Cúcuta">Cúcuta</option>
                <option value="Florencia">Florencia</option>
                <option value="Ibagué">Ibagué</option>
                <option value="Leticia">Leticia</option>
                <option value="Manizales">Manizales</option>
                <option value="Medellín">Medellín</option>
                <option value="Mitú">Mitú</option>
                <option value="Mocoa">Mocoa</option>
                <option value="Montería">Montería</option>
                <option value="Neiva">Neiva</option>
                <option value="Pasto">Pasto</option>
                <option value="Pereira">Pereira</option>
                <option value="Popayán">Popayán</option>
                <option value="Puerto Carreño">Puerto Carreño</option>
                <option value="Puerto Inírida">Puerto Inírida</option>
                <option value="Quibdó">Quibdó</option>
                <option value="Riohacha">Riohacha</option>
                <option value="San Andrés">San Andrés</option>
                <option value="San José del Guaviare">San José del Guaviare</option>
                <option value="Santa Marta">Santa Marta</option>
                <option value="Sincelejo">Sincelejo</option>
                <option value="Tunja">Tunja</option>
                <option value="Valledupar">Valledupar</option>
                <option value="Villavicencio">Villavicencio</option>
                <option value="Yopal">Yopal</option>
              </select>
                <p className="text-danger">{errors.stateCountry?.message}</p>
              </div>                 
            </div>

            <div className="col-md-3">
              {/* <label for="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" placeholder="" required/>
              <div className="invalid-feedback">
                Zip code required.
              </div> */}
              <div className="form-group">
                <label className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required {...register("zip")} />
                <p className="text-danger">{errors.zip?.message}</p>
              </div>                   
            </div>
          </div>


{/* 

          <hr className="my-4"/>

          <h4 className="mb-3">Payment</h4>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required/>
              <label className="form-check-label" for="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required/>
              <label className="form-check-label" for="debit">Debit card</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required/>
              <label className="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label for="cc-name" className="form-label">Name on card</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required/>
              <small className="text-muted">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div className="col-md-6">
              <label for="cc-number" className="form-label">Credit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required/>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-expiration" className="form-label">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div> */}

          <hr className="my-4"/>

          <button className="w-100 btn btn-primary btn-lg" type="submit">Guardar</button>
        </form>
      </div>
    </div>
  </main>
  <br/>
  {/* <footer className="my-5 pt-5 text-muted text-center text-small">
    <p className="mb-1">&copy; 2017–2021 Company Name</p>
    <ul className="list-inline">
      <li className="list-inline-item"><a href="#">Privacy</a></li>
      <li className="list-inline-item"><a href="#">Terms</a></li>
      <li className="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer> */}
</div>      
<script src="../assets/custom/form-validation.js"></script>
</>
  );
    
};
export default Register;