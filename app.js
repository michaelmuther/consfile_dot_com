var express = require('express')
    , app = express();
    
// REQUIRING ROUTES
var indexRoutes = require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){ //process.env is an environment variable; it changes depending on the run environment
    console.log('consfile_dot_com server up'); 
});