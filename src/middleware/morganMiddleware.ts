import morgan, {StreamOptions} from "morgan";

import config from "config"

import Logger from "../../config/logger";

//Stream para ler as requisições HTTP
const stream:StreamOptions = {
    write: (message) => Logger.http(message)
};

//Caso queiramos desligar a leitura de Logs
const skip = ()=>{
    const env = config.get<string>("env") || "development"
    return env !== "development"
}

const morganMiddleWare = morgan (
    ":method :url :res[content-length] - :response-time ms",
    {stream,skip}
)

export default morganMiddleWare;