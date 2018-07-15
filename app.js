var express = require('express')
    , app = express()
    , convertExcel = require('excel-as-json').processFile;
    
var file1 = './excel_files/balance2.xlsx';
var file2 = './excel_files/balance3.xlsx';
var number1;
var number2;
var number3;
    
// convertExcel('./excel_files/excelTest2.xlsx', null, {isColOriented: true}, function(err,data){
convertExcel(file1, null, null, function(err,data){
    if(err){
        console.log(err);
    } else {
        // console.log(data);
        number1 = data[0]['Balance'];
        // console.log(number1);
        convertExcel(file2, null, null, function(err,data){
            if(err){
                console.log(err);
            } else {
                // console.log(data);
                number2 = data[0]['Balance'];
                // console.log(number2);   
                number3 = number1 + number2;
                console.log(number3);
            }
        });
    }
});

// REQUIRING ROUTES
var indexRoutes = require('./routes/index');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){ //process.env is an environment variable; it changes depending on the run environment
    console.log('consfile_dot_com server up'); 
});