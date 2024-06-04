const prenom = document.querySelector('#prenom');
const nom = document.querySelector('#nom');
const email = document.querySelector('#email');
const mdp = document.querySelector('#mdp');
const telephone = document.querySelector('#num-tel');


const createAccountBtn = document.querySelector('#createAccountBtn');
    createAccountBtn.addEventListener('click', () => {
        const storagePrenom = [prenom.value];
        localStorage.setItem("Prénom", storagePrenom);
    
        const storageNom = [nom.value];
        localStorage.setItem("Nom", storageNom);
    
        const storageEmail = [email.value].toString();
        localStorage.setItem("Email", storageEmail);

    
        const storageMdp = [mdp.value].toString();
        localStorage.setItem("Password", storageMdp);
    
        const storageTel = [telephone.value];
        localStorage.setItem("Téléphone", storageTel);
})


