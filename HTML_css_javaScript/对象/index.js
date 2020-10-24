function createOjb(name, age){
    var obj = {
        name: name,
        age: 18,
        printName: function(){
            console.log(name);
            
        }
    };
    return obj;
}

var obj = createOjb('a', 18)
console.log(obj.printName)
