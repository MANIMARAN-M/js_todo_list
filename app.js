var form = document.getElementById("form");

form.addEventListener("submit", addList);

function addList(e){
    e.preventDefault();

    // Get Values

    var foodId = document.getElementById("foodId");
    var quantityID = document.getElementById("quantityID");
    var rateID = document.getElementById("rateID");

    // Asign Values in variable

    var foodValue = foodId.value;
    var quantityValue = quantityID.value;
    var rateValue = rateID.value;

    // Creating Table Row and Table Data's

    var trCreate = document.createElement("tr");
    var tdCreate = document.createElement("td");
    var tdCreateTwo = document.createElement("td");
    var tdCreateThree = document.createElement("td");
    var appdendtdOne = trCreate.appendChild(tdCreate);
    var appdendtdtwo = trCreate.appendChild(tdCreateTwo);
    var appdendtdThree = trCreate.appendChild(tdCreateThree);

    // Creating Table Data's Id Name

    appdendtdOne.id = "food-name";
    appdendtdtwo.id = "quantityID";
    appdendtdThree.id = "rateID";

    // Append Input Values 

    appdendtdOne.appendChild(document.createTextNode(foodValue));
    appdendtdtwo.appendChild(document.createTextNode(quantityValue));
    appdendtdThree.appendChild(document.createTextNode(rateValue));

    // Append Table Row in Table

    var table = document.getElementById("table");
    table.appendChild(trCreate);
    
    // clear Input to Empty

    foodId.value = "";
    quantityID.value = "";
    rateID.value = "";

    alert("Your Product Added Succuessfully");

};
    

