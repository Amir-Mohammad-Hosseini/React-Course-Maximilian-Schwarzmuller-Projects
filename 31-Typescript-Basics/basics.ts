//Primitives : number , string , boolean
//more complex : array , object
//Function types , parameters

//Primitives

let age: number;
age = 21;

let userName: string = "Amir";

let isDone: boolean;
isDone = true;

//More complex

let hobbies: string[];
hobbies = ["Sports", "Cooking", "Driving"];

//Type Alias
type Person = {
  name: string;
  age: number;
}

let person: Person;

person = {
  name: "Max",
  age: 24,
};

let people: Person[];

//Type inference

let course = "Modern React Course"
// course = 1323

//Union Type

let loginUserName : string | number = "Amir_mhmd2005"

loginUserName = 534920

//Functions

function add(a:number , b:number){
    return a + b
}
function pring(value: any){
    console.log(value)
}

//Generics

function insertAtBeginning<T>(array : T[] , value : T) {
    const newArray = [...array , value]
    return newArray
}

const demoArray = [1, 2 ,3]

// const updatedArray = insertAtBeginning(demoArray , -1) // [-1 , 1 , 2 , 3]

// updatedArray[0].split("")

const updatedArray = insertAtBeginning(["a" , "b" , "c"] , "d")
updatedArray[0].split("")