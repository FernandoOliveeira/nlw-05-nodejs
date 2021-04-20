import express from "express";


const app = express();

/**
 * Route Methods:
 * GET = Search
 * POST = Create
 * PUT = Update
 * DELETE = Delete
 * PATCH = Update specific data
 */

app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW05"
  });
});


app.post("/", (request, response) => {
  return response.json({
    message: "Usuário salvo com sucesso!"
  })
});


app.listen(3333, () => console.log("Server is running on port 3333"));
