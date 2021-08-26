const hamburger = document.querySelector('.hamburger');
console.log(hamburger);
const navUL = document.getElementById('nav-ul');
hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    hamburger.classList.toggle('flip');
})
