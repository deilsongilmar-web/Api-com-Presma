import express from "express";
import { prisma } from "./src/services/index.js";
import { executeSQL } from "./src/database/index.js";

import motoristaRoutes from "./src/routes/motoristaRoutes.js"

const app = express();

//Middlewares
app.use(express.json()); //converte o corpo da requisição de JSON => Objeto Javascript

// Rotas
app.get("/", (req, res) => {
    res.send("Seja bem vindo")
});

app.use("/motoristas", motoristaRoutes);

// app.get("/motoristas", async (req, res) => {
//     const { rows: dados } = await executeSQL("SELECT * FROM motoristas ORDER BY id ASC");
//     res.json(dados);
// });

// app.post("/motoristas", async (req, res) => {
//     const { nome, email, telefone, endereco, numero, complemento, bairro, cidade, estado, cep, cnh, marca, modelo, cor, chassi, placa, ano } = req.body;

//     // Validação simples dos campos obrigatórios
//     if (!nome || typeof nome !== 'string') {
//         return res.status(400).json({ erro: "Nome é obrigatório e deve ser uma string." });
//     }
//     if (!email || typeof email !== 'string' || !email.includes('@')) {
//         return res.status(400).json({ erro: "Email é obrigatório, deve ser uma string e conter '@'." });
//     }
//     if (!telefone || typeof telefone !== 'string') {
//         return res.status(400).json({ erro: "Telefone é obrigatório e deve ser uma string." });
//     }
//     if (!endereco || typeof endereco !== 'string') {
//         return res.status(400).json({ erro: "Endereço é obrigatório e deve ser uma string." });
//     }
//     if (!numero || (typeof numero !== 'string' && typeof numero !== 'number')) {
//         return res.status(400).json({ erro: "Número é obrigatório e deve ser string ou número." });
//     }
//     if (!bairro || typeof bairro !== 'string') {
//         return res.status(400).json({ erro: "Bairro é obrigatório e deve ser uma string." });
//     }
//     if (!cidade || typeof cidade !== 'string') {
//         return res.status(400).json({ erro: "Cidade é obrigatório e deve ser uma string." });
//     }
//     if (!estado || typeof estado !== 'string') {
//         return res.status(400).json({ erro: "Estado é obrigatório e deve ser uma string." });
//     }
//     if (!cep || typeof cep !== 'string') {
//         return res.status(400).json({ erro: "CEP é obrigatório e deve ser uma string." });
//     }
//     if (!cnh || typeof cnh !== 'string') {
//         return res.status(400).json({ erro: "CNH é obrigatório e deve ser uma string." });
//     }
//     if (!marca || typeof marca !== 'string') {
//         return res.status(400).json({ erro: "Marca é obrigatório e deve ser uma string." });
//     }
//     if (!modelo || typeof modelo !== 'string') {
//         return res.status(400).json({ erro: "Modelo é obrigatório e deve ser uma string." });
//     }
//     if (!cor || typeof cor !== 'string') {
//         return res.status(400).json({ erro: "Cor é obrigatório e deve ser uma string." });
//     }
//     if (!chassi || typeof chassi !== 'string') {
//         return res.status(400).json({ erro: "Chassi é obrigatório e deve ser uma string." });
//     }
//     if (!placa || typeof placa !== 'string') {
//         return res.status(400).json({ erro: "Placa é obrigatório e deve ser uma string." });
//     }
//     if (!ano || (typeof ano !== 'string' && typeof ano !== 'number')) {
//         return res.status(400).json({ erro: "Ano é obrigatório e deve ser string ou número." });
//     }

//     try {
//         const { rowCount } = await executeSQL(`INSERT INTO motoristas (nome, email, telefone, endereco, numero, complemento, bairro, cidade, estado, cep, cnh, marca, modelo, cor, chassi, placa, ano) VALUES ('${nome}','${email}','${telefone}','${endereco}','${numero}','${complemento}','${bairro}','${cidade}','${estado}','${cep}','${cnh}','${marca}','${modelo}','${cor}','${chassi}','${placa}',${ano})`);

//         if (rowCount > 0) {
//             res.status(201).json({
//                 mensagem: "Motorista cadastrado com sucesso"
//             })
//         } else {
//             res.status(400).json({
//                 erro: "Erro inesperado.."
//             })
//         }
//     } catch (error) {
//         res.status(400).json({
//             erro: error.message
//         })
//     }


//     // res.json(await prisma.motoristas.create({
//     //     data: req.body
//     // }))
// });

// app.put("/motoristas/:id", async (req, res) => {
//     const id = Number(req.params.id);
//     const { nome, email, telefone, endereco, numero, complemento, bairro, cidade, estado, cep, cnh, marca, modelo, cor, chassi, placa, ano } = req.body;

