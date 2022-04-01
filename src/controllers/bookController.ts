import {Request, Response} from "express";

import { BookModel } from "../models/Book";

import Logger from "../../config/logger";
import { bookCreateValidation } from "../middleware/bookValidation";

export async function createBook(req:Request,res:Response) {
    try{
        //Pega o corpo da requisição
        const data = req.body;
        //Cadastra no banco e recebe o retorno
        const book = await BookModel.create(data);
        //Retorna o status 201 e o livro criado
        return res.status(201).json(book);
    }catch(e:any){
        Logger.error("Erro ao criar cadastrar livro "+e.message);
        return res.status(500).json({error:"Por favor, tenta novamente"})
    }
}

export async function findMovieById(req:Request, res:Response) {
    try {
        const id = req.params.id;
        const book = await BookModel.findById(id);

        if(!book){
            return res.status(404).json({erro: "Livro não encontrado!"})
        }

        return res.status(200).json(book);

    } catch (e:any) {
        Logger.error("Erro no sistema "+e.message);
        return res.status(500).json({error:"Por favor, tenta novamente"})
    }
}

export async function getAllBooks(req:Request, res:Response) {
    try {
        const movies = await BookModel.find();
        return res.status(200).json(movies);
    } catch (e:any) {
        Logger.error("Erro no sistema "+e.message);
        return res.status(500).json({error:"Por favor, tenta novamente"})
    }
}

export async function removeBook(req:Request, res:Response) {
    try {
        const id = req.params.id;
        const book = await BookModel.findById(id);

        if(!book){
            return res.status(200).json({error:"Livro não encontrado!"})
        }

        await book.delete();

        return res.status(200).json({msg:"Filme deletado com sucesso"})

    } catch (e:any) {
        Logger.error("Erro no sistema "+e.message);
        return res.status(500).json({error:"Por favor, tenta novamente"})
    }
}

export async function updateBook(req:Request, res:Response) {
    try {
        const id = req.params.id;
        const data = req.body;

        const book = await BookModel.findById(id)

        if(!book){
            return res.status(404).json({error:"Livro não encontrado"})
        }

        await BookModel.updateOne({_id: id}, data);

        return res.status(200).json(data);
    } catch (e:any) {
        Logger.error("Erro no sistema "+e.message);
        return res.status(500).json({error:"Por favor, tenta novamente"})
    }
}