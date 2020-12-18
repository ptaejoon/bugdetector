var logfile;
var errfile;
const fs = require('fs');
const t = require('./time.js');

function init (){
    logfile = './log/' + t.str_n();
}

init();

module.exports = {

    n : function (str){
        str = '['+t.str_l()+'] ' + str; 
        fs.writeFile(logfile, str, {flag:'wx'},  (err)=>{
            if(err){
                console.log("\x1b[31m", '[' + t.str_l() + ']' + " Cannot Open Log File");
                throw err;
            }
        });
        console.log("\x1b[0m",str);
    },
      
    e : function (str, err){
        str = '['+t.str_l()+'] ' + str; 
        fs.writeFile(logfile, str, {flag:'wx'}, (err)=>{
            if(err){
                console.log("\x1b[31m", '[' + t.str_l() + ']' + " Cannot Open Log File");
                throw err;
            }
        });
        console.log("\x1b[0m",'\x1b[31m',str);
    }

};