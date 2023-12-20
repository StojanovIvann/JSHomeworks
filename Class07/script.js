//H1
function Animal (animalName , animalKind){
    this.name = animalName,
    this.kind = animalKind,
    
    this.speak  = function(){
        console.log(`${this.kind} says :'HI BRO!!'`)
    }
}

function print() {
    let animalKind = prompt('Enter the kind of the animal');
    let animalName = prompt('Enter the name of the animal');
  
    if (isNaN(animalKind) && isNaN(animalName)) {
      let animalGreet = new Animal(animalName, animalKind);
      animalGreet.speak();
    } else {
      console.log('Error: You entered a number or something else.');
    }
  }
  
  print();

console.log(" ")

//  H2
function Book (bookTitle , bookAuthor, readingStatus,){
    this.name  = bookTitle,
    this.author = bookAuthor,
    this.status = readingStatus,

    this.read = function(){
        if (this.status === true){
            console.log(`Already read ${this.name} by ${this.author}`)
        }
        else {
            console.log(`You still need to read ${this.name} by ${this.author}`)
        }
    }
    
}

let book = new Book ('Crime and Punishment', 'Dostoevsky' , true);
let book1 = new Book ('The Odisay', 'Homer' , false);

book.read();
book1.read();

console.log(" ");



// H3


function UserCredentials (firstName , lastName, email , password ){
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.password = password;

}



function login (){
    let firstName = document.getElementById ('fName').value;
    let lastName = document.getElementById('sName').value;
    let email = document.getElementById ('email').value;
    let password  = document.getElementById ('password').value;

    let users = new UserCredentials (firstName , lastName , email , password);
    newUser.push (users);
    // Neznam zosto mi izleguva i koga ke se startne programata i koga ke pretisnam submit 
    console.log('Loged in')

}


let newUser = [ ];
login();
console.log(newUser);

