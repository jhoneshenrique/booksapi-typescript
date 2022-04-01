//Variáveis do .env
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;


//Exportar objeto com variáveis de configuração
export default {
    port: 3000,
    dbUri: "mongodb+srv://"+dbUser+":"+dbPassword+"@cluster0.pfdvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    env:"development"
    
}