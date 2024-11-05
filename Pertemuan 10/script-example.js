function getWeightInKG(weight){
    return weight + "KG";
}

const carObject = {
    name: "Fiat",        // Nama mobil
    model: 500,          // Model mobil
    weight: "850kg",     // Berat mobil
    color: "white",      // Warna mobil

    getName: () => {
        console.log(carObject.name);
        console.log(getWeightInKG(carObject.weight));
        carObject.start();
    },

    // Methods
    start: function() {   // Method untuk menyalakan mobil
        console.log("Car is starting...");
    },
    drive: function() {   // Method untuk mengendarai mobil
        console.log("Car is driving...");
    },
    brake: function() {   // Method untuk mengerem mobil
        console.log("Car is braking...");
    },
    stop: function() {    // Method untuk menghentikan mobil
        console.log("Car has stopped.");
    }
};

// Contoh penggunaan
carObject.start();  // Output: "Car is starting..."
carObject.drive();  // Output: "Car is driving..."
carObject.brake();  // Output: "Car is braking..."
carObject.stop();   // Output: "Car has stopped."
carObject.getName();

class carClass {
    brake(){
        console.log("Car is braking by class...");
    }
}

new carClass().brake();