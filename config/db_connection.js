module.exports={
    getconnection:()=>{
        return require("./imports").mysql
        .createConnection(require("./db_properties"));
    }
}