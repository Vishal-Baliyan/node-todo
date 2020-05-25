const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
	if(err){
		return console.log('Unable to connect');
	}
	console.log('Connectted to mongodb');
	const db= client.db('TodoApp')

/*	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false

	},(err, result)=>{
		if(err){
			return console.log('unable to insert');
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});
*/
 
	db.collection('Users').insertOne({
		name: 'Vishal',
		age : 22,
		location : 'India'
	},(err, result)=>{
		if(err){
			return console.log('unable to insert',err);
		}

		console.log(JSON.stringify(result.ops));
	})

	client.close();
});