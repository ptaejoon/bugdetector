const logs = require('../log.js');
const db = require('../db.js');

module.exports = function (app){
	app.get('/', (req, res)=>{
		res.render('index.html');
	});
	app.get('/login', (req, res)=>{
		res.render('login.html');
	});
	app.get('/map', (req, res)=>{
		res.render('map.html');
	});
	app.get('/graph', (req, res)=>{
		res.render('chart.html');
	});

	app.get('/update', (req, res) =>{
		res.send('Data Accepted');
		db.addData(req.body.temp, req.body.humid, req.body.dist, 'TESTDV1');
		logs.n('Device ' + req.ip + " updated data.");
	});
		
	app.post('/update', (req, res) => {
		res.send('Data Accepted');
		console.log(JSON.stringify(req.body));
		db.addData(req.body.temp, req.body.humid, req.body.dist, 'TESTDV1');
		logs.n('Device ' + req.ip + " updated data.");  
	})
}
