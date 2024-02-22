import React, { useState } from 'react'

import im1 from '../Imagenes/Coding1.jpg'
import im2 from '../Imagenes/Coding2.jpg'
import im3 from '../Imagenes/Coding3.jpg'

import firebaseApp from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp)

const Login = () => {

    const [registro, setRegistro] = useState(false)

    const handlerSubmit = async(e) => {

        e.preventDefault()
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if (registro){
            await createUserWithEmailAndPassword(auth,correo,contraseña)
        }
        else{
            await signInWithEmailAndPassword(auth,correo,contraseña)
        }
    }

  return (
    <div className='row container p-4'>
        {/*Slider*/}
        <div className='col-md-8'>   
            <div id="carouselExample" className="carousel slide">
             <div className="carousel-inner">
                <div className="carousel-item active">
                 <img src= {im1} alt='' className="tamaño-imagen"></img>
                </div>
                <div class="carousel-item">
                 <img src= {im2} alt='' className="tamaño-imagen"></img>
                </div>
                <div class="carousel-item">
                 <img src= {im3} alt='' className="tamaño-imagen" ></img>
                </div>
             </div>
             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
             </button>
             <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
             </button>
            </div>
        </div>

        {/*Seccion para formulario*/}
        <div className='col-md-4'>  
         <div className='mt-5 ms.5'>  
            <h1>{registro ? 'Registrate': 'Inicia Sesión'}</h1>
                <form onSubmit={handlerSubmit}>  
                    <div className='mb-3'>
                        <label className='form-label'> Direccion Email:</label>
                        <input type='email' className='form-control' placeholder='Ingrese su correo electrónico' id='email' name='email' required></input>
                    </div>    
                    <div className='mb-3'>
                        <label className='form-label'> Contraseña: </label>
                        <input type='password' className='form-control' placeholder='Ingrese su contraseña' id='password' name='password' required></input>
                    </div>
                    <button className='btn btn-primary' type='submit'>{registro ? 'Registrarse' : 'Iniciar sesión'}</button>    
                </form>
                <div className='form-group'>
                    <button className='btn btn-secondary mt-4 form-control' onClick={() => setRegistro(!registro)}>
                    {registro ? '¿Ya tienes una cuenta?, Inicia sesion' : '¿No tienes cuenta?, Registrate'}
                    </button>
                </div>
         </div>
        </div>
        

    </div>
    
  )
}

export default Login