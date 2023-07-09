import { Router } from "express";
import { body } from "express-validator";
import {
  CommentsUsersControllers,
  PostsControllers,
  UsersControllers,
  CommentsControllers,
} from "../controllers/index.js";

const router = Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  CommentsUsersControllers.registration
);
router.post("/login", CommentsUsersControllers.login);
router.post("/logout", CommentsUsersControllers.logout);
router.get("/activate/:link", CommentsUsersControllers.activate);
router.get("/refresh", CommentsUsersControllers.refresh);

///получение всех постов
router.get("/posts", PostsControllers.getAllPosts);

//получение постов определенного пользователя
router.get("/posts/:user", PostsControllers.getUserPosts);

//получения данных о посте
router.get("/post/:id", PostsControllers.getOnePost);

//получение данных о всех пользователях
router.get("/users", UsersControllers.getAllUsers);

router.get("/comments/:id", CommentsControllers.getCommentsWithPost);

//добавление комментария к посту
// router.post("/post/:id", CommentsController.addCommentWithPost);

export default router;
