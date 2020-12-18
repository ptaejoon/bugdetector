/* DB Management with MySQL */
const util = require('./util.js');
const { getServers } = require('dns');
const mysql = require('mysql');
const db = mysql.createConnection({
  host : 'localhost',
  user : 'capstone',
  password : 'capstone1',
  database : 'capstone'
});

const logs = require('./log.js')

db.connect();

/*Insert values into DB Table*/
module.exports = {
    addData :function (temp, humid, dist, dev){
        var query = 'INSERT INTO test (distance, temperature, humidity, temperature_RSS, humidity_RSS, device)';
        var query2 = ' VALUES(';
        query2 += dist + temp + humid + util.getRSS() + dev + ');';
        db.query( query + query2, (err, rows, fileds)=>{
        if(err){ 
            logs.e("Cannot insert data into DB.\n" + err); 
            return "Data Invalid\n\n" + err;
        }
        else {
            logs.n("Data Inserted.");
            return "Data Accepted.";
        }
        });
    }
}
  