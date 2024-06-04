// Retourne en arrière quand on est sur la page pour se créer un compte
const returnArrow = document.querySelector('#return');
returnArrow.addEventListener('click', () => {
    window.location = "login.html";
})

const formulaire = document.querySelector('#form-register');
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    const errors = document.querySelectorAll('.errorRegister');

    for(let i = 0; i < errors.length; i++) {
        errors[i].style.display = 'none';
    }

    // Vérification Email
    let emailOk = true;
    const email = document.querySelector('#email').value;
    const regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!regexEmail.test(email)) {
        emailOk = false;
        document.querySelector('#mailError').innerText = "Veuillez saisir une adresse email valide";
        document.querySelector('#mailError').style.display = 'block';
    }
    if (email.length === 0) {
        emailOk = false;
        document.querySelector('#mailError').innerText = "Veuillez saisir une addresse email";
        document.querySelector('#mailError').style.display = 'block';
    }

    // Vérification Mot de passe
    let passwordOk = true;
    const password = document.querySelector('#mdp').value;
    const regexMdp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (!regexMdp.test(password)) {
        passwordOk = false;
        document.querySelector('#passwordError').innerText = "Votre mot de passe doit contenir entre 8 & 15 caractères, un chiffre et au moins un caractère spécial";
        document.querySelector('#passwordError').style.display = 'block';
    } 
    if (password.length === 0) {
        passwordOk = false;
        document.querySelector('#passwordError').innerText = "Veuillez saisir votre mot de passe";
        document.querySelector('#passwordError').style.display = 'block';
    }

    // Vérification du prénom
    let prenomOk = true;
    const prenom = document.querySelector('#prenom').value;
    if (prenom.length < 5) {
        prenomOk = false;
        document.querySelector('#prenomError').innerText = "Votre prénom doit contenir 5 caractères minimum";
        document.querySelector('#prenomError').style.display = 'block';
    }
    if (prenom.length === 0) {
        prenomOk = false;
        document.querySelector('#prenomError').innerText = "Veuillez saisir votre prénom";
        document.querySelector('#prenomError').style.display = 'block';
    }

    // Vérification du Nom de famille
    let nomOk = true;
    const nom = document.querySelector('#nom').value;
    if (nom.length < 8) {
        nomOk = false;
        document.querySelector('#nomError').innerText = "Votre nom doit contenir 8 caractères minimum";
        document.querySelector('#nomError').style.display = 'block';
    }
    if (nom.length === 0) {
        nomOk = false;
        document.querySelector('#nomError').innerText = "Veuillez saisir votre nom";
        document.querySelector('#nomError').style.display = 'block';
    }

    // Vérification du numéro de tel
    let telOk = true;
    const numTel = document.querySelector('#num-tel').value;
    const regexTel = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/;

    if (!regexTel.test(numTel)) {
        telOk = false;
        document.querySelector('#telError').innerText = "Veuillez saisir un numéro de téléphone";
        document.querySelector('#telError').style.display = 'block';
    }
})