//arquivo q vai rodar a aplicação
const express = require('express'); //p criar o servidor
const morgan = require('morgan');
const exphbs = require('express-handlebars'); //p enviar vistas html ñ so html puro
const path = require('path');

//initializat ions
const app = express();

//setting - configurações
app.set('port', process.env.PORT || 4000); //se existe um port em sistema, toma o 4000
app.set('views', path.join(__dirname, 'views')); //diz onde esta a pasta 'views'
app.engine('.hbs',exphbs({ //conf do motor
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'), //diz q layout esta dentro da pasta views
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlbars')
}));
app.set('view engine', '.hbs'); //p fazer o motor funcionar

//Middleware
//cada vez q é enviado um pedido executa o Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //aceitar desde do formulario os dados q enviam os usuarios, false: so aceita dasos em querrystring
app.use(express.json()); // p enviar e receber json(s)

//Global Variables
app.use((req, res, next) => { 

    next();
});


//Routers - URl do servidor
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));


//Public - td codigo q o navegar vai acessar: css, js, cliente, img, font, ...
app.use(express.static(path.join(__dirname, 'public'))); //esta dizendo o pasta 'public' esta

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})

