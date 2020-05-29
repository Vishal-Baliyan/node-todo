var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
	text:{
		type:String,
		required:true,
		minlength: 1,
		trim: true
	},
	completed:{
		type: Boolean,
		default: false

	},
	completedAt:{
		type: Number,
		default: null
	}
});

module.exports={
	Todo:Todo
}

//var otherTodo = new Todo({
//	text:'Cook Dinner',
//	completed:true,
//	completedAt:123
//});

//otherTodo.save().then((doc)=>{
//	console.log(JSON.stringify(doc,undefined),21);
//},(e)=>{
//	console.log('unable to save',e)
//});