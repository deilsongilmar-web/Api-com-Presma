import { prisma } from "../services/index.js"

async function buscar() {
    try {
        return await prisma.motoristas.findMany({
            orderBy: { id: 'asc' }
        });
    } catch (error) {
        return {
            erro: error.message
        }
    }
}

async function criar(dados) {
    try {
        const response =  await prisma.motoristas.create({
            data: dados
        });

        if(response){
            return {
                mensagem: "Motorista criado com sucesso"
            }
        }
        return {
            erro: "Erro inesperado"
        }
    } catch (error) {
        return {
            erro: error.message
        }
    }
}

async function editar(dados, id) {
    try {
        const response =  await prisma.motoristas.update({
            data: dados,
            where: {
                id: Number(id)
            }
        });

        if(response){
            return {
                mensagem: "Motorista atualizado com sucesso"
            }
        }
        return {
            erro: "Erro inesperado"
        }
    } catch (error) {
        return {
            erro: error.message
        }
    }
}

async function deletar(id) {
    try {
        const response = await prisma.motoristas.delete({
            where: {
                id: Number(id)
            }
        });

        if(response){
            return {
                mensagem: "Motorista deletado com sucesso"
            }
        }
        return {
            erro: "Erro inesperado"
        }
    } catch (error) {
        return {
            erro: error.message
        }
    }
}

export {
    buscar,
    criar,
    editar,
    deletar
}