let app=require("./config/imports").express();

let bodyparser=require("./config/imports").bodyparse;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(require("./config/imports").cors());

app.use("/fetch",require("./fetch/fetch"));

app.use("/insert",require("./insert/insert"));

app.use("/update",require("./update/update"));

app.use("/delete",require("./delete/delete"));

app.listen(3030);
console.log("server is listen :3030");