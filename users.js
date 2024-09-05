import usersRepo from "./usersModel.js";

async function findAll(req, res) {
  const users = await usersRepo.findAll();
  res.json(users);
}

export default { findAll };