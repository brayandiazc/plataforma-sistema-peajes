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


const Tolls = () => {

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
    <div className="py-5 text-center ">
      {/* <img className="d-block mx-auto mb-4" src="/img/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
      <h2>Registro - Peajes</h2>
      <p className="lead">Favor ingrese los datos de registro de Peajes.</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}> 
    <div className="row g-1 justify-content-center shadow p-5 bg-light border m-2">
     
      <div className="col-md-5 col-lg-5 order-md-last">
         
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Valores X Categorías</span>
          <span class="badge bg-primary rounded-pill">6</span>
        </h4>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Categoría I:</h6>
              <small className="text-muted">Automóviles, camperos y camionetas.</small>
            </div>
            <span className="text-muted col-sm-4 ju">
                {/* <input className="form-control" type="text" required {...register("vCat1")} /> */}
                <CurrencyInput
                  className="form-control"
                  prefix="$"
                  id="vCat1"
                  name="nvCat1"
                  placeholder=""
                  defaultValue={0}
                  decimalsLimit={2}
                  required {...register("vCat1")}
                  //maxLength={5}
                  onValueChange={(value, name) => console.log(value, name)}
                />
                <p className="text-danger">{errors.vCat1?.message}</p>              
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Categoría II: </h6>
              <small className="text-muted">Buses, busetas con eje trasero de doble llanta y camiones de dos ejes.</small>
            </div>
            <span className="text-muted col-sm-4">
                {/* <input className="form-control" type="text" required {...register("vCat2")} /> */}
                <CurrencyInput
                  className="form-control"
                  prefix="$"
                  id="vCat2"
                  name="nvCat2"
                  placeholder=""
                  defaultValue={0}
                  decimalsLimit={2}
                  required {...register("vCat2")}
                  onValueChange={(value, name) => console.log(value, name)}
                />                
                <p className="text-danger">{errors.vCat2?.message}</p>              
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Categoría III:</h6>
              <small className="text-muted">Camiones de tres y cuatro ejes.</small>
            </div>
            <span className="text-muted col-sm-4">
                {/* <input className="form-control" type="text" required {...register("vCat3")} /> */}
                <CurrencyInput
                  className="form-control"
                  prefix="$"
                  id="vCat3"
                  name="nvCat3"
                  placeholder=""
                  defaultValue={0}
                  decimalsLimit={2}
                  required {...register("vCat3")}
                  onValueChange={(value, name) => console.log(value, name)}
                />                
                <p className="text-danger">{errors.vCat3?.message}</p>              
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Categoría IV:</h6>
              <small className="text-muted">Camiones de cinco ejes.</small>
            </div>
            <span className="text-muted col-sm-4">
                {/* <input className="form-control" type="text" required {...register("vCat4")} /> */}
                <CurrencyInput
                  className="form-control"
                  prefix="$"
                  id="vCat4"
                  name="nvCat4"
                  placeholder=""
                  defaultValue={0}
                  decimalsLimit={2}
                  required {...register("vCat4")}
                  onValueChange={(value, name) => console.log(value, name)}
                />                
                <p className="text-danger">{errors.vCat4?.message}</p>              
            </span>
          </li>       
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Categoría V:</h6>
              <small className="text-muted">Camiones de seis ejes.</small>
            </div>
            <span className="text-muted col-sm-4">
                {/* <input className="form-control" type="text" required {...register("vCat5")} /> */}
                <CurrencyInput
                  className="form-control"
                  prefix="$"
                  id="vCat5"
                  name="nvCat5"
                  placeholder=""
                  defaultValue={0}
                  decimalsLimit={2}
                  required {...register("vCat5")}
                  onValueChange={(value, name) => console.log(value, name)}
                />                
                <p className="text-danger">{errors.vCat5?.message}</p>              
            </span>
          </li>                 
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Categoría VI – VII:</h6>
              <small className="text-muted">Camiones de hasta siete ejes.</small>
            </div>
            <span className="text-muted col-sm-4">
                {/* <input className="form-control" type="text" required {...register("vCat6")} /> */}
                <CurrencyInput
                  className="form-control"
                  prefix="$"
                  id="vCat6"
                  name="nvCat6"
                  placeholder=""
                  defaultValue={0}
                  decimalsLimit={2}
                  required {...register("vCat6")}
                  onValueChange={(value, name) => console.log(value, name)}
                />                
                <p className="text-danger">{errors.vCat6?.message}</p>              
            </span>
          </li>            
        </ul>        
       
      </div>
      <div className="col-md-7 col-lg-7">
        <h4 className="mb-3">Sistema de Peajes / Administración</h4>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <div className="row g-3">
            <div className="col-sm-6">
              {/* <label for="firstName" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="firstName" placeholder="" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div> */}
              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input className="form-control" type="text" required {...register("nameTolls")} />
                <p className="text-danger">{errors.nameTolls?.message}</p>
              </div>              
            </div>
              {/* <div className="upload--button">
                <input id={1} accept=".jpeg, .pdf" type="file" />
              </div> */}
              <input
                type="file"
                id="image"
                name="image"
                multiple
                ref={fileInput}
              />

            <div className="col-sm-12">
              {/* <label for="lastName" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="lastName" placeholder="" required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div> */}
              <div className="form-group">
                <label className="form-label">Descripción</label>
                <textarea className="form-control" name="descTolls" rows="1" placeholder="Descripción" required {...register("descTolls")}></textarea>
                <p className="text-danger">{errors.descTolls?.message}</p>
              </div>              
            </div>

            <div className="col-sm-6">
              {/* <label for="firstName" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="firstName" placeholder="" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div> */}
              <div className="form-group">
                <label className="form-label">Latitud</label>
                <input className="form-control" type="text" required {...register("latitud")} />
                <p className="text-danger">{errors.latitud?.message}</p>
              </div>              
            </div>

            <div className="col-sm-6">
              {/* <label for="firstName" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="firstName" placeholder="" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div> */}
              <div className="form-group">
                <label className="form-label">Longitud</label>
                <input className="form-control" type="text" required {...register("logitud")} />
                <p className="text-danger">{errors.logitud?.message}</p>
              </div>              
            </div>

            <div className="col-sm-12">

              <div className="form-group">
              <label  className="form-label" for="type_doc" >Listado - Consorcios Peajes</label>
                     <ConsortiumL/> 
              </div>                
            </div>
          </div>
          <hr className="my-2"/>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group my-1">
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
export default Tolls;