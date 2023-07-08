import UserModel from "../model/User.js";
//идет инкапсуляция запросов так как по идее комментарии к постам могут
//меняться и если в будущем вдруг подключим кеширование то комменты
export const getAllUsers = async (req, res) => {
    try { 
    const users = await UserModel.find();
    res.status(200).json(users);
    } catch (err) { 
    res.status(500).json({
        message: "Не удалось найти пользователей...",
    });
    }
};
