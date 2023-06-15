import {React, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Home = () => {
    
  let navigate = useNavigate()

  function listar(){
    navigate("/ListarLivros")
}
    const [user, setUser] = useState({})

    useEffect(() => {
        const usuarioLogado = JSON.parse(localStorage.getItem('user'));
        if(usuarioLogado){
            setUser(usuarioLogado)
        }
    },[])
    
    return(
        <>    
        <nav className="navbar navbar-dark bg-dark">
                 <h2>Biblioteca Web</h2>
                 <a onClick={listar} className="p-3 mb-2 bg-dark text-white" role="button" aria-pressed="true">Lista de livros</a>
            </nav>
       
        
        <div className="container my-5">
  <div className="border">
    <div className="border">
      <div className="border">
      <div className="border">
      <div className="border">
      <div className="border">
      <div className="border">
        <div className="border jumbotron">
          <h1 className="display-4">ㅤㅤㅤㅤㅤㅤㅤㅤBiblioteca-Web</h1>
          <p className="lead"> ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSeja bem vindo, {user.nome}.</p>
          <hr className="my-4" />
          <p>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤProjeto feito por Jhonny e João Pedro.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</div>
    </>
        
        )

}

export default Home