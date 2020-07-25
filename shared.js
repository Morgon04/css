const backdrop = document.querySelector('.backdrop');
const planButtons = document.querySelectorAll('.plan button');
const modals = document.querySelector('.modal');
const modalClose = document.querySelector('.modal .modal__action--negative');
const togglebtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const block = 'block';
const none = 'none';
planButtons.forEach((pB) => {
    pB.addEventListener('click', () => {
        modals.classList.add('open');
        backdrop.classList.add('open');
    });
});

togglebtn.addEventListener('click', () => {
    if (mobileNav && backdrop) {
        mobileNav.classList.add('open');
        backdrop.classList.add('open');
    }

});
if (modals) {
    modalClose.addEventListener('click', closebackDrop);
}
backdrop.addEventListener('click', closebackDrop);

function closebackDrop() {
    mobileNav.classList.remove('open');
    if (modals) {
        modals.classList.remove('open');
    }
    backdrop.classList.remove('open');
}