//     try {
//         if (!id || typeof id !== 'number') {
//             return res.status(400).json({ erro: "Id é obrigatório e deve ser um numero." });
//         }
//         if (!nome || typeof nome !== 'string') {
//             return res.status(400).json({ erro: "Nome é obrigatório e deve ser uma string." });
//         }
//         if (!email || typeof email !== 'string' || !email.includes('@')) {
//             return res.status(400).json({ erro: "Email é obrigatório, deve ser uma string e conter '@'." });
//         }
//         if (!telefone || typeof telefone !== 'string') {
//             return res.status(400).json({ erro: "Telefone é obrigatório e deve ser uma string." });
//         }
//         if (!endereco || typeof endereco !== 'string') {
//             return res.status(400).json({ erro: "Endereço é obrigatório e deve ser uma string." });
//         }
//         if (!numero || (typeof numero !== 'string' && typeof numero !== 'number')) {
//             return res.status(400).json({ erro: "Número é obrigatório e deve ser string ou número." });
//         }
//         if (!bairro || typeof bairro !== 'string') {
//             return res.status(400).json({ erro: "Bairro é obrigatório e deve ser uma string." });
//         }
//         if (!cidade || typeof cidade !== 'string') {
//             return res.status(400).json({ erro: "Cidade é obrigatório e deve ser uma string." });
//         }
//         if (!estado || typeof estado !== 'string') {
//             return res.status(400).json({ erro: "Estado é obrigatório e deve ser uma string." });
//         }
//         if (!cep || typeof cep !== 'string') {
//             return res.status(400).json({ erro: "CEP é obrigatório e deve ser uma string." });
//         }
//         if (!cnh || typeof cnh !== 'string') {
//             return res.status(400).json({ erro: "CNH é obrigatório e deve ser uma string." });
//         }
//         if (!marca || typeof marca !== 'string') {
//             return res.status(400).json({ erro: "Marca é obrigatório e deve ser uma string." });
//         }
//         if (!modelo || typeof modelo !== 'string') {
//             return res.status(400).json({ erro: "Modelo é obrigatório e deve ser uma string." });
//         }
//         if (!cor || typeof cor !== 'string') {
//             return res.status(400).json({ erro: "Cor é obrigatório e deve ser uma string." });
//         }
//         if (!chassi || typeof chassi !== 'string') {
//             return res.status(400).json({ erro: "Chassi é obrigatório e deve ser uma string." });
//         }
//         if (!placa || typeof placa !== 'string') {
//             return res.status(400).json({ erro: "Placa é obrigatório e deve ser uma string." });
//         }
//         if (!ano || (typeof ano !== 'string' && typeof ano !== 'number')) {
//             return res.status(400).json({ erro: "Ano é obrigatório e deve ser string ou número." });
//         }

//         const { rowCount } = await executeSQL(`UPDATE motoristas SET 
//             nome='${nome}',
//             email='${email}', 
//             telefone='${telefone}',
//             endereco='${endereco}', 
//             numero='${numero}', 
//             complemento='${complemento}', 
//             bairro='${bairro}', 
//             cidade='${cidade}', 
//             estado='${estado}', 
//             cep='${cep}', 
//             cnh='${cnh}', 
//             marca='${marca}', 
//             modelo='${modelo}', 
//             cor='${cor}', 
//             chassi='${chassi}', 
//             placa='${placa}', 
//             ano=${ano} WHERE id = ${id}`);

//         if (rowCount > 0) {
//             res.status(201).json({
//                 mensagem: "Motorista atualizado com sucesso"
//             })
//         } else {
//             res.status(400).json({
//                 erro: "Erro inesperado.."
//             })
//         }
//     } catch (error) {
//         res.status(400).json({
//             erro: error.message
//         })
//     }

// });

// app.delete("/motoristas/:id", async (req, res) => {
//     const id = Number(req.params.id);
//     try {
//         if (!id || typeof id !== 'number') {
//             return res.status(400).json({ erro: "Id é obrigatório e deve ser um numero." });
//         }
//         const {rowCount} = await executeSQL(`DELETE FROM motoristas WHERE id = ${id}`);
//         if (rowCount > 0) {
//             res.status(201).json({
//                 mensagem: "Motorista deletado com sucesso"
//             })
//         } else {
//             res.status(400).json({
//                 erro: "Erro inesperado.."
//             })
//         }
//     } catch (error) {
//         res.status(400).json({
//             erro: error.message
//         })
//     }
// });


app.use((req, res) => {
    res.status(404).json({ erro: "Rota não encontrada" })
})

//Ouvinte
app.listen(8000, () => {
    console.log("Servidor on: http://localhost:8000");
});

