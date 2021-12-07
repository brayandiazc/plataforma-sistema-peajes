import React from "react";
import { useForm } from "react-hook-form";
import Documentnumber_d from "../components/documentNumber";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Profile from "../components/profile";


const tuser = React.createRef();

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
  
  
  phone: yup.string()
  .required("This field is Required")
  .matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Phone number is not valid"
  ),
 
}).required();


const Users = () => {

  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { register, handleSubmit, watch, formState: { errors } } = useForm(  {
    resolver: yupResolver(schema)
  });

  
  const onSubmit = data => {
    console.log(
      "onSubmitFn:",
      data,
      "  Tuser: ",
      tuser
    );
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
      <h2>Administración - Usuarios</h2>
      <p className="lead">Favor ingrese los datos para la Creación de Usuarios.</p>
    
      <a href="/" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                <span>SALIR</span>
                <i className="bi bi-arrow-right"></i>             
              </a>
    
    </div>

    <div className="row g-1 justify-content-center shadow p-5 bg-light border m-2">
      
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Sistema de Peajes / Usuarios</h4>
        <hr className="my-1"/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-3">
            <div className="col-sm-6">

              <div className="form-group">
                <label className="form-label">Nombre</label>
                <input className="form-control" type="text" required {...register("first_name")} />
                <p className="text-danger">{errors.first_name?.message}</p>
              </div>              
            </div>

            <div className="col-sm-6">

              <div className="form-group">
                <label className="form-label">Apellido</label>
                <input className="form-control" type="text" required {...register("last_name")} />
                <p className="text-danger">{errors.last_name?.message}</p>
              </div>              
            </div>

            <div className="col-12">
              <label for="username" className="form-label">Nombre de usuario</label>

                <div className="form-group">
                  <input type="text" className="form-control" id="username" placeholder="Nombre de usuario" required {...register("user_name")}/>
                  <p className="text-danger">{errors.user_name?.message}</p>
                </div>                
            </div>

            <div className="col-sm-6">

              <div className="form-group">
                <label className="form-label">Contraseña</label>
                <input className="form-control" type="password" required {...register("password")} />
                <p className="text-danger">{errors.password?.message}</p>
              </div>              
            </div>

            <div className="col-sm-6">

              <div className="form-group">
                <label className="form-label">Confirmar Contraseña</label>
                <input className="form-control" type="password" required {...register("confirmPassword")} />
                <p className="text-danger">{errors.confirmPassword?.message}</p>
              </div>              
            </div>

            <div className="col-sm-6">
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
                <Documentnumber_d/>{/* <Lla al componente que esta leyendo un Json/>  */}
              </div>                
            </div>

            <div className="col-sm-6">

              <div className="form-group">
                <label className="form-label">N.Documento</label>
                <input className="form-control" type="text" required {...register("numberDoc")} />
                <p className="text-danger">{errors.numberDoc?.message}</p>
              </div>                
            </div>

            <div className="col-12">
              <div className="form-group">
                <label className="form-label">Correo <span className="text-muted">(...)</span></label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" required {...register("email")} />
                <p className="text-danger">{errors.email?.message}</p>
              </div>              
            </div>

            <div className="col-12">
               <div className="form-group">
                <label className="form-label">Dirección</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required {...register("address")} />
                <p className="text-danger">{errors.address?.message}</p>
              </div>                
            </div>

            <div className="col-sm-6">

              <div className="form-group">
                <label className="form-label">Celular</label>
                <input type="text" className="form-control" id="celular" placeholder="" {...register("phone")} />
                <p className="text-danger">{errors.phone?.message}</p>
              </div>                
            </div>

            <div className="col-sm-6">

              <div className="form-group">
               
                <label  className="form-label" for="tuser" >Perfil de Usuario</label>
                  {/* <select className="form-select" id="tuser" required {...register("tuser")} >
                    <option value="">Choose...</option>
                    <option value="1">ADMINNISTRADOR</option>
                    <option value="2">USUARIO INTERNO</option>

                  </select>
                <p className="text-danger">{errors.tuser?.message}</p> */}
                <Profile/>
              </div>               
            </div>
            <hr className="my-1"/>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="submit" class="w-100 btn btn-sm btn-outline-secondary">Guardar</button>
                  <button type="button" class="w-100 btn btn-sm btn-outline-secondary">Cancelar</button>
                  <button type="button" class="w-100 btn btn-sm btn-outline-secondary">Listado</button>
                  {/* <button className="w-100 btn btn-primary btn-lg" type="submit">Guardar</button> */}
                </div>
              </div>  

          </div>
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
export default Users;