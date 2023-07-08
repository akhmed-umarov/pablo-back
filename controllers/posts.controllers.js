import PostModel from "../model/Post.js";
import UserModel from "../model/User.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось найти посты...",
    });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const userId = req.params.id;
    const posts = await PostModel.find({ userId });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось найти посты...",
    });
  }
};

export const getOnePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await PostModel.findOne({ id: postId });

    if (!post) return res.status(404).json({ message: "Пост не найден" });

    const user = await UserModel.findOne({ id: post.userId })

    if (!user) return res.status(404).json({ message: "Пользователь не найден" });

    return res.status(200).json({
      post,
      user
    })
  } catch (err) {
    res.status(500).json({
      message: "Не получилось получить пост",
    });
  }
};



