import express from 'express'
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import messagesRouter from './routes/messages.router.js'
import viewsRouter from './routes/views.router.js'
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'

//express
const app = express()
const PORT = 8080



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

app.engine('handlebars', handlebars.engine());
app.set("views", __dirname+"/views");
app.set("view engine", 'handlebars');
app.use('/', viewsRouter);



try {

    await mongoose.connect('mongodb+srv://userTest:abc@ecommercecluster.x8dnx5s.mongodb.net/?retryWrites=true&w=majority');

    

    app.listen(PORT, () => {

        console.log(`listening at port ${PORT}`);

    });

} catch(err) {

    console.log('cant log to server bbdd');

}

app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)
app.use('/api/messages', messagesRouter)