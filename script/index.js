const Envoyer = document.getElementsByClassName('Envoyer');








function send() {
    window.location.href = "/project/contact.html";
}

Array.from(Envoyer).forEach((el)=>{
    el.addEventListener('click',send);
})
