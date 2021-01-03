'use strict';

class User {
	
	#age = 0;
	
	constructor(name, age) {
		this.name = name;
		this.#age = age;
	}
	
	say() {
		console.log(`User: ${this.name}, age: ${this.#age}`);
	}
	
	get age() {
		return this.#age;
	}
	
	set age(age) {
		if (typeof age !== 'number') {
			console.log('wrong type!');
			return;
		}
		if (age <= 0) {
			console.log('age <= 0!');
			return;
		}
		if (age > 150) {
			console.log('age > 150!');
			return;
		}
		this.#age = age;
	}
	
}

const usr = new User('Vitaliy', 35);
console.log(usr.age);
usr.age = 'asd';
usr.age = 0;
usr.age = 200;
usr.age = 36;
usr.say();





