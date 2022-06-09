const express = require('express');
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

app.listen(3000, ()=>{
	console.log('Serviço rodando na porta 3000')});