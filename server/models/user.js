var mongoose = require('mongoose');

var User = mongoose.model('User',{
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1

	}
});

module.exports={
	User
}


//var User = new User({
//	email:"myemail"
//});

//User.save().then((doc)=>{
//	console.log('User Saved',doc);
//},(e)=>{
//	console.log('Unable to save user',e);
//});