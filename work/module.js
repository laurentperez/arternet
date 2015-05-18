// constructor, proto, inherit
var Dog = function() {
	this.bark = function(){console.log("woof");}
};
Dog.prototype.wif = function(){console.log("wif wif");}
var Subdog = function(){Dog.call(this); this.wuf = function(){console.log("sub wuf");}}
Subdog.prototype = Object.create(Dog.prototype); 
Subdog.prototype.constructor = Subdog;

// module
var mod = (function(pub){
	var priv = function(){}; // private
	var one = function(){console.log("one");};
	pub.one = one; // can return pub instead of {definitions}

	return {
 	one:one,
	hello : function hello(to){
		console.log("hello " + to);
		}

	}
}(mod || {}));
// fbuzz
var arr = [1,5,15,27,35,22];
for (var i=0; i < arr.length; i++) {
if(arr[i] % 5 === 0) {
console.log("fizz for " + arr[i]);
}

}

console.log(mod.hello("one"));
console.log(new Dog().bark());
