// Importar o modelo Registrations para acessar os dados
const Registrations = require("../models/register");

module.exports = {

    // Função para ler todos os registros de produtos
    async read(req, res) {
        
        // Consultar todos os registros na coleção Registrations
        const allRegister = await Registrations.find();

        // Verificar se não há produtos cadastrados
        if(allRegister.length == 0) {
            res.json({ message: "Sem produtos cadastrados." });
            return;
        }
        
        // Responder com a lista de registros
        return res.json(allRegister);
        
    },

    // Função para criar um novo registro de produto
    async create(req, res) {
        const {
            id,
            product,
            description,
            value,
            available
        } = req.body;

        // Verificar se já existe um produto com o mesmo nome
        const productList = await Registrations.find({
            product: product,
        });

        if(productList.length > 0 ) {
            res.json({
                message: "Já existe um produto cadastrado com esse nome."
            });
            return;
        }

        // Criar um novo registro de produto
        const created = await Registrations.create({
            product,
            description,
            value,
            available
        });

        // Responder com o registro criado
        return res.json(created);

    },

    // Função para excluir um registro de produto por ID
    async delete(req, res) {
        const { id } = req.params;

        // Procurar e excluir o registro por ID
        const deleted = await Registrations.findOneAndRemove({ _id: id });
         
        if(deleted) {
            console.log("Cliente Deletado");
            res.json({message: "Deletado com sucesso", deleted: deleted});
            return;
        }

         // Se o produto não foi encontrado, responder com uma mensagem
        return res.json({ message: "Cliente não encontrado."});
    }

}