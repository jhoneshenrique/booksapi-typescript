import {Request, Response, NextFunction} from "express";

import { validationResult } from "express-validator";

export const validate = (req:Request, res:Response, next: NextFunction) =>{
    //Pega os erros vindo da requisição
    const erros = validationResult(req);

    if(erros.isEmpty()){
        return next();
    }

    //Guarda os erros em um array de objetos
    const extractedErros: object[] = [];

    //Insere cada um dos erros
    erros.array().map((err)=>extractedErros.push({[err.param]:err.msg}))

    return res.status(422).json({
        erros: extractedErros
    })
}