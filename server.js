// import http from 'http';
import 'dotenv/config.js';
import app from './src/app.js';

const PORT = 3000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'content-type': 'text/plain' });
//     res.end(rotes[req.url]);
// })

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
})
