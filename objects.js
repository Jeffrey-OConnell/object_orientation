let me = {
    name: "Jeff",
    age: 48
  }

let dog = {
    name: "Gunner",
    color: "Tan",
    age: 7,
    goodBoy: true
    }

    console.log(dog.name)
    console.log(dog['color'])

    let favoriteThings = {
        band: "Slipknot",
        food: "Pizza",
        person: "My son",
        book: "It",
        movie: "Pulp Fiction",
        holiday: "Halloween"
      }
      
      /*
        After you've made your object, use bracket or dot notation to add another key named 'car' with the value being your favorite car and then another key named 'show' with the value being your favorite show.
      */
      
      favoriteThings["car"] = "BMW"
      favoriteThings["brand"] = "Apple"

      favoriteThings.food = "Chicken Nuggets"
      favoriteThings["book"] = "Harry Potter"
      console.log(favoriteThings.food)

      // DECONSTRUCTION
      console.log("-------------")

      var carDetails = {
        color: 'red',
        make: 'toyota',
        model: 'tacoma',
        year: 1994
      }

      let {color, make, model, year} = carDetails
      console.log(color)

      function greeting( obj ) {
      let {title, firstName, lastName} = obj
        return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
      }
      let obj = {
        title: "Mr",
        firstName: "Tom",
        lastName:"Paul"
      }
      
      let obj2 = {
        title: "Mr",
        firstName: "Dave",
        lastName:"Smith"
      }
      console.log(greeting(obj))
      console.log(greeting(obj2))


      console.log("---------------------------")
      class Cat {
        constructor(name, age, color){
            this.name = name
            this.age = age
            this.color = color
        }
      }

      let wiggles = new Cat ("Wiggles", 4, "tan")
      console.log(wiggles.name)

      console.log("---------------------------")
      class Wizard {
        constructor(name, age, favoriteSpell){
            this.name = name
            this.age = age
            this.favoriteSpell = favoriteSpell
        }
        castSpell(){
            console.log(`${this.name} has cast ${this.favoriteSpell}`)
        }
      }
        let jeff = new Wizard("Jeff", 19, "Fireball")
        jeff.castSpell()