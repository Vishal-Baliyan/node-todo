const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
	if(err){
		return console.log('Unable to connect');
	}
	console.log('Connectted to mongodb');
	const db= client.db('TodoApp')

	//many delete
	//db.collection('Todos').deleteMany({text:'Eat lumch'}).then((result)=>{
	//	console.log(result);
	//});

	//db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
	//	console.log(result);
	//});

	//findOneAndDeleteOne
	//db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
	//	console.log(result);
	//});

	//delete User
	db.collection('Users').deleteMany({name:'Vishal'});
});