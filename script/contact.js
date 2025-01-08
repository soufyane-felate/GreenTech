const nom = document.getElementById("nom");
const cn = document.getElementById("cn");
//function pour verifier si le nom est vide ou non
function verefieName() {
nom.addEventListener('input', function () {
  if (nom.value !== '' && nom.value !== null) {
    cn.textContent = '';
  } else {
    cn.textContent = 'obligatoir';
  }





});
}
//function pour verifier si le email est valide ou non
function verifieEmail()
{
  
}


verefieName();


