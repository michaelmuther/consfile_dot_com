var convertExcel = require('excel-as-json').processFile; //USE THE EXCEL AS JSON PACKAGE TO TURN THE EXCEL DATA INTO JSON

//ALL OF THE LOGIC HERE:    
function logicOne(){
    var file1 = './excel_files/balance2.xlsx';
    var file2 = './excel_files/balance3.xlsx';
    var number1;
    var number2;
    var number3;
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
}
    
module.exports = logicOne;