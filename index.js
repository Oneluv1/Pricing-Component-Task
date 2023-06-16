const toggle = document.getElementById('toggle');
const fash = document.getElementById('fash');
toggle.addEventListener('change', e =>{
  fash.classList.toggle('show-cost');
})