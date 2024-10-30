console.log("Hello, this is from external script");

function dataType(){
    // String
    let message = "Hello my name Christian";
    // int
    let age = 24;
    // float
    let nilai = 75.5;
    // !! kalau di javascript, int & float dibacanya jadi number
    // Boolean
    let isLogin = true;
    // Object / Hashmap
    let user = {
        name: "Ian",
        age: 25,
        isLogin: true,
        score: null,
    }

    // List<String> hobbies = new ArrayList<>(); ----> Java Array
    // Array of string
    let hobbies = ["coding","raeding","swimming"];
    // Array of object
    let studentList = [
        {
            name: "Ian",
            age: 25,
            isLogin: true,
            score: null,
        },
        {
            name: "Ian",
            age: 25,
            isLogin: true,
            score: null,
        },

    ];

    console.log(user['score']);

    // alert(message);
    // let test = prompt("Username");


    // let isOke = confirm("Are you sure?");
    // alert(isOke);

    }
let result = document.getElementById("result1");
console.log("result");
result.innerHTML= "<h1>Hello from script</h1>";

let resultWithSelector = document.getElementById("result2");
console.log(resultWithSelector);
// resultWithSelector.innerText = "<h1>Hello from script</h1>"

//  <p>Hello from script</p>
const paragraphElement = document.createElement("p");
paragraphElement.innerText = "ini paragraph";

// innerHTML bakal masukin value yang sesuai input aja, contoh ini isinya "ini paragraph"
// resultWithSelector.innerHTML = paragraphElement.innerHTML;

// append child bakal bikin tag <p>
resultWithSelector.appendChild(paragraphElement);