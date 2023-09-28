console.log('hello')

// defining an object literal
//key value pairs <-- important for language

//key is name, value is "Big Foot"
const bigFoot = {
    name: 'Big Foot',
    color: 'purple',
    isReal: true,
    height: 7, //feet
    diet: 'vegetarian',
    woodlandFriends: [{friend: 'bunny', age: 4}, {friend: 'squirrel', age : 2}, {friend: 'deer', age : 7} ],
    eat (plant){// new synazx on writing methods in objects
        console.log(`Lets eat some ${plant}`)
    },
    hide(location){
        console.log(`Lets go hide ${location}`)
    },
    run(){

    },
    // run: function() { this is the old method!

    // }
}

console.log(bigFoot.woodlandFriends[0].friend)
console.log(bigFoot.woodlandFriends[1].age)


delete bigFoot.isReal

bigFoot.eat('baby bunnies')

bigFoot.hide('at Loch Ness')

// want to see if bigfoot is real
//retrive the value 

console.log(bigFoot.isReal)

// getting a property (value)

console.log(bigFoot.diet)

// change color of big foot
bigFoot.color = 'ginger'

console.log(bigFoot)

bigFoot.diet = 'bunnies'
console.log(bigFoot.diet)

console.log(bigFoot.woodlandFriends[2])

let key

// saying hello to the friends in 2 ways
function sayHello(name) {
    return `Hello, ${name}`
}

bigFoot.woodlandFriends.forEach(function(friend) {
    console.log(sayHello(friend))
})

bigFoot.woodlandFriends.forEach((friend) => {
    console.log(sayHello(friend))
}
)

//to access objects
bigFoot.name // 'Big Foot'
bigFoot['name'] //'Big Foot'