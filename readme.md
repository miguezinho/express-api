# API Node.js com Express e MongoDB

API simples seguindo os conceitos RESTful e padrões de arquitetura com camadas. 
Desenvolvida em Node.js usando Express para criar, listar, atualizar e excluir filmes em um banco de dados não relacional MongoDB.

## Requisitos
- Docker e Docker Compose

## Instalação

1. Após clonar o repositório executar o seguinte comando:

   ```bash
   docker-compose up -d

2. Rodar o comando acima instalará todas as dependências e iniciará o projeto para rodar por padrão na porta 3000.
   Acesse em http://localhost:3000

# Rotas/Endpoints
- POST http://localhost:3000/film Cria um novo filme
- GET http://localhost:3000/film Lista todos os filmes
- GET http://localhost:3000/film/{id} Lista um filme conforme o ID enviado por parâmetro na URI
- PUT http://localhost:3000/film/{id} Altera um filme
- DELETE http://localhost:3000/film/{id} Deleta um filme

### Exemplo de body JSON para os endpoints POST e PUT

```bash
{
    "title": "Homem de Ferro",
    "description": "Filme do homem de ferro",
    "image_url": "https://br.web.img3.acsta.net/pictures/14/08/20/21/11/442051.jpg",
    "trailer_url": "https://youtu.be/tKwEdRC26xA"
}
```

   
