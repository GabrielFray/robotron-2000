const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

controle.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    manipulaDados(event.target.dataset.controle, event.target.parentNode);
    const operacao = event.target.dataset.controle === "+" ? "+" : "-";
    atualizaEstatisticas(event.target.dataset.peca, operacao);
  });
});

const manipulaDados = (operacao, controle) => {
  const peca = controle.querySelector("[data-contador]");
  const valorAtual = parseInt(peca.value);

  if (operacao === "+") {
    peca.value = (valorAtual + 1).toString().padStart(2, "0");
  } else if (valorAtual > 0 && operacao === "-") {
    peca.value = (valorAtual - 1).toString().padStart(2, "0");
  }
};

const atualizaEstatisticas = (peca, operacao) => {
  const valoresPeca = pecas[peca];

  estatisticas.forEach((elem) => {
    const valorAtual = parseInt(elem.textContent);
    const valorPeca = valoresPeca[elem.dataset.estatistica];

    if (operacao === "+") {
      elem.textContent = (valorAtual + valorPeca).toString();
    } else if (valorAtual > 0 && operacao === "-") {
      elem.textContent = (valorAtual - valorPeca).toString();
    }
  });
};
