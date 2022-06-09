const fs = require("fs");
const https = require("https");
const express = require('express');
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
};

var bodyParser = require('body-parser');
const app = express();
app.use(express.static('./public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',(req,res)=> {
	res.send('Bem vindo');
});
app.get('/images/:img',(req,res)=> {
	console.log(req.params.img);
	var image = "./public/images/produtos/"+req.params.img;
	res.send(image);
});
https
  .createServer(options, app)
  .listen(3001, ()=>{
	console.log('Servico rodando na porta 3001')
});
  
/*
app.get('/',(req,res)=> {
	res.send('Bem vindo');
});
app.get('/images/:img',(req,res)=> {
	console.log(req.params.img);
	var image = "./public/images/produtos/"+req.params.img;
	res.send(image);
});

app.listen(3000, ()=>{
	console.log('Servico rodando na porta 3000')});
*/