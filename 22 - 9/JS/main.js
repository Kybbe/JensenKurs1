function calc() {
    var km = $("#km").val();
    var euro = $("#euro").val();
    var consumo = $("#consumo").val();

    var cem_km = consumo * euro;
    var fossil_day = (cem_km*km)/100;

    if(fossil_day == 0){
        $("#fuelResult").html("Try inputing numbers (above 0) above!");
    } else {
        $("#fuelResult").html(fossil_day);
    }

    return false
}

calc();




function kvadratmeterToSqF(inverted) {
    var sqF = $("#sqF").val();
    var kvadratmeter = $("#kvadratMeter").val();


    if(inverted) {

        var result = (sqF / 10.76391042).toFixed(3)
        
        $("#kvadratMeter").val(result);
        return;
    }
    
    var result = (kvadratmeter * 10.76391042).toFixed(3)
    
    $("#sqF").val(result);
}

function euroToSek(inverted) {
    var euro = $("#euroToSekEuro").val();
    var kr = $("#kr").val();

    if(inverted) {

        var result = (kr / 10.35).toFixed(3)
        
        $("#euroToSekEuro").val(result);
        return;
    }

    var result = (euro * 10.35).toFixed(1)
    
    $("#kr").val(result);
}


function convertToF() {
    let celsius = $("#c").val();
    
    let result = celsius * 9/5 + 32;

    $("#fahrenheitResult").html(result);
}