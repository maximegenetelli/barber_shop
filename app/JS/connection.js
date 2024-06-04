const getEmail = localStorage.getItem("Email");
const getMdp = localStorage.getItem("Password");
const connectBtn = document.querySelector('#connect');

const loginEmailValue = document.querySelector('.loginMail');
const loginMdpValue = document.querySelector('.loginPassword');

connectBtn.addEventListener('click', () => {
    if ((getEmail === loginEmailValue.value) && (getMdp === loginMdpValue.value)) {
        document.querySelector('.connected').innerText = "Vous êtes connecté !";
        document.querySelector('.connected').style.display = 'block';
        
    }
    if ((getEmail !== loginEmailValue.value) || (getMdp !== loginMdpValue.value)) {
        document.querySelector('.notConnected').innerText = "Veuillez entrez vos identifiants";
        document.querySelector('.notConnected').style.display = 'block';
    }
})