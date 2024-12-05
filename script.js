// Carregar projetos dinamicamente
const projetos = [
  {
    titulo: "Projeto 1",
    descricao: "Descrição do projeto 1",
    link: "#"
  },
  {
    titulo: "Projeto 2",
    descricao: "Descrição do projeto 2",
    link: "#"
  },
  {
    titulo: "Projeto 3",
    descricao: "Descrição do projeto 3",
    link: "#"
  }
];

const projetosGrid = document.getElementById("projetos-grid");

projetos.forEach(projeto => {
  const projetoDiv = document.createElement("div");
  projetoDiv.classList.add("projeto");

  projetoDiv.innerHTML = `
    <h3>${projeto.titulo}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}">Ver Mais</a>
  `;

  projetosGrid.appendChild(projetoDiv);
});

// Formulário de contato com mensagem de confirmação
document.getElementById("form-contato").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Sua mensagem foi enviada com sucesso!");
  this.reset();
});

// Rolagem suave ao clicar nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

