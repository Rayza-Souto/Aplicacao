import express from "express";
import clients from "./clients.js";
import user from "./usersModel.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json( "Tudo certo :)" );
});

routes.post('/login', async (req, res, next) => {
  try {
    const { user, password } = req.body;

    // Fazendo a consulta no banco de dados
    const userRecord = await user.findOne({ where: { username: user } });

    // Se o usuário não for encontrado
    if (!userRecord) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Se tudo estiver correto, gerar o token JWT
    const token = jwt.sign({ id: userRecord.id }, process.env.SECRET, {
      expiresIn: 300 // expira em 5 minutos
    });

    return res.json({ auth: true, token: token });
  } catch (error) {
    return next(error);
  }
});

routes.get("/clients", clients.findAll);

export { routes as default };