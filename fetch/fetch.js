module.exports=require("../config/imports").express
                                         .Router()
                                         .get("/",(req,res)=>{
                                            let connection=require("../config/db_connection").getconnection();
                                            connection.connect();
                                            require("../config/query").fetch(connection,res);;
})