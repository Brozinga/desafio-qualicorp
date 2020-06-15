
module.exports = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "API para avaliação da empresa Qualicorp",
    description: "CRUD simples, usando NodeJS, Neo4J, Vue.js",
    contact: {
      name: "Fernando Brozinga",
      email: "fbrozinga@outlook.com",
      url: "https://github.com/brozinga"
    }
  },
  host: "localhost:3333",
  basePath: "/api/v1",

  tags: [
    {
      name: "Clients",
      description: "API test on DDD - managent Clients."
    }
  ],
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"]
};
