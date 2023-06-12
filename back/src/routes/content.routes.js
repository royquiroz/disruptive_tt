import { Router } from "express";

import { getUserByEmail } from "../controllers/user";
import { createContent, getContent } from "../controllers/content";

import upload from "../helpers/multer";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const content = await getContent();
    res.send({ content });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
});

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const { body } = req;

    const user = await getUserByEmail({ email: body.user });

    if (user.length <= 0) {
      res.send("This user does not exist in the db");
    } else if (user[0].role === "reader") {
      res.send("This user is not allowed to create content");
    } else {
      const content = await createContent({
        ...body,
        value: req.file.url,
        created_by: user[0].id,
      });
      res.send({ content });
    }
  } catch (error) {
    console.log({ error });
    res.status(500).send({ error });
  }
});

export default router;
