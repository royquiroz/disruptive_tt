import { Router } from "express";
import {
  createTheme,
  getThemeById,
  getThemes,
  updateTheme,
} from "../controllers/theme";
import { getUserByEmail } from "../controllers/user";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const themes = await getThemes();
    res.send({ themes });
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
    } else if (user[0].role === "creator") {
      res.send("This user is not allowed to create themes");
    } else {
      const theme = await createTheme({ created_by: user[0].id, ...body });
      res.send({ theme });
    }
  } catch (error) {
    console.log({ error });
    res.status(500).send({ error });
  }
});

router.patch("/", async (req, res) => {
  try {
    const { body } = req;

    const user = await getUserByEmail({ email: body.user });
    const theme = await getThemeById(body.theme_id);

    if (user[0].id !== theme[0].created_by) {
      res.send("This user is not allowed to edit this theme");
    } else {
      const theme = await updateTheme(body.theme_id, body);
      res.send({ theme });
    }
  } catch (error) {
    console.log({ error });
    res.status(500).send({ error });
  }
});

export default router;
