const nom = document.getElementById('nom');
const cn = document.getElementById('cn');
const email = document.getElementById('email');
const ce = document.getElementById('ce');
const sujet_m = document.getElementById('sujet_m');
const cs = document.getElementById('cs');
const message = document.getElementById('message');
const cm = document.getElementById('cm');
const date = document.getElementById('date');

// Function to check name format

function verifyName() {
    const regex = /^[A-Za-z0-9]{3,}$/;

    if (nom.value.trim() === '') {
        cn.innerHTML = '*obligatoire';
        return false;
    } else if (!regex.test(nom.value.trim())) {
        cn.innerHTML = 'Nom must be greater than 3 characters';
        return false;
    }
    cn.innerHTML = '';
    return true;
}

// Function to check email format
function verifyEmail() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === '') {
        ce.innerHTML = '*obligatoire';
        return false;
    } else if (!regexEmail.test(email.value.trim())) {
        ce.innerHTML = 'Format email invalid';
        return false;
    }
    ce.innerHTML = '';
    return true;
}

// Function to check subject format
function verifySubject() {
    const regexSubject = /^[A-Za-z0-9\s]{5,}$/;

    if (sujet_m.value.trim() === '') {
        cs.innerHTML = '*obligatoire';
        return false;
    } else if (!regexSubject.test(sujet_m.value.trim())) {
        cs.innerHTML = 'Subject must be greater than 5 characters';
        return false;
    }
    cs.innerHTML = '';
    return true;
}

// Function to check message format
function verifyMessage() {
    const regexMessage = /^[A-Za-z0-9\s]{10,}$/;

    if (message.value.trim() === '') {
        cm.innerHTML = '*obligatoire';
        return false;
    } else if (!regexMessage.test(message.value.trim())) {
        cm.innerHTML = 'Message must be greater than 10 characters';
        return false;
    }
    cm.innerHTML = '';
    return true;
}

// Function for submit button
function sendForm() {
    const submitButton = document.querySelector('.btn');

    submitButton.onclick = function (event) {
        event.preventDefault();
        const isNameValid = verifyName();
        const isEmailValid = verifyEmail();
        const isSubjectValid = verifySubject();
        const isMessageValid = verifyMessage();

        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
           // alert('Form submitted successfully');
         
        } 
    };
}

//date 
date.innerHTML=new Date().getFullYear();
//const now = new Date(); date.innerHTML = `${now.toDateString()} ${now.toLocaleTimeString()}`;

// Attach input event listeners
nom.addEventListener('input', verifyName);
email.addEventListener('input', verifyEmail);
sujet_m.addEventListener('input', verifySubject);
message.addEventListener('input', verifyMessage);

sendForm();
