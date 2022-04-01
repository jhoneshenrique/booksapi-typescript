import express from "express";
import config from "config";
import _default from "../config/default";

//Env variables
require("dotenv").config();

//Importando o Logger
import Logger from "../config/logger";

//Importando rotas
import router from "./router";

//Importando conexão com banco
import db from "../config/db";

const app = express();

//JSON
app.use(express.json())

//Middlewares 
    //Morgan
    import morganMiddleware from "./middleware/morganMiddleware"

    //Prefixo de url
    app.use(morganMiddleware)



//Chamando as rotas
app.use("/api/",router)



//Número da porta que vem do arquivo default.
const port = config.get<number>("port")

app.listen(port, async()=>{

    await db();

    Logger.info("Servidor Rodando na porta "+port)
});