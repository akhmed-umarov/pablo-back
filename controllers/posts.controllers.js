import ProductModel from "../model/Post.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось найти товар...",
    });
  }
};
export const getAllCakes = async (req, res) => {
  try {
    const products = await ProductModel.find({ parent: "cakes" });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось найти товар...",
    });
  }
};
export const getAllCupCakes = async (req, res) => {
  try {
    const products = await ProductModel.find({ parent: "cupcakes" });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось найти товар...",
    });
  }
};
export const createProduct = async (req, res) => {
  try {
    const data = new ProductModel({
      title: req.body.title,
      description: req.body.description,
      imgUrl: req.body.imgUrl,
      parent: req.body.parent,
      price: req.body.price,
      filling: req.body.filling,
    });
    const product = await data.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось создать продукт...",
    });
  }
};

export const getOneCakes = async (req, res) => {
  try {
    const productTitle = req.params.title;
    ProductModel.findOneAndUpdate(
      { title: productTitle, parent: "cakes" },
      { $inc: { vievsCount: 1 } },
      { returnDocument: "after" },
      (err, doc) => {
        if (err) {
          return res.status(500).json({
            message: "Не получилось получить данные о товаре",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Данного товара почему то нет",
          });
        }
        return res.status(200).json(doc);
      }
    );
  } catch (err) {
    res.status(500).json({
      message: "Не получилось получить товар",
    });
  }
};
export const getOneCupCakes = async (req, res) => {
  try {
    const productTitle = req.params.title;
    ProductModel.findOneAndUpdate(
      { title: productTitle, parent: "cupcakes" },
      { $inc: { vievsCount: 1 } },
      { returnDocument: "after" },
      (err, doc) => {
        if (err) {
          return res.status(500).json({
            message: "Не получилось получить данные о товаре",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Данного товара почему то нет",
          });
        }
        return res.status(200).json(doc);
      }
    );
  } catch (err) {
    res.status(500).json({
      message: "Не получилось получить товар",
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const productTitle = req.params.title;
    ProductModel.findOneAndDelete({ title: productTitle }, (err, doc) => {
      if (err) {
        return res.status(500).json({
          message: "Не удалось удалить товар...",
        });
      }
      if (!doc) {
        return res.status(500).json({
          message: "Товар не найден...",
        });
      }
      res.status(200).json({
        message: "Товар удален",
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось удалить продукт...",
    });
  }
};

export const patchProduct = async (req, res) => {
  const productTitle = req.params.title;

  try {
    ProductModel.updateOne(
      { title: productTitle },
      {
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
        price: req.body.price,
        filling: req.body.filling,
      },
      (err, doc) => {
        if (err) {
          return res.status(500).json({
            message: `Не удалось обновить продукт`,
          });
        }
        if (!doc) {
          return res.status(500).json({
            message: `Не удалось найти продукт`,
          });
        }
        return res.status(200).json({
          message: `Продукт обновлен`,
        });
      }
    );
  } catch (err) {
    return res.status(500).json({
      message: `Не удалось обновить продукт`,
    });
  }
};

export const getFilterGroup = (req, res) => {
  res.status(200).json(["banana", "chokolate", "cocos"]);
};

// export const getManyProduct = async (req, res)=>{
//    try {
//       const productTitle = req.params.title;
//       console.log(productTitle);
//       ProductModel.findOneAndUpdate(
//          { title: productTitle },
//          { $inc: { vievsCount: 1}},
//          {returnDocument : 'after'},
//          (err , doc)=>{
//             if (err) {
//                return res.status(500).json({
//                   // message: err
//                   message: 'Не получилось получить данные о товаре'
//                })
//             }
//             if (!doc) {
//                return res.status(404).json({
//                   message: 'Данного товара почему то нет'
//                })
//             }
//             return res.status(200).json(doc)
//          }
//          )
//    } catch(err) {
//       res.status(500).json({
//          message: 'Не получилось получить товар'
//       })
//    }
// }
