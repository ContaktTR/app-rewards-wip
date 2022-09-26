const userBtn = document.querySelector('.utilisateur');
const entrepriseBtn = document.querySelector('.entreprise');
userBtn.addEventListener('click', () => {
  toggleForms();
});

entrepriseBtn.addEventListener('click', () => {
  toggleForms();
});

const userSubmitBtn = document.querySelector('.user');
const entrepriseSubmitBtn = document.querySelector('.company');

let formMod = false;

function toggleForms() {
  formMod = !formMod;
  const userForm = document.querySelector('.form-utilisateur');
  const entrepriseForm = document.querySelector('.form-entreprise');
  if (formMod) {
    userForm.style.display = 'none';
    userSubmitBtn.style.display = 'none';
    userBtn.style.borderBottom = '5px solid #24d984';
    entrepriseForm.style.display = 'flex';
    entrepriseSubmitBtn.style.display = 'block';
    entrepriseBtn.style.borderBottom = '0';
  } else {
    entrepriseForm.style.display = 'none';
    entrepriseSubmitBtn.style.display = 'none';
    userForm.style.display = 'flex';
    userSubmitBtn.style.display = 'block';
    userBtn.style.borderBottom = '0';
    entrepriseBtn.style.borderBottom = '5px solid #24d984';
  }
}

const userEye = document.querySelector('.eye-user');
const entrepriseEye = document.querySelector('.eye-entreprise');

userEye.addEventListener('click', () => {
  showPasswordForm(userEye);
});
entrepriseEye.addEventListener('click', () => {
  showPasswordForm(entrepriseEye);
});

let openEye = false;

function showPasswordForm(element) {
  openEye = !openEye;
  if (openEye) {
    element.src = '../assets/icon-eye-open.svg';
    element.parentElement.querySelector('input').type = 'text';
  } else {
    element.src = '../assets/icon-eye-close.svg';
    element.parentElement.querySelector('input').type = 'password';
  }
}
