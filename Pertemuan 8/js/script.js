
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

// let submitForm = document.getElementById("submitForm");
// submitForm.addEventListener("submit", function(event) {
//       event.preventDefault();

//       const form = event.target;
//       const data = new FormData(form);
      
//       let name                                          = document.getElementById("namaForm").value;
//       document.getElementById("nama").innerText         = name;

//       let role                                          = document.getElementById("roleForm").value;
//       document.getElementById("role").innerText         = role;

//       let availability                                  = document.getElementById("availabilityForm").value;
//       document.getElementById("availability").innerText = availability;

//       let age                                           = document.getElementById("ageForm").value;
//       document.getElementById("age").innerText          = age;

//       let address                                       = document.getElementById("addressForm").value;
//       document.getElementById("address").innerText      = address;

//       let yoe                                           = document.getElementById("yoeForm").value;
//       document.getElementById("yoe").innerText          = yoe;

//       let email                                         = document.getElementById("emailForm").value;
//       document.getElementById("email").innerText        = email;
      
//       document.getElementById("profileEditor").style.display  = "none";
//       document.getElementById("profileButton").innerText = "Show Profile Editor";

//       for(const [name,value] of data){
//           console.log(name,":", value);
//       }
//   });

document.getElementById("submitForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Mencegah form melakukan submit secara default

    // Array untuk id input form dan id output yang sesuai
    const formIds = ["namaForm", "roleForm", "availabilityForm", "ageForm", "addressForm", "yoeForm", "emailForm"];
    const outputIds = ["nama", "role", "availability", "age", "address", "yoe", "email"];

    // Looping dengan indeks untuk mengupdate output berdasarkan input
    formIds.forEach((formId, index) => {
        const outputId = outputIds[index];
        document.getElementById(outputId).innerText = document.getElementById(formId).value;
    });

    // Menyembunyikan editor profil dan mengubah teks tombol
    document.getElementById("profileEditor").style.display = "none";
    document.getElementById("profileButton").innerText = "Show Profile Editor";

    // Log data form ke console
    new FormData(event.target).forEach((value, name) => console.log(`${name}: ${value}`));
});