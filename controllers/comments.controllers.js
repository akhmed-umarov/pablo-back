import CommentsModel from "../model/Comment.js";
//идет инкапсуляция запросов так как по идее комментарии к постам могут
//меняться и если в будущем вдруг подключим кеширование то комменты
export const getCommentsWithPost = async (req, res) => {
    try { 
    const postId = req.params.id;
    const comments = await CommentsModel.find({ id: postId });
    res.status(200).json(comments);
    } catch (err) { 
    res.status(500).json({
        message: "Не удалось найти комментарии...",
    });
    }
};
