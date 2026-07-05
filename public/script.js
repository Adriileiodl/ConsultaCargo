async function consultar() {

    const nick = document.getElementById("nick").value;

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "Consultando...";

    const resposta = await fetch("/consultar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nick: nick
        })
    });

    const dados = await resposta.json();

    if (dados.erro) {
        resultado.innerHTML = dados.erro;
        return;
    }

    resultado.innerHTML = `
        <h3>${dados.nick}</h3>
        <p><b>Cargo:</b> ${dados.cargo}</p>
        <p><b>Rank:</b> ${dados.rank ?? "-"}</p>
    `;
}
function mostrarHierarquia() {

    const div = document.getElementById("hierarquia");

    if (div.style.display === "block") {
        div.style.display = "none";
        return;
    }

    div.style.display = "block";

    div.innerHTML = `
        <h2>Hierarquia do Exército</h2>

        <p>👑 Marechal</p>
        <p>⭐ General de Exército</p>
        <p>⭐ General de Divisão</p>
        <p>⭐ General de Brigada</p>
        <p>🎖 Coronel</p>
        <p>🎖 Tenente-Coronel</p>
        <p>🎖 Major</p>
        <p>🪖 Capitão</p>
        <p>🪖 Primeiro-Tenente</p>
        <p>🪖 Segundo-Tenente</p>
        <p>🟢 Aspirante</p>
        <p>🟢 Subtenente</p>
        <p>🟢 Primeiro-Sargento</p>
        <p>🟢 Segundo-Sargento</p>
        <p>🟢 Terceiro-Sargento</p>
        <p>🔰 Cabo</p>
        <p>🔰 Soldado</p>
        <p>🥾 Recruta</p>
    `;
}