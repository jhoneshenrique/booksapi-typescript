import { Router,Request,Response } from "express";

import { createBook, findMovieById, getAllBooks, removeBook, updateBook } from "./controllers/bookController";

//Validações
import { validate } from "./middleware/handleValidation";
import { bookCreateValidation } from "./middleware/bookValidation";


//Criar variável router
const router = Router();

//Rotas
export default router.get("/", (req:Request, res:Response) =>{
    res.status(200).send("API WORKING!!")
}).post("/book",bookCreateValidation(),validate,createBook)
  .get("/book/:id",findMovieById)
  .get("/book",getAllBooks)
  .delete("/book/:id",removeBook)
  .patch("/book/:id",bookCreateValidation(),validate,updateBook)