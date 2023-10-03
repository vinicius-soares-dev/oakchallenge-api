const Validation = (req, res, next) =>  {

    // Este middleware realiza a validação dos campos do corpo da solicitação
    const {
        product,
        description,
        value,
        available
    } = req.body;

    // Verificar se o campo "product" está vazio ou não foi fornecido
    if(!product || product.length == 0 || product == "") {
        res.status(400).json({
            message: "Produto não pode estar vazio, insira algo"
        });
        return;
    }

    // Verificar se o campo "description" está vazio ou não foi fornecido
    if(!description || description.length == 0 || description == "") {
        res.status(400).json({
            message: "Descrição não pode estar vazio, insira algo"
        });
        return;
    }

    // Verificar se o campo "value" está vazio ou não foi fornecido
    if(!value || value.length == 0 || value == "") {
        res.status(400).json({
            message: "Valor não pode estar vazio, insira algo"
        });
        return;
    }

    // Se todas as verificações passarem, avance para a próxima middleware ou rota
    next();
}

module.exports = Validation;
