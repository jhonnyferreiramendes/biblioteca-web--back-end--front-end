import axios from "axios";

const baseUrl = 'http://localhost:8080/'

export const getAll = () =>{
    return axios.get(baseUrl+"bibliotecario/buscarTodosLivros")

}

export const saveLivro = (livroDTO)=>{
    return axios.post(baseUrl+"bibliotecario/criar/livro", livroDTO)
    
}

export const removerLivroPorIsbn = (isbn)=>{
    return axios.delete(baseUrl+"bibliotecario/removerLivro/"+isbn)
    
}

export const findById = (id) =>{
    return axios.get(baseUrl+"/bibliotecario/buscarId/livro/"+id)
}

export const putLivo = (livroDTO) =>{
    return axios.put(baseUrl+"/bibliotecario/editar/livro", livroDTO)
}

