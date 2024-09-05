import express from "express";
import clients from "./src/controllers/clients.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json( "Tudo certo :)" );
});

routes.post('/login', (req, res, next) => {
  //esse teste abaixo deve ser feito no seu banco de dados
  if(req.body.user === 'luiz' && req.body.password === '123'){
    //auth ok
    const id = 1; //esse id viria do banco de dados
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300 // expires in 5min
    });
    return res.json({ auth: true, token: token });
  }
 
  res.status(500).json({message: 'Login inválido!'});
});

routes.get("/clients", clients.findAll);

export { routes as default };