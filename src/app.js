import express from 'express';
import conectDB from './config/dbConect.js';
import routes from './routes/index.js';

const conection = await conectDB();

conection.on("error", (error) => {
    console.log("Erro na conexão com o banco de dados: " + error);
});

conection.once("open", () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
});

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => { 
    const index = getLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro deletado com sucesso");
});

export default app;