export * as ProductController from "./product.controllers.js";
export * as ImgController from "./images.controller.js"


///переменные можно закидывать сюда 
export const testPatchMiddleawate = (data)=>(req, res, next)=>{ 
   console.log(`PATHC AND ${data}`);
   next()
}

