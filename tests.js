var Ioc = require("./ioc");
var ioc = new Ioc();


/* Define classes */
var Person = function(weapon, singleton, name){
	this.name = name;
	this.weapon = weapon;
	this.singleton = singleton;
};
Person.$inject = ['weapon', 'singleton', 'name']; 

var Weapon = function(){
	this.name = "Sword";
};

var Singleton = function(){
	this.name = "Singleton";
};


/* Bind things up */
ioc.bind("name").to("Normann");
ioc.bind("person").to(Person);
ioc.bind("weapon").to(Weapon);
ioc.bind("singleton").toSingleton(Singleton);


/* Get an instance of person */
var m = ioc.resolve("person");


/* Modify it */
m.name = "Something";
m.weapon.name = "Pistol";
m.singleton.name = "A singleton?";


/* Get another instance of person */
var x = ioc.resolve("person");


/* Look at values */
console.log(m);
console.log(x);


/* Modify the singleton */
x.singleton.name = "Yup!";


/* And verify... */
console.log(m);
console.log(x);