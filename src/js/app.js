const btnCollapsible = document.querySelector( '.btn-collapsible');

const textContainer = document.querySelector( '.text-container');

btnCollapsible.addEventListener('click', () => {
  textContainer.classList.toggle('collapsed')
  textContainer.classList.toggle('show')
})
