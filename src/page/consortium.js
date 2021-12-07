import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CurrencyInput from 'react-currency-input-field';
import ConsortiumL from "../components/consortiumList";

const fileInput = React.createRef();

const schema = yup.object({
  nameTolls: yup.string().required().min(3),
  descTolls: yup.string().min(3),
  latitud: yup.number()
  .typeError('you must specify a number')
  // .min(0, 'Min value 0.')
  // .max(30, 'Max value 30.')
  ,  

  logitud: yup.number()
  .typeError('you must specify a number')
  // .min(0, 'Min value 0.')
  // .max(30, 'Max value 30.')
  , 


}).required();


const Consortium = () => {

  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { register, handleSubmit, watch, formState: { errors } } = useForm(  {
    resolver: yupResolver(schema)
  });

  
  const onSubmit = data => {
    console.log(
      "onSubmitFn:",
      data,
      "  imageFile: ",
      fileInput.current.files[0].name
    );
    alert(data.nameTolls + " " +data.descTolls + data.fileInput);
  }

    return(
    
      <>
        

<div className="container">
  <main>
    <br/><br/>
    <div className="py-5 text-center">
      {/* <img className="d-block mx-auto mb-4" src="/img/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
      <h2>Registro - Consorcios</h2>
      <p className="lead">Favor ingrese los datos de registro de Consocios.</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}> 
    <div className="row g-1 justify-content-center shadow p-5 bg-light border m-2">
     
      <div className="col-md-5 col-lg-5 order-md-last">
         
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Consorcio Putumayo</span>
          <span class="badge bg-primary rounded-pill">Somos Pais</span>
        </h4>
        <hr className="my-4"/> 
              <div class="col order-5">
                  <img className="d-block mx-auto mb-2 img-fluid" src="/img/peaje_putumayo.jpg" alt=""/>
              </div>
              <div class="col order-5">
                  <img className="d-block mx-auto mb-2 img-fluid" src="/img/peaje_putumayo1.jpg" alt=""/>
              </div>       
      </div>
      <div className="col-md-7 col-lg-7">
        <h4 className="mb-3">Sistema de Consorcios / Administración</h4>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input className="form-control" type="text" required {...register("nameTolls")} />
                <p className="text-danger">{errors.nameTolls?.message}</p>
              </div>              
            </div>
              <input
                type="file"
                id="image"
                name="image"
                multiple
                ref={fileInput}
              />

            <div className="col-sm-12">
              <div className="form-group">
                <label className="form-label">Descripción</label>
                <textarea className="form-control" name="descTolls" rows="2" placeholder="Descripción" required {...register("descTolls")}></textarea>
                <p className="text-danger">{errors.descTolls?.message}</p>
              </div>              
            </div>


            <div className="col-sm-12">

              <div className="form-group">
              <label  className="form-label" for="type_doc" >Listado - Consorcios Peajes</label>
              <ConsortiumL/> 
              </div>                
            </div>
          </div>
          <hr className="my-4"/>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group my-2">
                  <button type="submit" class="w-100 btn btn-sm btn-outline-secondary">Guardar</button>
                  <button type="button" class="w-100 btn btn-sm btn-outline-secondary">Cancelar</button>
                  <button type="button" class="w-100 btn btn-sm btn-outline-secondary">Listado</button>
                  {/* <button className="w-100 btn btn-primary btn-lg" type="submit">Guardar</button> */}
                </div>
              </div>            
        {/* </form> */}
      </div>
      
    </div>
    </form>    
  </main>
  <br/>
</div>      
<script src="../assets/custom/form-validation.js"></script>
</>
  );
    
};
export default Consortium;