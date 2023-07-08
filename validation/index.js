// import { body } from 'express-validator';

// import { validationResult } from "express-validator";

// export const zadachaValidatorArrayFunction = (req, res , next)=>{ 
//    const errors = validationResult(req);
//    if (!errors.isEmpty()){ 
//       return res.status(400).json(errors.array())
//    }
//    next()
// }

// export const ProductValidatorArray = [ 
//    body('title' , "Заговолок товара должен быть больше 3 символов").isLength({min: 3}), 
//    body('price' , 'Цена должна быть указана обязательнo').isNumber()
// ]