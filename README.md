# Documentação da API

Esta é uma documentação básica para a API, que descreve sua estrutura, endpoints e funcionalidades principais.

## Estrutura da API

A API está organizada em várias pastas, cada uma com sua função específica:

- **models**: Contém os modelos de dados usados pela API.
- **controllers**: Inclui controladores que lidam com as operações da API.
- **middleware**: Contém middleware para validação de dados.
- **routes**: Define as rotas da API e associa as funções do controlador.

## Configuração e Uso

Certifique-se de seguir os seguintes passos para configurar e usar a API:

1. Instale as dependências usando `npm install`.

2. Configure as variáveis de ambiente em um arquivo `.env`. Exemplo:

3. Execute a aplicação usando `npm start`.

## Endpoints da API

### `GET /`

- Descrição: Lê todos os registros de produtos.
- Resposta de Sucesso (200 OK):
```json
[
 {
   "product": "Produto1",
   "description": "Descrição do Produto1",
   "value": 10.99,
   "available": true
 },
 // Outros registros...
]


Claro, aqui está uma documentação formatada para o arquivo README.md com base nas informações fornecidas:

markdown
Copy code
# Documentação da API

Esta é uma documentação básica para a API, que descreve sua estrutura, endpoints e funcionalidades principais.

## Estrutura da API

A API está organizada em várias pastas, cada uma com sua função específica:

- **models**: Contém os modelos de dados usados pela API.
- **controllers**: Inclui controladores que lidam com as operações da API.
- **middleware**: Contém middleware para validação de dados.
- **routes**: Define as rotas da API e associa as funções do controlador.

## Configuração e Uso

Certifique-se de seguir os seguintes passos para configurar e usar a API:

1. Instale as dependências usando `npm install`.

2. Configure as variáveis de ambiente em um arquivo `.env`. Exemplo:

PORT=8000
CONNECTION_STRING=sua_string_de_conexão_com_o_MongoDB

csharp
Copy code

3. Execute a aplicação usando `npm start`.

## Endpoints da API

### `GET /`

- Descrição: Lê todos os registros de produtos.
- Resposta de Sucesso (200 OK):
```json
[
 {
   "product": "Produto1",
   "description": "Descrição do Produto1",
   "value": 10.99,
   "available": true
 },
 // Outros registros...
]
Resposta de Erro (400 Bad Request):
json
Copy code
{
  "message": "Sem produtos cadastrados."
}


Claro, aqui está uma documentação formatada para o arquivo README.md com base nas informações fornecidas:

markdown
Copy code
# Documentação da API

Esta é uma documentação básica para a API, que descreve sua estrutura, endpoints e funcionalidades principais.

## Estrutura da API

A API está organizada em várias pastas, cada uma com sua função específica:

- **models**: Contém os modelos de dados usados pela API.
- **controllers**: Inclui controladores que lidam com as operações da API.
- **middleware**: Contém middleware para validação de dados.
- **routes**: Define as rotas da API e associa as funções do controlador.

## Configuração e Uso

Certifique-se de seguir os seguintes passos para configurar e usar a API:

1. Instale as dependências usando `npm install`.

2. Configure as variáveis de ambiente em um arquivo `.env`. Exemplo:

PORT=8000
CONNECTION_STRING=sua_string_de_conexão_com_o_MongoDB

csharp
Copy code

3. Execute a aplicação usando `npm start`.

## Endpoints da API

### `GET /`

- Descrição: Lê todos os registros de produtos.


### `POST /`
Descrição: Cria um novo registro de produto.

### `DELETE /:id`

Descrição: Exclui um registro de produto por ID.
Resposta de Sucesso (200 OK):

### Middleware de Validação

O middleware de validação Validation é usado para garantir que os dados de entrada sejam válidos antes de criar um novo registro. Ele verifica os campos product, description e value para garantir que não estejam vazios.

### Configuração Adicional

<ul> 
    <li>Certifique-se de que as dependências, como o Express e o Mongoose, estão instaladas corretamente. </li>

    <li>Personalize os modelos de dados em models conforme suas necessidades.</li>

    <li>Aplique middleware de autenticação e autorização, se necessário.</li>

    <li>Documente todas as rotas adicionais, endpoints e funcionalidades conforme você as implementar.</li>

    <li>Espero que esta documentação ajude a entender a estrutura básica da API e como usá-la. Personalize-a de acordo com as necessidades específicas do seu projeto.</li>
</ul>



