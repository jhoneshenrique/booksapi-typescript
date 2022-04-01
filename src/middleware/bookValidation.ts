import { body } from "express-validator";

import { isString } from "util";

export const bookCreateValidation = () => {
    return [
        body("title")
            .isString().withMessage("O título precisa ser uma String"),
        body("description")
            .isString().withMessage("A descrição precisa ser uma string")
            .isLength({min:10}).withMessage("A descrição precisa ter pelo menos 10 caracteres"),
        body("author")
            .isString().withMessage("O author precisa ser uma string"),
        body("rating")
            .isNumeric().withMessage("A nota precisa ser um númeor")
            .custom((valor:number)=>{
                if(valor <0 || valor>10){
                    throw new Error("A nota precisa ser entre 0 e 10")
                }
                return true;
            })      

    ]
}