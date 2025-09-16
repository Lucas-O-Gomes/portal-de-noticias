
  let indice = 0;
  const slides = document.getElementById("slides");
  const total = slides.querySelectorAll("img").length;

  function mostrarSlide() {
    slides.style.transform = `translateX(${-indice * 600}px)`;
  }

  function mudarSlide(direcao) {
    indice = (indice + direcao + total) % total;
    mostrarSlide();
  }

  // Troca automática a cada 4 segundos
  setInterval(() => mudarSlide(1), 4000);

// ler mais em sportes 

function toggleTexto(botao) {
  const maisTexto = botao.previousElementSibling;
  
  if (maisTexto.style.display === "none") {
    maisTexto.style.display = "block";
    botao.textContent = "Ler menos";
  } else {
    maisTexto.style.display = "none";
    botao.textContent = "Ler mais";
  }
}

  const btn = document.getElementById("toggleTheme");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      btn.textContent = "☀️ Modo Claro";
    } else {
      btn.textContent = "🌙 Modo Escuro";
    }
  });

