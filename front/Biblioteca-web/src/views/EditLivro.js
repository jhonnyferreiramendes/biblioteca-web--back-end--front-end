import React, {useEffect, useState} from "react";
import { saveLivro , findById, putLivo} from "../services/LivroService";
import {useNavigate, useParams} from "react-router-dom";
import ListarLivros from "./ListarLivros";
import { mesageErro, mesageSucces } from "../Utils/Toastr";

export default function EditLivro(){

    let navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        if(id){
            findById(id).then(response=>{
                setLivros(response.data)
            })
        }
    },[id])

    function listarTodos(){
        navigate("/ListarLivros")
    }

    const [livroDTO,setLivros]= useState({})

    function onChange(ev) {

        const { name, value } = ev.target;
        setLivros({ ...livroDTO, [name]: value })

      
    }

    function resetForm(){
        setLivros([])
    }

    function onSubmit() {
        putLivo(livroDTO).then(response => {
           //message sucess 
           mesageSucces("Editado com Sucesso!")
        }).catch(
           //message error
           //mesageErro("Erro ao editar.")
            )
        resetForm()
        }
    
    

    return(
        <>

<nav className="navbar navbar-dark bg-dark">
                 <h2>Biblioteca Web</h2>
            </nav>
<div className = "container my-5 mx-auto" >
  <a onClick={listarTodos} className="p-3 mb-2 bg-dark text-white" role="button" aria-pressed="true">Lista de livros</a>
</div>

  <div className = "container my-5">
    <div className="row">
      <div className="w-100 p-3">
        <div className="card-header p-3 mb-2 bg-dark text-white">
          <h4 className="card-header font-weight-bold text-center ">
            Editar de Livros
          </h4>
          <div className="card-body">
            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="inputNome">Nome do Livro</label>
                  <input value={livroDTO.nome} type="text" name="nome" className="form-control" onChange={onChange} id="inputNomeLivro" placeholder="Nome do Livro"/>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputCPF">ISBN</label>
                  <input value={livroDTO.isbn} type="text" name="isbn" className="form-control" onChange={onChange} id="inputISBN" placeholder="ISBN"/>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputCurso">Área do Livro</label>
                  <input value={livroDTO.area} type="text" name ='area' className="form-control" onChange={onChange} id="inputAreaDoLivro" placeholder="Área do Livro"/>
                </div>
               
                  <div className="form-group col-md-12">
                  </div>
                  <div className="mx-auto">
                    <div className="form-group col-md-12"></div>

                  <button type="button" onClick={onSubmit} className="btn btn-primary">Salvar</button>
                  <button type="button" onClick={resetForm} className="btn btn-primary">Limpar</button>
          
                  

                  </div></div></form></div></div></div>
                  </div></div>
     
    
        </>
    )
}