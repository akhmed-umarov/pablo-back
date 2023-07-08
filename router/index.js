import { Router } from "express";
import { ProductController } from "../controllers/index.js";

const router = Router();

///получение всех постов
router.get("/posts", ProductController.getAllPosts);

//получение постов определенного пользователя
router.get("/posts/:user", ProductController.getUserPosts);

//получения данных о посте
router.get("/posts/:id", ProductController.getOnePost);

//получение данных о всех пользователях
router.get("/users", ProductController.getAllUsers);

//добавление комментария к посту
router.post("/post/:id", ProductController.addCommentWithPost);

export default router;
