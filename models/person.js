var mongoose=require('mongoose');
var schema=mongoose.Schema;

var personSchema=new schema({
	name:{
		type:String
	},
	email:{
		type:String
	},
	subject:{
		type:String
	},
	message:{
		type:String
	}
});

var person=mongoose.model('Person',personSchema);

module.exports=person;
