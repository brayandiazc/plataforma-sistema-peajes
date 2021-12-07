import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    password: yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
   
    email: yup.string().email('Invalid email format').required('Required'),

  }).required();

const Register1 = () => {

      // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { register, handleSubmit, watch, formState: { errors } } = useForm(  {
    resolver: yupResolver(schema)
  });
 
  const onSubmit = data => {
    console.log(data);
    alert(data.first_name + " " +data.last_name );

  }

    return (
        
    <div className ="viewport" content="width=device-width, user-scaleble=no,initial-scale=1,maximum-scale=1, minimum-scale=1">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/heroes/"></link>
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet"></link>
    <link href="heroes.css" rel="stylesheet"></link>
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        

    <div className="row align-items-center g-lg-5 py-5">
    <div className="col-lg-7 text-center text-lg-start">
        {/*<h1 className="display-4 fw-bold lh-1 mb-3">Suscríbete obten beneficios </h1>*/}
        <p className="col-lg-10 fs-4">Accede a la tecnología con nuestra novedosa tarjeta RFID, premios y más...</p>
        <h1 className="display-4 fw-bold lh-1 mb-3">Departamento del Putumayo</h1>
        <p className="col-lg-10 fs-4">Viaja por nuestras carreteras, conoce y disfruta...</p>
        <p className="col-lg-10 fs-4"></p>
        <a class="getstarted scrollto" href="/register">REGISTRARSE</a><br></br>
        <a class="getstarted scrollto" href="/">SALIR</a><br></br>
        
          {/* <i className="bi bi-arrow-right"></i> */}

    </div>
    <br/>
    <div className="py-3 col-md-10 mx-auto col-lg-5">
        
        <form className="p-4 p-md-5 border rounded-3 bg-light" novalidate onSubmit={handleSubmit(onSubmit) }>
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register("email")}/>
            <label for="floatingInput bg-light">Correo...</label>
            <p className="text-danger">{errors.email?.message}</p>

        </div>
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" {...register("password")}/>
            <label for="floatingPassword">Contraseña...</label>
            <p className="text-danger">{errors.password?.message}</p>
        </div>
        <div className="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me"/> Recordar
            </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Accede</button>
        <hr className="my-4"/>
        <Link to="/register" className="nav-link me-lg-3">Registrarse...</Link> 
        </form>
     
    </div>
    </div>
    </div>
    </div>
    
    );
};
export default Register1;