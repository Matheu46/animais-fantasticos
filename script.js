// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);

const copy = document.querySelector('.copy');

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');

// Selecione o DD referente ao primeiro DT
const ddProximo = primeiroDt.nextElementSibling;
console.log(ddProximo);


// Substitua o conteúdo html de .faq pelo de .animais
faq.innerHTML = animais.innerHTML;

