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