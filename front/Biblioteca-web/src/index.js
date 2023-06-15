import React from 'react';
import ReactDOM from "react-dom/client";
import 'bootswatch/dist/flatly/bootstrap.css'
import Login from './views/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ListarLivros from './views/ListarLivros';
import CadastrarLivro from './views/CadastrarLivro';
import EditLivro from './views/EditLivro';
import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min.js'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/ListarLivros' element={<ListarLivros/>}/>
    <Route path='/CadastrarLivros' element={<CadastrarLivro/>}/>
    <Route path='/EditLivro/:id' element={<EditLivro/>}/>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


