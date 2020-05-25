const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
	if(err){
		return console.log('Unable to connect');
	}
	console.log('Connectted to mongodb');
	const db= client.db('TodoApp')

	db.collection('Todos').find({_id:}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('unable to fetch');
	});

	//client.close();
});