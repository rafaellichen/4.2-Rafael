console.log('hello world');
document.addEventListener('DOMContentLoaded', () => {
  let rP = document.querySelector('#responseP');
  let cB = document.querySelector('#codyB');
  let rB = document.querySelector('#rockB');
  let pB = document.querySelector('#paperB');
  let sB = document.querySelector('#scissorB');
  cB.addEventListener('click', (event) => {
    fetch('/cody')
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      rP.innerText = obj.msg;
    });
  });
  rB.addEventListener('click', (event) => {
    fetch('/play/rock')
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      rP.innerText = 'you chose ' + obj.user;
      rP.innerText += ' -- comp chose ' + obj.comp;
      rP.innerText += ' -- result is ' + obj.result;
    });
  });
  pB.addEventListener('click', (event) => {
    fetch('/play/paper')
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      rP.innerText = 'you chose ' + obj.user;
      rP.innerText += ' -- comp chose ' + obj.comp;
      rP.innerText += ' -- result is ' + obj.result;
    });
  });
  sB.addEventListener('click', (event) => {
    fetch('/play/scissors')
    .then((response) => {
      return response.json();
    })
    .then((obj) => {
      rP.innerText = 'you chose ' + obj.user;
      rP.innerText += ' -- comp chose ' + obj.comp;
      rP.innerText += ' -- result is ' + obj.result;
    });
  });
});
