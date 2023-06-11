import { Router } from "express";
import { createUser, getUsers } from "../controllers/user";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    res.send({ users });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { body } = req;
    const user = await createUser(body);
    res.send({ user });
  } catch (error) {
    console.log({ error });
    res.status(500).send({ error });
  }
});

export default router;
