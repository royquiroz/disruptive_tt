import { Router } from "express";
import { createCategory, getCategories } from "../controllers/category";
import { getUserByEmail } from "../controllers/user";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const category = await getCategories();
    res.send({ category });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { body } = req;

    const user = await getUserByEmail({ email: body.user });

    if (user.length <= 0) {
      res.send("This user does not exist in the db");
    } else if (user[0].role !== "admin") {
      res.send("This user is not allowed to create categories");
    } else {
      const category = await createCategory(body);
      res.send({ category });
    }
  } catch (error) {
    console.log({ error });
    res.status(500).send({ error });
  }
});

export default router;
