
// Evento do botão
const textao = document.getElementById('textao');
const botao = document.getElementById('botao');
const audio = document.getElementById('audio');

botao.addEventListener('click', () => {
  botao.style.display = 'none';
  textao.style.display = 'block';

  // Toca o áudio
  audio.play();
});
const fotos = document.getElementById('fotos');

botao.addEventListener('click', () => {
  botao.style.display = 'none';
  textao.style.display = 'block';
  fotos.style.display = 'block'; // Exibe as fotos
  audio.play();
});

// Gerador de estrelas
const estrelasContainer = document.getElementById('estrelas');

function criarEstrela() {
  const estrela = document.createElement('div');
  estrela.classList.add('estrela');

  estrela.style.top = `${Math.random() * 100}%`;
  estrela.style.left = `${Math.random() * 100}%`;
  estrela.style.width = estrela.style.height = `${Math.random() * 2 + 1}px`;

  estrela.style.animationDuration = `${Math.random() * 3 + 2}s`;

  estrelasContainer.appendChild(estrela);

  // Remove a estrela após a animação
  setTimeout(() => {
    estrela.remove();
  }, 5000);
}

// Cria estrelas continuamente
setInterval(() => {
  criarEstrela();
}, 200);