import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { mesageErro, mesageSucces } from "../Utils/Toastr";

export default function Login() {

    const [values, setValues] = useState({})

    let navigate = useNavigate()

    function onChange(ev) {

        const { name, value } = ev.target;
        setValues({ ...values, [name]: value })

      
    }

    function onSubmit() {
        console.log("Valores ", values)

        const login = {
            email: values.email,
            senha: values.senha

        }

        axios.post('http://localhost:8080/login', login)
            .then(response => {
                console.log(response)
                localStorage.setItem("user", JSON.stringify(response.data))
                navigate("/home")
            })
            .catch(erro => mesageErro("Erro, login invalido"))
    }

    return (

        <>

            <nav className="navbar navbar-dark bg-dark">
                 <h2>Biblioteca Web</h2>
            </nav>


            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <div className="card card-header p-3 mb-2 bg-dark text-white">
                            <div className="card-header">
                                <h3 className="font-weight-bold" >Login</h3> </div>

                            <form className="container">
                                <div className="form-group">
                                   
                                    <label htmlFor="exampleInputEmail1" className="font-weight-bold">Endereço de email</label>
                                    <input type="email" name="email" onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
                                </div>
                                <div className="form-group">
                                  
                                    <label htmlFor="exampleInputPassword1" className="font-weight-bold">Senha</label>
                                    <input type="password" name="senha" onChange={onChange} className="form-control" id="exampleInputPassword1" placeholder="Senha" />
                                    

                                </div>

                                <div className="form-group col-md-12"></div>
                                <div className="form-group col-md-6"></div>

                                <button type="button" onClick={onSubmit} className="btn btn-primary" >Entrar</button>
                                <input className="btn btn-secondary" type="reset" value="Limpar" />

                            </form>






                        </div>
                    </div>
                </div>
            </div>

        </>


    )



}

