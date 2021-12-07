import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  your_name: yup.string().required().min(3),
  email: yup.string().email('Invalid email format').required('Required'),
  subject: yup.string().required().min(3),
  message: yup.string().required().min(3),
  phoneNumber: yup.string()
  .required("This field is Required")
  .matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Phone number is not valid"
  ),

}).required();

const Contacts = () =>{

      // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { register, handleSubmit, watch, formState: { errors } } = useForm(  {
    resolver: yupResolver(schema)
  });

  
  const onSubmit = data => {
    console.log(data);
    alert(data.your_name + " " +data.email );
  }

    return(

    <>
    <br/>
    <div className="container-fluid">
        <section id="contact" className="contact">

            <div className="container" data-aos="fade-up">

                <header className="section-header">

                    <p>Contáctenos...</p>
                </header>

                <div className="row gy-5">
                    
                    <div className="col-lg-6">
                        <img className="d-block mx-auto mb-0 img-fluid" src="/img/imgPeajes.jpg" alt="" />  <br/><br/>
                        <div className="row gy-4">
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bi bi-geo-alt"></i>
                                    <h3>Address</h3>
                                    <p>A108 Adam Street,<br/>New York, NY 535022</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bi bi-telephone"></i>
                                    <h3>Call Us</h3>
                                    <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bi bi-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>info@example.com<br/>contact@example.com</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bi bi-clock"></i>
                                    <h3>Open Hours</h3>
                                    <p>Monday - Friday<br/>9:00AM - 05:00PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        {/* <form action="forms/contact.php" method="post" className="php-email-form"> */}
                        <form onSubmit={handleSubmit(onSubmit)} className="php-email-form">
                            <div className="row gy-4">

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" placeholder="Your Name" required {...register("your_name")} />
                                        <p className="text-danger">{errors.your_name?.message}</p>
                                    </div>                              
                                </div>

                                <div className="col-md-6 ">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" required {...register("email")} />
                                        <p className="text-danger">{errors.email?.message}</p>
                                    </div>                             
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" placeholder="Subject" required {...register("subject")} />
                                        <p className="text-danger">{errors.subject?.message}</p>
                                    </div>                            
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="phoneNumber" placeholder="PhoneNumber" required {...register("phoneNumber")} />
                                        <p className="text-danger">{errors.phoneNumber?.message}</p>
                                    </div>                              
                                </div>
                                <div className="col-md-12 form-group">

                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows="6" placeholder="Message" required {...register("message")}></textarea>
                                        <p className="text-danger">{errors.message?.message}</p>
                                    </div>                              
                                </div>

                                <div className="col-md-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>

                                    <button type="submit">Enviar Mensaje</button>
                                </div>

                            </div>
                        </form>
                    </div>
                

                </div>
            </div>

        </section>
    </div>    
    </>

    );
};

export default Contacts