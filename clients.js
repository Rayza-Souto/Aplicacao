import ClientRepo from "../models/clientsModel.js";

async function findAll(req, res) {
  const clients = await ClientRepo.findAll();
  res.json(clients);
}

export default { findAll };