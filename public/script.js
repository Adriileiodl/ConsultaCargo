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
        <p>👑 SubComandante</p>
        <p>👑 Comandante</p>
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
        <p>🟢 Cadete</p>
        <p>🟢 Subtenente</p>
        <p>🟢 Primeiro-Sargento</p>
        <p>🟢 Segundo-Sargento</p>
        <p>🟢 Terceiro-Sargento</p>
        <p>🔰 Cabo</p>
        <p>🔰 Soldado</p>
        <p>🥾 Recruta</p>
    `;
}
function mostrarRegras() {

    const div = document.getElementById("regras");

    if (div.style.display === "block") {
        div.style.display = "none";
        return;
    }

    div.style.display = "block";

    div.innerHTML = `
        <h2>📋 REGRAS DO EXÉRCITO</h2>

        <h3>🔴 Conduta Geral</h3>

        <p>✔ Respeito é obrigatório. Trate todos os membros com educação, independente do posto. Xingamentos, humilhações e provocações resultam em punição imediata.</p>

        <p>✔ Proibido flood e spam. Não envie mensagens repetidas, emojis em excesso ou conteúdo irrelevante nos chats do grupo.</p>

        <p>✔ Nome de usuário adequado. Seu nick no jogo deve ser compatível com o ambiente militar. Nomes ofensivos ou inadequados resultam em expulsão.</p>

        <p>✔ Sem drama. Conflitos pessoais devem ser resolvidos no privado. Brigas públicas no servidor ou Discord são passíveis de punição.</p>

        <h3>🟡 Hierarquia e Disciplina</h3>

        <p>✔ Respeite a hierarquia. Ordens de superiores devem ser seguidas dentro do jogo. Questionar ordens de forma desrespeitosa é considerado insubordinação.</p>

        <p>✔ Proibido se auto-promover. Nenhum membro pode alterar seu próprio posto. Promoções são concedidas apenas pela liderança.</p>

        <p>✔ Identificação obrigatória. Durante operações e treinamentos, use a tag/uniforme do grupo conforme solicitado pelos oficiais.</p>

        <p>✔ Proibido impersonar superiores. Fingir ser um oficial ou membro da liderança resulta em banimento imediato.</p>

        <h3>🔵 Conduta no Jogo</h3>

        <p>✔ Proibido teamkill intencional. Matar aliados de propósito resulta em punição grave, podendo chegar ao banimento do grupo.</p>

        <p>✔ Sem exploits ou hacks. O uso de qualquer tipo de trapaça, bug proposital ou hack resulta em banimento permanente e imediato.</p>

        <p>✔ Uso correto de armas e veículos. Equipamentos do exército devem ser usados apenas para as finalidades do roleplay/simulador. Uso indevido gera advertência.</p>

        <h3>⚠️ Penalidades</h3>

        <p>O descumprimento das regras pode resultar em advertência, rebaixamento ou banimento, a critério da liderança.</p>
    `;
}