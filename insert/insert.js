module.exports=require("../config/imports").express.Router().post("/",(req,res)=>{
    let connection=require("../config/db_connection").getconnection();
    connection.connect();
    require("../config/query").insert(connection,req,res);

})