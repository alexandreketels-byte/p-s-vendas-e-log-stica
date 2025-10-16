<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PÓS VENDAS E LOGÍSTICA</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>PROCEDIMENTOS</h1>

    <!-- 🔹 MENU PRINCIPAL -->
    <nav class="menu">
      <ul>
        <li class="dropdown">
          <a href="#" class="dropbtn">PÓS VENDAS</a>
          <div class="dropdown-content">
            <a href="fotos para devolução.pdf" target="_blank">Registro de fotos devolução</a>
            <a href="USANDO O LINK.pdf" target="_blank">USANDO A PLATAFORMA</a>
            <a href="#">Outro procedimento</a>
          </div>
        </li>

        <li class="dropdown">
          <a href="#" class="dropbtn">LOGÍSTICA</a>
          <div class="dropdown-content">
            <a href="https://drive.google.com/file/d/1hgmcQGdXz8ZKb_R3TKv4i3m26Y_VECvR/view?usp=drive_link" target="_blank">▶️ Registro de fotos TUTORIAL</a>
            <a href="USANDO O LINK.pdf" target="_blank">USANDO A PLATAFORMA</a>
            <a href="#">Outro procedimento</a>
          </div>
        </li>
      </ul>
    </nav>

    <!-- 🔹 Tabela fixa com dados do CSV -->
    <div class="table-wrapper">
      <table id="results">
        <thead>
          <tr>
            <th>SETOR</th>
            <th>NOME</th>
            <th>CELULAR</th>
            <th>E-MAIL</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>

    <p id="contadorResultados"></p>
    <p id="ultimaAtualizacao">Última atualização: --</p>
  </div>

  <script src="script.js"></script>
</body>
</html>
