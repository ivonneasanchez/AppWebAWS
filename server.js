import Express from 'express'
import Path from 'path'

const app = Express()
const dir = Path.resolve()
const dir_front = "frontend/build"

app.use(Express.static(dir_front))

app.listen('5000', function(){
    console.log ("El Servidor ha iniciado...")
})

app.get('/', function(req, res){
    console.log (dir)
    res.sendFile(dir + "/" +dir_front + "/index.html")
})

app.get("/registro_page", function(req, res){
    res.sendFile(dir + "/" +dir_front + "/index.html")
})

app.get("/consulta_page", (req, res) =>{
    res.sendFile(dir + "/" +dir_front + "/index.html")
})

app.get("/contacto_page", function(req, res){
    res.sendFile(dir + "/" +dir_front + "/index.html")
})

