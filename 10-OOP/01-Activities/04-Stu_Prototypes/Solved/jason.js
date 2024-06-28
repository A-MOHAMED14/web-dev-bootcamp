const developers = ['Jack', 'Josh', 'Jason', 'Jose', "Tom", 'Alex']

developers.prototype.sayHello = function() {
    console.log(`Hello World, my name is ${this.name}`);
}

for (let i = 0; i < developers.length; i++) {
    developers[i].sayHello();
}

const designers = ['Mark', 'Niall', 'Emily']
for (let i = 0; i < designers.length; i++) {
    designers[i].sayHello();
}
