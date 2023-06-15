import React, { useState, useEffect } from "react";
import { getAll, removerLivroPorIsbn } from "../services/LivroService";
import {useNavigate} from "react-router-dom";
import { mesageErro, mesageSucces } from "../Utils/Toastr";

export default function ListarLivros(){
    const [livros, setLivros] = useState([])

    let navigate = useNavigate()

    useEffect(()=>{
        getAll().then(response => {
            setLivros(response.data)
        })
    },[])

    function irCadastro(){
        navigate("/CadastrarLivros")
    }

    function editLiv(id){
        navigate("/EditLivro/"+id)
    }

function removeLi(livroDTO){
    removerLivroPorIsbn(livroDTO.isbn).then(response => {
        //message sucess
        mesageSucces("Excluido com Sucesso!")
        getAll().then(response => {
            setLivros(response.data)
        })
    }).catch(error =>{
        mesageErro("Erro ao excluir.")
        //message error
    })
    
}

    
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
                 <h2>Biblioteca Web</h2>
            </nav>
        
        <div className = "container my-5 mx-auto" >
  <a onClick={irCadastro} className="p-3 mb-2 bg-dark text-white" role="button" aria-pressed="true">Cadastrar livro</a>

</div>

<div className = "container my-5">
  <table className="table p-3 mb-2 bg-dark text-white">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nome</th>
        <th scope="col">Area</th>
        <th scope="col">ISBN</th>
        <th scope="col">Ação</th>
        <th scope="col">Ação</th>
        
      
      </tr>
    </thead>
    <tbody>
        {livros.map(liv =>(
            <tr>
          <td>{liv.id}</td>
          <td>{liv.nome}</td>
          <td>{liv.area}</td>
          <td>{liv.isbn}</td>
          <td><a type="button" onClick={(e)=>editLiv(liv.id)} className="btn btn-secondary"  role="button">Editar</a></td>
          <td><a type="button" onClick={(e)=>removeLi(liv)} className="btn btn-danger" role="button">Excluir</a></td>
        </tr>  
        ))}
    </tbody>
  </table>
</div>
        
        </>
    )
}