// Evento do botão
const textao = document.getElementById('textao');
const botao = document.getElementById('botao');
const audio = document.getElementById('audio');
const animacao7 = document.getElementById('animacao-7');
const fotos = document.getElementById('fotos');
const container = document.getElementById('container');

let gerarNumeros7 = false;

botao.addEventListener('click', () => {
  botao.style.display = 'none';
  animacao7.style.display = 'flex'; // Exibe o número "7"

  setTimeout(() => {
    animacao7.style.display = 'none'; // Oculta o número "7" após a animação
    container.style.display = 'block'; // Exibe o texto
    textao.style.display = 'block'; // Garante que o texto seja exibido
    fotos.style.display = 'block'; // Exibe as fotos
    audio.play();
    gerarNumeros7 = true; // Ativa a geração dos números "7"
  }, 8000); // Tempo total da animação (4s zoomIn + 4s fadeOut)
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

function criarNumero7() {
  if (!gerarNumeros7) return;

  const numero7 = document.createElement('div');
  numero7.classList.add('numero-7');
  numero7.textContent = '7';

  numero7.style.top = `${Math.random() * 100}%`;
  numero7.style.left = `${Math.random() * 100}%`;

  estrelasContainer.appendChild(numero7);

  // Remove o número "7" após a animação
  setTimeout(() => {
    numero7.remove();
  }, 5000);
}

// Cria números "7" continuamente após o clique no botão
setInterval(() => {
  criarNumero7();
}, 300);