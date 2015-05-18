var dog = function() {
	this.bark = function(){console.log("woof");}
};
dog.prototype.wif = function(){console.log("wif wif");}

var mod = (function(pub){

	var one = function(){console.log("one");};
	pub.one = one; // can return pub instead of {definitions}

	return {
 	one:one,
	hello : function hello(to){
		console.log("hello " + to);
		}

	}
}(mod || {}));

console.log(mod.hello("one"));
console.log(new dog().bark());
