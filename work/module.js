var dog = function() {
	this.bark = function(){console.log("woof");}
};

var mod = (function(){

	return {
	hello : function hello(){
		console.log("hello");
		}

	}
}());




console.log("mod");
