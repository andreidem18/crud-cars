let cars = [
    {
        id: 1,
        brand: "chevrolet",
        model: "no se",
        color: "azul",
        year: "2005",
        price: 20000 
    },
    {
        id: 2,
        brand: "toyota",
        model: "no se",
        color: "verde",
        year: "2009",
        price: 30000 
    },
    {
        id: 3,
        brand: "Renaut",
        model: "no se",
        color: "negro",
        year: "2001",
        price: 15000 
    }
];

function addCar(){
    let id = 0;
    if(cars.length == 0){
        id = 1;
    } else {
        id = cars[cars.length - 1].id + 1;
    }
    cars.push({
        id: id,
        brand: document.getElementById("brand").value,
        model: document.getElementById("model").value,
        color: document.getElementById("color").value,
        year: document.getElementById("year").value,
        price: document.getElementById("price").value
    })
    printCars();
    document.getElementById('form-cars').reset();
}

function printCars(){
    let table = document.getElementById("cars");
    let text = "";
    cars.forEach((car) => {
        text += `<tr>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.color}</td>
                <td>${car.year}</td>
                <td>${car.price}</td>
                <td>
                    <button class = "btn btn-danger" onclick="remove(${car.id})">remove</button>
                </td>
            </tr>`;
    });
    console.log(cars)
    table.innerHTML = text;
}

function remove(id){
    let index = cars.findIndex((car) => car.id == id);
    cars.splice(index, 1);
    printCars();
}

printCars();
remove(2);
printCars();