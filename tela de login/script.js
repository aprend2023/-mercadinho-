
function validarFormulario() {
 var usuario = document.getElementById("email").value;
 var senha = document.getElementById("password").value;
  
  if (usuario == "" || senha == "") {
    alert("Por favor, preencha todos os campos.");
    return false;
   }
  
   if (!senha.match(/(?=.*\d)(?=.*[A-Z]).+/)) {
     alert("A senha deve conter pelo menos uma letra maiúscula e um número.");
     return false;
   }
  
   return true;

}   