let dados = [];

// Carrega CSV e exibe data de atualização
fetch("equipe.csv")
  .then(response => {
    const dataArquivo = new Date(response.headers.get("Last-Modified"));
    if (!isNaN(dataArquivo)) {
      const opcoes = { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" };
      document.getElementById("ultimaAtualizacao").textContent =
        "Última atualização: " + dataArquivo.toLocaleString("pt-BR", opcoes);
    }
    return response.text();
  })
  .then(text => {
    const linhas = text.split("\n").slice(1);
    dados = linhas.map(linha => {
      const [setor, nome, celular, email] = linha.split(",");
      return { setor, nome, celular, email };
    });

    mostrarTabela(dados);
  });

// Mostra os dados na tabela
function mostrarTabela(dados) {
  const tbody = document.querySelector("#results tbody");
  tbody.innerHTML = "";

  if (dados.length === 0) {
    tbody.innerHTML = "<tr><td colspan='4'>Nenhum dado encontrado.</td></tr>";
    return;
  }

  dados.forEach(d => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${d.setor || ""}</td>
      <td>${d.nome || ""}</td>
      <td>${d.celular || ""}</td>
      <td>${d.email || ""}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("contadorResultados").textContent =
    `${dados.length} registro${dados.length > 1 ? "s" : ""} encontrado${dados.length > 1 ? "s" : ""}`;
}
