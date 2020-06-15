# PROJETO - CRUD QUALICORP

Projeto onde foi pedido um CRUD simples, para avaliar, o meu código.

### API

* Usando como base Domain Driven Design e SOLID.
* Domain Notifications
* Foi usado Typescript para o código.
* Implementado log de erros (exceptions)
* Express Status Monitor (Acompanhar o status da API uso de memória, uso de CPU, etc).
* Modulo Cluster (Usa todas as CPUs da máquina para maior performance).
  
#### Como usar? 

Faça o download, entre na pasta back-end e instale as dependências:
`yarn install` ou `npm install`

Você pode dar o start em modo de desenvolvimento através do commando:
`yarn dev:serve` ou `npm run dev:serve`

Caso você queira executar em modo de produção porém com código typescript:
`yarn prod:serve` ou `npm run prod:serve`

* **OBSERVAÇÕES:**
Para alterar informações da API, basta usar os arquivos de Variáveis de Ambiente, o arquivo está na pasta '\src\Environment'

> PORT = Porta da API
> CLUSTER_ENABLED = Habilita o uso de multi-processadores
> NUMBER_CPU_CORES = Numero de CPUs usados ('0' usa todos os disponíveis na máquina)
> MORGAN_ENABLED = Habilita o log no console para as requisições HTTP (pesa deixar ligado, então pra PROD é melhor desligado)
> NEO4J_PROTOCOL = Protocolo do NE04J
> NEO4J_HOST = Ip do banco de dados
> NEO4J_USERNAME = Usuário do banco de dados
> NEO4J_PASSWORD = Senha do usuário do banco de dados
> NEO4J_PORT = Porta do banco de dados

### BANCO DE DADOS

Você pode alterar o arquivo de Environment descrito acima e colocar o seu banco de dados.

Como alternativa você pode usar Docker com o `docker-compose` que está na pasta:

- \database

Para iniciar o banco em Docker, entre na pasta database execute o comando:
`docker-compose up`

### FRONT-END

* Usando Bulma CSS.
* Usando Axios para as chamadas HTTP.
* Vuex pra roteamento.

Caso você mude a porta da API a url de acesso está no arquivo \front-end\src\service\api.js
e altere a URL_BASE.

Para usar instale as dependências:
`yarn install` ou `npm install`

Você pode dar o start em modo de desenvolvimento através do commando:
`yarn serve` ou `npm run serve`

E acesse a url [http://localhost:8080/](http://localhost:8080/)
