import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CurrencyInput from 'react-currency-input-field';

const schema = yup.object({


  numberDoc: yup.number()
  .typeError('you must specify a number')
  ,
  first_name: yup.string().required().min(3),
  last_name: yup.string().required().min(3),
  email: yup.string().email('Invalid email format').required('Required'),
  phone: yup.string()
  .required("This field is Required")
  .matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Phone number is not valid"
  ),

  cc_name: yup.string().min(3),
  cc_number: yup.number(),
  cc_expiration: yup.date().f,
  cc_cvv: yup.number(),

}).required();


const TicketRegistration = () => {

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

<div className="container">
  <main>
    <br/><br/>
    <div className="py-5 text-center ">
      {/* <img className="d-block mx-auto mb-4" src="/img/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
      <h2>Plataforma de Cobros de Peajes - Tiquetes</h2>
      <p className="lead">Favor ingrese los datos de Vehiculo.</p>
    
      <a class="getstarted scrollto" href="/">SALIR</a><br></br>
    
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>   
      <div className="row g-1 justify-content-center shadow p-5 bg-light border m-2">
    
          <div className="col-md-5 col-lg-5 order-md-last">         
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Datos - Medios de Pagos</span>
              <span class="badge bg-primary rounded-pill">$</span>
            </h4>
           
            <h4 className="mb-3">Opciones</h4>

            {/* <div className="p-2 col-2"> 
              <div className="row align-items-start">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required/>
                  <label className="form-check-label" for="credit">Credit card</label>
                </div>
                <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" checked required/>
                  <label className="form-check-label" for="debit">Debit card</label>
                </div>
                <div className="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" checked required/>
                  <label className="form-check-label" for="paypal">PayPal</label>
                </div>
              </div>
              <div className="row align-items-end">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required/>
                  <label className="form-check-label" for="credit">Credit card</label>
                </div>
                <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" checked required/>
                  <label className="form-check-label" for="debit">Debit card</label>
                </div>
                <div className="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" checked required/>
                  <label className="form-check-label" for="paypal">PayPal</label>
                </div>
              </div>              
            </div> */}

            <div class="container">
              <div class="row m-3">
                <div class="col">
                  <div className="row align-items-start">
                    <div className="form-check">
                      <input id="Efectivo" name="paymentMethod" type="radio" className="form-check-input" checked required/>
                      <label className="form-check-label" for="credit">Efectivo</label>
                    </div>
                    <div className="form-check">
                      <input id="Trifd" name="paymentMethod" type="radio" className="form-check-input" checked required/>
                      <label className="form-check-label" for="debit">Tarjeta RIFD</label>
                    </div>
                    <div className="form-check">
                      <input id="Ambos" name="paymentMethod" type="radio" className="form-check-input" checked required/>
                      <label className="form-check-label" for="paypal">Ambos</label>
                    </div>
                  </div>
                </div>
                <div class="col order-5">
                  {/* <img className="d-block mx-auto mb-2" src="/img/logo-pse.png" alt="" width="100" height="100"/> */}
                </div>
              </div>
            </div>


            <div className="row gy-3">

            </div>  
              <hr className="my-3"/> 
              <div class="col order-5">
                  <img className="d-block mx-auto mb-2 img-fluid" src="/img/consorcio.jpg" alt=""/>
                </div>
              <hr className="my-2"/>                 
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="submit" class="w-100 btn btn-sm btn-outline-secondary">Tiquete</button>
                  <button type="button" class="w-100 btn btn-sm btn-outline-secondary">Cancelar</button>
                  <button type="button" class="w-100 btn btn-sm btn-outline-secondary">Listado</button>
                  {/* <button className="w-100 btn btn-primary btn-lg" type="submit">Guardar</button> */}
                </div>
              </div>  
          </div>      
          <div className="col-md-7 col-lg-7">
            <h4 className="mb-3">Datos - Tiquetes</h4>

              <div className="row g-3">
                <div className="col-sm-5">
                  <div className="form-group">
                      <label  className="form-label" for="type_doc" >Categoria - Vehiculo</label>
                      <select className="form-select" id="type_doc" required {...register("typeDoc")}>
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
                        <p className="text-danger">{errors.typeDoc?.message}</p>
                  </div>                
                </div>
                <div className="col-sm-5">
                  <div className="form-group">
                    <label className="form-label">No. Placa Vehiculo</label>
                    <input className="form-control" type="text" required {...register("numberDoc")} />
                    <p className="text-danger">{errors.numberDoc?.message}</p>
                  </div>                
                </div>        
                    
                <div className="col-sm-5">
                  <div className="form-group">
                    <label className="form-label">Foto - Placa</label>
                    {/* <input className="form-control" type="text" required {...register("first_name")} />
                    <p className="text-danger">{errors.first_name?.message}</p> */}
                  </div>              
                </div>
                <div className="col-sm-5">
                  <div class="col order-5">
                    <img className="d-block mx-auto mb-2" src="/img/placa.jpg" alt="" width="250" height="100"/>
                  </div>           
                </div>
                <label  className="form-label" for="type_doc" >Valor Peaje X Categoria</label>
                <ul className="list-group mb-3 my-3 col-sm-11">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0 ">Numero Tarjeta: <span class="badge bg-primary rounded-pill">45-857985600</span></h6>
                      <h6 className="my-1">Saldo Tarjeta:</h6>
                      {/* <small className="text-muted">Buses, busetas con eje trasero de doble llanta y camiones de dos ejes.</small> */}
                    </div>
                    <span className="text-muted col-sm-4 ju my-0">
                        {/* <input className="form-control" type="text" required {...register("vCat1")} /> */}
                        <CurrencyInput
                          className="form-control"
                          prefix="$"
                          id="vCard1"
                          name="vCard1"
                          placeholder=""
                          defaultValue={0}
                          decimalsLimit={2}
                          required {...register("vCard1")}
                          //maxLength={5}
                          onValueChange={(value, name) => console.log(value, name)}
                        />
                        <p className="text-danger">{errors.vCard1?.message}</p>              
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Valor X Categoria: </h6>
                      {/* <small className="text-muted">Buses, busetas con eje trasero de doble llanta y camiones de dos ejes.</small> */}
                    </div>
                    <span className="text-muted col-sm-4">
                        {/* <input className="form-control" type="text" required {...register("vCat2")} /> */}
                        <CurrencyInput
                          className="form-control"
                          prefix="$"
                          id="vCard2"
                          name="vCard2"
                          placeholder=""
                          defaultValue={0}
                          decimalsLimit={2}
                          required {...register("vCard2")}
                          onValueChange={(value, name) => console.log(value, name)}
                        />                
                        <p className="text-danger">{errors.vCard2?.message}</p>              
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Total a Pagar:</h6>
                      {/* <small className="text-muted">Camiones de tres y cuatro ejes.</small> */}
                    </div>
                    <span className="text-muted col-sm-4">
                        {/* <input className="form-control" type="text" required {...register("vCat3")} /> */}
                        <CurrencyInput
                          className="form-control"
                          prefix="$"
                          id="vTcard"
                          name="vTcard"
                          placeholder=""
                          defaultValue={0}
                          decimalsLimit={2}
                          required {...register("vTcard")}
                          onValueChange={(value, name) => console.log(value, name)}
                        />                
                        <p className="text-danger">{errors.vTcard?.message}</p>              
                    </span>
                  </li>
                  
                </ul>                 
              </div>          


          </div>
          
      </div>
    </form> 
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
export default TicketRegistration;