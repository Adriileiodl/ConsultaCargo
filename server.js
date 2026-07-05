const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.use(express.json());

const GRUPO = 527902812;

app.post("/consultar", async (req, res) => {

    const nick = req.body.nick;

    try{

        // Descobre o UserId
        const usuario = await fetch("https://users.roblox.com/v1/usernames/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                usernames:[nick]
            })
        });

        const dadosUsuario = await usuario.json();

        if(dadosUsuario.data.length == 0){
            return res.json({
                erro:"Jogador não encontrado."
            });
        }

        const id = dadosUsuario.data[0].id;

        // Consulta grupos
        const grupos = await fetch(`https://groups.roblox.com/v2/users/${id}/groups/roles`);

        const dadosGrupo = await grupos.json();

        const grupo = dadosGrupo.data.find(g=>g.group.id==GRUPO);

        if(!grupo){

            return res.json({
                nick:nick,
                cargo:"Não está na comunidade."
            });

        }

        res.json({
            nick:nick,
            cargo:grupo.role.name,
            rank:grupo.role.rank
        });

    }catch{

        res.json({
            erro:"Erro ao consultar Roblox."
        });

    }

});

app.listen(3000,()=>{
    console.log("Servidor iniciado!");
});