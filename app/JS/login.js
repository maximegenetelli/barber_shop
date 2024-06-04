const changeTypeInput = document.querySelector('input[type="password');
const eyeOff = document.querySelector('.feather-eye-off');
const eye = document.querySelector('.feather-eye');


eye.addEventListener('click', () => {
    eye.style.display = 'none';
    eyeOff.style.display = 'block';
    changeTypeInput.type = 'text';
})

eyeOff.addEventListener('click', () => {
    eyeOff.style.display = 'none';
    eye.style.display = 'block';
    changeTypeInput.type = 'password';
})

// Validation formulaire
const formulaire = document.querySelector('#form');
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    const errors = document.querySelectorAll('.error');

    for(let i = 0; i < errors.length; i++) {
        errors[i].style.display = 'none';
    }

    // Vérification Email
    let emailOk = true;
    const email = document.querySelector('#email').value;
    const regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!regexEmail.test(email)) {
        emailOk = false;
        document.querySelector('#emailError').innerText = "L'email saisie est incorrect";
        document.querySelector('#emailError').style.display = 'block';
    }
    if (email.length === 0) {
        emailOk = false;
        document.querySelector('#emailError').innerText = "Veuillez saisir votre email";
        document.querySelector('#emailError').style.display = 'block';
    }

    // Vérification Mot de passe
    let passwordOk = true;
    const password = document.querySelector('#mdp').value;
    const regexMdp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (!regexMdp.test(password)) {
        passwordOk = false;
        document.querySelector('#mdpError').innerText = "Votre mot de passe est incorrect";
        document.querySelector('#mdpError').style.display = 'block';
    } 
    if (password.length === 0) {
        passwordOk = false;
        document.querySelector('#mdpError').innerText = "Veuillez saisir votre mot de passe";
        document.querySelector('#mdpError').style.display = 'block';
        document.querySelector('.notConnected').style.display = 'none';
    }
})
