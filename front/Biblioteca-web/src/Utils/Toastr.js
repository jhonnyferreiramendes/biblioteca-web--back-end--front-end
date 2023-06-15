import toastr from "toastr";


toastr.options = {
  "closeButton": true,
  "debug": true,
  "newestOnTop": true,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "showDuration": "5000",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}


function buildMenssage(titulo, mensagem, classe){
    toastr[classe](mensagem , titulo)
}

/*function buildMenssageSucesso(titulo, mensagem, classe){
    toastr["success"]("Login efetuado com Sucesso")
} */


export  function mesageErro(mensagem){
    buildMenssage("Erro", mensagem, "error")
}

export  function mesageSucces(mensagem){
    buildMenssage("Sucesso",mensagem, "success")
}