function buttonProfileEditorShowHide() {
    let profileEditor = document.getElementById("profileEditor");
    let profileButton = document.getElementById("profileButton");

    if (profileEditor.style.display === "none") {
        profileEditor.style.display = "block";
        profileButton.innerText = "Hide Profile Editor";
        let name                                          = document.getElementById("nama").innerText;
        document.getElementById("namaForm").value         = name;

        let role                                          = document.getElementById("role").innerText;
        document.getElementById("roleForm").value         = role;

        let availability                                  = document.getElementById("availability").innerText;
        document.getElementById("availabilityForm").value = availability;

        let age                                           = document.getElementById("age").innerText;
        document.getElementById("ageForm").value          = age;

        let address                                       = document.getElementById("address").innerText;
        document.getElementById("addressForm").value      = address;

        let yoe                                           = document.getElementById("yoe").innerText;
        document.getElementById("yoeForm").value          = yoe;

        let email                                         = document.getElementById("email").innerText;
        document.getElementById("emailForm").value        = email;

    } else {
        profileEditor.style.display = "none";
        profileButton.innerText = "Show Profile Editor";
    }
}

function updateProfile(){
    submitForm.addEventListener("submit", function(event) {
        event.preventDefault;
        const form = event.target;
        const data = new FormData(form);
        for(const [name,value] of data){
            console.log(name,":", value);
        }
    })
}

// submitForm.addEventListener("submit", function(event){
//     event.preventDefault(); // biasanya ngeredirect, nah preventDefault ini mencegah untuk ngerefresh/reload lalu ngedirect ke dirinya sendiri

//     // Syntax untuk ambil isi data form berdasarkan id input
//     // console.log(document.getElementById("name").value);

//     // Syntax untuk ambil dan ngeproses secara loop untuk setiap data form
//     const form = event.target;
//     const data = new FormData(form);
//     for(const [name,value] of data){
//         console.log(name,":", value);
//     }

//     //  Syntax untuk ambil secara spesific data form
//     // console.log(form.elements["name"].value);

//     // console.log(event);

// });

function sumVariadic(...b){
    let total = 0;
    
    b.forEach((value) => (total += value));

    return total;
}

function sumVariadicReduce(...b){
    const total = b.reduce((prev, current) => prev + current, 0); // reduce itu method yang digunakan sebagai alternative foreach looping

    return total;
}

console.log(sumVariadic(10,20,30,40,50,60));
console.log(sumVariadicReduce(10,20,30,40,50,60));

// variable with arrow
const sumWithArrow = (...b) =>{
    return total = b.reduce((prev, current) => prev + current, 0);
}

const sumWithArrowInline = (...b) => b.reduce((prev, current) => prev + current, 0);

console.log(sumWithArrowInline(10,20,30,40,50,60));
console.log(sumWithArrow(10,20,30,40,50,60));

// Event ini akan dijalankan ketika html sudah keload
// document.onload(() => {
    function toggleImage(){
        const image = document.getElementById("profile-picture");

        if(image.classList.contains("hidden")){
            image.classList.remove("hidden");
        }else{
            image.classList.add("hidden");
        }
    }
// });

const submitForm = document.querySelector("#submitForm");

// submitForm.addEventListener("submit", function(event){
//     event.preventDefault(); // biasanya ngeredirect, nah preventDefault ini mencegah untuk ngerefresh/reload lalu ngedirect ke dirinya sendiri

//     // Syntax untuk ambil isi data form berdasarkan id input
//     console.log(document.getElementById("name").value);

//     // Syntax untuk ambil dan ngeproses secara loop untuk setiap data form
//     const form = event.target;
//     const data = new FormData(form);
//     for(const [name,value] of data){
//         console.log(name,":", value);
//     }

//     //  Syntax untuk ambil secara spesific data form
//     console.log(form.elements["name"].value);

//     console.log(event);

// });

// Name update process
inputName = document.querySelector("#name");
inputName.addEventListener("input", function(event){
    const value = event.target.value;
    
    const displayName = document.querySelector("#displayName");
    displayName.textContent = value
});

// Education update process
inputEducation = document.querySelector("#education");
inputEducation.addEventListener("change", function (event){
    const value = event.target.value;

    const displayEducation = document.querySelector("#displayEducation");
    displayEducation.textContent = value;
});

// Gender update function

inputGender = document.querySelectorAll("[name='gender']"); // generate var baru buat ambil semua value input radio

// const checkedGender = document.querySelector("[name='gender']:checked").value; // syntax buat dapet yang dicheck yang mana saat form disubmit

inputGender.forEach((value) => {
    value.addEventListener("change", function (event){
        const value = event.target.value;

        const displayGender = document.querySelector("#displayGender");
        displayGender.textContent = value;
    })
});

// inputGender.addEventListener("change", function(event){
//     const value = event.target.value;

//     const displayGender = document.querySelector("#displayGender");
//     displayGender.textContent = value;
// });

// KELAS VARIABLE

/**
 * @typedef {Object} User
 * @property {string} name
 * @property {number} age
 * @property {boolean} isMarriage
 * @property {number} studentScore
 */

let user = {
    name:"Ian",
    age: 24,
    isMarriage: false,
    studentScore: 80,
};

/**
 * 
 * A = 90-100
 * B = 80-89
 * C = 70-79
 * D = 60-69
 * E = 50-59
 * F = < 50
 * 
 * @param {number} score 
 * @returns {number}
 */


function getGrade(score){
    let grade = "F";

    if (score >= 90 && score <= 100){
        grade="A";
    }else if(score >= 80 && score <= 89){
        grade="B";
    }else if(score >= 70 && score <= 79){
        grade="C";
    }else if(score >= 60 && score <= 69){
        grade="D";
    }else if(score >= 50 && score <= 59){
        grade="E";
    }else{
        grade="F";
    }
    return grade;
}

// Comparator marriage
function checkifMarried(isMarriage) {
    return isMarriage ?? "Belum menikah";
}

// String interpolation
console.log(`${user.name}, score :`, getGrade(user.studentScore));
console.log(`${user.school?.name ?? "Belum sekolah"} score :`, getGrade(user.studentScore));

function loopForEach() {
    const studentList = [
        {
            name: "Christian",
        },{
            name: "Ardinata",
        },
    ];

    studentList.forEach((value, index) => {
        console.log("Nama: ", value, " index: ", index);
    });

    function loopRepeat(){
        let message = "Saya tidak akan bolos lagi";

        console.log(message.repeat(10));
    }

    function loopWhile(){
        let counter = 0;

        while (counter < 10) {
            counter++;
            console.log(counter);
        }

        console.log("Last counter is", counter);
    }
}


let inputData = [80,30,60,55,32,60,10,65,90,12];
let search    = 100;
let output    = [];
let hasil     = 0;

// big o notation
// n+1 problem
let value = 0;
while(value < inputData.length-2) {
    let count = 1;
    while(count<inputData.length-1) {
        if(search == parseInt(inputData[value]) + parseInt(inputData[count])){
            console.log("["+inputData[value]+","+inputData[count]+"]");
            break;
        }
        count++;
    }
    value++;
};

function findNumbersMap(number, search) {
    const map = {};
    const result = [];

    for (let i = 0; i < findNumbersMap.length; i++){
        const number = numbers[i];

        const complement = search - number;

        if(map[complement] !== undefined){
            result.push([complement, number]);
        }

        map[number] = i;
        }
        return result;
}